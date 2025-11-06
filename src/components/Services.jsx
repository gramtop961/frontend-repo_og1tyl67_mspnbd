import React from 'react';
import { Rocket, GraduationCap, Shield, Users } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'CAT Elite',
    desc: 'Advanced strategy sprints, concept drills and mocks to push 99+ percentiles.',
  },
  {
    icon: GraduationCap,
    title: 'IPMAT Focus',
    desc: 'Quant-intense pathways with profile building for integrated programs.',
  },
  {
    icon: Shield,
    title: 'CLAT Sharp',
    desc: 'Logic, RC and legal aptitude sharpened with courtroom-style debates.',
  },
  {
    icon: Users,
    title: 'Mentor Network',
    desc: '1:1 guidance from top B-school alumni to accelerate readiness.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Programs that compound results</h2>
          <p className="mt-3 text-white/70">Interactive, mentor-led formats designed for depth, speed and clarity.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,107,136,0.25)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
                background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,107,136,0.15), transparent 40%)'
              }} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
