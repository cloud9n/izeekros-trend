import React, { useEffect } from 'react';
import { Reveal } from '../components/Reveal';
import { Target, TrendingUp, ShieldCheck, Globe, Award, Users, History } from 'lucide-react';

export const AboutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white text-brand-light pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-brand-light">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" alt="Clients Hero" className="w-full h-full object-cover" />

                    {/* <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1920" alt="About Hero" className="w-full h-full object-cover" /> */}
                    <div className="absolute inset-0 bg-brand-light/50 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <Reveal>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">About Us</h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Izeekros Trend Limited is a premier indigenous engineering firm dedicated to excellence across the oil, gas, and civil sectors.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* History & Vision */}
            <section className="py-20 border-t border-brand-blue/10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <Reveal direction="right">
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="bg-brand-blue/10 p-4 rounded-xl border border-brand-blue/20">
                                        <History className="w-8 h-8 text-brand-blue" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold mb-4 text-brand-light">Our History</h2>
                                        <p className="text-gray-600 leading-relaxed">
                                            Established in 2005 (RC 614715), Izeekros Trend Limited began with a singular vision: to bridge the gap between complex engineering needs and indigenous capacity. Over the past two decades, we have evolved from a specialized subsea service provider into a multi-disciplinary conglomerate.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-brand-accent/10 p-4 rounded-xl border border-brand-accent/20">
                                        <Target className="w-8 h-8 text-brand-accent" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold mb-4 text-brand-light">Vision & Mission</h2>
                                        <p className="text-gray-600 leading-relaxed">
                                            Our vision is to be the most trusted name in African industrial infrastructure. Our mission is to provide services with the highest level of professionalism and ethical standards, ensuring every project contributes to the sustainable development of our host communities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal direction="left">
                            <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800" alt="Industrial History" className="rounded-2xl border border-gray-100 shadow-2xl shadow-brand-blue/5" />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-brand-800">
                <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-brand-light">Core Values</h2>
                    <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <Award className="w-10 h-10" />, title: "Excellence", desc: "We don't just complete projects; we set new standards for quality." },
                        { icon: <ShieldCheck className="w-10 h-10" />, title: "Integrity", desc: "Honesty and ethical conduct are the foundation of every contract we sign." },
                        { icon: <Users className="w-10 h-10" />, title: "Safety", desc: "Our HSE standards ensure every team member returns home safely, every day." }
                    ].map((v, i) => (
                        <Reveal key={i} delay={i * 200} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-lg text-center">
                            <div className="text-brand-blue mb-6 inline-block bg-brand-blue/10 p-4 rounded-full">{v.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-brand-light">{v.title}</h3>
                            <p className="text-gray-600">{v.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
                    <h2 className="text-4xl font-bold mb-4 text-brand-light">Our Leadership</h2>
                    <p className="text-gray-600">The minds engineering the future of industry.</p>
                </div>
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                    {[
                        { name: 'Israel Osueke', role: 'CEO & Founder', bio: 'With over 25 years in the oil and gas sector, Israel drives the strategic vision of Izeekros.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
                        { name: 'Ernest Ibe', role: 'Chief Project Manager', bio: 'Expert in complex civil engineering projects and subsea logistics.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
                        { name: 'Idiris Oluwafemi', role: 'Operations Director', bio: 'Oversees day-to-day industrial operations and manpower management.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' }
                    ].map((m, i) => (
                        <Reveal key={i} delay={i * 200} className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-md">
                            <img src={m.img} alt={m.name} className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-light/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 p-8 w-full">
                                <h4 className="text-2xl font-bold text-white">{m.name}</h4>
                                <p className="text-brand-accent mb-4 font-bold">{m.role}</p>
                                <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transform">{m.bio}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
        </div>
    );
};
