import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-[#101010]/60 to-[#101010]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/70 mb-4">
            IIM-founded | Real results
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Build Personalities, not just Percentiles
          </h1>
          <p className="mt-5 text-white/70 max-w-xl">
            Elite prep for CAT, IPMAT and CLAT with mentorship that shapes profiles, portfolios and presence. Powered by cinematic learning experiences.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#cta" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white bg-[var(--primary-pink)] shadow-[0_0_40px_rgba(255,49,88,0.5)] hover:brightness-110 transition">
              Start Your Journey
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white/90 border border-white/20 hover:bg-white/10 transition">
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
