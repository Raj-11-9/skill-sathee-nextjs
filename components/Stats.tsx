import { stats, clients } from '@/lib/data';
import Icon from './Icon';
import Counter from './Counter';

export function Stats() {
  return (
    <div className="w"><div className="kp2 rv">
      {stats.map((s) => (
        <div className="kc" key={s.title}>
          <div className="ki"><Icon k={s.icon} size={24} /></div>
          <div><b><Counter to={s.n} suffix={s.suffix} /></b><h4>{s.title}</h4><small>{s.note}</small></div>
        </div>
      ))}
    </div></div>
  );
}

export function Trust() {
  const list = [...clients, ...clients];
  return (
    <div className="trust"><div className="w"><p>Technology trusted by ambitious teams</p></div>
      <div className="lg" aria-hidden="true">{list.map((c, i) => <span key={i}>{c}</span>)}</div>
    </div>
  );
}
