import React, { useEffect, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { MapPin, Mail, Phone, Send, Clock, Globe } from 'lucide-react';

export const ContactPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formspree.io/f/xgonvpbw", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || "General Inquiry",
                    message: formData.message
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="bg-white text-brand-light pt-24">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden bg-brand-light">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" alt="Clients Hero" className="w-full h-full object-cover" />
                    {/* <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1920" alt="Contact Hero" className="w-full h-full object-cover" /> */}
                    <div className="absolute inset-0 bg-brand-light/50 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <Reveal>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">Contact Us</h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Ready to start your next project? Reach out to our engineering experts today.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <Reveal direction="right">
                            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl shadow-brand-blue/5">
                                <h2 className="text-3xl font-bold mb-8 text-brand-light">Send a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm text-gray-600 font-medium">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-brand-800 border border-gray-200 rounded-lg px-4 py-3 text-brand-light focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-gray-400"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-gray-600 font-medium">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-brand-800 border border-gray-200 rounded-lg px-4 py-3 text-brand-light focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-gray-400"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-600 font-medium">Subject</label>
                                        <select
                                            className="w-full bg-brand-800 border border-gray-200 rounded-lg px-4 py-3 text-brand-light focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all appearance-none"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            required
                                        >
                                            <option value="">Select a service</option>
                                            <option value="oil-gas">Oil & Gas Engineering</option>
                                            <option value="civil">Civil Construction</option>
                                            <option value="procurement">Procurement & Logistics</option>
                                            <option value="manpower">Manpower Supply</option>
                                            <option value="partnership">Technical Partnership</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-600 font-medium">Message</label>
                                        <textarea
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={6}
                                            className="w-full bg-brand-800 border border-gray-200 rounded-lg px-4 py-3 text-brand-light focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none placeholder:text-gray-400"
                                            placeholder="Tell us about your project requirements..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className={`w-full font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 ${status === 'submitting'
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-brand-accent hover:bg-red-600 text-white shadow-red-500/30 hover:shadow-red-500/40'
                                            }`}
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" /> Send Inquiry
                                            </>
                                        )}
                                    </button>

                                    {status === 'success' && (
                                        <Reveal>
                                            <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center animate-in fade-in slide-in-from-bottom-2">
                                                Thank you! Your message has been sent successfully. We'll get back to you shortly.
                                            </div>
                                        </Reveal>
                                    )}

                                    {status === 'error' && (
                                        <Reveal>
                                            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center animate-in fade-in slide-in-from-bottom-2">
                                                Oops! Something went wrong. Please try again or email us directly at <a href="mailto:info@izeekros.com" className="font-bold underline">info@izeekros.com</a>
                                            </div>
                                        </Reveal>
                                    )}
                                </form>
                            </div>
                        </Reveal>

                        {/* Contact Info */}
                        <div className="space-y-12">
                            <Reveal direction="left">
                                <h2 className="text-3xl font-bold mb-8 text-brand-light">Office Locations</h2>
                                <div className="space-y-8">
                                    <div className="flex gap-6 p-6 rounded-2xl bg-white border border-gray-100 group hover:border-brand-blue transition-all shadow-sm hover:shadow-md">
                                        <div className="bg-brand-blue/10 p-4 rounded-xl shrink-0 h-fit">
                                            <MapPin className="w-6 h-6 text-brand-blue" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-brand-light">Headquarters (Port Harcourt)</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                Plot 144 Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria.
                                            </p>
                                            <div className="flex flex-col gap-2 mt-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1 font-bold text-brand-blue"><Mail className="w-3 h-3" /> info@izeekros.com</span>
                                                <div className="flex items-center gap-4">
                                                    <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +234 806 953 6359</span>
                                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 8AM - 5PM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 p-6 rounded-2xl bg-white border border-gray-100 group hover:border-brand-blue transition-all shadow-sm hover:shadow-md">
                                        <div className="bg-brand-blue/10 p-4 rounded-xl shrink-0 h-fit">
                                            <MapPin className="w-6 h-6 text-brand-blue" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-brand-light">Lagos Liaison Office</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                #8 Martins Street, Victoria Island, Lagos, Nigeria.
                                            </p>
                                            <div className="flex flex-col gap-2 mt-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1 font-bold text-brand-blue"><Mail className="w-3 h-3" /> info@izeekros.com</span>
                                                <div className="flex items-center gap-4">
                                                    <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +234 802 837 9458</span>
                                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 9AM - 4PM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal direction="left" delay={200}>
                                <h3 className="text-2xl font-bold mb-6 text-brand-light">Connect With Us</h3>
                                <a href="mailto:info@izeekros.com" className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:text-brand-accent hover:border-brand-accent transition-all shadow-sm">
                                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-brand-accent" />
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400">Primary Email</span>
                                        <span className="text-sm truncate text-gray-600 font-bold">info@izeekros.com</span>
                                    </div>
                                </a>
                                <a href="mailto:izeekrostrendltd@yahoo.com" className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:text-brand-accent hover:border-brand-accent transition-all shadow-sm">
                                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-brand-accent" />
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400">Secondary Email</span>
                                        <span className="text-sm truncate text-gray-600 font-medium">izeekrostrendltd@yahoo.com</span>
                                    </div>
                                </a>
                                {/* <a href="https://izeekrostrend.com" className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:text-brand-blue hover:border-brand-blue transition-all shadow-sm">
                                        <Globe className="w-5 h-5 text-gray-400 group-hover:text-brand-blue" />
                                        <span className="text-sm text-gray-600 font-medium">Official Website</span>
                                    </a> */}
                            </Reveal>
                        </div>
                    </div>

                    <Reveal direction="left" delay={400} className="p-8 rounded-3xl bg-brand-accent/5 border border-brand-accent/10 hover:bg-brand-accent/10 transition-colors">
                        <h4 className="font-bold text-brand-accent mb-2 uppercase tracking-widest text-xs">Emergency Response</h4>
                        <p className="text-sm text-gray-600">
                            For industrial emergencies or critical technical failures, our hotline is monitored 24/7.
                        </p>
                        <div className="mt-4 text-2xl font-bold text-brand-light tracking-wider">+234 (0) 806 953 6359</div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};
