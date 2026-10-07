'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { navLinks } from '@/lib/data';
import Icon from './Icon';
import { TalkLink, useContact } from './ContactProvider';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [active, setActive] = useState(0);
  const [closed, setClosed] = useState<number | null>(null);
  const [dark, setDark] = useState(false);
  const { open } = useContact();

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      setScrolled(scrollY > 10);
      let k = 0, best = -1e9;
      ids.forEach((id, i) => { const el = document.getElementById(id); if (!el) return; const t = el.getBoundingClientRect().top; if (t <= 220 && t > best) { best = t; k = i; } });
      if (innerHeight + scrollY >= document.body.scrollHeight - 4) k = ids.length - 1;
      setActive(k);
    };
    onScroll(); addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  function toggleTheme() {
    const next = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next; setDark(!dark);
    try { localStorage.setItem('ss-theme', next); } catch {}
  }

  return (
    <header id="hd" className={scrolled ? 's' : ''}>
      <div className="w">
        <nav aria-label="Primary">
          <a href="#top" aria-label="Skill-Sathee home"><Image className="logo" src="/logo.png" alt="Skill-Sathee - Together for a Smarter Tomorrow" width={1184} height={297} priority /></a>
          <div className="links" id="lk">
            {navLinks.map((l, i) => (
              <div key={l.label} className={`ni${l.menu ? ' has' : ''}${closed === i ? ' x' : ''}`} onMouseLeave={() => closed === i && setClosed(null)}>
                <a href={l.href} className={active === i ? 'on' : ''} aria-current={active === i ? 'page' : undefined} aria-haspopup={l.menu ? 'true' : undefined}>
                  {l.label}{l.menu && <ChevronDown className="cv2" size={12} strokeWidth={2.6} aria-hidden="true" />}
                </a>
                {l.menu && (
                  <div className="mg"><div className="mgi">
                    <div className="mgl">{l.menu.items.map((it) => (
                      <a key={it.title} href={l.href} onClick={() => setClosed(i)}><span className="mi"><Icon k={it.icon} /></span><span><b>{it.title}</b><small>{it.desc}</small></span></a>
                    ))}</div>
                    <div className="mgf"><small>{l.menu.eyebrow}</small><h4>{l.menu.title}</h4><p>{l.menu.desc}</p><TalkLink className="btn">Let&apos;s talk →</TalkLink></div>
                  </div></div>
                )}
              </div>
            ))}
          </div>
          <div className="rt">
            <button className="ic" onClick={toggleTheme} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
            <TalkLink className="btn pr">Let&apos;s Talk</TalkLink>
            <button className="ic burger" onClick={() => setDrawer(!drawer)} aria-label={drawer ? 'Close menu' : 'Open menu'} aria-expanded={drawer}>{drawer ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </nav>
      </div>
      <div className={`drawer${drawer ? ' o' : ''}`}>
        {navLinks.map((l) => <a key={l.label} href={l.href} onClick={() => setDrawer(false)}>{l.label}</a>)}
        <a href="#contact" style={{ color: 'var(--blue)' }} onClick={(e) => { e.preventDefault(); setDrawer(false); open(); }}>Let&apos;s Talk →</a>
      </div>
    </header>
  );
}
