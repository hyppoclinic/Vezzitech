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
  pricing: {
    heading: string;
    sub: string;
    plans: Array<{
      id: string;
      name: string;
      price: string;
      period: string;
      desc: string;
      features: string[];
      cta: string;
      badge?: string;
    }>;
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
      badge: "Parceiro Estratégico de Tecnologia",
      headline: "Desenvolvimento, Inteligência Artificial e Growth em um só lugar.",
      subheadline: "Desenvolvemos soluções digitais sob medida para ajudar sua empresa a vender mais, ganhar produtividade e crescer com segurança. Criamos aplicativos, sistemas, CRMs, automações e estratégias personalizadas.",
      ctaPrimary: "Solicitar Diagnóstico Estratégico",
      ctaSecondary: "Conhecer Soluções",
      indicators: [
        "Websites e Apps",
        "Sistemas Sob Medida",
        "Automação de Processos",
        "Inteligência Artificial",
        "Growth Marketing"
      ]
    },
    valueProp: {
      heading1: "Uma solução completa.",
      heading2: "Um único parceiro.",
      paragraphs: [
        "A maioria das empresas precisa contratar várias ferramentas e profissionais isolados: uma agência, desenvolvedores, empresas de software e consultores.",
        "Na Vezzitech, unimos essas especialidades. Nós entendemos o seu negócio, desenvolvemos a tecnologia necessária e ajudamos sua empresa a crescer com estratégia."
      ],
      cards: [
        {
          title: "Desenvolvimento Sob Medida",
          desc: "Criamos aplicativos, sistemas internos e plataformas completas, sempre desenhadas para a realidade e necessidade do seu negócio.",
          icon: "cpu"
        },
        {
          title: "Inteligência Artificial (IA)",
          desc: "Agentes autônomos utilizando Google AI Studio para automatizar atendimentos, organizar processos e gerar insights práticos.",
          icon: "bot"
        },
        {
          title: "Growth e SEO",
          desc: "Estratégias personalizadas para atrair leads qualificados, garantindo que sua marca seja encontrada por quem realmente quer comprar.",
          icon: "lineChart"
        },
        {
          title: "Automação e Integração",
          desc: "Conectamos suas ferramentas atuais e eliminamos tarefas repetitivas, aumentando a velocidade e produtividade da sua equipe.",
          icon: "workflow"
        },
        {
          title: "CRMs Personalizados",
          desc: "Não se adapte a sistemas engessados. Criamos painéis e fluxos comerciais que funcionam exatamente como a sua empresa exige.",
          icon: "search"
        },
        {
          title: "Ecossistema Inteligente",
          desc: "Acompanhamos a evolução da sua empresa com dashboards e dados precisos, oferecendo previsibilidade e clareza nas decisões.",
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
      cta: "Solicitar Diagnóstico Estratégico"
    },
    pricing: {
      heading: "Investimento Estratégico",
      sub: "Escolha o modelo ideal para a fase atual do seu negócio.",
      plans: [
        {
          id: "modernization",
          name: "Modernização",
          price: "599",
          period: "Setup Único",
          desc: "Ideal para migrar sites WordPress para Node.js com alta performance.",
          features: ["Infraestrutura Google", "SEO/AEO Otimizado", "Design Responsivo", "Até 10x mais rápido"],
          cta: "Começar Agora",
          badge: "OFERTA"
        }
      ]
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
      badge: "Strategic Technology Partner",
      headline: "Development, Artificial Intelligence, and Growth in one place.",
      subheadline: "We build bespoke digital solutions to help your company sell more, gain productivity, and grow safely. We create applications, systems, CRMs, automations, and personalized strategies.",
      ctaPrimary: "Request a Strategic Diagnosis",
      ctaSecondary: "Discover Solutions",
      indicators: [
        "Websites and Apps",
        "Custom Systems",
        "Process Automation",
        "Artificial Intelligence",
        "Growth Marketing"
      ]
    },
    valueProp: {
      heading1: "A complete solution.",
      heading2: "A single partner.",
      paragraphs: [
        "Most companies need to hire multiple isolated tools and professionals: an agency, developers, software houses, and consultants.",
        "At Vezzitech, we unite these specialties. We understand your business, develop the necessary technology, and help your company grow strategically."
      ],
      cards: [
        {
          title: "Custom Development",
          desc: "We build applications, internal systems, and complete platforms, always tailored to the reality and needs of your business.",
          icon: "cpu"
        },
        {
          title: "Artificial Intelligence (AI)",
          desc: "Autonomous agents built with Google AI Studio to automate customer service, organize workflows, and generate practical insights.",
          icon: "bot"
        },
        {
          title: "Growth and SEO",
          desc: "Personalized strategies to attract qualified leads, ensuring your brand is found by those who genuinely want to buy.",
          icon: "lineChart"
        },
        {
          title: "Automation and Integration",
          desc: "We connect your current tools and eliminate repetitive tasks, increasing your team's speed and productivity.",
          icon: "workflow"
        },
        {
          title: "Custom CRMs",
          desc: "Don't adapt to rigid systems. We create dashboards and commercial flows that work exactly as your company requires.",
          icon: "search"
        },
        {
          title: "Intelligent Ecosystem",
          desc: "We track your company's evolution with dashboards and precise data, providing predictability and clarity in decision-making.",
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
    pricing: {
      heading: "Strategic Investment",
      sub: "Choose the ideal model for your current business phase.",
      plans: [
        {
          id: "modernization",
          name: "Modernization",
          price: "599",
          period: "One-time Setup",
          desc: "Ideal for migrating WordPress sites to high-performance Node.js.",
          features: ["Google Infrastructure", "Optimized SEO/AEO", "Responsive Design", "Up to 10x faster"],
          cta: "Start Now",
          badge: "OFFER"
        }
      ]
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
