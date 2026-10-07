import { Code2, Cpu, Cloud, Smartphone, BarChart3, Compass, ShieldCheck, Users, type LucideIcon } from 'lucide-react';
import type { IconKey } from '@/lib/data';

const map: Record<IconKey, LucideIcon> = { code: Code2, ai: Cpu, cloud: Cloud, app: Smartphone, data: BarChart3, cons: Compass, sec: ShieldCheck, pro: Users };

export default function Icon({ k, size = 22 }: { k: IconKey; size?: number }) {
  const I = map[k];
  return <I size={size} strokeWidth={2} aria-hidden="true" />;
}
