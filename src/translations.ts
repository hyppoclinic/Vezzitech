export interface TranslationSchema {
  nav: {
    platform: string;
    solutions: string;
    process: string;
    tech: string;
    faq: string;
    cta: string;
    login: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    indicators: string[];
  };
  valueProp: {
    heading1: string;
    heading2: string;
    paragraphs: string[];
    cards: Array<{ title: string; desc: string; icon: string }>;
  };
  architecture: {
    heading: string;
    sub: string;
    steps: Array<{ title: string; desc: string }>;
  };
  segments: {
    heading: string;
    items: Array<{ id: string; title: string; benefits: string[] }>;
  };
  metrics: {
    heading: string;
    items: Array<{ value: string; label: string }>;
  };
  techStack: {
    heading: string;
    modules: string[];
  };
  insights: {
    heading: string;
    items: Array<{ category: string; title: string; time: string; image: string }>;
  };
  faq: {
    heading: string;
    items: Array<{ q: string; a: string }>;
  };
  ctaSection: {
    heading: string;
    sub: string;
    cta: string;
  };
  footerSection: {
    desc: string;
    navTitle: string;
    locationTitle: string;
    location: string;
    rights: string;
    platform: string;
    solutions: string;
    process: string;
    tech: string;
    company: string;
    about: string;
    careers: string;
    contact: string;
    privacy: string;
    terms: string;
  };
}

export type Language = 'pt' | 'en';

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      platform: "O Parceiro",
      solutions: "Soluções",
      process: "Como Atuamos",
      tech: "Tecnologia",
      faq: "FAQ",
      cta: "Solicitar Diagnóstico",
      login: "Login"
    },
    hero: {
      badge: "Google Cloud Partner - Agência de IA de Elite",
      headline: "Desenvolvimento Premium, IA e Tráfego Pago em uma Assinatura Unificada.",
      subheadline: "Aceleramos seu faturamento unindo o ecossistema Google com soluções de IA personalizadas. Seu site premium, conteúdo de autoridade e Google Ads sob gestão contínua de especialistas.",
      ctaPrimary: "Solicitar Diagnóstico de Elite",
      ctaSecondary: "Conhecer Metodologia AEO",
      indicators: [
        "Agentic PageSpeed",
        "AEO Preditivo",
        "Vertex AI & Gemini",
        "SEO de Alta Autoridade",
        "Google Ads Semanal"
      ]
    },
    valueProp: {
      heading1: "A Única Assinatura de Tecnologia.",
      heading2: "Que Você Vai Precisar.",
      paragraphs: [
        "Esqueça o estresse de gerenciar múltiplos fornecedores lentos. A Vezzitech unifica o desenvolvimento de sites premium, a produção de conteúdo com IA e a gestão de tráfego pago.",
        "Como Google Cloud Partner, entregamos velocidade extrema (Agentic PageSpeed) e posicionamento estratégico nos motores de resposta (AEO) para que sua marca domine o mercado."
      ],
      cards: [
        {
          title: "Desenvolvimento Nativo",
          desc: "Landing pages e plataformas ultra rápidas com 100/100 de performance, otimizadas para conversão e rastreamento instantâneo por IAs.",
          icon: "cpu"
        },
        {
          title: "AEO & IA Preditiva",
          desc: "Otimização para mecanismos de resposta (Gemini, Perplexity). Garantimos que sua marca seja a resposta recomendada pelos assistentes.",
          icon: "bot"
        },
        {
          title: "Google Ads Semanal",
          desc: "Gestão estratégica de tráfego pago com iterações semanais de termos e copies, focada em lead qualificado e escala de ROI.",
          icon: "lineChart"
        },
        {
          title: "Conteúdo de Autoridade",
          desc: "Artigos ricos e copywriting de elite produzidos por especialistas, focados em educar o mercado e dominar o SEO orgânico.",
          icon: "workflow"
        },
        {
          title: "Integração Google Cloud",
          desc: "Utilizamos o poder da Vertex AI e BigQuery para criar automações seguras e inteligentes conectadas aos seus dados de negócio.",
          icon: "search"
        },
        {
          title: "Assinatura Unificada",
          desc: "Um único parceiro, um único fee mensal, sem taxas de setup. Desenvolvimento, tráfego e conteúdo em harmonia total.",
          icon: "globe"
        }
      ]
    },
    architecture: {
      heading: "Como trabalhamos com sua empresa",
      sub: "Não vendemos pacotes prontos. A tecnologia é definida pelos seus desafios de negócio.",
      steps: [
        { title: "Diagnóstico", desc: "Mapeamos profundamente seus objetivos comerciais, gargalos operacionais e ferramentas atuais." },
        { title: "Planejamento Estratégico", desc: "Desenhamos a solução exata para você, seja um site de conversão, um aplicativo próprio ou integrações." },
        { title: "Desenvolvimento Especializado", desc: "Nossa equipe constrói a tecnologia sob medida, com alto padrão de qualidade e usabilidade." },
        { title: "Implantação e Automação", desc: "Colocamos o sistema no ar, integramos ferramentas (IA, CRMs, Analytics) e validamos os fluxos." },
        { title: "Growth Contínuo", desc: "Acompanhamos os resultados, melhoramos sua presença no Google e otimizamos a geração de oportunidades." }
      ]
    },
    segments: {
      heading: "Tecnologia voltada para resultados reais.",
      items: [
        {
          id: "vendas",
          title: "Mais oportunidades de negócio",
          benefits: [
            "Websites focados em conversão e experiência premium.",
            "Posicionamento inteligente no Google (SEO e AEO).",
            "Captação contínua de visitantes qualificados."
          ]
        },
        {
          id: "produtividade",
          title: "Produtividade e Operação",
          benefits: [
            "Automação de tarefas manuais e repetitivas.",
            "Integração perfeita entre diferentes sistemas da sua empresa.",
            "Sistemas internos desenvolvidos estritamente sob medida."
          ]
        },
        {
          id: "inteligencia",
          title: "Inteligência Artificial Aplicada",
          benefits: [
            "Agentes inteligentes para atendimento e qualificação 24/7.",
            "Assistentes de vendas conectados aos seus dados privados.",
            "Análise rápida de informações e relatórios complexos."
          ]
        },
        {
          id: "gestao",
          title: "Gestão e Visibilidade",
          benefits: [
            "CRMs construídos para o seu funil de vendas específico.",
            "Dashboards executivos em tempo real.",
            "Portais exclusivos para seus clientes e colaboradores."
          ]
        }
      ]
    },
    metrics: {
      heading: "O impacto de um ecossistema integrado",
      items: [
        { value: "Leads", label: "Mais oportunidades através de sites inteligentes." },
        { value: "Horas", label: "Economizadas por semana com automações." },
        { value: "Dados", label: "Centralizados em sistemas desenhados sob medida." },
        { value: "Vendas", label: "Alavancadas por agentes de IA e estratégias de Growth." }
      ]
    },
    techStack: {
      heading: "A tecnologia por trás dos seus resultados",
      modules: [
        "Websites de Alta Performance", "Desenvolvimento de Aplicativos", "Google AI Studio", "Integrações de Sistemas", 
        "Automação Comercial", "SEO Estratégico", "Answer Engine Optimization (AEO)", "Sistemas e Portais", "CRMs Sob Medida"
      ]
    },
    insights: {
      heading: "Conhecimento Aplicado a Negócios",
      items: [
        { category: "Inteligência Artificial", title: "Como assistentes baseados no Google AI Studio reduzem a sobrecarga operacional", time: "4 min", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600" },
        { category: "Desenvolvimento", title: "O custo invisível de usar CRMs engessados na sua equipe de vendas", time: "6 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
        { category: "Growth Marketing", title: "A diferença entre um site vitrine e uma máquina de conversão contínua", time: "5 min", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" }
      ]
    },
    faq: {
      heading: "Perguntas Frequentes",
      items: [
        { q: "A Vezzitech é uma agência de marketing ou uma software house?", a: "Nenhum dos dois isoladamente. Somos uma parceira estratégica de tecnologia focada no seu crescimento. Além de cuidar da sua geração de leads, desenvolvemos a tecnologia exata (sistemas, IA, automações) que o seu negócio precisa." },
        { q: "O que significa dizer que vocês não vendem 'pacotes prontos'?", a: "Acreditamos que cada empresa tem um gargalo único. Algumas precisam de um novo site comercial; outras de automação com Inteligência Artificial ou um aplicativo próprio. Por isso, diagnosticamos o cenário antes de definir o escopo." },
        { q: "Vocês desenvolvem aplicativos e plataformas exclusivas?", a: "Sim. Se a solução ideal para o seu crescimento for um app interno, um CRM sob medida ou um portal web avançado, nossos especialistas conduzirão o desenvolvimento com alto padrão de qualidade e engenharia." },
        { q: "Como a Vezzitech aplica Inteligência Artificial nas empresas?", a: "Focamos em uso prático, não em promessas vazias. Com ferramentas como o Google AI Studio, criamos agentes conversacionais para atendimento 24/7, extraímos dados de documentos complexos e automatizamos interações com clientes." },
        { q: "Já tenho um site funcionando. Como vocês podem ajudar?", a: "Podemos atuar no desenvolvimento de um sistema satélite, integrar o site atual com novos CRMs, potencializar sua visibilidade no Google (SEO) ou implementar fluxos de automação de vendas sem precisar refazer o que já existe." }
      ]
    },
    ctaSection: {
      heading: "Vamos desenhar a tecnologia ideal para o seu crescimento.",
      sub: "Não importa se você precisa atrair mais clientes, criar um sistema sob medida ou aplicar inteligência artificial na operação. Fale com nossos especialistas.",
      cta: "Solicitar um Diagnóstico Estratégico"
    },
    footerSection: {
      desc: "Vezzitech — Desenvolvimento, Inteligência Artificial e Growth em um só parceiro.",
      navTitle: "Plataforma",
      locationTitle: "Base de Operações",
      location: "São Paulo, SP - Brasil",
      rights: "© {year} Vezzitech Systems. Todos os direitos reservados.",
      platform: "Plataforma",
      solutions: "Soluções",
      process: "Processo",
      tech: "Tecnologia",
      company: "Empresa",
      about: "Sobre nós",
      careers: "Carreiras",
      contact: "Contato",
      privacy: "Privacidade",
      terms: "Termos de Uso"
    }
  },
  en: {
    nav: {
      platform: "Partner",
      solutions: "Solutions",
      process: "Process",
      tech: "Technology",
      faq: "FAQ",
      cta: "Request Diagnosis",
      login: "Login"
    },
    hero: {
      badge: "Google Cloud Partner - Elite AI Agency",
      headline: "Premium Development, AI, and Paid Traffic in one Unified Subscription.",
      subheadline: "We accelerate your revenue by uniting the Google ecosystem with custom AI solutions. Your premium website, authority content, and Google Ads under continuous expert management.",
      ctaPrimary: "Request Elite Diagnosis",
      ctaSecondary: "Explore AEO Methodology",
      indicators: [
        "Agentic PageSpeed",
        "Predictive AEO",
        "Vertex AI & Gemini",
        "High Authority SEO",
        "Weekly Google Ads"
      ]
    },
    valueProp: {
      heading1: "The Only Tech Subscription.",
      heading2: "You'll Ever Need.",
      paragraphs: [
        "Forget the stress of managing multiple slow vendors. Vezzitech unifies premium web development, AI-driven content production, and paid traffic management.",
        "As a Google Cloud Partner, we deliver extreme performance (Agentic PageSpeed) and strategic positioning in answer engines (AEO) so your brand dominates the market."
      ],
      cards: [
        {
          title: "Native Development",
          desc: "Ultra-fast landing pages and platforms with 100/100 performance, optimized for conversion and instant AI crawling.",
          icon: "cpu"
        },
        {
          title: "AEO & Predictive AI",
          desc: "Optimization for answer engines (Gemini, Perplexity). We ensure your brand is the recommended response by AI assistants.",
          icon: "bot"
        },
        {
          title: "Weekly Google Ads",
          desc: "Strategic paid traffic management with weekly iterations of terms and copy, focused on qualified leads and ROI scaling.",
          icon: "lineChart"
        },
        {
          title: "Authority Content",
          desc: "Rich articles and elite copywriting produced by experts, focused on market education and organic SEO dominance.",
          icon: "workflow"
        },
        {
          title: "Google Cloud Integration",
          desc: "We harness the power of Vertex AI and BigQuery to create secure, intelligent automations connected to your business data.",
          icon: "search"
        },
        {
          title: "Unified Subscription",
          desc: "One partner, one monthly fee, no setup costs. Development, traffic, and content in total harmony.",
          icon: "globe"
        }
      ]
    },
    architecture: {
      heading: "How we work with your company",
      sub: "We don't sell off-the-shelf packages. Technology is defined by your business challenges.",
      steps: [
        { title: "Diagnosis", desc: "We deeply map your commercial goals, operational bottlenecks, and current tools." },
        { title: "Strategic Planning", desc: "We design the exact solution for you, whether it's a conversion site, a custom app, or integrations." },
        { title: "Specialized Development", desc: "Our team builds tailored technology with high standards of quality and usability." },
        { title: "Deployment and Automation", desc: "We launch the system, integrate tools (AI, CRMs, Analytics), and validate flows." },
        { title: "Continuous Growth", desc: "We track results, improve your Google presence, and optimize opportunity generation." }
      ]
    },
    segments: {
      heading: "Technology focused on real outcomes.",
      items: [
        {
          id: "vendas",
          title: "More Business Opportunities",
          benefits: [
            "Websites focused on conversion and premium experience.",
            "Intelligent positioning on Google (SEO and AEO).",
            "Continuous capturing of qualified visitors."
          ]
        },
        {
          id: "produtividade",
          title: "Productivity and Operations",
          benefits: [
            "Automation of manual and repetitive tasks.",
            "Seamless integration between different company systems.",
            "Internal systems developed strictly on demand."
          ]
        },
        {
          id: "inteligencia",
          title: "Applied Artificial Intelligence",
          benefits: [
            "Intelligent agents for 24/7 service and qualification.",
            "Sales assistants connected to your private data.",
            "Fast analysis of complex information and reports."
          ]
        },
        {
          id: "gestao",
          title: "Management and Visibility",
          benefits: [
            "CRMs built for your specific sales funnel.",
            "Real-time executive dashboards.",
            "Exclusive portals for your clients and employees."
          ]
        }
      ]
    },
    metrics: {
      heading: "The impact of an integrated ecosystem",
      items: [
        { value: "Leads", label: "More opportunities generated through intelligent websites." },
        { value: "Hours", label: "Saved weekly through smart process automations." },
        { value: "Data", label: "Centralized in custom-designed systems and dashboards." },
        { value: "Sales", label: "Leveraged by AI agents and ongoing Growth strategies." }
      ]
    },
    techStack: {
      heading: "The technology behind your results",
      modules: [
        "High-Performance Websites", "Application Development", "Google AI Studio", "System Integrations", 
        "Commercial Automation", "Strategic SEO", "Answer Engine Optimization (AEO)", "Custom Systems and Portals", "Bespoke CRMs"
      ]
    },
    insights: {
      heading: "Knowledge Applied to Business",
      items: [
        { category: "Artificial Intelligence", title: "How Google AI Studio-based assistants reduce operational overhead", time: "4 min", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600" },
        { category: "Development", title: "The invisible cost of using rigid CRMs in your sales team", time: "6 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
        { category: "Growth Marketing", title: "The difference between a showcase site and a continuous conversion machine", time: "5 min", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Is Vezzitech a marketing agency or a software house?", a: "Neither in isolation. We are a strategic technology partner focused on your growth. In addition to handling your lead generation, we develop the exact technology (systems, AI, automations) your business needs." },
        { q: "What does it mean that you don't sell 'ready-made packages'?", a: "We believe each company has a unique bottleneck. Some need a new commercial site; others need AI automation or their own app. Therefore, we diagnose the scenario before defining the scope." },
        { q: "Do you develop exclusive applications and platforms?", a: "Yes. If the ideal solution for your growth is an internal app, a custom CRM, or an advanced web portal, our specialists will lead the development with a high standard of engineering." },
        { q: "How does Vezzitech apply Artificial Intelligence in companies?", a: "We focus on practical use, not empty promises. Using tools like Google AI Studio, we create conversational agents for 24/7 service, extract data from complex documents, and automate client interactions." },
        { q: "I already have a working website. How can you help?", a: "We can work on developing a satellite system, integrating your current site with new CRMs, boosting your visibility on Google (SEO), or implementing sales automation flows without having to redo what already exists." }
      ]
    },
    ctaSection: {
      heading: "Let's design the ideal technology for your growth.",
      sub: "Whether you need to attract more clients, build a custom system, or apply AI to operations. Talk to our specialists.",
      cta: "Request a Strategic Diagnosis"
    },
    footerSection: {
      desc: "Vezzitech — Development, Artificial Intelligence, and Growth in one single partner.",
      navTitle: "Platform",
      locationTitle: "Operations Base",
      location: "Sao Paulo, SP - Brazil",
      rights: "© {year} Vezzitech Systems. All rights reserved.",
      platform: "Platform",
      solutions: "Solutions",
      process: "Process",
      tech: "Technology",
      company: "Company",
      about: "About us",
      careers: "Careers",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms of Use"
    }
  }
};
