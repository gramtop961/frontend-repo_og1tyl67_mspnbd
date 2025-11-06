import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const move = (e) => {
      const { clientX: x, clientY: y } = e;
      gsap.to(dot, { x, y, duration: 0.15, ease: 'power3.out' });
      gsap.to(ring, { x, y, duration: 0.35, ease: 'power3.out' });
    };

    const addHover = () => gsap.to(ring, { scale: 1.6, duration: 0.2, backgroundColor: 'rgba(255,49,88,0.15)' });
    const removeHover = () => gsap.to(ring, { scale: 1, duration: 0.2, backgroundColor: 'transparent' });

    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, .service-card').forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button, .service-card').forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed top-0 left-0 z-[60] h-1.5 w-1.5 rounded-full" style={{ background: '#ff3158', transform: 'translate(-50%, -50%)' }} />
      <div ref={ringRef} className="pointer-events-none fixed top-0 left-0 z-[60] h-8 w-8 rounded-full border" style={{ borderColor: '#ff3158', transform: 'translate(-50%, -50%)' }} />
    </>
  );
};

export default CustomCursor;
