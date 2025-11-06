import React, { useEffect, useRef, useState } from 'react';

const counters = [
  { label: 'IIM Calls', value: 420 },
  { label: '99%ile+ Achievers', value: 86 },
  { label: 'Mentor Sessions', value: 3200 },
];

export default function Stats() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {counters.map((c) => (
            <StatCard key={c.label} label={c.label} value={c.value} start={visible} />)
          )}
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, start }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame;
    const duration = 1200;
    const startTime = performance.now();
    const animate = (t) => {
      const progress = Math.min(1, (t - startTime) / duration);
      setCount(Math.floor(value * progress));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
      <div className="text-4xl font-semibold tracking-tight text-[var(--light-green)]">{count.toLocaleString()}</div>
      <div className="mt-2 text-white/70">{label}</div>
    </div>
  );
}
