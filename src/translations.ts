export interface TranslationSchema {
  nav: {
    services: string;
    deliverables: string;
    cases: string;
    testimonials: string;
    faq: string;
    contact: string;
    cta: string;
    whatsapp: string;
  };
  hero: {
    kicker: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine3: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    socialProof: {
      rating: string;
      ratingSub: string;
      projects: string;
      projectsSub: string;
      responseTime: string;
      responseTimeSub: string;
    };
  };
  services: {
    kicker: string;
    heading: string;
    sub: string;
    items: Array<{
      id: string;
      icon: string;
      title: string;
      highlight: string;
      desc: string;
      tags: string[];
    }>;
  };
  deliverables: {
    kicker: string;
    heading: string;
    sub: string;
    items: Array<{
      number: string;
      title: string;
      desc: string;
      details: string;
    }>;
  };
  cases: {
    kicker: string;
    heading: string;
    sub: string;
    ctaText: string;
    items: Array<{
      id: string;
      number: string;
      client: string;
      year: string;
      category: string;
      title: string;
      desc: string;
      metrics: string;
      stack: string[];
      image: string;
      badge: string;
    }>;
  };
  testimonials: {
    kicker: string;
    heading: string;
    sub: string;
    googleBadge: {
      score: string;
      stars: string;
      platform: string;
      reviewCount: string;
    };
    items: Array<{
      quote: string;
      author: string;
      role: string;
      company: string;
      projectType: string;
    }>;
  };
  faq: {
    kicker: string;
    heading: string;
    sub: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  contact: {
    kicker: string;
    heading: string;
    sub: string;
    reassurance: string;
    form: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      projectType: string;
      projectTypePlaceholder: string;
      projectTypes: string[];
      budget: string;
      budgetPlaceholder: string;
      budgets: string[];
      timeline: string;
      timelinePlaceholder: string;
      timelines: string[];
      description: string;
      descriptionPlaceholder: string;
      submitButton: string;
      whatsappAlt: string;
      successMessage: string;
      directContactTitle: string;
      directContactSub: string;
    };
  };
  footer: {
    description: string;
    navTitle: string;
    servicesTitle: string;
    contactTitle: string;
    email: string;
    phone: string;
    location: string;
    rights: string;
    securityBadge: string;
  };
}

export type Language = 'pt' | 'en';

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      services: "Serviços",
      deliverables: "Entregas",
      cases: "Cases",
      testimonials: "Depoimentos",
      faq: "FAQ",
      contact: "Contato",
      cta: "Solicitar Orçamento",
      whatsapp: "Falar no WhatsApp"
    },
    hero: {
      kicker: "DESENVOLVIMENTO DE SOFTWARE",
      titleLine1: "Software",
      titleHighlight: "sob demanda",
      titleLine3: "pra sua empresa",
      subtitle: "Construímos sistemas web, plataformas, MVPs e aplicativos sob medida para negócios que precisam de tecnologia sem enrolação com escopo ou contratos engessados.",
      ctaPrimary: "Solicite um orçamento",
      ctaSecondary: "Falar no WhatsApp",
      socialProof: {
        rating: "5.0 ★★★★★",
        ratingSub: "no Google Avaliações",
        projects: "+40",
        projectsSub: "projetos entregues",
        responseTime: "< 15 min",
        responseTimeSub: "tempo médio de resposta"
      }
    },
    services: {
      kicker: "SERVIÇOS",
      heading: "O que a Vezzitech desenvolve",
      sub: "Engenharia de software de ponta a ponta. Do entendimento de requisitos ao deploy em produção com código limpo e escalável.",
      items: [
        {
          id: "web-platforms",
          icon: "globe",
          title: "Plataformas Web e Portais",
          highlight: "Experiências web de alta conversão, portais de clientes e áreas logadas seguras.",
          desc: "Desenvolvemos portais institucionais complexos, dashboards multi-tenant e plataformas web de alta velocidade com React, Next.js e TypeScript.",
          tags: ["React / Next.js", "TypeScript", "Áreas de Membros", "SEO Técnico"]
        },
        {
          id: "internal-systems",
          icon: "layout-dashboard",
          title: "Sistemas Internos e Web Apps",
          highlight: "Software operacional sob medida para automatizar e organizar sua operação.",
          desc: "CRMs proprietários, ERPs enxutos, painéis administrativos, controle financeiro e ferramentas de gestão feitas exatamente para a rotina da sua equipe.",
          tags: ["Painéis Admin", "Gestão Operacional", "Automação de Rotinas", "Controle de Acessos"]
        },
        {
          id: "saas-mvp",
          icon: "rocket",
          title: "SaaS, MVPs e Produtos Digitais",
          highlight: "Valide rápido no mercado com arquitetura pronta para escalar.",
          desc: "Tiramos sua ideia do papel em tempo recorde: autenticação, assinatura recorrente (Stripe/Asaas), multi-tenancy e integrações completas.",
          tags: ["Arquitetura SaaS", "Billing & Assinaturas", "Multi-tenancy", "Lançamento Rápido"]
        },
        {
          id: "mobile-apps",
          icon: "smartphone",
          title: "Aplicativos Mobile Integrados",
          highlight: "Apps nativos e híbridos para iOS e Android conectados ao seu ecossistema.",
          desc: "Aplicativos com interface fluida, suporte offline, notificações push e integração nativa com seus sistemas em React Native e Flutter.",
          tags: ["iOS & Android", "React Native", "Push Notifications", "Sincronização Offline"]
        },
        {
          id: "integrations",
          icon: "cpu",
          title: "Integrações e Automações",
          highlight: "Conecte seus sistemas existentes e elimine trabalho manual repetitivo.",
          desc: "Desenvolvimento de APIs REST e Webhooks, integração com WhatsApp API, gateways de pagamento, CRMs externos, ERPs e pipelines de dados com IA.",
          tags: ["WhatsApp API", "Webhooks & REST APIs", "Gateways de Pagamento", "Pipelines de IA"]
        },
        {
          id: "tech-direction",
          icon: "code",
          title: "Escopo e Direção Técnica",
          highlight: "Consultoria sênior de arquitetura, documentação e refatoração de código.",
          desc: "Apoio técnico para estruturar requisitos, escolher a stack ideal, auditar códigos legados e acelerar squads internos com boas práticas de engenharia.",
          tags: ["Arquitetura de Software", "Auditoria de Código", "Documentação Técnica", "Code Review"]
        },
        {
          id: "websites-landing-pages",
          icon: "monitor",
          title: "Websites & Landing Pages",
          highlight: "Páginas ultra velozes focadas em conversão de leads e vendas.",
          desc: "Sites institucionais elegantes, landing pages de alta conversão, páginas de vendas de alta performance e blogs otimizados para SEO e velocidade máxima de carregamento.",
          tags: ["Landing Pages", "Websites Institucionais", "Performance & SEO", "Design Exclusivo"]
        },
        {
          id: "paid-traffic-ads",
          icon: "megaphone",
          title: "Tráfego Pago & Gestão de Ads",
          highlight: "Campanhas estratégicas para colocar o seu negócio no topo das buscas.",
          desc: "Planejamento, criação e gestão de campanhas profissionais de anúncios patrocinados no Google Ads, Meta Ads (Instagram/Facebook) e LinkedIn Ads para maximizar seu retorno sobre investimento (ROI).",
          tags: ["Google Ads", "Meta Ads", "Gestão de Anúncios", "Análise de ROI"]
        }
      ]
    },
    deliverables: {
      kicker: "ENTREGAS",
      heading: "O que vem junto em todo projeto",
      sub: "Sem surpresas no final. Todo projeto entregue pela Vezzitech segue um padrão rigoroso de engenharia e transparência.",
      items: [
        {
          number: "01",
          title: "Escopo Documentado & Wireframes",
          desc: "Levantamento detalhado de requisitos com fluxogramas e alinhamento claro de cada funcionalidade antes da primeira linha de código.",
          details: "Zero ambiguidades ou surpresas contratuais."
        },
        {
          number: "02",
          title: "Design de Interface (UI/UX)",
          desc: "Telas completas, responsivas e testadas no Figma focadas na usabilidade do seu usuário final e na velocidade de uso.",
          details: "Design system consistente e preparado para escala."
        },
        {
          number: "03",
          title: "Engenharia & Código Limpo",
          desc: "Desenvolvimento com TypeScript, componentes modulares, tipagem estrita e documentação clara para facilitar manutenção futura.",
          details: "Código que pertence 100% à sua empresa."
        },
        {
          number: "04",
          title: "Deploy & Infraestrutura Cloud",
          desc: "Publicação em provedores modernos (Google Cloud, AWS ou Vercel) com pipelines de CI/CD, SSL, banco de dados e monitoramento.",
          details: "Alta disponibilidade e carregamento instantâneo."
        },
        {
          number: "05",
          title: "Suporte & Garantia Pós-Entrega",
          desc: "Período de garantia para correções imediatas de bugs e suporte técnico ativo para garantir estabilidade contínua em produção.",
          details: "Acompanhamento real pós-lançamento."
        }
      ]
    },
    cases: {
      kicker: "CASES",
      heading: "Projetos entregues",
      sub: "Soluções reais em produção gerando eficiência, receita e escala para nossos parceiros comerciais.",
      ctaText: "Ver detalhes do projeto →",
      items: [
        {
          id: "case-1",
          number: "01",
          client: "Gestão Operacional B2B",
          year: "2024",
          category: "Sistema Interno / SaaS",
          title: "Plataforma Central de Gestão & Automação de Ordens de Serviço",
          desc: "Substituição de planilhas complexas por um web app sob medida em React e Node.js. Controle em tempo real de status, atribuição de técnicos em campo e relatórios automáticos em PDF.",
          metrics: "Redução de 70% no tempo de emissão de relatórios e zero perda de dados operacionais.",
          stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Google Cloud"],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
          badge: "Sistema Customizado"
        },
        {
          id: "case-2",
          number: "02",
          client: "Fintech & Cobranças",
          year: "2024",
          category: "SaaS & Pagamentos",
          title: "Dashboard Multi-tenant de Cobrança e Gestão de Assinaturas",
          desc: "MVP construído em 5 semanas com autenticação segura, conciliação bancária via Webhook (PIX e Cartão), painel financeiro e envio automático de lembretes no WhatsApp.",
          metrics: "Mais de R$ 1.8M processados no primeiro trimestre de operação contínua.",
          stack: ["Next.js", "Tailwind CSS", "Fastify", "Redis", "WhatsApp API"],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
          badge: "SaaS em Produção"
        },
        {
          id: "case-3",
          number: "03",
          client: "Logística & Frota",
          year: "2023",
          category: "Mobile & Web App",
          title: "Aplicativo de Checklist de Frota e Rastreamento de Entregas",
          desc: "App mobile offline-first para motoristas registrarem vistorias de veículos com fotos e coordenadas GPS, integrado a uma central web para despacho de rotas em tempo real.",
          metrics: "Economia de 35 horas semanais da equipe de suporte e compliance total de frota.",
          stack: ["React Native", "Express", "SQLite", "Firebase", "AWS S3"],
          image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop",
          badge: "Mobile Híbrido"
        }
      ]
    },
    testimonials: {
      kicker: "PROVA",
      heading: "O que os clientes dizem",
      sub: "Parceiro técnico de confiança para founders, diretores e gestores de tecnologia.",
      googleBadge: {
        score: "5.0",
        stars: "★★★★★",
        platform: "no Google Avaliações",
        reviewCount: "Avaliação máxima de satisfação técnica"
      },
      items: [
        {
          quote: "Precisávamos construir um sistema interno para nossa operação e as outras agências nos passaram orçamentos absurdos com prazos de 6 meses. A Vezzitech entregou a primeira versão utilizável em 3 semanas, com código limpo e sem surpresas.",
          author: "Rodrigo Mendonça",
          role: "Diretor de Operações",
          company: "Grupo Nexus Log",
          projectType: "Sistema Interno Customizado"
        },
        {
          quote: "A comunicação direta e o entendimento técnico do time da Vezzitech fizeram toda a diferença. Eles não apenas programaram o que pedimos, mas nos orientaram sobre a melhor arquitetura para o nosso SaaS aguentar escala.",
          author: "Camila Guimarães",
          role: "Founder & CEO",
          company: "DataFlow Tech",
          projectType: "Plataforma SaaS B2B"
        },
        {
          quote: "O processo é muito claro. Você sabe exatamente o que está sendo construído em cada sprint. O suporte pós-entrega é impecável e o sistema roda há mais de 1 ano sem qualquer instabilidade.",
          author: "Lucas Silveira",
          role: "CTO",
          company: "Vanguard Imob",
          projectType: "Portal Web & Integração API"
        }
      ]
    },
    faq: {
      kicker: "FAQ",
      heading: "O que perguntam antes de contratar",
      sub: "Tudo o que você precisa saber sobre o nosso modelo de trabalho, prazos, custos e entregas.",
      items: [
        {
          q: "Como funciona a precificação de um projeto?",
          a: "Trabalhamos com orçamento fechado por escopo definido ou por modelo de squad mensal sob demanda. Após o alinhamento inicial, entregamos uma proposta técnica detalhada com valor fixo, cronograma de entregas e marcos de pagamento transparentes, sem custos ocultos."
        },
        {
          q: "Qual é o prazo médio de entrega de um software?",
          a: "Varia conforme o tamanho da demanda: MVPs e sistemas internos enxutos costumam ser entregues entre 3 a 6 semanas. Plataformas mais robustas e produtos complexos levam de 2 a 4 meses, sempre com entregas parciais a cada sprint para validação contínua."
        },
        {
          q: "Vocês ajudam a definir o escopo e a arquitetura?",
          a: "Sim. Você não precisa ter um documento técnico pronto. Nós realizamos uma reunião de alinhamento para entender as regras do seu negócio, propor a arquitetura ideal, sugerir simplificações inteligentes e estruturar o escopo completo."
        },
        {
          q: "O código-fonte e o software pertencem a quem?",
          a: "O código é 100% da sua empresa. Entregamos o repositório Git completo, documentação de deploy e todas as chaves de acesso. Não amarramos clientes a sistemas proprietários."
        },
        {
          q: "Como funciona a contratação (projeto fechado vs squad sob demanda)?",
          a: "Para demandas com início, meio e fim claros (ex: construir um MVP ou novo sistema), recomendamos o modelo de Projeto Fechado. Para empresas que precisam de evolução contínua e suporte constante, oferecemos o modelo de Squad Dedicado mensal."
        },
        {
          q: "Vocês assumem ou migram um software/código já existente?",
          a: "Sim. Fazemos uma auditoria técnica prévia no seu repositório para avaliar a qualidade da base de código atual, propor refatorações necessárias e assumir a continuidade do desenvolvimento com segurança."
        }
      ]
    },
    contact: {
      kicker: "VAMOS COMEÇAR",
      heading: "Conta o que você precisa construir",
      sub: "Não precisa ter o escopo 100% fechado. Nós te ajudamos a estruturar os requisitos técnicos e o cronograma ideal.",
      reassurance: "Resposta em até 15 minutos em horário comercial · Sem compromisso",
      form: {
        name: "Seu nome",
        namePlaceholder: "ex: Carlos Silva",
        company: "Nome da empresa",
        companyPlaceholder: "ex: Sua Empresa Tech",
        email: "E-mail corporativo",
        emailPlaceholder: "carlos@suaempresa.com.br",
        phone: "WhatsApp para contato",
        phonePlaceholder: "(11) 99999-9999",
        projectType: "Tipo de projeto",
        projectTypePlaceholder: "Selecione o tipo de software",
        projectTypes: [
          "Sistema Interno / Painel de Gestão",
          "SaaS / MVP de Produto Digital",
          "Plataforma Web / Portal do Cliente",
          "Aplicativo Mobile (iOS / Android)",
          "Websites / Landing Pages",
          "Tráfego Pago / Ads",
          "Integrações de API / Automações",
          "Outro / Consultoria Técnica"
        ],
        budget: "Orçamento estimado",
        budgetPlaceholder: "Selecione a faixa prevista",
        budgets: [
          "Até R$ 15.000",
          "R$ 15.000 a R$ 30.000",
          "R$ 30.000 a R$ 60.000",
          "Acima de R$ 60.000",
          "Ainda não tenho estimativa"
        ],
        timeline: "Prazo desejado",
        timelinePlaceholder: "Quando precisa no ar?",
        timelines: [
          "Urgente (menos de 30 dias)",
          "1 a 2 meses",
          "3 a 4 meses",
          "Prazo flexível"
        ],
        description: "Descreva brevemente o que você precisa construir",
        descriptionPlaceholder: "Conte o objetivo do software, as principais funcionalidades que imagina e o problema que deseja resolver...",
        submitButton: "Solicitar proposta técnica →",
        whatsappAlt: "Ou se preferir, clique aqui para conversar direto no WhatsApp",
        successMessage: "Proposta solicitada com sucesso! Nossa equipe técnica entrará em contato em menos de 15 minutos.",
        directContactTitle: "Atendimento direto",
        directContactSub: "Fale com um dos nossos engenheiros de software agora mesmo."
      }
    },
    footer: {
      description: "Vezzitech é uma software house sob demanda. Desenvolvemos sistemas web, plataformas SaaS, MVPs, apps mobile e integrações com código limpo e entrega rápida.",
      navTitle: "Navegação",
      servicesTitle: "Serviços",
      contactTitle: "Contato Direto",
      email: "contato@vezzitech.com",
      phone: "+55 (44) 99826-6950",
      location: "Brasil · Atendimento 100% online em todo o país",
      rights: "© {year} Vezzitech Desenvolvimento de Software. Todos os direitos reservados.",
      securityBadge: "Código Limpo · Infraestrutura Segura · 100% Propriedade do Cliente"
    }
  },
  en: {
    nav: {
      services: "Services",
      deliverables: "Deliverables",
      cases: "Cases",
      testimonials: "Reviews",
      faq: "FAQ",
      contact: "Contact",
      cta: "Request a Quote",
      whatsapp: "Chat on WhatsApp"
    },
    hero: {
      kicker: "SOFTWARE DEVELOPMENT",
      titleLine1: "Software",
      titleHighlight: "on demand",
      titleLine3: "for your company",
      subtitle: "We build custom web systems, platforms, MVPs, and mobile apps for businesses that need solid engineering without scope bloat or rigid contracts.",
      ctaPrimary: "Request a quote",
      ctaSecondary: "Chat on WhatsApp",
      socialProof: {
        rating: "5.0 ★★★★★",
        ratingSub: "on Google Reviews",
        projects: "+40",
        projectsSub: "delivered projects",
        responseTime: "< 15 min",
        responseTimeSub: "average response time"
      }
    },
    services: {
      kicker: "SERVICES",
      heading: "What Vezzitech builds",
      sub: "End-to-end software engineering. From requirements architecture to production deployment with clean, scalable code.",
      items: [
        {
          id: "web-platforms",
          icon: "globe",
          title: "Web Platforms & Portals",
          highlight: "High-performance web apps, client portals, and secure authenticated zones.",
          desc: "We engineer complex portals, multi-tenant dashboards, and ultra-fast web apps using React, Next.js, and TypeScript.",
          tags: ["React / Next.js", "TypeScript", "Member Areas", "Technical SEO"]
        },
        {
          id: "internal-systems",
          icon: "layout-dashboard",
          title: "Internal Tools & Web Apps",
          highlight: "Custom operational software engineered to streamline your team's workflow.",
          desc: "Proprietary CRMs, lean ERPs, admin panels, financial workflows, and operational tools built specifically for your exact business rules.",
          tags: ["Admin Dashboards", "Operations Management", "Workflow Automation", "Role-Based Access"]
        },
        {
          id: "saas-mvp",
          icon: "rocket",
          title: "SaaS, MVPs & Digital Products",
          highlight: "Validate rapidly in market with an architecture built to scale from day one.",
          desc: "Turn your vision into reality in record time: authentication, subscription billing (Stripe), multi-tenancy, and production infrastructure.",
          tags: ["SaaS Architecture", "Billing & Subscriptions", "Multi-tenancy", "Fast Time-to-Market"]
        },
        {
          id: "mobile-apps",
          icon: "smartphone",
          title: "Integrated Mobile Apps",
          highlight: "Native and hybrid iOS & Android apps fully connected to your ecosystem.",
          desc: "Fluid mobile apps with offline support, push notifications, and seamless backend synchronization in React Native and Flutter.",
          tags: ["iOS & Android", "React Native", "Push Notifications", "Offline Sync"]
        },
        {
          id: "integrations",
          icon: "cpu",
          title: "Integrations & Automation",
          highlight: "Connect existing systems and eliminate manual repetitive tasks.",
          desc: "REST APIs, Webhooks, WhatsApp Business API integrations, payment gateways, external CRMs, ERPs, and automated AI data pipelines.",
          tags: ["WhatsApp API", "Webhooks & REST APIs", "Payment Gateways", "AI Pipelines"]
        },
        {
          id: "tech-direction",
          icon: "code",
          title: "Technical Direction & Scoping",
          highlight: "Senior architectural consulting, documentation, and legacy code refactoring.",
          desc: "Hands-on tech support to structure software requirements, select optimal stacks, audit codebases, and accelerate internal development teams.",
          tags: ["Software Architecture", "Codebase Audit", "Technical Specs", "Code Review"]
        },
        {
          id: "websites-landing-pages",
          icon: "monitor",
          title: "Websites & Landing Pages",
          highlight: "Ultra-fast pages designed to convert cold traffic into active clients.",
          desc: "Elegant corporate websites, high-converting landing pages, high-performance sales funnels, and blog structures optimized for speed and SEO rankings.",
          tags: ["Landing Pages", "Company Websites", "Performance & SEO", "Bespoke Design"]
        },
        {
          id: "paid-traffic-ads",
          icon: "megaphone",
          title: "Paid Traffic & Ads Management",
          highlight: "ROI-driven campaigns to rank your business at the top of search results.",
          desc: "Professional strategic campaign planning, copy drafting, and hands-on optimization across Google Ads, Meta Ads (Instagram/Facebook), and LinkedIn Ads.",
          tags: ["Google Ads", "Meta Ads", "Ads Management", "ROI Analytics"]
        }
      ]
    },
    deliverables: {
      kicker: "DELIVERABLES",
      heading: "What comes standard with every project",
      sub: "No surprises at launch. Every project delivered by Vezzitech follows rigorous engineering and transparency standards.",
      items: [
        {
          number: "01",
          title: "Documented Scope & Wireframes",
          desc: "Detailed requirements mapping with user flows and clear feature definitions before the first line of code is written.",
          details: "Zero ambiguity or contractual friction."
        },
        {
          number: "02",
          title: "UI/UX Interface Design",
          desc: "Complete, responsive, and tested screens in Figma focused on end-user usability and task execution speed.",
          details: "Consistent, scalable design system."
        },
        {
          number: "03",
          title: "Clean Engineering & Code",
          desc: "Crafted in TypeScript with modular components, strict typing, and self-explanatory architecture for easy maintenance.",
          details: "100% client-owned source code."
        },
        {
          number: "04",
          title: "Cloud Infrastructure & Deployment",
          desc: "Production deployment on modern clouds (Google Cloud, AWS, Vercel) with CI/CD pipelines, SSL, databases, and monitoring.",
          details: "High availability and instant loading."
        },
        {
          number: "05",
          title: "Post-Launch Warranty & Support",
          desc: "Dedicated warranty period for immediate bug fixes and active technical support to ensure smooth production operations.",
          details: "True ongoing post-launch partnership."
        }
      ]
    },
    cases: {
      kicker: "CASES",
      heading: "Delivered projects",
      sub: "Real software solutions in production delivering measurable efficiency, revenue, and scale.",
      ctaText: "View project details →",
      items: [
        {
          id: "case-1",
          number: "01",
          client: "B2B Operations Management",
          year: "2024",
          category: "Internal Tool / SaaS",
          title: "Central Operations & Work Order Automation Platform",
          desc: "Replaced complex spreadsheets with a custom React & Node.js web app. Real-time status tracking, field technician assignment, and automated PDF reports.",
          metrics: "70% reduction in report generation time and zero operational data loss.",
          stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Google Cloud"],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
          badge: "Custom System"
        },
        {
          id: "case-2",
          number: "02",
          client: "Fintech & Billing",
          year: "2024",
          category: "SaaS & Payments",
          title: "Multi-tenant Billing & Subscription Management Dashboard",
          desc: "Production-ready MVP built in 5 weeks with secure auth, automated Webhook payment reconciliation (PIX & Credit Card), and automated WhatsApp notifications.",
          metrics: "Over $350K+ processed in the first quarter of production operation.",
          stack: ["Next.js", "Tailwind CSS", "Fastify", "Redis", "WhatsApp API"],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
          badge: "Live SaaS"
        },
        {
          id: "case-3",
          number: "03",
          client: "Logistics & Fleet",
          year: "2023",
          category: "Mobile & Web App",
          title: "Fleet Inspection App & Live Route Tracking",
          desc: "Offline-first mobile app for drivers to complete vehicle inspections with photos and GPS stamps, connected to a central web dispatch console.",
          metrics: "Saved 35+ hours weekly in operational support and achieved 100% compliance.",
          stack: ["React Native", "Express", "SQLite", "Firebase", "AWS S3"],
          image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop",
          badge: "Hybrid Mobile"
        }
      ]
    },
    testimonials: {
      kicker: "PROOF",
      heading: "What clients say",
      sub: "Trusted technical partner for founders, CTOs, and product leaders.",
      googleBadge: {
        score: "5.0",
        stars: "★★★★★",
        platform: "on Google Reviews",
        reviewCount: "Highest technical satisfaction rating"
      },
      items: [
        {
          quote: "We needed to build an internal operations system and other agencies quoted crazy budgets with 6-month timelines. Vezzitech delivered the first usable version in 3 weeks, with clean code and no surprises.",
          author: "Rodrigo Mendonça",
          role: "Operations Director",
          company: "Nexus Log Group",
          projectType: "Custom Internal System"
        },
        {
          quote: "The direct communication and deep technical expertise of Vezzitech's team made all the difference. They didn't just build what we asked, but guided our SaaS architecture to handle scale seamlessly.",
          author: "Camila Guimarães",
          role: "Founder & CEO",
          company: "DataFlow Tech",
          projectType: "B2B SaaS Platform"
        },
        {
          quote: "The process is crystal clear. You know exactly what is being built in every sprint. Post-delivery support has been outstanding and the platform has run flawlessly for over a year.",
          author: "Lucas Silveira",
          role: "CTO",
          company: "Vanguard Imob",
          projectType: "Web Portal & API"
        }
      ]
    },
    faq: {
      kicker: "FAQ",
      heading: "Questions before hiring",
      sub: "Everything you need to know about our work model, timelines, pricing, and deliverables.",
      items: [
        {
          q: "How does project pricing work?",
          a: "We work with fixed-scope pricing or dedicated monthly squads on demand. After initial discovery, we deliver a comprehensive technical proposal with fixed costs, milestone deliverables, and transparent payment terms without hidden fees."
        },
        {
          q: "What is the average turnaround time for software?",
          a: "It depends on scope complexity: MVPs and lean internal tools typically take 3 to 6 weeks. Larger enterprise platforms take 2 to 4 months, always featuring incremental sprint demos for continuous alignment."
        },
        {
          q: "Do you help define requirements and software architecture?",
          a: "Yes. You do not need a ready-made technical spec. We run discovery sessions to understand your business logic, architect the ideal stack, suggest smart simplifications, and write the full technical spec."
        },
        {
          q: "Who owns the source code and software?",
          a: "100% of the code and intellectual property belongs to your company. We transfer the full Git repository, deployment instructions, and access credentials. No vendor lock-in."
        },
        {
          q: "What is the engagement model (fixed project vs monthly squad)?",
          a: "For projects with clear start and end milestones (e.g., launching an MVP or building a tool), Fixed Scope is ideal. For businesses requiring continuous iteration and features, we provide Dedicated Monthly Engineering Squads."
        },
        {
          q: "Can you take over or refactor an existing codebase?",
          a: "Yes. We perform a technical audit on your current repository to assess code quality, propose necessary refactorings, and take over ongoing engineering safely."
        }
      ]
    },
    contact: {
      kicker: "LET'S BUILD",
      heading: "Tell us what you need to build",
      sub: "You don't need a finished spec. We help you structure technical requirements, architecture, and timeline.",
      reassurance: "Response within 15 minutes during business hours · No obligation",
      form: {
        name: "Your Name",
        namePlaceholder: "e.g. John Doe",
        company: "Company Name",
        companyPlaceholder: "e.g. Acme Software",
        email: "Work Email",
        emailPlaceholder: "john@acme.com",
        phone: "WhatsApp / Phone",
        phonePlaceholder: "+1 (555) 000-0000",
        projectType: "Project Type",
        projectTypePlaceholder: "Select software category",
        projectTypes: [
          "Internal Tool / Management System",
          "SaaS / MVP Digital Product",
          "Web Platform / Client Portal",
          "Mobile App (iOS / Android)",
          "Websites / Landing Pages",
          "Paid Traffic / Ads Management",
          "API Integrations / Automations",
          "Other / Tech Consulting"
        ],
        budget: "Estimated Budget",
        budgetPlaceholder: "Select expected range",
        budgets: [
          "Up to $5,000",
          "$5,000 to $10,000",
          "$10,000 to $25,000",
          "$25,000+",
          "Not determined yet"
        ],
        timeline: "Desired Timeline",
        timelinePlaceholder: "When do you need it live?",
        timelines: [
          "Urgent (< 30 days)",
          "1 to 2 months",
          "3 to 4 months",
          "Flexible"
        ],
        description: "Briefly describe what you want to build",
        descriptionPlaceholder: "Tell us about the project goals, key features you imagine, and the problem to solve...",
        submitButton: "Request Technical Proposal →",
        whatsappAlt: "Or if you prefer, click here to message directly on WhatsApp",
        successMessage: "Proposal requested successfully! Our technical team will reach out within 15 minutes.",
        directContactTitle: "Direct Contact",
        directContactSub: "Speak directly with one of our software engineers right now."
      }
    },
    footer: {
      description: "Vezzitech is an on-demand software house. We build custom web systems, SaaS platforms, MVPs, mobile apps, and integrations with clean code and agile delivery.",
      navTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Direct Contact",
      email: "contato@vezzitech.com",
      phone: "+55 (44) 99826-6950",
      location: "Brazil · 100% Online Delivery Nationwide & Globally",
      rights: "© {year} Vezzitech Software Development. All rights reserved.",
      securityBadge: "Clean Code · Secure Cloud Architecture · 100% Client Ownership"
    }
  }
};
