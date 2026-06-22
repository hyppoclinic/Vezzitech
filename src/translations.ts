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
      badge: "PARCEIRO ESTRATÉGICO GOOGLE CLOUD",
      headline: "Aceleramos sua empresa com Inteligência Artificial.",
      subheadline: "Unimos o ecossistema avançado do Google Cloud, Gemini e Vertex AI para automatizar marketing, operações e vendas com arquitetura robusta e escala corporativa.",
      ctaPrimary: "Começar Agora",
      ctaSecondary: "Ver Ecossistema",
      graphTitle: "Interactive AI Graph"
    },
    nodes: {
      orquestrador: {
        title: "Orquestrador Vezzi AI",
        metric: "Latência: < 120ms",
        desc: "Modelo central e inteligente que orquestra e roteia requisições dinamicamente visando o máximo custo-benefício operacional."
      },
      gemini: {
        title: "Gemini 1.5 Pro Engine",
        metric: "Janela de Contexto: 2M",
        desc: "Análise profunda de dados e documentos massivos com raciocínio lógico estruturado de última geração."
      },
      vertex: {
        title: "Agentes Vertex AI",
        metric: "Precisão de Raciocínio: 99.4%",
        desc: "Agentes autônomos treinados para executar fluxos corporativos complexos e automatizados em escala."
      },
      cloud: {
        title: "Infraestrutura Cloud",
        metric: "Disponibilidade: 99.99%",
        desc: "Bases de dados em tempo real seguras e orquestradas em governança privada sob termos comerciais enterprise."
      }
    },
    ticker: [
      "ESTRATÉGIA DE IA",
      "GROWTH MARKETING",
      "CONVERSÃO EXTREMA",
      "AUTORIDADE DIGITAL",
      "AGENTES DE IA AUTÔNOMOS",
      "MEMBRO GOOGLE CLOUD INNOVATORS",
      "GEMINI ENTERPRISE",
      "FLUXO INTEGRADO"
    ],
    valueProp: {
      tag: "// DIFERENCIAÇÃO",
      heading: "Lidere o mercado de vendas e operações com inteligência preditiva.",
      items: [
        {
          num: "01",
          title: "Expertise Google Certificada",
          desc: "Nossos engenheiros dominam a infraestrutura nativa Google Cloud, Vertex AI e APIs comerciais Gemini. Segurança enterprise e governança de dados inclusas no core de cada entrega."
        },
        {
          num: "02",
          title: "ROI Real & Comprometido",
          desc: "Aceleração real em automação de tarefas repetitivas e canais de atração de leads. Foco total em reduzir custos de suporte ao consumidor e escala automatizada de campanhas Ads."
        },
        {
          num: "03",
          title: "Entrega Ágil de Ponta a Pontas",
          desc: "Levamos a visão de sua consultoria do quadro-negro até a implementação de código estável em menos de um mês através do nosso inovador framework de microsserviços."
        },
        {
          num: "04",
          title: "IA Alinhada ao Negócio",
          desc: "Não fazemos experimentações vagas. Cada inteligência e agente autônomo criado possui métricas de sucesso pré-definidas com integração profunda aos CRMs e ERPs do seu ecossistema."
        }
      ]
    },
    servicesSection: {
      tag: "// NOSSOS PILARES",
      heading: "Soluções construídas para liderar.",
      items: [
        {
          num: "01",
          title: "IA para Marketing",
          desc: "Automação preditiva e hiper-personalização de campanhas com análise integrada via Google Marketing Platform."
        },
        {
          num: "02",
          title: "Automação com IA",
          desc: "Desenho de fluxos de processos corporativos otimizados por inteligência e orquestração de APIs robustas."
        },
        {
          num: "03",
          title: "Consultoria Google Cloud / Gemini",
          desc: "Mentoria e arquitetura de nuvem certificada para máxima performance, segurança e economia de custos de processamento."
        },
        {
          num: "04",
          title: "Dev Full Stack IA",
          desc: "Construção de aplicações corporativas modernas e escaláveis integrando IA de ponta a ponta com máxima segurança."
        }
      ]
    },
    verticalsSection: {
      tag: "// PARA O SEU NEGÓCIO",
      heading: "Tecnologia Google para o seu setor.",
      sub: "Usamos Nuvem e Inteligência Artificial do ecossistema Google para resolver problemas reais e fazer sua empresa crescer, não importa a sua área de atuação.",
      items: [
        {
          id: "varejo",
          title: "Varejo & E-commerce",
          desc: "Atendimento automático que não trava na Black Friday, recomendação de produtos que aumenta as vendas e previsão inteligente de estoque. Tudo no Google Cloud."
        },
        {
          id: "saude",
          title: "Saúde & Clínicas",
          desc: "Transforme o agendamento em algo simples com IA. Facilite a triagem de pacientes e a gestão da clínica com a máxima segurança que a nuvem do Google oferece."
        },
        {
          id: "industria",
          title: "Indústrias & Manufatura",
          desc: "Preveja quando uma máquina vai falhar antes que aconteça e conecte toda a sua produção na nuvem. Menos paradas, mais eficiência e controle na palma da mão."
        },
        {
          id: "financas",
          title: "Finanças & Serviços",
          desc: "Maior velocidade na aprovação de crédito e bloqueio de fraudes em tempo real. A inteligência do Google garante segurança máxima para o seu fluxo de caixa."
        },
        {
          id: "educacao",
          title: "Educação & Cursos",
          desc: "Assistentes de IA que tiram dúvidas dos alunos 24 horas por dia. Torne o aprendizado mais fácil e evite que os estudantes abandonem seu curso."
        },
        {
          id: "agro",
          title: "Agronegócio",
          desc: "Use a inteligência de dados e imagens de satélite para prever as melhores épocas de plantio e colheita. Aumente a rentabilidade da sua safra com análises precisas do Google."
        }
      ]
    },
    processSection: {
      tag: "// METODOLOGIA",
      heading: "Como aceleramos seu negócio.",
      items: [
        {
          num: "01",
          title: "Mapeamento & Diagnóstico",
          desc: "Mapeamos os pontos de fricção operacional e desenhamos o plano de ROI de IA em menos de 5 dias."
        },
        {
          num: "02",
          title: "Arquitetura no Google Cloud",
          desc: "Estruturamos as chaves de acesso seguro, vetores de RAG e instâncias dedicadas do Vertex AI."
        },
        {
          num: "03",
          title: "Implementação & Onboarding",
          desc: "Colocamos os primeiros deploys de IA no ecossistema e integramos com toda sua stack operacional."
        },
        {
          num: "04",
          title: "Ajuste Fino & Escala",
          desc: "Análise contínua das requisições para reduzir custos operacionais e expandir o modelo."
        }
      ]
    },
    metricsSection: {
      tag: "// PROVA OPERACIONAL",
      heading: "Métricas reais de inovação corporativa.",
      sub: "Não vendemos expectativa ou teorias. Colocamos códigos, sistemas e agentes de IA que impactam diretamente a rentabilidade diária do seu negócio.",
      badge: "Google Certified Builders",
      items: [
        {
          value: "+45%",
          label: "ROI em Campanhas",
          desc: "Média de retorno operacional em publicidade programática inteligente com otimizações em tempo real."
        },
        {
          value: "4.8x",
          label: "Eficiência Operacional",
          desc: "Aceleração na triagem de leads qualificados em pré-vendas com agentes de linguagem natural."
        },
        {
          value: "2M+",
          label: "Contexto Ativo",
          desc: "Processamento analítico de dados históricos complexos de maneira simultânea com Gemini."
        }
      ]
    },
    ecosystemSection: {
      heading: "Ecossistema Google",
      items: [
        { title: "Google Cloud", desc: "Infraestrutura escalável, robusta e orientada a dados com segurança global certificada." },
        { title: "Vertex AI", desc: "Desenvolva, treine e implante modelos e agentes de IA de última geração no ambiente ideal." },
        { title: "Gemini", desc: "IA Generativa multimodal de altíssima velocidade e janela de contexto massiva de 2 milhões de tokens." },
        { title: "Workspace AI", desc: "Aumente drasticamente a produtividade corporativa com a IA do Google integrada ao seu dia a dia." }
      ]
    },
    blogSection: {
      tag: "// CONHECIMENTO PRÁTICO",
      heading: "Insights & Tecnologia",
      sub: "Acompanhe análises profundas sobre como as maiores empresas globais estão estruturando inteligência com IA.",
      readMore: "Ler artigo",
      newsTitle: "Fique à frente no mercado de IA",
      newsSub: "Assine nossa newsletter semanal e receba blueprints operacionais diretos elaborados por nossos engenheiros de IA.",
      newsPlaceholder: "Seu e-mail corporativo",
      newsBtn: "Inscrever-se",
      newsSuccess: "✓ Obrigado por se inscrever!",
      editorial: "Time de Engenharia Vezzitech",
      editorialSub: "Tecnologia, Dados e Estratégia de Produtos",
      dialogCta: "Agendar com Especialista"
    },
    faqSection: {
      heading: "Perguntas Frequentes",
      items: [
        {
          q: "A Vezzitech desenvolve as soluções de forma proprietária?",
          a: "Sim, entregamos todo repositório de código e configuração operacional diretamente na organização Google Cloud do cliente (sua conta, suas chaves, seu controle absoluto)."
        },
        {
          q: "O Gemini 1.5 Pro é seguro para dados confidenciais?",
          a: "Totalmente. Através das APIs comerciais do Vertex AI, os termos de uso garantem que seus dados empresariais nunca sejam utilizados pela equipe Google para retreinar modelos públicos de IA."
        },
        {
          q: "Como estimar o ROI operacional das automações?",
          a: "Durante nosso diagnóstico desenhamos cases históricos mostrando reduções de até 80% do tempo de triagem de dados e aumentos de conversão de leads de marketing em até 45% com personalização instantânea."
        },
        {
          q: "Quanto tempo dura o processo de onboarding?",
          a: "Nosso método ágil possui entregas focadas em ciclos de 3 semanas. Você vê o modelo operacional rodando na nuvem logo nos primeiros checkpoints."
        }
      ]
    },
    schedulingSection: {
      tag: "CONSULTORIA DE ELITE",
      heading: "Reserve uma sessão com nossos Especialistas de IA.",
      sub: "Desenhe a visão de IA do seu negócio. Nesta reunião gratuita de 30 minutos via Google Meet, vamos mapear o cenário de automação de maior retorno financeiro para sua empresa.",
      p1: "Estruturação de Pipeline",
      p1Sub: "Definição dos fluxos corretos de orquestração de Large Language Models.",
      p2: "Planejamento Financeiro & Custos",
      p2Sub: "Análise de custos de consumo de tokens em APIs Google Cloud.",
      successTitle: "Reunião Agendada com Sucesso!",
      successSub: "Enviamos os detalhes do agendamento para seu e-mail.",
      successDesc: "Seu link oficial do Google Meet já está pronto para acesso:",
      meetBtn: "Entrar no Google Meet",
      anotherBtn: "Agendar outro horário",
      form: {
        name: "Nome Completo",
        email: "E-mail Corporativo",
        company: "Empresa & Cargo",
        purpose: "Alvo Principal da IA",
        purposeOptions: [
          { value: "Marketing Automation", label: "Automação de Marketing com IA" },
          { value: "Vertex AI Integration", label: "Integração de Agentes Vertex" },
          { value: "Operations & RAG", label: "RAG & IA para Operações Internas" },
          { value: "Google Cloud Consult", label: "Consultoria Estratégica em Cloud" }
        ],
        date: "Escolha o Dia",
        time: "Horário Disponível",
        submit: "Agendar Reunião Via Google Meet"
      }
    },
    footerSection: {
      desc: "Membro Google Cloud Innovators focado em engenharia full stack para implantação de inteligência artificial de alta conversão, combinando o ecossistema avançado do Google Cloud, Gemini e Vertex AI. Lidere as transformações modernas com excelência.",
      navTitle: "Navegação",
      specTitle: "Especialidades",
      locationTitle: "Sede Operacional",
      location: "Av. Paulista, 1000\nSão Paulo - SP, Brasil\nCEP: 01310-100",
      rights: "VEZZITECH AGÊNCIA DE IA. TODOS OS DIREITOS RESERVADOS.",
      privacy: "Política de Privacidade",
      terms: "Termos de Uso"
    },
    chatbot: {
      welcome: "Olá! Sou o assistente de IA da Vezzitech. Como podemos acelerar sua empresa hoje com as melhores soluções Google Cloud?",
      typing: "Digitando...",
      quickReplies: [
        "Quero integrar o Gemini Pro",
        "IA para Marketing",
        "Quanto custa um projeto?"
      ],
      replies: {
        marketing: "Excelente escolha. Criamos motores preditivos integrando Gemini 1.5 Pro e inteligência preditiva no Google Ads. Isso costuma gerar até +45% de ROI em conversões digitais! Deseja agendar um papo gratuito com nossos engenheiros?",
        pricing: "Nossos orçamentos são sob medida e desenhados para ter conversão real e ROI rápido. Fale conosco em nossa reunião estratégica de 30 minutos via Google Meet, ela é inteiramente gratuita!",
        tech: "Trabalhamos de forma nativa e certificada no GCP, Vertex AI e Gemini API. Todo ambiente é configurado diretamente no ambiente Google Cloud do cliente garantindo sua total propriedade. Vamos agendar para desenharmos um plano?",
        yes: "Perfeito! Role a página até a nossa seção 'Consultoria de Elite' para selecionar o melhor dia e horário disponível de sua preferência.",
        default: "Perfeito. Nosso foco é converter expectativas em resultados tangíveis via inovação robusta no GCP. Deseja agendar sua consultoria gratuita de 30 minutos agora mesmo?"
      }
    },
    conversionBanner: {
      heading: "Pronto para colocar sua empresa em escala de IA?",
      sub: "Consulte nossa grade de disponibilidade ao vivo via Google Meet e inicie a jornada de transformação operacional inteligente hoje mesmo.",
      cta: "Agendar Consultoria Gratuita"
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
      badge: "STRATEGIC GOOGLE CLOUD PARTNER",
      headline: "Accelerate your enterprise with Artificial Intelligence.",
      subheadline: "We unite the advanced ecosystem of Google Cloud, Gemini, and Vertex AI to automate marketing, operations, and sales with robust architecture and enterprise scale.",
      ctaPrimary: "Start Now",
      ctaSecondary: "View Ecosystem",
      graphTitle: "Interactive AI Graph"
    },
    nodes: {
      orquestrador: {
        title: "Vezzi AI Orchestrator",
        metric: "Latency: < 120ms",
        desc: "Central smart model that orchestrates and routes requests dynamically to guarantee maximum operational cost-benefit."
      },
      gemini: {
        title: "Gemini 1.5 Pro Engine",
        metric: "Context Window: 2M",
        desc: "In-depth analysis of massive datasets and corporate documents with cutting-edge logical reasoning."
      },
      vertex: {
        title: "Vertex AI Agents",
        metric: "Reasoning Accuracy: 99.4%",
        desc: "Autonomous agents trained to execute complex and automated business workflows at scale."
      },
      cloud: {
        title: "Cloud Infrastructure",
        metric: "Availability: 99.99%",
        desc: "Secure, real-time databases orchestrated in private environments under enterprise business agreements."
      }
    },
    ticker: [
      "AI STRATEGY",
      "GROWTH MARKETING",
      "EXTREME CONVERSION",
      "DIGITAL AUTHORITY",
      "AUTONOMOUS AI AGENTS",
      "GOOGLE CLOUD INNOVATORS MEMBER",
      "GEMINI ENTERPRISE",
      "INTEGRATED WORKFLOW"
    ],
    valueProp: {
      tag: "// DIFFERENTIATION",
      heading: "Lead the marketing and operations market with predictive intelligence.",
      items: [
        {
          num: "01",
          title: "Certified Google Expertise",
          desc: "Our engineers master Google Cloud native stack, Vertex AI and Gemini APIs. Enterprise grade security and private data governance from day zero."
        },
        {
          num: "02",
          title: "Guaranteed & Committed ROI",
          desc: "Real business metrics optimization in marketing automation and lead capturing. Absolute focus on decreasing customer support costs and scale Ads campaigns."
        },
        {
          num: "03",
          title: "Agile End-to-End Delivery",
          desc: "We bring your strategy from initial sketch to completely deployed production-ready microservices in less than a month."
        },
        {
          num: "04",
          title: "Business-Aligned AI",
          desc: "We don't build generic prototypes. We connect autonomous agents that integrate directly to your existing CRM and ERP applications."
        }
      ]
    },
    servicesSection: {
      tag: "// OUR PILLARS",
      heading: "Solutions designed to dominate.",
      items: [
        {
          num: "01",
          title: "AI for Marketing",
          desc: "Predictive campaign automation and predictive hyper-personalization powered by Google Marketing Platform."
        },
        {
          num: "02",
          title: "Autonomous Automations",
          desc: "Complex system integrations and AI workflows designed to run without human overhead."
        },
        {
          num: "03",
          title: "Google Cloud / Gemini Advisory",
          desc: "High-performance certified architecture mapping to reduce compute tokens spend and optimize performance."
        },
        {
          num: "04",
          title: "Full Stack AI Dev",
          desc: "Tailored software applications from backend models orchestration to gorgeous web experiences."
        }
      ]
    },
    verticalsSection: {
      tag: "// FOR YOUR BUSINESS",
      heading: "Google Tech for your industry.",
      sub: "We use Cloud and Artificial Intelligence from the Google ecosystem to solve real problems and grow your business, no matter your field of work.",
      items: [
        {
          id: "varejo",
          title: "Retail & E-commerce",
          desc: "Automated support that doesn't crash on Black Friday, product recommendations that boost sales, and smart stock forecasting. All on Google Cloud."
        },
        {
          id: "saude",
          title: "Healthcare & Clinics",
          desc: "Turn scheduling into a breeze with AI. Facilitate patient triage and clinic management with the maximum security offered by Google's cloud."
        },
        {
          id: "industria",
          title: "Industry & Manufacturing",
          desc: "Predict machine failures before they happen and connect your entire production to the cloud. Fewer stoppages, more efficiency, and control in the palm of your hand."
        },
        {
          id: "financas",
          title: "Finance & Services",
          desc: "Faster credit approvals and real-time fraud blocking. Google's intelligence ensures maximum security for your cash flow and transactions."
        },
        {
          id: "educacao",
          title: "Education & Courses",
          desc: "AI assistants answering students' questions 24/7. Make learning easier and prevent students from dropping out of your courses."
        },
        {
          id: "agro",
          title: "Agribusiness",
          desc: "Use data intelligence and satellite imagery to predict the best planting and harvesting times. Increase crop profitability with precise Google analytics."
        }
      ]
    },
    processSection: {
      tag: "// METHODOLOGY",
      heading: "How we accelerate your business.",
      items: [
        {
          num: "01",
          title: "Diagnosis & Discovery",
          desc: "We map operational friction points and design the fast ROI strategy in less than 5 days."
        },
        {
          num: "02",
          title: "Google Cloud Architecture",
          desc: "We configure enterprise security keys, databases vector search, and Vertex AI dedicated servers."
        },
        {
          num: "03",
          title: "Deploy & Integration",
          desc: "We deploy the models and integrate them with your current systems and tools seamlessly."
        },
        {
          num: "04",
          title: "Refinement & Scale",
          desc: "Continuous tokens spend optimization and agent expansion as your revenue scales up."
        }
      ]
    },
    metricsSection: {
      tag: "// PROVEN VALUE",
      heading: "Real corporate innovation metrics.",
      sub: "We don't deliver generic advice. We deploy production-ready code, agents, and systems that impact your bottom line directly.",
      badge: "Google Certified Builders",
      items: [
        {
          value: "+45%",
          label: "Marketing Ads ROI",
          desc: "Average operational return in intelligent ads automation campaigns with real-time target scoring."
        },
        {
          value: "4.8x",
          label: "Operational Speed",
          desc: "Acceleration in converting cold leads to warm prospects with conversational autonomous agents."
        },
        {
          value: "2M+",
          label: "Active Context",
          desc: "Simultaneous processing of massive documents and historical files without any hallucinations."
        }
      ]
    },
    ecosystemSection: {
      heading: "Google Ecosystem",
      items: [
        { title: "Google Cloud", desc: "Escalable and robust data-oriented architecture under global security standards." },
        { title: "Vertex AI", desc: "Design, train and deploy state-of-the-art machine learning models securely." },
        { title: "Gemini", desc: "Ultra-fast multimodal Generative AI featuring unprecedented 2M context window." },
        { title: "Workspace AI", desc: "Boost your team standard tools and workflows with native intelligence integrated." }
      ]
    },
    blogSection: {
      tag: "// RELEVANT KNOWLEDGE",
      heading: "Insights & Tech Engineering",
      sub: "Technical breakdowns of how global companies are building enterprise intelligence with AI.",
      readMore: "Read article",
      newsTitle: "Stay ahead of the AI transition",
      newsSub: "Subscribe to our weekly newsletter crafted directly by our GenAI technical engineers.",
      newsPlaceholder: "Your corporate email",
      newsBtn: "Subscribe",
      newsSuccess: "✓ Thank you for subscribing!",
      editorial: "Vezzitech Engineering Team",
      editorialSub: "Technology, Data & Product Strategy",
      dialogCta: "Schedule Session"
    },
    faqSection: {
      heading: "Frequently Asked Questions",
      items: [
        {
          q: "Are the deployed models fully ours?",
          a: "Absolutely. We deliver all proprietary source code repositories and config keys directly within the client Google Cloud enterprise tenant."
        },
        {
          q: "Is Gemini 1.5 Pro safe for private corporate data?",
          a: "Yes. Using commercial Gemini Vertex AI APIs, Google terms guarantee that your business datasets are never used to train public models."
        },
        {
          q: "How do you calculate ROI for corporate automations?",
          a: "We analyze team time spent on redundant operations and design custom blueprints showing potential cost reduction of up to 80%."
        },
        {
          q: "How long does onboarding take?",
          a: "Our agile methodology delivers major milestones in rapid 3-week sprint cycles. You see the product live from checkpoint one."
        }
      ]
    },
    schedulingSection: {
      tag: "ELITE ADVISORY",
      heading: "Book a direct session with our AI Architects.",
      sub: "Map your corporate AI strategy. In this free 30-minute Google Meet consult, we pinpoint the highest-yield automation opportunities.",
      p1: "Pipeline Structuring",
      p1Sub: "Architecting the logic of tokens caching and LLMs cost models.",
      p2: "Cost & Budget Management",
      p2Sub: "Token-usage and cost calculations on your customized GCP tenant.",
      successTitle: "Meeting Booked Successfully!",
      successSub: "We sent confirmation email with calendar invites.",
      successDesc: "Your official Google Meet link is ready for use:",
      meetBtn: "Join Google Meet Session",
      anotherBtn: "Schedule another slot",
      form: {
        name: "Full Name",
        email: "Corporate Email Address",
        company: "Company & Role",
        purpose: "Primary AI Objective",
        purposeOptions: [
          { value: "Marketing Automation", label: "AI Marketing Automation" },
          { value: "Vertex AI Integration", label: "Vertex AI Agent Building" },
          { value: "Operations & RAG", label: "Private RAG Databases" },
          { value: "Google Cloud Consult", label: "Google Cloud Architecture" }
        ],
        date: "Select Date",
        time: "Available Time Slot",
        submit: "Secure Google Meet Booking"
      }
    },
    footerSection: {
      desc: "Google Cloud Innovators member delivering full-stack engineering and advisory for high-conversion Generative AI systems. We power your business with Google Cloud, Vertex AI, and outstanding Gemini enterprise capabilities.",
      navTitle: "Navigation",
      specTitle: "Expertise",
      locationTitle: "HQ Office",
      location: "Av. Paulista, 1000\nSao Paulo - SP, Brazil",
      rights: "VEZZITECH AI AGENCY. ALL RIGHTS RESERVED.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    chatbot: {
      welcome: "Hi there! I am Vezzi AI assistant. How can we accelerate your business workflow today with Gemini and Google Cloud?",
      typing: "Typing...",
      quickReplies: [
        "Integrate Gemini Pro",
        "AI for Marketing",
        "How much does a project cost?"
      ],
      replies: {
        marketing: "Excellent choice! We deploy enterprise-grade predictive models and ad copy refinement systems integrated to Google Cloud. This delivers +45% conversion improvements! Would you like to schedule a free consult?",
        pricing: "Our pricing structure matches your deliverable milestones and operates on fixed-scope transparent pipelines. Our discovery session is 100% free! Let's arrange a virtual meeting?",
        tech: "We build natively on your corporate Google Cloud tenant (using Vertex AI, Gemini, BigQuery). You hold absolute key and code ownership. Let's design your pipeline?",
        yes: "Perfect! Simply scroll down to our 'Elite Advisory' section or click 'Schedule Session' in the header to choose an available calendar slot.",
        default: "Great. Our priority is translating tech expectation to hard financial performance. Would you like to organize a free strategy session via Google Meet?"
      }
    },
    conversionBanner: {
      heading: "Ready to scale your business with production AI?",
      sub: "Check our available calendar slots and connect directly on a video call to draft your first automation blueprint.",
      cta: "Schedule Free Advisory"
    }
  }
};
