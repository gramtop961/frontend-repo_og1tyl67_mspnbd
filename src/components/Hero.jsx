import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current?.children,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.08 }
      );
      gsap.fromTo(
        subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] w-full bg-[#101010] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide">
          <span style={{ color: '#f0fff0' }}>IIM Founder Cred</span>
          <span className="text-white/60">• Results First • Dark Mode</span>
        </div>
        <h1 ref={headlineRef} className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
          <span className="block">Building</span>
          <span className="block" style={{ color: '#ff3158' }}>Personalities</span>
          <span className="block">and Profiles</span>
        </h1>
        <p ref={subRef} className="mt-6 max-w-2xl text-lg text-white/80">
          Focused coaching for CAT, IPMAT, and CLAT with a transformation-first approach. Craft your story. Amplify your profile. Achieve the admit.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#apply" className="pointer-events-auto inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-black shadow-lg" style={{ background: '#ff3158', boxShadow: '0 0 40px 0 #ff6b88' }}>Start Your Journey</a>
          <a href="#services" className="pointer-events-auto inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold border border-white/15 text-white hover:bg-white/10 transition">View Programs</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
