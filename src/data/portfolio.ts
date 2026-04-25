export const personalInfo = {
  name: "Thalys Row",
  role: "Desenvolvedor Full Stack",
  description:
    "Transformando ideias em experiências digitais extraordinárias. Apaixonado por criar interfaces modernas e sistemas robustos que fazem a diferença.",
  location: "Brasil",
  email: "contato@ThalysRow",
  social: {
    github: "https://github.com/thalysrow",
    linkedin: "https://linkedin.com/in/thalysrow",
    twitter: "https://twitter.com/thalysrow",
  },
  stats: {
    projects: 50,
    clients: 30,
    experience: 5,
  },
};

export const projects: import("../types").Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plataforma completa de e-commerce com carrinho de compras, pagamentos integrados, painel administrativo e sistema de inventário em tempo real.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplicativo de gerenciamento de tarefas com colaboração em tempo real, drag-and-drop, notificações push e integração com calendários.",
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "Ferramenta de geração de conteúdo com IA, suporte a múltiplos idiomas, templates personalizáveis e exportação em múltiplos formatos.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["Python", "FastAPI", "React", "OpenAI"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description:
      "Plataforma imobiliária com tours virtuais 360°, busca avançada, filtros geoespaciais e sistema de agendamento de visitas.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    tags: ["Vue.js", "Laravel", "MySQL", "Three.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export const skills = [
  { name: "React / Next.js", iconName: "code", level: 95 },
  { name: "Node.js / Express", iconName: "server", level: 90 },
  { name: "TypeScript", iconName: "layers", level: 92 },
  { name: "PostgreSQL / MongoDB", iconName: "database", level: 85 },
  { name: "UI/UX Design", iconName: "palette", level: 80 },
  { name: "Mobile (React Native)", iconName: "smartphone", level: 78 },
  { name: "DevOps / Docker", iconName: "terminal", level: 75 },
  { name: "Cloud (AWS)", iconName: "globe", level: 70 },
  { name: "GraphQL / REST APIs", iconName: "cpu", level: 88 },
  { name: "Performance & SEO", iconName: "zap", level: 82 },
  { name: "Security Best Practices", iconName: "shield", level: 80 },
];

export const navItems = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];
