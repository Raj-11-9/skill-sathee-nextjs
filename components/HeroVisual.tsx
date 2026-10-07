'use client';
import { motion, useReducedMotion } from 'framer-motion';
import Art from './Art';

export default function HeroVisual() {
  const reduce = useReducedMotion();
  const float = (d: number) => (reduce ? {} : { y: [0, -10, 0], transition: { duration: 6, repeat: Infinity, delay: d, ease: 'easeInOut' as const } });
  return (
    <div className="h2v" aria-hidden="true">
      <motion.div className="a a1" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}><Art k="data" /></motion.div>
      <motion.div className="a a2" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}><Art k="ai" /></motion.div>
      <motion.div className="a a3" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}><Art k="app" /></motion.div>
      <motion.div className="b x1" animate={float(0)} style={{ animation: 'none' }}>✦ AI &amp; Automation</motion.div>
      <motion.div className="b x2" animate={float(2)} style={{ animation: 'none' }}>☁ Cloud Solutions</motion.div>
    </div>
  );
}
