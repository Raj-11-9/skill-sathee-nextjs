import Image from 'next/image';
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import { footerCols } from '@/lib/data';

const social = [{ I: Linkedin, l: 'LinkedIn' }, { I: Twitter, l: 'X (Twitter)' }, { I: Github, l: 'GitHub' }, { I: Youtube, l: 'YouTube' }];

export default function Footer() {
  return (
    <footer><div className="w">
      <div className="fgd">
        <div>
          <Image className="flogo" src="/logo.png" alt="Skill-Sathee - Together for a Smarter Tomorrow" width={1184} height={297} loading="lazy" />
          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>{social.map(({ I, l }) => <a key={l} href="#" className="ic" style={{ display: 'grid', placeItems: 'center' }} aria-label={l}><I size={18} /></a>)}</div>
        </div>
        {footerCols.map((c) => (
          <div key={c.title}><h4>{c.title}</h4><ul>{c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul></div>
        ))}
      </div>
      <div className="bt"><span>© 2026 Skill-Sathee. All rights reserved.</span><span>Made in India for the world.</span></div>
    </div></footer>
  );
}
