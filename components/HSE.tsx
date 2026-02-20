import React from 'react';
import { Reveal } from './Reveal';
import { ShieldAlert, CheckCircle, FileText } from 'lucide-react';

export const HSE: React.FC = () => {
  return (
    <section id="hse" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-accent">
          <polygon points="50 15, 100 100, 0 100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Quality & <span className="text-brand-accent">HSE</span>
            </h2>
            <div className="text-2xl font-bold text-gray-300 mb-8 border-l-4 border-brand-accent pl-6">
              "Think Safety First."
            </div>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We maintain a strict policy where work is immediately suspended if safety is compromised. Our commitment to Total Quality Management (TQM) ensures cost-effectiveness and error-free delivery on every project.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10 shadow-sm hover:bg-white/10 transition-colors">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <div>
                  <div className="font-bold text-white">CAC Registered</div>
                  <div className="text-xs text-gray-400">Corporate Affairs Commission</div>
                </div>
              </div>

            </div>
          </Reveal>

          <Reveal direction="right" className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-brand-accent rounded-full opacity-5 animate-ping"></div>
              <div className="absolute inset-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <ShieldAlert className="w-24 h-24 text-brand-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">Zero Tolerance</h3>
                  <p className="text-gray-400 text-sm">For safety violations across all operational sites.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};