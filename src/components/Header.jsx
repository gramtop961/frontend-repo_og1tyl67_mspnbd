import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-[var(--primary-pink)] shadow-[0_0_30px_rgba(255,49,88,0.6)]" />
          <span className="text-white font-semibold tracking-tight">Thinkplus Education</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-white/70 hover:text-white transition-colors">Programs</a>
          <a href="#stats" className="text-white/70 hover:text-white transition-colors">Results</a>
          <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
        </nav>
        <a href="#cta" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-[var(--primary-pink)] shadow-[0_0_30px_rgba(255,49,88,0.4)] hover:brightness-110 transition">
          Apply Now
        </a>
      </div>
    </header>
  );
}
