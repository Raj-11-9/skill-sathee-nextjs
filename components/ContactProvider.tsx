'use client';
import { createContext, useCallback, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { X, Check } from 'lucide-react';
import { interests } from '@/lib/data';

const Ctx = createContext<{ open: () => void }>({ open: () => {} });
export const useContact = () => useContext(Ctx);

export function TalkLink({ className, children }: { className?: string; children: ReactNode }) {
  const { open } = useContact();
  return <a href="#contact" className={className} onClick={(e) => { e.preventDefault(); open(); }}>{children}</a>;
}

type Status = 'idle' | 'sending' | 'done' | 'error';

export default function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const last = useRef<HTMLElement | null>(null);
  const first = useRef<HTMLInputElement>(null);

  const open = useCallback(() => { last.current = document.activeElement as HTMLElement; setStatus('idle'); setError(''); setOpen(true); }, []);
  const close = useCallback(() => { setOpen(false); last.current?.focus(); }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => first.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; clearTimeout(t); window.removeEventListener('keydown', onKey); };
  }, [isOpen, close]);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending'); setError('');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      form.reset(); setStatus('done');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.'); setStatus('error');
    }
  }

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <div id="cp" className={isOpen ? 'o' : ''} role="dialog" aria-modal="true" aria-labelledby="cph" aria-hidden={!isOpen}>
        <button className="ic cx" onClick={close} aria-label="Close contact page"><X size={18} /></button>
        <div className="cpg">
          <div className="cl">
            <span className="eye" style={{ color: '#BFDBFE' }}>LET&apos;S TALK</span>
            <h2 id="cph">Tell us what you want to build.</h2>
            <p>Share a few details and our team will get back to you within one business day.</p>
            <ul>
              <li>Free discovery conversation<small>No obligation, just clarity on next steps</small></li>
              <li>Clear scope and honest timelines<small>Practical advice from senior engineers</small></li>
              <li>Training enquiries welcome<small>Individuals, colleges and corporate teams</small></li>
            </ul>
          </div>
          <div className="cr">
            {status === 'done' ? (
              <div className="fm ok o" role="status">
                <div className="ck"><Check size={30} /></div>
                <h3>Thank you!</h3>
                <p>Your message has been sent. We&apos;ll be in touch within one business day.</p>
                <button className="btn" type="button" onClick={close}>Back to website</button>
              </div>
            ) : (
              <form className="fm" onSubmit={submit} noValidate={false}>
                <h3>Contact us</h3>
                <p>Fields marked * are required.</p>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
                <div className="rw2">
                  <div><label htmlFor="fn">Full name *</label><input ref={first} id="fn" name="name" required minLength={2} maxLength={100} autoComplete="name" /></div>
                  <div><label htmlFor="fe">Email *</label><input id="fe" name="email" type="email" required autoComplete="email" /></div>
                </div>
                <div className="rw2">
                  <div><label htmlFor="fp">Phone</label><input id="fp" name="phone" type="tel" maxLength={30} autoComplete="tel" /></div>
                  <div><label htmlFor="fc">Company</label><input id="fc" name="company" maxLength={120} autoComplete="organization" /></div>
                </div>
                <label htmlFor="fs">I&apos;m interested in *</label>
                <select id="fs" name="interest" required defaultValue="">
                  <option value="" disabled>Select a topic</option>
                  {interests.map((i) => <option key={i}>{i}</option>)}
                </select>
                <label htmlFor="fm2">Message *</label>
                <textarea id="fm2" name="message" required minLength={10} maxLength={4000} placeholder="Tell us about your project or question" />
                {status === 'error' && <p role="alert" style={{ color: '#DC2626', marginTop: 14, fontSize: 14 }}>{error}</p>}
                <button className="btn pr" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'} <span className="ar">→</span></button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Ctx.Provider>
  );
}
