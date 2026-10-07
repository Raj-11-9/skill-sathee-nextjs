'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, [reduce, paused]);
  const t = testimonials[i];
  return (
    <section aria-labelledby="t-title"><div className="w">
      <span className="eye rv">TESTIMONIALS</span><h2 id="t-title" className="rv">Trusted by teams who build.</h2>
      <div className="car" aria-roledescription="carousel" aria-live="polite" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{ minHeight: 220 }}>
        <AnimatePresence mode="wait">
          <motion.figure key={i} style={{ margin: 0 }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
            <blockquote style={{ margin: 0 }}><q style={{ display: 'block', fontSize: 'clamp(22px,3vw,32px)', letterSpacing: '-.02em', lineHeight: 1.35, fontWeight: 500, quotes: 'none' }}>“{t.quote}”</q></blockquote>
            <figcaption className="who"><div className="av">{t.name[0]}</div><div><b>{t.name}</b><small>{t.role}, {t.company}</small></div></figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="dt">{testimonials.map((_, n) => <button key={n} className={n === i ? 'on' : ''} onClick={() => setI(n)} aria-label={`Show testimonial ${n + 1}`} />)}</div>
    </div></section>
  );
}
