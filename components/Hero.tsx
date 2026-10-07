import { TalkLink } from './ContactProvider';
import HeroVisual from './HeroVisual';
import { delay } from '@/lib/util';

export default function Hero() {
  return (
    <section className="hero2" aria-labelledby="hero-title">
      <div className="w h2g">
        <div className="h2t">
          <span className="pill2 rv">TECHNOLOGY • STRATEGY • INNOVATION</span>
          <h1 id="hero-title" className="rv" style={delay(0.08)}>Technology that <span className="gt2">moves your business</span> forward.</h1>
          <p className="rv" style={delay(0.16)}>From intelligent software to scalable digital platforms, Skill-Sathee helps ambitious organizations turn complex technology challenges into meaningful business outcomes.</p>
          <div className="cta rv" style={delay(0.24)}>
            <TalkLink className="btn pr">Start a Project <span className="ar">→</span></TalkLink>
            <a className="btn gh" href="#services">Explore Services</a>
          </div>
          <div className="chips rv" style={delay(0.3)}><span>Software</span><span>AI</span><span>Cloud</span><span>Digital Transformation</span></div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
