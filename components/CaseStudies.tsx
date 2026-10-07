import { caseStudies } from '@/lib/data';
import Art from './Art';
import { TalkLink } from './ContactProvider';

export default function CaseStudies() {
  return (
    <section id="resources" aria-labelledby="cases-title"><div className="w">
      <span className="eye rv">CASE STUDIES</span><h2 id="cases-title" className="rv">Work that creates measurable impact.</h2>
      <div className="cg" style={{ display: 'grid', marginTop: 56 }}>{caseStudies.map((c) => (
        <article key={c.title} className="cs2 rv">
          <div className="ci"><Art k={c.art} /></div>
          <div className="cb"><small>{c.tag}</small><h3>{c.title}</h3>
            <p><b>Challenge:</b> {c.challenge}</p><p><b>Solution:</b> {c.solution}</p><p><b>Result:</b> {c.result}</p>
            <TalkLink className="ar">View Case Study →</TalkLink></div>
        </article>
      ))}</div>
    </div></section>
  );
}
