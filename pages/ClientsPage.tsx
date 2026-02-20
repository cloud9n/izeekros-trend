import React, { useEffect } from 'react';
import { Reveal } from '../components/Reveal';
import { Building2, Globe2, CheckCircle2, Handshake, ShieldAlert } from 'lucide-react';

export const ClientsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const clients = [
        { name: "Shell Petroleum", logo: "https://images.unsplash.com/photo-1611974714658-66d2df99ee21?auto=format&fit=crop&q=80&w=200", industry: "Oil & Gas" },
        { name: "TotalEnergies", logo: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&q=80&w=200", industry: "Oil & Gas" },
        { name: "Chevron", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aba9?auto=format&fit=crop&q=80&w=200", industry: "Oil & Gas" },
        { name: "NLNG", logo: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=200", industry: "Energy" },
        { name: "Julius Berger", logo: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=200", industry: "Construction" },
        { name: "Saipem", logo: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=200", industry: "Offshore" }
    ];

    const caseStudies = [
        {
            title: "Gwarinpa Phase II Development",
            client: "Federal Capital Territory",
            location: "Abuja, Nigeria",
            scope: "Civil construction of 5-bedroom luxury complexes and associated infrastructure.",
            result: "Delivered 3 months ahead of schedule with zero lost-time incidents (LTI)."
        },
        {
            title: "Subsea Pipeline Integrity Project",
            client: "Shell Nigeria",
            location: "Niger Delta Region",
            scope: "Advanced ROV inspection and subsea welding for aging pipeline infrastructure.",
            result: "Successfully restored 98% efficiency to critical oil delivery lines."
        },
        {
            title: "Industrial Borehole Network",
            client: "Indorama Eleme Petrochemicals",
            location: "Port Harcourt",
            scope: "Multi-point high-capacity water resource network for industrial cooling systems.",
            result: "Secured sustainable 24/7 water supply for manufacturing operations."
        }
    ];

    return (
        <div className="bg-white text-brand-light pt-24">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden bg-brand-light">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" alt="Clients Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-light/50 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <Reveal>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">Clients & Partnerships</h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Trusted by global energy leaders and government agencies to deliver mission-critical infrastructure.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Client Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <Reveal className="mb-16 text-center">
                        <h2 className="text-4xl font-bold mb-4 text-brand-light">Our Partners</h2>
                        <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
                    </Reveal>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {clients.map((client, i) => (
                            <Reveal key={i} delay={i * 100} className="group bg-white border border-gray-200 p-8 rounded-xl hover:border-brand-blue transition-all flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md">
                                <Building2 className="w-12 h-12 text-gray-400 group-hover:text-brand-blue transition-colors mb-4" />
                                <h4 className="font-bold text-sm text-gray-600 group-hover:text-brand-light transition-colors">{client.name}</h4>
                                <span className="text-[10px] text-brand-blue uppercase tracking-widest mt-2">{client.industry}</span>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 bg-brand-800 border-t border-brand-blue/10">
                <div className="max-w-7xl mx-auto px-4">
                    <Reveal className="mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-brand-light">Project Portfolio</h2>
                        <p className="text-gray-600 max-w-2xl text-lg">Delivering complex engineering solutions across diverse environments and challenges.</p>
                    </Reveal>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, i) => (
                            <Reveal key={i} delay={i * 200} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-brand-blue/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Globe2 className="w-24 h-24 text-brand-blue" />
                                </div>
                                <div className="relative z-10">
                                    <div className="mb-6 flex items-center gap-2 text-brand-blue text-sm font-bold uppercase tracking-wider">
                                        <CheckCircle2 className="w-4 h-4" /> {study.client}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-brand-light group-hover:text-brand-blue transition-colors">{study.title}</h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{study.scope}</p>
                                    <div className="pt-6 border-t border-gray-100">
                                        <div className="text-xs text-gray-400 uppercase mb-1">Result achieved</div>
                                        <div className="text-brand-accent font-medium">{study.result}</div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Engagement */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <Reveal direction="right">
                            <h2 className="text-4xl font-bold mb-8 text-brand-light">Why Industry Leaders Choose Izeekros</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <ShieldAlert className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-lg text-brand-light">Indigenous Expertise</h4>
                                        <p className="text-gray-600">Deep local knowledge combined with international technical standards.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Handshake className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-lg text-brand-light">Scalable Operations</h4>
                                        <p className="text-gray-600">Ability to deploy multi-disciplinary teams across Africa on short notice.</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal direction="left">
                            <div className="bg-brand-800 p-12 rounded-3xl border border-brand-blue/10 text-center shadow-xl shadow-brand-blue/5">
                                <h3 className="text-3xl font-bold mb-6 text-brand-light">Partner With Us</h3>
                                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                    We are always open to new project collaborations and joint ventures with international technology partners.
                                </p>
                                <a href="/contact" className="inline-block bg-brand-blue text-white px-10 py-4 rounded-sm font-bold hover:bg-brand-accent transition-all shadow-lg hover:shadow-xl">
                                    Inquiry for Partnership
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
};
