import React, { useEffect, useState } from 'react';
import { Reveal } from './Reveal';
import { ChevronRight } from 'lucide-react';

const AnimatedCounter: React.FC<{ end: number; suffix?: string; label: string }> = ({ end, suffix = '', label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl hover:bg-white/15 transition-colors">
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 drop-shadow-sm">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/80 uppercase tracking-widest font-semibold">{label}</div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url(https://picsum.photos/id/1078/1920/1080)' }} // Using an industrial-looking placeholder
      >
        {/* Light overlay & Grid pattern for tech vibe - Adjusted for Light Theme */}
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse-slow"></div>
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Reveal direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/40 text-white text-sm font-medium mb-4 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></span>
                Smart Industrial Solutions
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-white drop-shadow-md">
                Engineering the <span className="text-white bg-clip-text text-transparent bg-gradient-to-r from-brand-accent to-red-200">Future</span> of Energy.
              </h1>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <p className="text-lg md:text-xl text-white/90 max-w-xl font-medium">
                An indigenous leader in Oilfield Engineering, Civil Construction, and Smart Infrastructure. We build with precision, backed by data.
              </p>
            </Reveal>

            <Reveal direction="left" delay={400} className="flex flex-wrap gap-4">
              <a href="#services" className="group bg-brand-accent hover:bg-red-600 text-white px-8 py-4 rounded-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-red-900/20">
                Explore Services
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-4 rounded-sm font-bold border-2 border-white/50 hover:border-white text-white hover:bg-white/10 transition-all">
                Get a Quote
              </a>
            </Reveal>
          </div>

          <Reveal direction="right" delay={300} className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-12">
              <AnimatedCounter end={2005} label="Established" />
              <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl">
                <div className="text-xl font-bold text-white mb-1">RC Number</div>
                <div className="text-brand-accent font-mono text-lg font-bold">614715</div>
              </div>
            </div>
            <div className="space-y-4">
              <AnimatedCounter end={100} suffix="+" label="Projects Completed" />
              <div className="h-48 rounded-lg overflow-hidden border-4 border-white/20 shadow-2xl">
                <img src="https://picsum.photos/id/175/400/300" alt="Industrial site" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};