import type { Config } from 'tailwindcss';
// Preflight is disabled: the design system lives in app/globals.css (CSS variables + component classes).
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  corePlugins: { preflight: false },
  theme: { extend: {} },
  plugins: [],
};
export default config;
