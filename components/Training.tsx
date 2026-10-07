import { tracks } from '@/lib/data';
import { delay } from '@/lib/util';
import Icon from './Icon';
import { TalkLink } from './ContactProvider';

export default function Training() {
  return (
    <section id="training" aria-labelledby="training-title"><div className="w tr">
      <div>
        <span className="eye rv">TRAINING</span><h2 id="training-title" className="rv">Build skills for the future of technology.</h2>
        <p className="rv" style={{ color: '#DBEAFE', fontSize: 18, marginTop: 20, maxWidth: 480 }}>Hands-on, industry-led programmes that take learners and teams from fundamentals to job-ready, project-proven skills.</p>
        <ul className="pk rv"><li>Project-based learning</li><li>Mentors from the industry</li><li>Corporate &amp; individual tracks</li></ul>
        <TalkLink className="btn pr rv">Explore Training <span className="ar">→</span></TalkLink>
      </div>
      <div className="tg">{tracks.map((t, i) => (
        <div key={t.title} className="rv" style={delay(i * 0.06)}><span className="ti"><Icon k={t.icon} /></span><b>{t.title}</b><small>{t.desc}</small></div>
      ))}</div>
    </div></section>
  );
}
