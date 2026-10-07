export type IconKey = 'code' | 'ai' | 'cloud' | 'app' | 'data' | 'cons' | 'sec' | 'pro';

export interface Service { icon: IconKey; art: string; title: string; desc: string; tags: string[] }
export interface Product { cat: string; name: string; desc: string; art: string; icon: IconKey; features: string[] }
export interface Track { icon: IconKey; title: string; desc: string }
export interface CaseStudy { tag: string; title: string; challenge: string; solution: string; result: string; art: string }
export interface Testimonial { quote: string; name: string; role: string; company: string }
export interface MenuItem { icon: IconKey; title: string; desc: string }
export interface NavLink { label: string; href: string; menu?: { eyebrow: string; title: string; desc: string; items: MenuItem[] } }

export const services: Service[] = [
  { icon: 'code', art: 'code', title: 'Custom Software Development', desc: 'Tailored platforms engineered for performance, security and growth.', tags: ['Web platforms', 'APIs', 'Enterprise apps'] },
  { icon: 'ai', art: 'ai', title: 'AI & Automation', desc: 'Intelligent systems that remove manual work and surface insight.', tags: ['Workflow automation', 'LLM apps', 'Prediction'] },
  { icon: 'cloud', art: 'cloud', title: 'Cloud & DevOps', desc: 'Resilient infrastructure and delivery pipelines that scale on demand.', tags: ['AWS · Azure · GCP', 'CI/CD', 'Monitoring'] },
  { icon: 'app', art: 'app', title: 'Web & Mobile Applications', desc: 'Fast, accessible products your users genuinely enjoy.', tags: ['iOS & Android', 'PWA', 'UX design'] },
  { icon: 'data', art: 'data', title: 'Data & Analytics', desc: 'Pipelines, dashboards and models that drive confident decisions.', tags: ['BI dashboards', 'Data pipelines', 'Reporting'] },
  { icon: 'cons', art: 'cons', title: 'IT Consulting & Digital Transformation', desc: 'Roadmaps and execution that modernize how your business runs.', tags: ['Strategy', 'Architecture', 'Change roadmap'] },
];

export const products: Product[] = [
  { cat: 'Operations', name: 'FlowDesk', desc: 'Workflow, tasks and approvals for fast-moving teams.', art: 'flow', icon: 'app', features: ['Visual automation builder', 'Real-time reporting', 'Role-based access'] },
  { cat: 'Learning', name: 'SkillCloud', desc: 'A learning platform for cohorts and corporate academies.', art: 'learn', icon: 'pro', features: ['Course & cohort management', 'Skill assessments', 'Progress analytics'] },
  { cat: 'Analytics', name: 'InsightIQ', desc: 'Unified business intelligence with AI-assisted insights.', art: 'bi', icon: 'data', features: ['Live dashboards', 'Natural-language queries', 'Scheduled reports'] },
  { cat: 'Support', name: 'HelpPilot', desc: 'Customer support inbox with smart replies and routing.', art: 'chat', icon: 'ai', features: ['Shared team inbox', 'AI reply suggestions', 'SLA tracking'] },
  { cat: 'Sales', name: 'ClientHub', desc: 'A lightweight CRM to manage leads, deals and follow-ups.', art: 'crm', icon: 'cons', features: ['Pipeline view', 'Contact timeline', 'Email integration'] },
  { cat: 'People', name: 'TeamPulse', desc: 'HR, attendance and leave management for growing teams.', art: 'hr', icon: 'sec', features: ['Leave & attendance', 'Team calendar', 'Onboarding checklists'] },
];

export const tracks: Track[] = [
  { icon: 'code', title: 'Full Stack Development', desc: 'Frontend, backend and deployment' },
  { icon: 'ai', title: 'AI & Machine Learning', desc: 'Models, LLMs and applied AI' },
  { icon: 'cloud', title: 'Cloud & DevOps', desc: 'CI/CD, containers and infrastructure' },
  { icon: 'data', title: 'Data Analytics', desc: 'SQL, BI and storytelling with data' },
  { icon: 'sec', title: 'Cybersecurity', desc: 'Secure systems and threat defence' },
  { icon: 'pro', title: 'Professional IT Skills', desc: 'Agile, communication and tooling' },
];

export const caseStudies: CaseStudy[] = [
  { tag: 'Digital Transformation', title: 'Enterprise Platform', challenge: 'Fragmented legacy systems slowing operations.', solution: 'A unified cloud platform with modern APIs.', result: 'Faster delivery and a single source of truth.', art: 'cons' },
  { tag: 'AI Automation', title: 'Intelligent Operations', challenge: 'Manual, error-prone back-office workflows.', solution: 'AI-driven automation with human review.', result: 'Hours saved weekly and fewer errors.', art: 'ai' },
  { tag: 'SaaS Product', title: 'Modern Business Platform', challenge: 'An idea needing a market-ready product.', solution: 'Designed and shipped an MVP, then scaled.', result: 'Launched and iterating with real users.', art: 'flow' },
];

// Placeholder testimonials - replace with real, approved client quotes before launch.
export const testimonials: Testimonial[] = [
  { quote: 'Working with Skill-Sathee felt like adding a senior engineering team overnight. Clear communication and zero surprises.', name: 'Aarav Mehta', role: 'CTO', company: 'Placeholder Co.' },
  { quote: 'They translated a vague idea into a product our customers use daily. Thoughtful, fast and reliable.', name: 'Priya Nair', role: 'Founder', company: 'Placeholder Labs' },
  { quote: "Their training programme lifted our whole team's cloud skills in a single quarter.", name: 'Rohan Gill', role: 'Head of Engineering', company: 'Placeholder Systems' },
];

export const clients = ['NORTHWIND', 'Axiom◦', 'helix', 'VERTEX', 'orbitly', 'Kinetic'];
export const lifecycle = ['Discover', 'Strategy', 'Design', 'Development', 'Deployment', 'Scale'];
export const process5 = [
  { t: 'Discover', d: 'Understand goals, users and constraints.' },
  { t: 'Define', d: 'Shape scope, roadmap and success metrics.' },
  { t: 'Design', d: 'Prototype experiences and architecture.' },
  { t: 'Build', d: 'Ship iteratively with transparent progress.' },
  { t: 'Scale', d: 'Harden, optimize and grow with you.' },
];
export const why = ['Business-first thinking', 'Engineering excellence', 'Transparent collaboration', 'Scalable architecture', 'Security by design', 'Long-term partnership'];
export const stats = [
  { icon: 'code' as IconKey, n: 10, suffix: '+', title: 'Technology domains', note: 'Across software, AI, cloud and data' },
  { icon: 'app' as IconKey, n: 50, suffix: '+', title: 'Projects & initiatives', note: 'Delivered end to end' },
  { icon: 'cons' as IconKey, n: 6, suffix: '', title: 'Core service lines', note: 'One accountable partner' },
  { icon: 'sec' as IconKey, n: 100, suffix: '%', title: 'Commitment to quality', note: 'Tested, secure, reviewed' },
];
export const interests = ['Custom software development', 'AI & automation', 'Cloud & DevOps', 'Web & mobile applications', 'Data & analytics', 'IT consulting', 'SaaS products', 'Training', 'Something else'];

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'IT Services', href: '#services', menu: { eyebrow: 'WHAT WE DO', title: 'Technology built around your ambition', desc: 'Engineering, strategy and design for real business problems.', items: services.map((s) => ({ icon: s.icon, title: s.title, desc: s.desc })) } },
  { label: 'Training', href: '#training', menu: { eyebrow: 'LEARN', title: 'Skills for the future of technology', desc: 'Industry-led programmes for learners and teams.', items: tracks } },
  { label: 'SaaS Products', href: '#products', menu: { eyebrow: 'PRODUCTS', title: 'Built for modern teams', desc: 'Software products designed to simplify operations, learning and insight.', items: products.map((p) => ({ icon: p.icon, title: p.name, desc: p.desc })) } },
  { label: 'About Us', href: '#about' },
  { label: 'Resources', href: '#resources', menu: { eyebrow: 'RESOURCES', title: 'Ideas, proof and insight', desc: 'See the impact of our work and how we think.', items: [{ icon: 'cons', title: 'Case Studies', desc: 'Measurable client impact' }, { icon: 'data', title: 'Insights', desc: 'Perspectives on technology' }, { icon: 'ai', title: 'Blog', desc: 'Product and engineering news' }] } },
];

export const footerCols: { title: string; links: string[] }[] = [
  { title: 'Company', links: ['About', 'Careers', 'Contact'] },
  { title: 'Services', links: ['Software Development', 'AI & Automation', 'Cloud & DevOps', 'Consulting'] },
  { title: 'Products', links: ['SaaS Products', 'Solutions', 'Platforms'] },
  { title: 'Resources', links: ['Blog', 'Case Studies', 'Training', 'Insights'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Cookie Policy'] },
];
