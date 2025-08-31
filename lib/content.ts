// Content layer with bilingual support
export const content = {
  profile: {
    name: "Thiago Vasconcelos",
    email: "thiagovt.dev@gmail.com",
    location: "Curitiba - PR, Brasil",
    social: {
      github: "https://github.com/thiagovt-dev",
      linkedin: "https://www.linkedin.com/in/thiagovasconcelosteixeira/",
      x: "https://x.com/thiagovt_dev",
    },
  },

  nav: {
    en: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      experience: "Experience",
      process: "Process",
      stack: "Stack",
      contact: "Contact",
    },
    pt: {
      home: "Início",
      services: "Serviços",
      projects: "Projetos",
      experience: "Experiência",
      process: "Processo",
      stack: "Tecnologias",
      contact: "Contato",
    },
  },

  hero: {
    en: {
      title: " Full-Stack Software Engineer",
      subtitle:
        "I build robust web platforms with Next.js, high-performance APIs (Node/TS, Laravel, NestJS), solid SQL data models, intelligent LLM chatbots with N8N, and production-ready Flutter apps.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Get in Touch",
      badges: ["Next.js", "Node/TS", "Laravel/NestJS", "SQL", "LLMs & N8N", "Flutter"],
    },
    pt: {
      title: "Engenheiro de Software Full-Stack",
      subtitle:
        "Construo plataformas web com Next.js, APIs de alta performance (Node/TS, Laravel, NestJS), modelos de dados SQL, chatbots inteligentes com LLMs e N8N, e apps Flutter prontos para produção.",
      ctaPrimary: "Ver Projetos",
      ctaSecondary: "Fale Comigo",
      badges: ["Next.js", "Node/TS", "Laravel/NestJS", "SQL", "LLMs & N8N", "Flutter"],
    },
  },

  services: {
    en: {
      title: "What I Deliver",
      intro:
        "End-to-end solutions: from discovery and architecture to deployment, observability, and continuous iteration.",
      items: [
        {
          title: "Web Apps (Next.js)",
          desc: "Modern, accessible, SEO-friendly SPAs/MPAs with app router, server components, and edge-ready patterns.",
        },
        {
          title: "APIs & Backends",
          desc: "Node/TypeScript, NestJS or Laravel; JWT/OAuth, RBAC, queues, websockets, caching, and test coverage.",
        },
        {
          title: "SQL Data Modeling",
          desc: "PostgreSQL/MySQL with optimized schemas, migrations, indexes, and clear data ownership.",
        },
        {
          title: "LLMs & N8N",
          desc: "Custom chatbots, tool-use, retrieval, prompt versioning, and automated workflows in N8N.",
        },
        {
          title: "Flutter Mobile",
          desc: "Hybrid apps with clean architecture, offline-first strategies, and push notifications.",
        },
        {
          title: "DevOps & Observability",
          desc: "CI/CD, logging/metrics, S3-style storage, reverse proxy/SSL, and fault-tolerant deployments.",
        },
      ],
    },
    pt: {
      title: "O que eu Entrego",
      intro:
        "Soluções ponta a ponta: da descoberta e arquitetura ao deploy, observabilidade e melhoria contínua.",
      items: [
        {
          title: "Web Apps (Next.js)",
          desc: "SPAs/MPAs modernas, acessíveis e SEO-friendly com app router, server components e padrões edge-ready.",
        },
        {
          title: "APIs & Backends",
          desc: "Node/TypeScript, NestJS ou Laravel; JWT/OAuth, RBAC, filas, websockets, cache e testes.",
        },
        {
          title: "Modelagem SQL",
          desc: "PostgreSQL/MySQL com esquemas otimizados, migrações, índices e domínio claro dos dados.",
        },
        {
          title: "LLMs & N8N",
          desc: "Chatbots sob medida, tool-use, retrieval, versionamento de prompts e automações no N8N.",
        },
        {
          title: "Flutter Mobile",
          desc: "Apps híbridos com arquitetura limpa, offline-first e notificações push.",
        },
        {
          title: "DevOps & Observabilidade",
          desc: "CI/CD, logs/métricas, storage tipo S3, reverse proxy/SSL e deploys tolerantes a falhas.",
        },
      ],
    },
  },

  projects: {
    en: {
      title: "Featured Case Studies",
      cards: [
        {
          slug: "safety-platform",
          title: "SOS Mulher Segura — Public Safety Platform",
          summary:
            "Command center and citizen apps enabling real-time incident reporting, secure voice rooms, and live dispatch.",
          highlights: [
            "Sub-200ms websocket updates for 1k+ concurrent users",
            "JWT auth, RBAC, Clean Architecture, automated tests",
            "Voice rooms (WebRTC) with recording & audit trails",
          ],
          stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "WebSockets", "WebRTC"],
          links: { demo: "#", repo: "#" },
        },
        {
          slug: "procurement-suite",
          title: "Central de Compras Brasil — E-Procurement Suite",
          summary:
            "Auctions with dispute rooms, proposals, quotes, compliance flows, and audit logs.",
          highlights: [
            "Dispute & negotiation workflows with deadlines and counter-offers",
            "Transparent auditability and role-based approvals",
            "Reduced procurement cycle time by ~25%",
          ],
          stack: ["Next.js", "Laravel", "MySQL", "Redis", "Queues"],
          links: { demo: "#", repo: "#" },
        },
        {
          slug: "fleet-management",
          title: "Carletto Frotas — Fleet Management",
          summary:
            "Vehicle/driver control, maintenance scheduling, fuel & cost tracking, and real-time alerts.",
          highlights: [
            "Preventive maintenance rules and parts catalog",
            "Dashboards with actionable KPIs",
            "99.95% uptime under peak usage",
          ],
          stack: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
          links: { demo: "#", repo: "#" },
        },
        {
          slug: "fitness-app",
          title: "Gym-Junkies — Health & Fitness",
          summary:
            "Hybrid app with training plans, body-fat/TDEE calculators, and premium AI nutrition coaching.",
          highlights: [
            "Offline-ready routines and progress tracking",
            "LLM-powered meal suggestions via N8N flows",
            "A/B-tested onboarding raised activation",
          ],
          stack: ["Flutter", "Supabase", "Node.js", "N8N"],
          links: { demo: "#", repo: "#" },
        },
      ],
    },
    pt: {
      title: "Estudos de Caso em Destaque",
      cards: [
        {
          slug: "safety-platform",
          title: "SOS Mulher Segura — Plataforma de Segurança",
          summary:
            "Central de comando e apps do cidadão para relatos de incidentes em tempo real, salas de voz seguras e despacho ao vivo.",
          highlights: [
            "Atualizações via websocket <200ms para 1k+ usuários",
            "JWT, RBAC, Clean Architecture e testes automatizados",
            "Salas de voz (WebRTC) com gravação e trilhas de auditoria",
          ],
          stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "WebSockets", "WebRTC"],
          links: { demo: "#", repo: "#" },
        },
        {
          slug: "procurement-suite",
          title: "Central de Compras Brasil — Suite de E-Procurement",
          summary:
            "Pregões com salas de disputa, propostas, cotações, fluxos de conformidade e trilhas de auditoria.",
          highlights: [
            "Fluxos de disputa/negociação com prazos e contrapropostas",
            "Auditabilidade transparente e aprovações por papéis",
            "Redução de ~25% no ciclo de compras",
          ],
          stack: ["Next.js", "Laravel", "MySQL", "Redis", "Filas"],
          links: { demo: "#", repo: "#" },
        },
        {
          slug: "fleet-management",
          title: "Carletto Frotas — Gestão de Frotas",
          summary:
            "Controle de veículos/motoristas, manutenção preventiva, abastecimento/custos e alertas em tempo real.",
          highlights: [
            "Regras de manutenção preventiva e catálogo de peças",
            "Dashboards com KPIs acionáveis",
            "99,95% de uptime em picos",
          ],
          stack: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
          links: { demo: "#", repo: "#" },
        },
        {
          slug: "fitness-app",
          title: "Gym-Junkies — Saúde & Fitness",
          summary:
            "App híbrido com treinos, calculadoras de BF/TDEE e coaching nutricional com IA no premium.",
          highlights: [
            "Rotinas offline-ready e acompanhamento de progresso",
            "Sugestões de cardápio com LLM via fluxos no N8N",
            "Onboarding A/B elevou a ativação",
          ],
          stack: ["Flutter", "Supabase", "Node.js", "N8N"],
          links: { demo: "#", repo: "#" },
        },
      ],
    },
  },

  experience: {
    en: {
      title: "Experience Snapshot",
      bullets: [
        "5+ years building production systems for public sector and SMBs.",
        "Architected web platforms, APIs, and data models with clear domain boundaries.",
        "Delivered LLM chatbots with tool-use, retrieval, and N8N automations.",
        "Led Flutter apps from MVP to store with CI/CD and analytics.",
      ],
    },
    pt: {
      title: "Resumo da Experiência",
      bullets: [
        "5+ anos construindo sistemas em produção para setor público e PMEs.",
        "Arquitetura de plataformas web, APIs e modelos de dados com domínios claros.",
        "Entrega de chatbots LLM com tool-use, retrieval e automações no N8N.",
        "Apps Flutter do MVP à publicação com CI/CD e analytics.",
      ],
    },
  },

  process: {
    en: {
      title: "How I Work",
      steps: [
        { name: "Discover", desc: "Goals, constraints, stakeholders, success metrics." },
        { name: "Design", desc: "Architecture, data modeling, UX flows, acceptance criteria." },
        { name: "Build", desc: "Incremental delivery with tests, feature flags, and docs." },
        { name: "Test", desc: "Automated + exploratory testing, performance and security checks." },
        { name: "Deploy", desc: "CI/CD, blue-green/canary strategies, monitoring." },
        { name: "Iterate", desc: "Telemetry-driven improvements and roadmap updates." },
      ],
    },
    pt: {
      title: "Como Eu Trabalho",
      steps: [
        { name: "Descobrir", desc: "Objetivos, restrições, stakeholders e métricas de sucesso." },
        {
          name: "Desenhar",
          desc: "Arquitetura, modelagem de dados, fluxos de UX e critérios de aceite.",
        },
        {
          name: "Construir",
          desc: "Entrega incremental com testes, feature flags e documentação.",
        },
        { name: "Testar", desc: "Testes automatizados e exploratórios, performance e segurança." },
        { name: "Publicar", desc: "CI/CD, estratégias blue-green/canary e monitoramento." },
        { name: "Evoluir", desc: "Melhorias orientadas por telemetria e atualização de roadmap." },
      ],
    },
  },

  stack: {
    en: {
      title: "Tech I Use",
      groups: [
        { name: "Frontend", items: ["Next.js", "React", "Tailwind", "shadcn/ui"] },
        { name: "Backend", items: ["Node.js", "TypeScript", "NestJS", "Laravel", "PHP"] },
        { name: "Data", items: ["PostgreSQL", "MySQL", "Redis"] },
        { name: "AI/Automation", items: ["LLMs", "N8N", "RAG", "Embeddings"] },
        { name: "Mobile", items: ["Flutter", "Dart"] },
        { name: "DevOps", items: ["Docker", "NGINX", "CI/CD", "Observability"] },
      ],
    },
    pt: {
      title: "Tecnologias",
      groups: [
        { name: "Frontend", items: ["Next.js", "React", "Tailwind", "shadcn/ui"] },
        { name: "Backend", items: ["Node.js", "TypeScript", "NestJS", "Laravel", "PHP"] },
        { name: "Dados", items: ["PostgreSQL", "MySQL", "Redis"] },
        { name: "IA/Automação", items: ["LLMs", "N8N", "RAG", "Embeddings"] },
        { name: "Mobile", items: ["Flutter", "Dart"] },
        { name: "DevOps", items: ["Docker", "NGINX", "CI/CD", "Observabilidade"] },
      ],
    },
  },

  contact: {
    en: {
      title: "Let's Build Something",
      subtitle: "Have a product idea or need help scaling your platform?",
      cta: "Send Message",
      success: "Thanks! I'll get back to you soon.",
    },
    pt: {
      title: "Vamos Construir Algo",
      subtitle: "Tem uma ideia de produto ou precisa escalar sua plataforma?",
      cta: "Enviar Mensagem",
      success: "Obrigado! Em breve retorno o contato.",
    },
  },

  ui: {
    en: {
      keyHighlights: "Key Highlights",
      techStack: "Tech Stack",
      scroll: "Scroll",
      yearsExperience: "Years Experience",
      satisfiedCustormers: "Satisfied Customers",
      uptime: "Uptime",
      support: "Support",
      mvpTime: "MVP Time",
      step: "Step",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "X (Twitter)",
      wantToSeeMore: "Want to see more projects or discuss a collaboration?",
      letsTalk: "Let's Talk",
    },
    pt: {
      keyHighlights: "Principais Destaques",
      techStack: "Tecnologias",
      scroll: "Rolar",
      yearsExperience: "Anos de Experiência",
      satisfiedCustormers: "Clientes Satisfeitos",
      uptime: "Disponibilidade",
      support: "Suporte",
      mvpTime: "Tempo até MVP",
      step: "Passo",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "X (Twitter)",
      wantToSeeMore: "Quer ver mais projetos ou discutir uma colaboração?",
      letsTalk: "Vamos Conversar",
    },
  },

  footer: {
    en: "© {{year}} All rights reserved.",
    pt: "© {{year}} Todos os direitos reservados.",
  },
} as const;

export type Language = "en" | "pt";
export type ContentKey = keyof typeof content;
