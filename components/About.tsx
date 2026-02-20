import React from 'react';
import { Reveal } from './Reveal';
import { Target, TrendingUp, ShieldCheck, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const advantages = [
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-accent" />,
      title: "Smart Data Analysis",
      desc: "Using research-driven insights for flawless project execution."
    },
    {
      icon: <Globe className="w-6 h-6 text-brand-accent" />,
      title: "Pan-African Footprint",
      desc: "Scaling innovative engineering solutions across the continent."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-accent" />,
      title: "Self-Financing",
      desc: "Solid financial standing to conveniently fund major projects."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-light mb-4">Professionalism & Ethics</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right" className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-brand-blue/10 transform -skew-x-12 scale-105 rounded-3xl z-0"></div>
            <div className="relative z-10 bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-2xl shadow-brand-blue/5">
              <Target className="w-12 h-12 text-brand-accent mb-6" />
              <h3 className="text-2xl font-bold text-brand-light mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                To provide services with the highest level of professionalism and ethical standards to meet the needs of the Civil and Oil & Gas industries in Nigeria and beyond.
              </p>

              <div className="space-y-6">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-brand-800 p-2 rounded-lg shrink-0 border border-brand-blue/10">
                      {adv.icon}
                    </div>
                    <div>
                      <h4 className="text-brand-light font-bold">{adv.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2 space-y-12">
            <Reveal direction="left">
              <h3 className="text-3xl font-display font-bold text-brand-light mb-6">The Minds Behind The Machinery</h3>
              <p className="text-gray-600 text-lg mb-8">
                Our leadership team brings decades of combined experience in engineering, project management, and strategic operations, ensuring every project is delivered to international standards.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { name: 'Israel Osueke', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200' },
                { name: 'Ernest Ibe', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' },
                { name: 'Idiris Oluwafemi', role: 'Operations Manager', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200' }
              ].map((member, idx) => (
                <Reveal key={idx} delay={idx * 150} className={`bg-white p-4 rounded-xl flex items-center gap-4 border border-gray-100 shadow-md hover:shadow-lg hover:border-brand-blue/20 transition-all ${idx === 2 ? 'sm:col-span-2' : ''}`}>
                  <img src={member.img} alt={member.name} className="w-16 h-16 rounded-full object-cover border-2 border-brand-accent grayscale hover:grayscale-0 transition-all" />
                  <div>
                    <h4 className="text-brand-light font-bold">{member.name}</h4>
                    <p className="text-brand-blue font-medium text-sm">{member.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};