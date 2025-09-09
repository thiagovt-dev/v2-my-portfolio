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
        "I build robust web platforms with Next.js, high-performance APIs (Node/NestJS, PHP/Laravel, NestJS), solid SQL data models, intelligent LLM chatbots with N8N, and production-ready Flutter apps for Android/iOS.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Get in Touch",
      badges: ["Next.js", "Node/NestJS", "PHP/Laravel/NestJS", "SQL", "LLMs & N8N", "Flutter"],
    },
    pt: {
      title: "Engenheiro de Software Full-Stack",
      subtitle:
        "Construo plataformas web com Next.js, APIs de alta performance (Node/NestJS, PHP/Laravel, NestJS), modelos de dados SQL, chatbots inteligentes com LLMs e N8N, e apps mobiles Android/iOS com Flutter prontos para produção.",
      ctaPrimary: "Ver Projetos",
      ctaSecondary: "Fale Comigo",
      badges: ["Next.js", "Node/NestJS", "PHP/Laravel/NestJS", "SQL", "LLMs & N8N", "Flutter"],
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
          desc: "Node/TypeScript, NestJS or PHP/Laravel; JWT/OAuth, RBAC, queues, websockets, caching, and test coverage.",
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
          desc: "Node/TypeScript, NestJS ou PHP/Laravel; JWT/OAuth, RBAC, filas, websockets, cache e testes.",
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
      title: "Featured Projects",
      cards: [
        {
          slug: "safety-platform",
          title: "SOS Mulher Segura — Public Safety Platform",
          summary:
            "Women's safety app used by municipalities as a protection measure. Features panic button for direct emergency calls to nearest patrol and central dispatch, integrated voice rooms, and real-time location sharing.",
          highlights: [
            "Panic button with direct dispatch to nearest patrol and central",
            "Integrated voice rooms for continuous contact with patrol units",
            "Real-time location sharing and tracking capabilities",
            "Municipal-level deployment for public safety initiatives",
          ],
          stack: ["Flutter", "Next.js", "NestJS + Fastify", "Prisma", "PostgreSQL + PostGIS", "BullMQ", "Redis", "WebSockets", "Push Notifications"],
          links: { demo: null, repo: null, gallery: true },
          gallery: {
            images: [
              "/projects/sos-mulher/sos-mob-1.jpeg",
              "/projects/sos-mulher/sos-mob-2.jpeg", 
              "/projects/sos-mulher/sos-mob-3.jpeg",
              "/projects/sos-mulher/sos-mob-4.jpeg",
              "/projects/sos-mulher/sos-mob-5.jpeg",
              "/projects/sos-mulher/sos-web-1.jpeg",
              "/projects/sos-mulher/sos-web-2.jpeg"
            ]
          }
        },
        {
          slug: "procurement-suite",
          title: "Licita Aí — Public Bidding Panel",
          summary:
            "Web platform that facilitates the management of public bidding processes, connecting suppliers and public agencies through a modern and intuitive interface.",
          highlights: [
            "Supplier registration and product/service management",
            "Real-time bidding process tracking and monitoring",
            "Auction dispute room with live negotiations",
            "AI virtual assistant for process guidance",
          ],
          stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Webhooks", "Supabase Realtime", "Tailwind CSS", "shadcn/ui"],
          links: { demo: "", repo: "", gallery: true },
          gallery: {
            images: [
              "/projects/licita-ai/licita-ai-1.png",
              "/projects/licita-ai/licita-ai-2.jpeg",
              "/projects/licita-ai/licita-ai-3.jpeg",
              "/projects/licita-ai/licita-ai-4.jpeg",
              "/projects/licita-ai/licita-ai-5.jpeg",
              "/projects/licita-ai/licita-ai-6.jpeg",
              "/projects/licita-ai/licita-ai-7.png",
            ]
          }
        },
        {
          slug: "fleet-management",
          title: "Feira Agro — From Farm to Table",
          summary:
            "Mobile app developed for the Agronomy Department of Rio Branco do Sul - PR City Hall to connect local rural producers with the general population through an online marketplace.",
          highlights: [
            "Online marketplace connecting consumers directly with local producers",
            "Municipal pickup point for order collection",
            "Web panel for city hall management and oversight",
            "Support for local agriculture and community development",
          ],
          stack: ["Flutter", "Firebase", "PostgreSQL", "Next.js"],
          links: { demo: "", repo: "", gallery: true },
          gallery: {
            images: [
              "/projects/feira-agro/Screenshot_1757438092.png",
              "/projects/feira-agro/Screenshot_1757438326.png",
              "/projects/feira-agro/Screenshot_1757438556.png",
              "/projects/feira-agro/Screenshot_1757438711.png",
              "/projects/feira-agro/Screenshot_1757438835.png",
              "/projects/feira-agro/Screenshot_1757438977.png",
              "/projects/feira-agro/Screenshot_1757441182.png"
            ]
          }
        },
        {
          slug: "fitness-app",
          title: "Gestor de Obras — Public Works Management",
          summary:
            "Comprehensive web application for managing public works projects for government agencies such as city halls and departments. A robust and complete SaaS solution.",
          highlights: [
            "Complete project lifecycle management from service orders to completion",
            "Budget planning, inventory control, and financial management",
            "Invoice management and document control system",
            "Real-time monitoring and reporting dashboards",
          ],
          stack: ["Next.js", "NestJS + Fastify", "Prisma", "PostgreSQL + PostGIS", "BullMQ", "Redis", "WebSockets", "Webhooks"],
          links: { demo: "", repo: "", gallery: true },
          gallery: {
            images: [
              "/projects/gestor-de-obras/image1.png",
              "/projects/gestor-de-obras/image2.png",
              "/projects/gestor-de-obras/image3.png"
            ]
          }
        },
      ],
    },
    pt: {
      title: "Projetos em Destaque",
      cards: [
        {
          slug: "safety-platform",
          title: "SOS Mulher Segura — Plataforma de Segurança",
          summary:
            "Aplicativo de segurança da mulher usado pelas prefeituras como medida de proteção. Possui botão de pânico para chamados diretos à viatura mais próxima e central, salas de voz integradas e compartilhamento de localização em tempo real.",
          highlights: [
            "Botão de pânico com despacho direto à viatura mais próxima e central",
            "Salas de voz integradas para contato contínuo com as viaturas",
            "Compartilhamento e rastreamento de localização em tempo real",
            "Deploy municipal para iniciativas de segurança pública",
          ],
          stack: ["Flutter", "Next.js", "NestJS + Fastify", "Prisma", "PostgreSQL + PostGIS", "BullMQ", "Redis", "WebSockets", "Push Notifications"],
          links: { demo: null, repo: null, gallery: true },
          gallery: {
            images: [
              "/projects/sos-mulher/sos-mob-1.jpeg",
              "/projects/sos-mulher/sos-mob-2.jpeg", 
              "/projects/sos-mulher/sos-mob-3.jpeg",
              "/projects/sos-mulher/sos-mob-4.jpeg",
              "/projects/sos-mulher/sos-mob-5.jpeg",
              "/projects/sos-mulher/sos-web-1.jpeg",
              "/projects/sos-mulher/sos-web-2.jpeg"
            ]
          }
        },
        {
          slug: "procurement-suite",
          title: "Licita Aí — Painel de Licitações Públicas",
          summary:
            "Plataforma web que facilita a gestão de processos de licitações públicas, conectando fornecedores e órgãos públicos através de uma interface moderna e intuitiva.",
          highlights: [
            "Cadastro de fornecedores e gestão de produtos/serviços",
            "Acompanhamento de processos licitatórios em tempo real",
            "Sala de disputa de leilão com negociações ao vivo",
            "Assistente de IA virtual para orientação nos processos",
          ],
          stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Webhooks", "Supabase Realtime", "Tailwind CSS", "shadcn/ui"],
          links: { demo: "", repo: "", gallery: true },
          gallery: {
            images: [
              "/projects/licita-ai/licita-ai-1.png",
              "/projects/licita-ai/licita-ai-2.jpeg",
              "/projects/licita-ai/licita-ai-3.jpeg",
              "/projects/licita-ai/licita-ai-4.jpeg",
              "/projects/licita-ai/licita-ai-5.jpeg",
              "/projects/licita-ai/licita-ai-6.jpeg",
              "/projects/licita-ai/licita-ai-7.png",
            ]
          }
        },
        {
          slug: "fleet-management",
          title: "Feira Agro — Da Terra para a Mesa",
          summary:
            "Aplicativo desenvolvido para a Secretaria de Agronomia da Prefeitura de Rio Branco do Sul - PR com a finalidade de aproximar os produtores rurais locais com a população em geral do município.",
          highlights: [
            "Mercado online conectando consumidores diretamente aos produtores locais",
            "Ponto de retirada municipal para coleta dos pedidos",
            "Painel web para gestão e acompanhamento da prefeitura",
            "Apoio à agricultura local e desenvolvimento comunitário",
          ],
          stack: ["Flutter", "Firebase", "PostgreSQL", "Next.js"],
          links: { demo: "", repo: "", gallery: true },
          gallery: {
            images: [
              "/projects/feira-agro/Screenshot_1757438092.png",
              "/projects/feira-agro/Screenshot_1757438326.png",
              "/projects/feira-agro/Screenshot_1757438556.png",
              "/projects/feira-agro/Screenshot_1757438711.png",
              "/projects/feira-agro/Screenshot_1757438835.png",
              "/projects/feira-agro/Screenshot_1757438977.png",
              "/projects/feira-agro/Screenshot_1757441182.png"
            ]
          }
        },
        {
          slug: "fitness-app",
          title: "Gestor de Obras — Gestão de Obras Públicas",
          summary:
            "Aplicação web para gestão de obras de órgãos públicos como prefeituras e secretarias. Uma aplicação robusta e completa que conta com toda a gestão do órgão, desde o início até a conclusão.",
          highlights: [
            "Gestão completa do ciclo de vida dos projetos desde ordens de serviço até conclusão",
            "Planejamento orçamentário, controle de estoque e gestão financeira",
            "Sistema de gestão de notas fiscais e controle documental",
            "Dashboards de monitoramento e relatórios em tempo real",
          ],
          stack: ["Next.js", "NestJS + Fastify", "Prisma", "PostgreSQL + PostGIS", "BullMQ", "Redis", "WebSockets", "Webhooks"],
          links: { demo: "", repo: "", gallery: true },
          gallery: {
            images: [
              "/projects/gestor-de-obras/image1.png",
              "/projects/gestor-de-obras/image2.png",
              "/projects/gestor-de-obras/image3.png"
            ]
          }
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
        { name: "Backend", items: ["Node.js", "TypeScript", "NestJS", "PHP/Laravel", "PHP"] },
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
        { name: "Backend", items: ["Node.js", "TypeScript", "NestJS", "PHP/Laravel", "PHP"] },
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
