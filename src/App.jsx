import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CustomCursor from './components/CustomCursor';

// CSS variables for strict color usage
const rootStyle = {
  ['--dark']: '#101010',
  ['--primary-pink']: '#ff3158',
  ['--accent-pink']: '#ff6b88',
  ['--light-green']: '#f0fff0',
};

function App() {
  return (
    <div style={rootStyle} className="bg-[#101010] text-white min-h-screen">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Testimonials />
        <footer id="contact" className="bg-[#101010] border-t border-white/10 py-16 text-center">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="text-xl font-semibold">Ready to build your profile?</h3>
            <p className="text-white/70 mt-2">Join a results-driven cohort led by IIM founders.</p>
            <a href="#apply" className="mt-6 inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-black" style={{ background: 'var(--primary-pink)', boxShadow: '0 0 30px 0 var(--accent-pink)' }}>Apply Now</a>
            <p className="text-white/40 text-xs mt-8">© {new Date().getFullYear()} Thinkplus Education</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
