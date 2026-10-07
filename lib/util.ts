import type { CSSProperties } from 'react';
export const delay = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;
export const cssVar = (k: string, v: string) => ({ [k]: v }) as CSSProperties;
