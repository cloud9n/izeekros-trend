import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  equipment?: { name: string; specs: string }[];
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  isStreaming?: boolean;
}