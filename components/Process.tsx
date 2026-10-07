import { process5 } from '@/lib/data';
import { delay } from '@/lib/util';

export default function Process() {
  return (
    <section id="process" className="soft" aria-labelledby="process-title"><div className="w">
      <span className="eye rv">PROCESS</span><h2 id="process-title" className="rv">A clear path from first call to scale.</h2>
      <div className="pr5"><div className="ln2" />{process5.map((s, i) => (
        <div key={s.t} className="s rv" style={delay(i * 0.1)}><b>0{i + 1}</b><h3>{s.t}</h3><p>{s.d}</p></div>
      ))}</div>
    </div></section>
  );
}
