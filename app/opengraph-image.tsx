import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const alt = 'Skill-Sathee - Together for a Smarter Tomorrow';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: 'linear-gradient(135deg,#172554,#2563EB 65%,#6366F1)', color: '#fff', fontFamily: 'sans-serif' }}>
        <div style={{ fontSize: 30, letterSpacing: 6, color: '#BFDBFE' }}>SKILL-SATHEE</div>
        <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05, marginTop: 24 }}>Technology that moves your business forward.</div>
        <div style={{ fontSize: 30, marginTop: 32, color: '#DBEAFE' }}>Software · AI · Cloud · Digital Transformation</div>
      </div>
    ),
    size,
  );
}
