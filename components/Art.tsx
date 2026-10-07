import { art } from '@/lib/art';

/** Renders a static, trusted inline SVG illustration (generated in lib/art.ts). */
export default function Art({ k }: { k: string }) {
  return <div role="img" aria-label={`${k} illustration`} style={{ lineHeight: 0 }} dangerouslySetInnerHTML={{ __html: art(k) }} />;
}
