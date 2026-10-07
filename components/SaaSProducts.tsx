import { products } from '@/lib/data';
import { delay } from '@/lib/util';
import Art from './Art';
import { TalkLink } from './ContactProvider';

export default function SaaSProducts() {
  return (
    <section id="products" aria-labelledby="products-title"><div className="w">
      <span className="eye rv">SAAS PRODUCTS</span><h2 id="products-title" className="rv">Products designed for modern teams.</h2>
      <p className="p rv">A growing suite of cloud products that help teams run operations, learning, customers and insight from one place.</p>
      <div className="pg">{products.map((p, i) => (
        <article key={p.name} className="pc rv" style={delay((i % 3) * 0.1)}>
          <div className="pm"><Art k={p.art} /></div>
          <div className="pb"><small>{p.cat}</small><h3>{p.name}</h3><p>{p.desc}</p>
            <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <TalkLink className="ar">Explore Product →</TalkLink></div>
        </article>
      ))}</div>
    </div></section>
  );
}
