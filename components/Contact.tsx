import React from 'react';
import { Reveal } from './Reveal';
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-light pt-24 pb-12 border-t border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <Reveal delay={0} className="lg:col-span-2">
            <Link to="/" className="font-display font-bold text-2xl tracking-wider text-white mb-6 block">
              IZEEKROS<span className="text-brand-accent">TREND</span>
            </Link>
            <p className="text-gray-400 max-w-md mb-8">
              Pacesetters in Engineering the Future. We bring smart solutions to complex industrial challenges across Africa.
            </p>
            <div className="flex gap-4">
              <Link to="/about" className="text-sm text-gray-400 hover:text-brand-accent flex items-center gap-1 transition-colors">
                <ChevronRight className="w-4 h-4" /> About Company
              </Link>
              <Link to="/services" className="text-sm text-gray-400 hover:text-brand-accent flex items-center gap-1 transition-colors">
                <ChevronRight className="w-4 h-4" /> Our Services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h4 className="text-white font-bold mb-6 text-lg tracking-widest uppercase text-xs">Headquarters</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                <span className="text-sm">Plot 144 Trans-Amadi Industrial Layout, Port Harcourt.</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="text-sm">+234 806 953 6359</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <a href="mailto:izeekrostrendltd@yahoo.com" className="hover:text-brand-accent transition-colors text-sm">
                  izeekrostrendltd@yahoo.com
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <h4 className="text-white font-bold mb-6 text-lg tracking-widest uppercase text-xs">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">Industrial Services</Link></li>
              <li><Link to="/clients" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">Clients & Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">Contact Support</Link></li>
            </ul>
          </Reveal>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Izeekros Trend Limited (RC 614715). All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};