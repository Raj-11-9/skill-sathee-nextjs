import { stats, why } from '@/lib/data';
import { delay } from '@/lib/util';
import Icon from './Icon';
import Counter from './Counter';

export function About() {
  return (
    <section id="about" aria-labelledby="about-title"><div className="w">
      <span className="eye rv">ABOUT US</span>
      <h2 id="about-title" className="rv" style={{ maxWidth: 900 }}>Technology should create progress, not complexity.</h2>
      <p className="p rv" style={{ maxWidth: 720 }}>Skill-Sathee was founded on a simple belief: technology works best when it is clear, reliable and built around people. We pair engineering depth with business thinking, and we invest in skills so teams can grow alongside the systems we build. Together for a smarter tomorrow.</p>
      <div className="abg">{stats.map((s, i) => (
        <div key={s.title} className="ac rv" style={delay(i * 0.08)}>
          <div className="ai2"><Icon k={s.icon} /></div>
          <b><Counter to={s.n} suffix={s.suffix} /></b><h4>{s.title}</h4><p>{s.note}</p>
        </div>
      ))}</div>
    </div></section>
  );
}

export function Why() {
  return (
    <section className="soft" aria-labelledby="why-title"><div className="w">
      <span className="eye rv">WHY SKILL-SATHEE</span><h2 id="why-title" className="rv">A partner built for the long run.</h2>
      <div className="wy">{why.map((t, i) => <div key={t} className="rv"><b>0{i + 1}</b><h3>{t}</h3></div>)}</div>
    </div></section>
  );
}
