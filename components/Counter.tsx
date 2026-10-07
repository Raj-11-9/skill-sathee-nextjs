'use client';
import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

/** Counts up when scrolled into view; renders the final value for SSR / reduced motion. */
export default function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(to);
  useEffect(() => {
    if (!inView || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = animate(0, to, { duration: 1.4, ease: 'easeOut', onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}
