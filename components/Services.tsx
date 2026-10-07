'use client';
import { useState } from 'react';
import { services } from '@/lib/data';
import Art from './Art';
import { TalkLink } from './ContactProvider';

export default function Services() {
  const [i, setI] = useState(0);
  return (
    <section id="services" aria-labelledby="services-title"><div className="w">
      <div className="sh"><div><span className="eye rv">IT SERVICES</span><h2 id="services-title" className="rv">Technology built around your ambition.</h2></div>
        <p className="p rv">We combine engineering, strategy and design to build technology that solves real business problems.</p></div>
      <div className="tabs rv">
        <div className="tl2" role="tablist" aria-label="Services">
          {services.map((s, n) => (
            <button key={s.title} role="tab" id={`tab-${n}`} aria-selected={i === n} aria-controls={`panel-${n}`} className={`tb2${i === n ? ' on' : ''}`} onClick={() => setI(n)} onMouseEnter={() => setI(n)}>
              <b>0{n + 1}</b><span>{s.title}<small>{s.desc}</small></span>
            </button>
          ))}
        </div>
        <div className="tp">
          {services.map((s, n) => (
            <div key={s.title} role="tabpanel" id={`panel-${n}`} aria-labelledby={`tab-${n}`} className={`pn${i === n ? ' on' : ''}`} hidden={i !== n}>
              <Art k={s.art} /><h3>{s.title}</h3><p>{s.desc}</p>
              <ul>{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              <TalkLink>Discuss this service →</TalkLink>
            </div>
          ))}
        </div>
      </div>
    </div></section>
  );
}
