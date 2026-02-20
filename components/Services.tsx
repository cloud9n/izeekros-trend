import React from 'react';
import { Reveal } from './Reveal';
import { Droplet, Factory, Waves, Truck, Users, Cpu, Target, HardHat } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    description: 'Pipeline welding, advanced subsea oil recovery systems, and industrial sandblasting operations.',
    icon: <Factory className="w-8 h-8" />,
    equipment: [
      { name: 'Subsea ROVs', specs: 'Depth rating: 3000m, Manipulator arms: 2' },
      { name: 'Welding Rigs', specs: 'Multi-process, 400A output, Diesel driven' }
    ]
  },
  {
    id: 'civil',
    title: 'Civil & Construction',
    description: 'From residential complexes (e.g., Gwarinpa 5-bedroom project) to large-scale land dredging.',
    icon: <HardHat className="w-8 h-8" />, // Fallback to generic icon if not found, using lucide properly below
    equipment: [
      { name: 'Swamp Excavators', specs: 'Operating weight: 22t, Track width: 800mm' },
      { name: 'Bulldozers', specs: 'Engine power: 300HP, Blade capacity: 8m³' }
    ]
  },
  {
    id: 'water',
    title: 'Water Resources',
    description: 'Precision borehole drilling and professional water well threading for sustainable supply.',
    icon: <Waves className="w-8 h-8" />
  },
  {
    id: 'logistics',
    title: 'Procurement & Logistics',
    description: 'International technical supplier sourcing and comprehensive global logistics management.',
    icon: <Truck className="w-8 h-8" />,
    equipment: [
      { name: 'MAN Diesel Trucks', specs: 'Payload: 30t, 6x4 drive, Heavy-duty chassis' }
    ]
  },
  {
    id: 'manpower',
    title: 'Manpower Supply',
    description: 'Provision of certified skilled labour including welders, fitters, and specialized engineers.',
    icon: <Users className="w-8 h-8" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-800 relative border-t border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-light mb-4 text-brand-blue">Comprehensive Engineering</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Leveraging modern technology and heavy machinery to deliver complex projects on time and within budget.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 100} direction="up" className="h-full">
              <div className="group h-full bg-white border border-gray-200 rounded-2xl p-8 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/5 relative overflow-hidden flex flex-col">

                {/* Tech background element */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-brand-blue">
                  <Cpu className="w-32 h-32" />
                </div>

                <div className="relative z-10 flex-grow">
                  <div className="w-16 h-16 rounded-xl bg-brand-800 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform border border-brand-blue/10 shadow-sm">
                    {service.id === 'civil' ? <Target className="w-8 h-8" /> : service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-light mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                </div>

                {/* Equipment Hover Reveal (Micro-interaction) */}
                {service.equipment && (
                  <div className="relative z-10 mt-auto pt-4 border-t border-gray-100">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Cpu className="w-3 h-3" /> Tech Specs Available
                    </div>
                    <div className="space-y-2">
                      {service.equipment.map((eq, eIdx) => (
                        <div key={eIdx} className="relative cursor-help group/tooltip">
                          <span className="text-sm text-brand-blue font-medium underline decoration-dashed decoration-brand-blue/40 hover:text-brand-accent transition-colors">
                            {eq.name}
                          </span>
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-0 mb-2 w-48 p-3 bg-white text-xs text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity z-20">
                            {eq.specs}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};