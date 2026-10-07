import { lifecycle } from '@/lib/data';
import { delay, cssVar } from '@/lib/util';
import Art from './Art';

export function HowWeWork() {
  return (
    <section className="soft" id="how" aria-labelledby="how-title"><div className="w split">
      <div className="dash rv">
        <div className="kp"><div>Deployments<b>248</b></div><div>Uptime<b>99.9%</b></div><div>Velocity<b>+42%</b></div></div>
        <div className="bars" style={{ height: 200 }}>{[30, 48, 40, 66, 58, 80, 95].map((h, i) => <b key={i} style={cssVar('--h', `${h}%`)} />)}</div>
      </div>
      <div>
        <span className="eye rv">HOW WE WORK</span><h2 id="how-title" className="rv">From idea to production.</h2>
        <div className="steps">{lifecycle.map((s, i) => <div key={s} className="rv" style={delay(i * 0.08)}>{s}</div>)}</div>
        <a className="btn pr rv" style={{ marginTop: 28 }} href="#process">How We Work <span className="ar">→</span></a>
      </div>
    </div></section>
  );
}

export function AISection() {
  const blocks = [['AI Automation', 'Automate repetitive workflows and operations.'], ['AI Applications', 'Build intelligent products around real user needs.'], ['Intelligent Data', 'Turn business data into actionable insights.']];
  return (
    <section className="ai" aria-labelledby="ai-title"><div className="w">
      <div className="aiart"><Art k="ai" /></div>
      <span className="eye">ARTIFICIAL INTELLIGENCE</span>
      <h2 id="ai-title" className="rv">Make AI practical.<br />Make technology useful.</h2>
      <p className="p rv">Turn artificial intelligence into measurable business value through automation, intelligent applications and data-driven systems.</p>
      <div className="fg">{blocks.map((b, i) => <div key={b[0]} className="rv" style={delay(i * 0.1)}><span>0{i + 1}</span><h3>{b[0]}</h3><p>{b[1]}</p></div>)}</div>
    </div></section>
  );
}
