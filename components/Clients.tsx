import React from 'react';
import { Reveal } from './Reveal';

export const Clients: React.FC = () => {
  const clients = [
    { name: 'Shell', color: '#ffcc00' },
    { name: 'Chevron', color: '#00549c' },
    { name: 'ExxonMobil', color: '#ed1c24' },
    { name: 'Total', color: '#0055a5' },
    { name: 'NNPC', color: '#00853f' },
    { name: 'Nigeria LNG', color: '#00a3e0' },
  ];

  // Duplicate array for seamless infinite scrolling
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section id="clients" className="py-20 bg-brand-800 border-y border-brand-blue/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Reveal>
          <div className="text-center">
            <h2 className="text-2xl font-display font-bold text-brand-light mb-2">Trusted By Industry Giants</h2>
            <div className="w-16 h-1 bg-brand-accent mx-auto"></div>
          </div>
        </Reveal>
      </div>

      <div className="relative w-full overflow-hidden flex whitespace-nowrap mask-image-linear">
        {/* CSS Marquee Animation */}
        <div className="flex animate-marquee items-center gap-16 px-8">
          {duplicatedClients.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-48 h-24 bg-white rounded-lg border border-gray-200 grayscale hover:grayscale-0 transition-all duration-300 shadow-sm hover:shadow-md hover:border-brand-blue/20"
            >
              <span className="text-2xl font-bold tracking-wider" style={{ color: client.color }}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .mask-image-linear {
          -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
          mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
        }
      `}} />
    </section>
  );
};