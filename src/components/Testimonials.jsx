import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const quotes = [
  {
    text: 'Thinkplus transformed not just my prep but my confidence. The profile-building sprints made my interviews effortless.',
    name: 'Ananya (IIM A Convert)'
  },
  {
    text: 'The mentor network and accountability pods kept me consistent. I hit 99+ in mocks and converted.',
    name: 'Rohit (IIM B Convert)'
  },
  {
    text: 'From average to admit: the storytelling frameworks and projects gave me a unique edge.',
    name: 'Meera (IIM C Convert)'
  }
];

const logos = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop'
];

const Testimonials = () => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2; // since we duplicate content

    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(
      track,
      { x: 0 },
      { x: -totalWidth, duration: 20, ease: 'none' }
    );
    return () => tl.kill();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % quotes.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="relative bg-[#101010] text-white py-24 border-t border-white/10 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-white/60">
          <Quote size={18} />
          <span className="uppercase tracking-wide text-xs">Student Voices</span>
        </div>
        <div className="mt-6 text-2xl md:text-3xl font-semibold min-h-[120px]">
          {quotes[index].text}
          <div className="mt-3 text-sm text-white/60">— {quotes[index].name}</div>
        </div>
      </div>

      <div className="mt-14">
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 will-change-transform" ref={trackRef}>
            {[...logos, ...logos].map((src, i) => (
              <div key={i} className="h-20 w-20 rounded-full overflow-hidden shrink-0 border border-white/10">
                <img src={src} alt="logo" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
