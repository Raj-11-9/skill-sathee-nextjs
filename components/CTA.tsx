import { TalkLink } from './ContactProvider';

export default function CTA() {
  return (
    <section id="contact" style={{ paddingTop: 0 }} aria-labelledby="cta-title">
      <div className="fin rv"><h2 id="cta-title">Ready to build what&apos;s next?</h2>
        <p>Tell us about your challenge and let&apos;s turn your idea into technology that creates real impact.</p>
        <div className="cta"><TalkLink className="btn pr">Let&apos;s Talk <span className="ar">→</span></TalkLink><a className="btn" href="#services">Explore Services</a></div></div>
    </section>
  );
}
