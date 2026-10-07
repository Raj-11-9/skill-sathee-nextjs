'use client';
import { useEffect, useState } from 'react';

/** Loading screen + scroll-reveal observer (respects prefers-reduced-motion via CSS). */
export default function Providers() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 350);
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.15 });
    document.querySelectorAll('.rv,.pr5').forEach((el) => io.observe(el));
    const spot = (e: PointerEvent) => {
      const c = (e.target as HTMLElement).closest<HTMLElement>('.sv,.pc,.cs,.cs2');
      if (!c) return; const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', `${e.clientX - r.left}px`); c.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    const bar = document.getElementById('sp');
    const prog = () => { if (bar) bar.style.transform = `scaleX(${scrollY / Math.max(1, document.body.scrollHeight - innerHeight)})`; };
    document.addEventListener('pointermove', spot); addEventListener('scroll', prog, { passive: true });
    return () => { clearTimeout(t); io.disconnect(); document.removeEventListener('pointermove', spot); removeEventListener('scroll', prog); };
  }, []);
  return (<><div id="ld" className={ready ? 'h' : ''} aria-hidden="true"><img src="/mark.png" alt="" /></div><div id="sp" /></>);
}
