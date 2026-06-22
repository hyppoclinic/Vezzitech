export interface TranslationSchema {
  nav: {
    services: string;
    ecosystem: string;
    method: string;
    blog: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    graphTitle: string;
  };
  nodes: {
    orquestrador: { title: string; metric: string; desc: string };
    gemini: { title: string; metric: string; desc: string };
    vertex: { title: string; metric: string; desc: string };
    cloud: { title: string; metric: string; desc: string };
  };
  ticker: string[];
  valueProp: {
    tag: string;
    heading: string;
    items: Array<{ num: string; title: string; desc: string }>;
  };
  servicesSection: {
    tag: string;
    heading: string;
    items: Array<{ num: string; title: string; desc: string }>;
  };
  verticalsSection: {
    tag: string;
    heading: string;
    sub: string;
    items: Array<{ id: string; title: string; desc: string }>;
  };
  processSection: {
    tag: string;
    heading: string;
    items: Array<{ num: string; title: string; desc: string }>;
  };
  metricsSection: {
    tag: string;
    heading: string;
    sub: string;
    badge: string;
    items: Array<{ value: string; label: string; desc: string }>;
  };
  ecosystemSection: {
    heading: string;
    items: Array<{ title: string; desc: string }>;
  };
  blogSection: {
    tag: string;
    heading: string;
    sub: string;
    readMore: string;
    newsTitle: string;
    newsSub: string;
    newsPlaceholder: string;
    newsBtn: string;
    newsSuccess: string;
    editorial: string;
    editorialSub: string;
    dialogCta: string;
  };
  faqSection: {
    heading: string;
    items: Array<{ q: string; a: string }>;
  };
  schedulingSection: {
    tag: string;
    heading: string;
    sub: string;
    p1: string;
    p1Sub: string;
    p2: string;
    p2Sub: string;
    successTitle: string;
    successSub: string;
    successDesc: string;
    meetBtn: string;
    anotherBtn: string;
    form: {
      name: string;
      email: string;
      company: string;
      purpose: string;
      purposeOptions: Array<{ value: string; label: string }>;
      date: string;
      time: string;
      submit: string;
    };
  };
  footerSection: {
    desc: string;
    navTitle: string;
    specTitle: string;
    locationTitle: string;
    location: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  chatbot: {
    welcome: string;
    typing: string;
    quickReplies: string[];
    replies: {
      marketing: string;
      pricing: string;
      tech: string;
      yes: string;
      default: string;
    };
  };
  conversionBanner: {
    heading: string;
    sub: string;
    cta: string;
  };
}

export type Language = 'pt' | 'en';

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      services: "Serviços",
      ecosystem: "Ecossistema",
      method: "Metodologia & ROI",
      blog: "Blog",
      cta: "Falar c/ Especialista"
    },
    hero: {
      badge: "TECNOLOGIA & MARKETING DIGITAL DE ELITE",
      headline: "Aceleramos sua empresa com Inteligência Artificial.",
      subheadline: "Unimos desenvolvimento de sites de alta conversão, otimização de busca avançada (AEO/SEO), criação de materiais de marketing e agentes de IA para impulsionar suas vendas e modernizar seu departamento de TI.",
      ctaPrimary: "Começar Agora",
      ctaSecondary: "Ver Ecossistema",
      graphTitle: "Interactive AI Graph"
    },
    nodes: {
      orquestrador: {
        title: "Desenvolvimento de Sites",
        metric: "Performance: 100/100",
        desc: "Sua presença digital construída com as linguagens e frameworks mais rápidos e modernos do mercado."
      },
      gemini: {
        title: "AEO & SEO Preditivo",
        metric: "Motores de Resposta",
        desc: "Otimização de ponta para motores de busca e para mecanismos de resposta em Inteligência Artificial, como ChatGPT e Perplexity."
      },
      vertex: {
        title: "Agentes de IA",
        metric: "Atendimento 24/7",
        desc: "Engenharia de prompts e fluxos inteligentes para atrair, converter e qualificar visitantes automaticamente."
      },
      cloud: {
        title: "Materiais de Marketing",
        metric: "Escala Criativa",
        desc: "Geração de criativos de anúncios, copys persuasivas e materiais visuais guiados por inteligência de dados."
      }
    },
    ticker: [
      "DESENVOLVIMENTO DE SITES",
      "AEO & SEO PREDITIVO",
      "AGENTES DE IA AUTÔNOMOS",
      "MATERIAIS DE MARKETING EM ESCALA",
      "SOLUÇÕES TI SOB MEDIDA",
      "PERFORMANCE MÁXIMA WEB",
      "GROWTH MARKETING",
      "CONVERSÃO EXTREMA"
    ],
    valueProp: {
      tag: "DIFERENCIAÇÃO",
      heading: "Sua marca dominante nos canais de busca e tecnologia.",
      items: [
        {
          num: "01",
          title: "Engenharia & TI Certificada",
          desc: "Desenvolvemos sites, portais e sistemas de altíssima velocidade. Código limpo, SEO técnico nativo, segurança avançada e hospedagem estável inclusas no core."
        },
        {
          num: "02",
          title: "Liderança de Busca (SEO/AEO)",
          desc: "Otimizamos seu negócio não só para o Google tradicional, mas para mecanismos de resposta com IA (ChatGPT, Perplexity), dominando o tráfego de busca moderno."
        },
        {
          num: "03",
          title: "Materiais & Design de Impacto",
          desc: "Criamos materiais promocionais, posts e criativos em escala de altíssima qualidade que trazem apelo visual impecável e conversão agressiva em campanhas."
        },
        {
          num: "04",
          title: "Agentes de IA e Automação",
          desc: "Integramos chatbots inteligentes acoplados a seus sistemas para pré-vendas automatizada, suporte ao cliente e triagem eficiente de leads."
        }
      ]
    },
    servicesSection: {
      tag: "NOSSOS PILARES",
      heading: "Soluções construídas para liderar.",
      items: [
        {
          num: "01",
          title: "Desenvolvimento de Sites",
          desc: "Websites modernos, ultra rápidos e otimizados para máxima conversão de vendas nos formatos desktop e mobile."
        },
        {
          num: "02",
          title: "Estratégia SEO & AEO",
          desc: "Posicionamento orgânico de elite no Google e otimização para ser a resposta preferida de assistentes de IA (ChatGPT, Gemini)."
        },
        {
          num: "03",
          title: "Materiais de Marketing",
          desc: "Apoio completo na criação de materiais digitais, criativos de anúncios de alta performance e design para marcas de destaque."
        },
        {
          num: "04",
          title: "Agentes de IA & Soluções TI",
          desc: "Desenvolvimento de bots autônomos personalizados e soluções integradas de tecnologia inteligente para sua empresa."
        }
      ]
    },
    verticalsSection: {
      tag: "PARA O SEU NEGÓCIO",
      heading: "Tecnologia e Marketing para o seu setor.",
      sub: "Aplicamos soluções inteligentes de marketing digital e tecnologia da informação sob medida para posicionar e expandir seu negócio no mercado.",
      items: [
        {
          id: "varejo",
          title: "Varejo & E-commerce",
          desc: "Lojas virtuais ultra rápidas, SEO avançado para produtos e campanhas de marketing guiadas por IA para explodir suas vendas e atrair clientes de forma escalável."
        },
        {
          id: "saude",
          title: "Saúde & Clínicas",
          desc: "Sites médicos de altíssima performance, SEO local estratégico e atração contínua de pacientes particulares, impulsionados por automações de atendimento de IA."
        },
        {
          id: "industria",
          title: "B2B & Indústrias",
          desc: "Desenvolvimento de portais institucionais robustos, estratégias de tráfego orgânico focado em tomadores de decisão e materiais promocionais de alto impacto técnico."
        },
        {
          id: "financas",
          title: "Serviços & Fintechs",
          desc: "Materiais de comunicação institucional altamente profissionais, SEO/AEO corporativo de segurança e portais web blindados com performance ideal."
        },
        {
          id: "educacao",
          title: "Educação & Cursos",
          desc: "Landing pages de vendas de alta conversão, copywriting profissional, criativos dinâmicos de marketing e assistentes de IA dedicados para suporte a alunos."
        },
        {
          id: "agro",
          title: "Agronegócio",
          desc: "Identidade visual forte, posicionamento global de marca para exportadoras e plataformas digitais premium para negociações corporativas de alto nível."
        }
      ]
    },
    processSection: {
      tag: "METODOLOGIA",
      heading: "Como estruturamos sua jornada.",
      items: [
        {
          num: "01",
          title: "Mapeamento & Planejamento",
          desc: "Analisamos sua presença digital, diagnosticamos problemas no site antigo e traçamos o plano de SEO/AEO e funil de vendas."
        },
        {
          num: "02",
          title: "Esboço & Copywriting",
          desc: "Criamos a estrutura visual premium, escrevemos cópias persuasivas e planejamos a escala de materiais de marketing."
        },
        {
          num: "03",
          title: "Desenvolvimento & Agentes",
          desc: "Desenvolvemos o código ultra veloz, implementamos chatbots de IA e programamos o fluxo de captação de leads de TI."
        },
        {
          num: "04",
          title: "Tráfego & Otimização",
          desc: "Lançamos as campanhas, indexamos nos motores de busca (e IA) e iniciamos as otimizações contínuas de conversão."
        }
      ]
    },
    metricsSection: {
      tag: "PROVA DE PERFORMANCE",
      heading: "Métricas reais de inovação e vendas.",
      sub: "Sem teorias vazias. Entregamos códigos rápidos, campanhas bem estruturadas e inteligências que aumentam de forma direta o tráfego de busca e o faturamento.",
      badge: "Verified Tech Builders",
      items: [
        {
          value: "+120%",
          label: "Tráfego Orgânico",
          desc: "Aumento médio em visitas qualificadas através de técnicas modernas de SEO e AEO de marca."
        },
        {
          value: "3.5x",
          label: "Taxa de Conversão",
          desc: "Melhoria na conversão de tráfego frio para leads engajados através de páginas de alta velocidade e copy assertiva."
        },
        {
          value: "< 1s",
          label: "Tempo de Resposta",
          desc: "Hospedagem de alto nível e SEO técnico limpo focado em retenção de audiência e preferência de busca."
        }
      ]
    },
    ecosystemSection: {
      heading: "Tecnologia & Marketing",
      items: [
        { title: "Desenvolvimento Web", desc: "Sites institucionais, e-commerces e portais que carregam de forma instantânea em qualquer dispositivo." },
        { title: "SEO & AEO", desc: "Sua marca indexada nos resultados tradicionais de busca e nos novos canais de inteligência artificial generativa." },
        { title: "Marketing de Atração", desc: "Criação de materiais criativos, posts de engajamento e setup profissional de tráfego pago de alto ROI." },
        { title: "Agentes Inteligentes", desc: "Automação de suporte ao consumidor, qualificação e captação ativa de novos leads direto em sua TI." }
      ]
    },
    blogSection: {
      tag: "CONHECIMENTO PRÁTICO",
      heading: "Insights sobre Marketing e TI",
      sub: "Acompanhe estratégias práticas e análises profundas sobre como escalar tráfego, otimizar conversão e estruturar agentes de IA.",
      readMore: "Ler artigo",
      newsTitle: "Domine o tráfego moderno",
      newsSub: "Assine nossa newsletter semanal e receba guias práticos sobre SEO/AEO, materiais de marketing e novidades de tecnologia inovadora.",
      newsPlaceholder: "Seu e-mail profissional",
      newsBtn: "Inscrever-se",
      newsSuccess: "✓ Obrigado por se inscrever!",
      editorial: "Time Técnico Vezzitech",
      editorialSub: "Estratégia de Marketing, Tráfego e Engenharia Web",
      dialogCta: "Falar com Especialista"
    },
    faqSection: {
      heading: "Perguntas Frequentes",
      items: [
        {
          q: "Vocês desenvolvem sites proprietários ou usam templates prontos?",
          a: "Desenvolvemos código nativo, limpo e super otimizado focado em desempenho estrito, SEO amigável e conversão impecável. O projeto e código-fonte são inteiramente seus."
        },
        {
          q: "O que é AEO (Answer Engine Optimization)?",
          a: "É a otimização focada em mecanismos de resposta por Inteligência Artificial (como Gemini, ChatGPT, Perplexity). Garantimos que sua marca seja citada quando usuários realizarem perguntas a essas IAs."
        },
        {
          q: "Como os Agentes de IA ajudam em vendas?",
          a: "Eles atuam na linha de frente 24h por dia, respondendo dúvidas recorrentes, captando informações dos leads, agendando reuniões virtuais e enviando-os qualificados para seu time de vendas."
        },
        {
          q: "Qual a importância das campanhas e materiais de marketing?",
          a: "A beleza visual aliada a uma redação focada em conversão reduz dramaticamente o custo por clique em campanhas de tráfego pago, gerando mais contatos e visibilidade com o mesmo orçamento."
        }
      ]
    },
    schedulingSection: {
      tag: "CONSULTORIA DE ELITE",
      heading: "Agende uma sessão gratuita para impulsionar seu Marketing e TI.",
      sub: "Crie o plano de crescimento digital da sua marca. Nesta reunião de 30 minutos via Google Meet, vamos analisar a velocidade de carregamento do seu site, mapear potenciais de SEO/AEO e estruturar automações virtuais de IA.",
      p1: "Presença & Conversão",
      p1Sub: "Análise técnica do seu funil comercial e usabilidade da sua página web atual.",
      p2: "Planejamento de Tráfego & IA",
      p2Sub: "Estudo de viabilidade de atração orgânica combinada com robôs inteligentes de atendimento.",
      successTitle: "Sessão Agendada com Sucesso!",
      successSub: "Acabamos de te enviar os dados oficiais do agendamento.",
      successDesc: "Seu link oficial da reunião no Google Meet já está pronto:",
      meetBtn: "Entrar na reunião estratégica",
      anotherBtn: "Visualizar outros horários",
      form: {
        name: "Nome Inteiro",
        email: "E-mail Profissional",
        company: "Qual a sua empresa?",
        purpose: "Principal Necessidade",
        purposeOptions: [
          { value: "Fazer Novo Site", label: "Desenvolver Site de Alta Conversão" },
          { value: "SEO & AEO", label: "Otimização SEO & AEO de Marca" },
          { value: "Materiais de Marketing", label: "Geração de Conteúdos & Criativos" },
          { value: "Agente IA / TI", label: "Implementar Agentes Inteligentes / TI" }
        ],
        date: "Escolha o Dia",
        time: "Horários Disponíveis",
        submit: "Garantir Agendamento no Google Meet"
      }
    },
    footerSection: {
      desc: "Agência especializada em desenvolvimento de sites premium, estratégias de SEO/AEO preditivas, design de materiais de marketing e integração ágil de agentes de inteligência artificial. Transforme sua presença online em escala de resultados.",
      navTitle: "Navegação",
      specTitle: "Especialidades",
      locationTitle: "Escritório Central",
      location: "Av. Paulista, 1000\nSão Paulo - SP, Brasil\nCEP: 01310-100",
      rights: "VEZZITECH EXPERTS - MARKETING & TI. TODOS OS DIREITOS RESERVADOS.",
      privacy: "Políticas de Privacidade",
      terms: "Termos Gerais de Uso"
    },
    chatbot: {
      welcome: "Olá! Sou o assistente virtual da Vezzitech. Como podemos ajudar a elevar o nível do seu Marketing e TI hoje?",
      typing: "Escrevendo...",
      quickReplies: [
        "Preciso de um site novo",
        "Como funciona SEO/AEO?",
        "Agentes de IA e Suporte"
      ],
      replies: {
        marketing: "Desenvolvemos sites ultra rápidos e estratégias de SEO/AEO que ranqueiam em primeiro lugar, além de otimizar para respostas do Perplexity/ChatGPT. Isso traz mais tráfego qualificado! Deseja agendar um papo estratégico gratuito com a gente?",
        pricing: "Nossos pacotes são sob medida e desenhados para gerar retorno e tráfego rápido de verdade. Agende uma conversa gratuita de 30 minutos via Google Meet para criarmos uma proposta!",
        tech: "Trabalhamos com código web de altíssima performance, robôs personalizados para conversão de leads e produção ágil de criativos. Todo controle do projeto é seu. Vamos estruturar essa visão juntos?",
        yes: "Excelente! Role a página até a nossa seção 'Consultoria de Elite' para selecionar o dia de sua conveniência.",
        default: "Perfeito. Nosso foco é converter visitantes em faturamento líquido real com o melhor do marketing e TI. Vamos agendar uma estratégia de 30 minutos gratuita no Meet?"
      }
    },
    conversionBanner: {
      heading: "Pronto para modernizar seu Marketing e sua TI?",
      sub: "Garanta uma vaga na nossa grade ao vivo no Google Meet e dê o primeiro passo para construir uma marca amplamente dominante.",
      cta: "Quero Consultoria Gratuita"
    }
  },
  en: {
    nav: {
      services: "Services",
      ecosystem: "Ecosystem",
      method: "Methodology & ROI",
      blog: "Blog",
      cta: "Talk to Expert"
    },
    hero: {
      badge: "ELITE TECH & DIGITAL MARKETING US",
      headline: "Accelerated growth powered by Artificial Intelligence.",
      subheadline: "We combine high-conversion website development, advanced search engine optimization (SEO/AEO), high-performing marketing materials, and autonomous AI agents to drive sales and modernize your IT.",
      ctaPrimary: "Start Now",
      ctaSecondary: "View Ecosystem",
      graphTitle: "Interactive AI Graph"
    },
    nodes: {
      orquestrador: {
        title: "Website Development",
        metric: "Performance: 100/100",
        desc: "Your digital presence built with the fastest and most modern web frameworks and languages on the market."
      },
      gemini: {
        title: "Predictive SEO & AEO",
        metric: "Answer Engines",
        desc: "Cutting-edge optimization to rank high on traditional search engines and be cited as answers by chatbots like ChatGPT."
      },
      vertex: {
        title: "AI Agents",
        metric: "Client Support 24/7",
        desc: "Advanced prompt engineering and intelligent workflows designed to capture, convert, and qualify leads automatically."
      },
      cloud: {
        title: "Marketing Materials",
        metric: "Creative Scale",
        desc: "Automated high-quality visual assets, highly persuasive ad copies, and promotional graphics optimized with data."
      }
    },
    ticker: [
      "WEBSITE DEVELOPMENT",
      "PREDICTIVE SEO & AEO",
      "AUTONOMOUS AI AGENTS",
      "SCALE MARKETING MATERIALS",
      "TAILORED IT SOLUTIONS",
      "MAXIMUM WEB PERFORMANCE",
      "GROWTH MARKETING",
      "EXTREME CONVERSION"
    ],
    valueProp: {
      tag: "DIFFERENTIATION",
      heading: "Elevate your brand with unmatched tech and organic visibility.",
      items: [
        {
          num: "01",
          title: "Certified Systems & IT Engineering",
          desc: "We build ultra-fast, robust, secure websites and portals. Clean code, native technical SEO, fast load times, and reliable cloud-hosting are standard."
        },
        {
          num: "02",
          title: "Search Engine & AI Dominance (SEO/AEO)",
          desc: "We optimize your business not only for traditional Google search, but for generative answer engines (ChatGPT, Gemini, Perplexity), capturing modern high-intent search traffic."
        },
        {
          num: "03",
          title: "Impact Visuals & Copywriting",
          desc: "High-end promo assets, social posts, and ad creatives compiled at scale with breathtaking visual aesthetics and high conversion copy."
        },
        {
          num: "04",
          title: "AI Chatbots & Conversions",
          desc: "We integrate custom virtual assistants on your channels for immediate leads qualification, customer onboarding, and seamless CRM synchronization."
        }
      ]
    },
    servicesSection: {
      tag: "OUR PILLARS",
      heading: "Solutions designed to dominate.",
      items: [
        {
          num: "01",
          title: "Website Development",
          desc: "Modern, ultra-fast websites and landing pages optimized for maximum conversions on both desktop and mobile devices."
        },
        {
          num: "02",
          title: "SEO & AEO Strategy",
          desc: "Organic authority ranking on Google and optimization to be the preferred choice in modern AI answers (ChatGPT, Gemini)."
        },
        {
          num: "03",
          title: "Marketing Materials",
          desc: "A to Z assistance in crafting engaging visual graphics, highly persuasive copy, and conversion-optimized ad creatives."
        },
        {
          num: "04",
          title: "AI Agents & Custom IT",
          desc: "Development of custom virtual agents, automated workflows, and smart software solutions for your business."
        }
      ]
    },
    verticalsSection: {
      tag: "FOR YOUR BUSINESS",
      heading: "Tailored Marketing & Tech for your sector.",
      sub: "We implement advanced marketing and smart IT services to streamline your operations, foster engagement, and steadily scale your market presence.",
      items: [
        {
          id: "varejo",
          title: "Retail & E-commerce",
          desc: "Lightning-fast online storefronts, advanced product page SEO, and automated marketing campaigns to capture buyer interest and scale sales."
        },
        {
          id: "saude",
          title: "Healthcare & Clinics",
          desc: "State-of-the-art medical websites, strategic local SEO, and continuous patient booking aided by conversational AI schedulers."
        },
        {
          id: "industria",
          title: "B2B & Manufacturing",
          desc: "Robust corporate portals, targeted B2B organic traffic campaigns, and high-impact digital brochures catering to key decision-makers."
        },
        {
          id: "financas",
          title: "Services & Fintechs",
          desc: "Elite corporate materials, hyper-secure web platforms, and specialized enterprise SEO mapping to build authority and trust."
        },
        {
          id: "educacao",
          title: "Education & Courses",
          desc: "High-converting sales pages, engaging marketing assets, persuasive copywriting, and AI tutors to answer pupil inquiries 24/7."
        },
        {
          id: "agro",
          title: "Agribusiness",
          desc: "Bespoke corporate identity, global outreach platforms for exporters, and digital strategies establishing industry leadership."
        }
      ]
    },
    processSection: {
      tag: "METHODOLOGY",
      heading: "How we accelerate your business.",
      items: [
        {
          num: "01",
          title: "Mapping & Search Audit",
          desc: "We analyze your digital presence, perform web performance audits, and map out your SEO/AEO search potential."
        },
        {
          num: "02",
          title: "Design & Copywriting",
          desc: "We draft premium visual layouts, craft high-conversion copy, and organize scalable marketing material pipelines."
        },
        {
          num: "03",
          title: "Development & AI setup",
          desc: "We code clean, super-fast pages, deploy self-contained conversational AI agents, and wire your leads captures."
        },
        {
          num: "04",
          title: "Traffic & Optimization",
          desc: "We deploy optimization cycles, ensure proper search indexing, and run continuous conversions and speed testing."
        }
      ]
    },
    metricsSection: {
      tag: "PROVEN VALUE",
      heading: "Real corporate innovation metrics.",
      sub: "We don't deliver generic advice. We deploy production-ready code, agents, and systems that impact your bottom line directly.",
      badge: "Verified Tech Builders",
      items: [
        {
          value: "+120%",
          label: "Organic Traffic",
          desc: "Average improvement in high-intent visitors through modern search and answer engine optimization (SEO/AEO)."
        },
        {
          value: "3.5x",
          label: "Conversion Rate",
          desc: "Acceleration in converting cold visitors into warm prospective clients through ultra-fast loaders and persuasive layouts."
        },
        {
          value: "< 1s",
          label: "Loading Speed",
          desc: "Elite hosting setups and perfect core web vitals designed to maximize customer retention and rank higher."
        }
      ]
    },
    ecosystemSection: {
      heading: "Tech & Marketing Ecosystem",
      items: [
        { title: "Web Performance", desc: "Corporate sites, custom landing pages, and online storefronts built for instant loading speed." },
        { title: "SEO & AEO", desc: "Placing your business as a top search result on Google and as a trusted citation in AI answers." },
        { title: "Growth Marketing", desc: "Aesthetic graphic design, copywriting, high-converting ads, and complete social assets production." },
        { title: "AI Automation", desc: "Virtual assistants and intelligent workflows synced to your operations and leads management." }
      ]
    },
    blogSection: {
      tag: "RELEVANT KNOWLEDGE",
      heading: "Insights on Marketing & IT",
      sub: "Read through technical breakdowns of how to optimize conversions, rank higher, and build engaging AI workflows.",
      readMore: "Read article",
      newsTitle: "Stay ahead of the competition",
      newsSub: "Subscribe to our weekly newsletter for premium tips on SEO, web speed, visual copywriting, and AI automation.",
      newsPlaceholder: "Your professional email",
      newsBtn: "Subscribe",
      newsSuccess: "✓ Thank you for subscribing!",
      editorial: "Vezzitech Editorial Team",
      editorialSub: "Estratégia de Marketing, Tráfego e Engenharia Web",
      dialogCta: "Talk to Specialist"
    },
    faqSection: {
      heading: "Frequently Asked Questions",
      items: [
        {
          q: "Do you develop custom websites or use ready templates?",
          a: "We write clean, lightweight custom code optimized strictly for performance, SEO/AEO compatibility, and modern UI/UX design. You have complete code ownership."
        },
        {
          q: "What is AEO (Answer Engine Optimization)?",
          a: "It is SEO tailored for AI query services (like ChatGPT, Gemini, Perplexity). We ensure search query bots find, process, and cite your brand as their answer."
        },
        {
          q: "How do conversational AI agents help in sales?",
          a: "They respond to customer inquiries 24/7 on your web pages, answer recurring questions instantly, collect lead information, and schedule Meet calls for your sales reps."
        },
        {
          q: "How important are visual marketing materials for campaigns?",
          a: "High-quality visual graphics paired with professional copywriting significantly increase user engagement, driving down ad click costs and optimizing budgets."
        }
      ]
    },
    schedulingSection: {
      tag: "ELITE ADVISORY",
      heading: "Book a free session to scale your Marketing & IT.",
      sub: "Plan your next steps. In this 30-minute Google Meet consultation, we'll review your page speed, map out organic search potentials, and outline customer-service AI integrations.",
      p1: "Performance & Copywriting",
      p1Sub: "An in-depth review of your web design speed, user journey, and conversion copy.",
      p2: "Search & Automation Roadmap",
      p2Sub: "Strategic exploration of AEO/SEO opportunities and virtual agent integrations.",
      successTitle: "Session Booked Successfully!",
      successSub: "We have sent calendar invites and session details to your inbox.",
      successDesc: "Your official Google Meet session URL is ready:",
      meetBtn: "Join Google Meet Strategy Call",
      anotherBtn: "Schedule another slot",
      form: {
        name: "Full Name",
        email: "Professional Email Address",
        company: "Company Name",
        purpose: "Primary Digital Need",
        purposeOptions: [
          { value: "Fazer Novo Site", label: "Develop High-Conversion Web" },
          { value: "SEO & AEO", label: "SEO & AEO Brand Mapping" },
          { value: "Materiais de Marketing", label: "Create Marketing Materials" },
          { value: "Agente IA / TI", label: "Deploy Smart AI Agents / IT" }
        ],
        date: "Select Date",
        time: "Available Time Slot",
        submit: "Secure Free Google Meet Booking"
      }
    },
    footerSection: {
      desc: "An agency specializing in crafting high-conversion web development, advanced SEO/AEO strategies, conversion-focused marketing materials, and autonomous AI-driven customer-experience agents. Scale your leads and modernize your IT.",
      navTitle: "Navigation",
      specTitle: "Expertise",
      locationTitle: "HQ Office",
      location: "Av. Paulista, 1000\nSao Paulo - SP, Brazil\nCEP: 01310-100",
      rights: "VEZZITECH EXPERTS - MARKETING & IT. ALL RIGHTS RESERVED.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    chatbot: {
      welcome: "Hi there! I am Vezzitech's virtual assistant. How can we elevate your Marketing & IT today?",
      typing: "Typing...",
      quickReplies: [
        "Need a new website",
        "How does SEO/AEO work?",
        "AI Agents & Support"
      ],
      replies: {
        marketing: "Fantastic! We design custom high-performance websites and write optimized scripts to rank on search engines and win answers in ChatGPT/Gemini. Would you like to consult with our team?",
        pricing: "Our strategy pricing is custom-tailored to deliver immediate ROI and visibility. Let's arrange a free 30-minute Meet call to discuss detailed models!",
        tech: "We develop ultra-fast modern code, deploy context-aware chatbot models, and provide full visual materials to back up your ads. Let's schedule a call to design your roadmap?",
        yes: "Perfect! Simply scroll down to the 'Elite Advisory' section on our page and select your preferred date.",
        default: "Great! Our mission is to scale user visits and conversions using smart tech and marketing. Let's schedule a free 30-minute strategy call on Meet?"
      }
    },
    conversionBanner: {
      heading: "Ready to revolutionize your Marketing & IT?",
      sub: "Check our available schedules on Google Meet and take the first step towards establishing absolute organic dominance.",
      cta: "Claim Free Consultation"
    }
  }
};
