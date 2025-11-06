import React from 'react';
import { Rocket } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md flex items-center justify-center" style={{ background: '#ff3158', boxShadow: '0 0 22px 0 #ff6b88' }}>
            <Rocket size={18} className="text-black" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-semibold tracking-wide">Thinkplus Education</span>
            <span className="text-xs text-white/60">IIM Founder Led</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="text-white/80 hover:text-white transition">Programs</a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition">Results</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </nav>
        <a
          href="#apply"
          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-black"
          style={{ background: '#ff3158', boxShadow: '0 0 24px 0 #ff6b88' }}
        >
          Apply Now
        </a>
      </div>
    </header>
  );
};

export default Header;
