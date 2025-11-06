import React, { useEffect, useRef } from 'react';
import { BookOpen, Sparkles, Target, Trophy, User } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: 'CAT Elite', icon: Trophy, desc: 'Strategy-first prep with adaptive mocks and profile levers.' },
  { title: 'IPMAT Focus', icon: Target, desc: 'Math + Verbal mastery with time-bound sprints.' },
  { title: 'CLAT Sharp', icon: BookOpen, desc: 'Case-based legal reasoning with rapid iteration drills.' },
  { title: 'Profile Engine', icon: User, desc: 'Personal brand, projects, internships, and proof-of-work.' },
  { title: 'Mentor Network', icon: Sparkles, desc: 'IIM alumni 1:1 sessions and outcome accountability.' },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards && cards.forEach((card) => {
      const glow = card.querySelector('.glow');
      gsap.set(glow, { opacity: 0 });
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gsap.to(glow, { opacity: 1, duration: 0.2, ease: 'power2.out' });
        glow.style.background = `radial-gradient(300px 300px at ${x}px ${y}px, #ff6b88, transparent 60%)`;
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(glow, { opacity: 0, duration: 0.4, ease: 'power2.out' });
      });
    });
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative bg-[#101010] text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Programs that Transform</h2>
          <p className="text-white/70 mt-3 max-w-2xl">Five focused tracks engineered to elevate your profile and outcomes with tactile feedback and motion clarity.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon, desc }) => (
            <div
              key={title}
              className="service-card relative rounded-xl border border-white/10 bg-white/5 p-6 transition will-change-transform"
              style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 20px 60px -20px rgba(0,0,0,0.6)' }}
            >
              <div className="glow pointer-events-none absolute inset-0 rounded-xl" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md flex items-center justify-center" style={{ background: '#ff3158' }}>
                  <Icon className="text-black" size={20} />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-white/70 mt-3">{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .service-card{transform: translateZ(0);}
        .service-card:hover{transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 60px -20px rgba(255,107,136,0.35);}
      `}</style>
    </section>
  );
};

export default Services;
