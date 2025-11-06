import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';

// Global CSS variables for theme
const setThemeVars = () => {
  const root = document.documentElement;
  root.style.setProperty('--dark', '#101010');
  root.style.setProperty('--primary-pink', '#ff3158');
  root.style.setProperty('--accent-pink', '#ff6b88');
  root.style.setProperty('--light-green', '#f0fff0');
};

export default function App() {
  useEffect(() => {
    setThemeVars();
  }, []);

  // move glow with cursor for service cards
  useEffect(() => {
    const handler = (e) => {
      document.querySelectorAll('.group').forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--dark)] text-white selection:bg-[var(--primary-pink)]/40">
      <Header />
      <Hero />
      <Services />
      <Stats />

      <footer id="cta" className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Ready to transform your preparation?</h3>
            <p className="text-white/70 mt-1">Join a mentor-led journey designed for real outcomes.</p>
          </div>
          <a href="#" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-white bg-[var(--primary-pink)] shadow-[0_0_40px_rgba(255,49,88,0.45)] hover:brightness-110 transition">
            Apply for a Free Consultation
          </a>
        </div>
      </footer>
    </div>
  );
}
