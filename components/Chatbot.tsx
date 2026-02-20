import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { createChatSession } from '../services/gemini';
import { ChatMessage } from '../types';
import { Chat, GenerateContentResponse } from '@google/genai';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat session once when opened
  useEffect(() => {
    if (isOpen && !chatRef.current) {
      try {
        chatRef.current = createChatSession();
        setMessages([{
          id: 'welcome',
          text: "Hello! I am Izeek-Bot. How can I assist you with Izeekros Trend Limited's services today?",
          sender: 'bot'
        }]);
      } catch (error) {
        console.error("Failed to initialize chat:", error);
      }
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || !chatRef.current || isLoading) return;

    const userText = input.trim();
    setInput('');

    // Add user message
    const userMsgId = Date.now().toString();
    setMessages(prev => [...prev, { id: userMsgId, text: userText, sender: 'user' }]);

    // Add temporary bot message for streaming
    const botMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: botMsgId, text: '', sender: 'bot', isStreaming: true }]);
    setIsLoading(true);

    try {
      const responseStream = await chatRef.current.sendMessageStream({ message: userText });

      let fullText = '';
      for await (const chunk of responseStream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          fullText += c.text;
          setMessages(prev =>
            prev.map(msg =>
              msg.id === botMsgId ? { ...msg, text: fullText } : msg
            )
          );
        }
      }

      // Remove streaming flag
      setMessages(prev =>
        prev.map(msg =>
          msg.id === botMsgId ? { ...msg, isStreaming: false } : msg
        )
      );
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [
        ...prev.filter(m => m.id !== botMsgId),
        { id: botMsgId, text: "I apologize, I'm experiencing a technical issue connecting to the main network. Please try contacting management directly.", sender: 'bot' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to parse markdown links safely in chat
  const renderMessageText = (text: string) => {
    // Basic regex to find markdown links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before link
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      // Add link
      parts.push(
        <a
          key={match.index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-accent hover:text-red-400 underline font-medium"
        >
          {match[1]}
        </a>
      );
      lastIndex = match.index + match[0].length;
    }
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-brand-accent text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:scale-110 hover:bg-red-700 transition-all z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-slate-900 border border-gray-700 rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-slate-800 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center border border-brand-accent/50 relative">
              <Bot className="w-5 h-5 text-brand-accent" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Izeek-Bot</h3>
              <p className="text-xs text-gray-400">Smart Solution Agent</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-slate-900">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 ${msg.sender === 'user' ? 'bg-gray-700' : 'bg-brand-accent/20 border border-brand-accent/30'}`}>
                  {msg.sender === 'user' ? <User className="w-4 h-4 text-gray-300" /> : <Bot className="w-4 h-4 text-brand-accent" />}
                </div>
                <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                  ? 'bg-brand-blue text-white rounded-tr-sm'
                  : 'bg-slate-800 text-gray-200 border border-gray-700 rounded-tl-sm'
                  }`}>
                  {renderMessageText(msg.text)}
                  {msg.isStreaming && <span className="inline-block w-1.5 h-4 ml-1 bg-brand-accent animate-pulse align-middle"></span>}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-700 bg-slate-800 rounded-b-2xl">
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our services..."
              disabled={isLoading}
              className="flex-1 bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors disabled:opacity-50 placeholder-gray-500"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-brand-accent hover:bg-red-700 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-10 shrink-0"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4 -ml-0.5 mt-0.5" />}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};