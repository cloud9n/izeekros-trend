import React, { useEffect } from 'react';
import { Reveal } from '../components/Reveal';
import { Factory, HardHat, Waves, Truck, Users, Cpu, ShieldCheck, Box } from 'lucide-react';

export const ServicesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const detailedServices = [
        {
            title: "Oil & Gas Engineering",
            icon: <Factory className="w-12 h-12" />,
            desc: "Comprehensive solutions for the energy sector including offshore logistics and fabrication.",
            details: [
                "Pipeline Welding & Maintenance (API Certified)",
                "Advanced Subsea Oil Recovery Systems",
                "Industrial Sandblasting & Specialized Coating",
                "Corrosion Control & Asset Integrity Management"
            ],
            specs: [
                { label: "Welding Capacity", value: "Multi-process up to 600A output" },
                { label: "Subsea Depth", value: "ROV rating up to 3000m" },
                { label: "Compliance", value: "ASME VIII & API 1104 Standards" }
            ],
            img: "https://picsum.photos/id/442/800/600"
        },
        {
            title: "Civil Construction",
            icon: <HardHat className="w-12 h-12" />,
            desc: "Large scale infrastructure development from ground-up design to final commissioning.",
            details: [
                "Residential & Commercial Complexes",
                "Land Reclamation & Massive Dredging",
                "Road Construction & Drainage Systems",
                "Structural Steel Fabrication & Erection"
            ],
            specs: [
                { label: "Fleet size", value: "20+ Heavy Swamp Excavators" },
                { label: "Project Scale", value: "Up to 500-unit housing complexes" },
                { label: "Dredging depth", value: "Max 18m below water level" }
            ],
            img: "https://picsum.photos/id/1078/800/600"
        },
        {
            title: "Water Resources",
            icon: <Waves className="w-12 h-12" />,
            desc: "Precision engineering for sustainable water supply systems and resource management.",
            details: [
                "Borehole Drilling (Industrial & Residential)",
                "Water Well Threading & Lining",
                "Treatment Plant Installation",
                "Geophysical Survey & Analysis"
            ],
            specs: [
                { label: "Drilling depth", value: "Up to 500m penetration" },
                { label: "Casing type", value: "High-grade PVC or Galvanized Steel" },
                { label: "Pumping systems", value: "Solar or Diesel powered options" }
            ],
            img: "https://picsum.photos/id/200/800/600"
        },
        {
            title: "Procurement & Logistics",
            icon: <Truck className="w-12 h-12" />,
            desc: "Global supply chain management and heavy equipment procurement.",
            details: [
                "International Technical Supplier Sourcing",
                "Oversized Cargo Transportation",
                "Warehousing & Inventory Control",
                "Customs Clearance & Documentation"
            ],
            specs: [
                { label: "Payload Capacity", value: "Heavy-duty 6x4 trailers (30t+)" },
                { label: "Global Reach", value: "Partners in 15+ countries" },
                { label: "Tracking", value: "24/7 Satellite Fleet Management" }
            ],
            img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="bg-white text-brand-light pt-24">
            {/* Header */}
            <section className="py-20 bg-brand-800">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <Reveal>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-brand-blue">Our Services</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Precision-engineered industrial solutions tailored for the African landscape.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20 space-y-32">
                {detailedServices.map((service, i) => (
                    <div key={i} className="max-w-7xl mx-auto px-4">
                        <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <Reveal direction={i % 2 === 0 ? 'right' : 'left'} className={i % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 text-brand-accent">
                                        <div className="p-3 bg-brand-accent/10 rounded-xl">
                                            {service.icon}
                                        </div>
                                        <h2 className="text-4xl font-bold text-brand-light">{service.title}</h2>
                                    </div>
                                    <p className="text-gray-600 text-lg">{service.desc}</p>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <h4 className="text-brand-blue font-bold flex items-center gap-2">
                                                <Box className="w-4 h-4" /> Capabilities
                                            </h4>
                                            <ul className="space-y-2">
                                                {service.details.map((d, di) => (
                                                    <li key={di} className="text-sm text-gray-600 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                                                        {d}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-brand-blue font-bold flex items-center gap-2">
                                                <Cpu className="w-4 h-4" /> Technical Specs
                                            </h4>
                                            <div className="space-y-3">
                                                {service.specs.map((s, si) => (
                                                    <div key={si} className="text-xs bg-brand-800 p-3 rounded-lg border border-brand-blue/10">
                                                        <span className="text-gray-500 uppercase block tracking-widest mb-1">{s.label}</span>
                                                        <span className="text-brand-light font-bold text-sm">{s.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal direction={i % 2 === 0 ? 'left' : 'right'} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-brand-blue/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                                    <img src={service.img} alt={service.title} className="rounded-2xl border border-gray-100 shadow-2xl shadow-brand-blue/5 grayscale group-hover:grayscale-0 transition-all duration-700" />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                ))}
            </section>

            {/* CTA */}
            <section className="py-20 bg-brand-800 border-t border-brand-blue/10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <Reveal>
                        <ShieldCheck className="w-16 h-16 text-brand-accent mx-auto mb-6" />
                        <h2 className="text-4xl font-bold mb-6 text-brand-light">Quality Guaranteed</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                            Every project we undertake is backed by our comprehensive HSE policy and international engineering standards. We don't just build; we engineer with a future-proof mindset.
                        </p>
                        <a href="/contact" className="inline-block bg-brand-accent hover:bg-red-600 text-white px-10 py-4 rounded-sm font-bold transition-all shadow-lg shadow-red-500/30 hover:shadow-red-500/40 transform hover:-translate-y-1">
                            Request Technical Proposal
                        </a>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};
