import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Award, BarChart3, Users } from 'lucide-react';

const counters = [
  { label: 'IIM Calls Secured', value: 420 },
  { label: 'Average Percentile', value: 98 },
  { label: 'Mentor Sessions', value: 1200 },
];

const Stats = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const nums = sectionRef.current?.querySelectorAll('[data-counter]');
    nums?.forEach((el) => {
      const target = Number(el.getAttribute('data-target')) || 0;
      gsap.fromTo(
        { val: 0 },
        { val: target, duration: 2, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 80%' } },
      );
      const tween = gsap.to({}, { duration: 2, onUpdate: () => {
        const current = Math.floor(gsap.getProperty(el, 'val') || 0);
        el.textContent = `${current}`;
      }});
      // Simpler approach: animate text directly
      let obj = { n: 0 };
      gsap.to(obj, {
        n: target,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
        onUpdate: () => { el.textContent = Math.floor(obj.n).toString(); }
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#101010] text-white py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {counters.map((c, i) => (
          <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-6">
            <div className="text-4xl font-extrabold" style={{ color: '#f0fff0' }}>
              <span data-counter data-target={c.value}>0</span>+
            </div>
            <div className="text-white/70 mt-2">{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
