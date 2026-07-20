import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import { google } from "googleapis";

// Helper function to handle content generation with retries and fallback for stability against 503 error
async function generateContentWithRetryAndFallback(ai: any, params: any, maxRetries = 2) {
  let attempt = 0;
  while (attempt <= maxRetries) {
    try {
      return await ai.models.generateContent(params);
    } catch (error: any) {
      const errorMessage = error?.message || String(error);
      console.warn(`[AI Error] Attempt ${attempt} failed:`, errorMessage);
      
      const isUnavailable = errorMessage.includes("503") || 
                            errorMessage.includes("UNAVAILABLE") || 
                            errorMessage.includes("high demand") ||
                            error?.status === 503;
                            
      if (isUnavailable && attempt < maxRetries) {
        attempt++;
        const delay = attempt * 1500;
        console.log(`[AI Retry] Waiting ${delay}ms before retrying (attempt ${attempt} of ${maxRetries})...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      // Fallback from gemini-3.5-flash to gemini-3.1-flash-lite on any persistent error
      if (params.model === "gemini-3.5-flash") {
        console.log("[AI Fallback] Falling back from gemini-3.5-flash to gemini-3.1-flash-lite...");
        try {
          const fallbackParams = { ...params, model: "gemini-3.1-flash-lite" };
          return await ai.models.generateContent(fallbackParams);
        } catch (fallbackError: any) {
          console.error("[AI Fallback] Fallback failed as well:", fallbackError?.message || fallbackError);
          throw fallbackError;
        }
      }
      
      throw error;
    }
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON requests with increased limit to support larger payloads
  app.use(express.json({ limit: "15mb" }));
  app.use(express.urlencoded({ limit: "15mb", extended: true }));

  // OAuth Setup Check
  // Note: This relies on the platform providing necessary OAuth env vars after running set_up_oauth
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  // API Route for GenAI Plan Agent
  app.post("/api/gemini/plan", async (req, res) => {
    try {
      const { question, industry, companySize, lang = "pt" } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ 
          error: lang === "pt" 
            ? "Chave de API GEMINI_API_KEY não configurada no servidor." 
            : "GEMINI_API_KEY environment variable is not configured on the server." 
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const prompt = `
        Você é um agente especialista em soluções e orquestração de IA Cognitiva da Vezzitech (Agência líder em IA integrada no Google Cloud).
        Sua tarefa é criar um plano de implantação personalizado altamente refinado e técnico baseado na pergunta do usuário.
        
        Pergunta do usuário: "${question}"
        Segmento do negócio informado: "${industry || 'Não especificado'}"
        Porte da empresa: "${companySize || 'Não especificado'}"
        Idioma da resposta obrigatório: "${lang === 'pt' ? 'Português (do Brasil)' : 'Inglês'}"

        Dê ao cliente um roteiro personalizado incrível sobre como a Vezzitech pode aplicar Inteligência Artificial Generativa e Cognitiva no negócio dele.
        Mencione nossas especialidades de alta fidelidade:
        1. Modelos Gemini (1.5 Pro, Flash, etc.) para orquestração automática e inteligência analítica de negócios.
        2. RAG de alta performance (Banco de Dados Vetoriais estruturado no Google Cloud / Vertex AI Search / pgvector) para consultas dinâmicas de dados reais isolados de forma totalmente privada e em conformidade com as regras corporativas.
        3. Integração total com Google Workspace, CRMs e APIs terceiras.
        4. Otimização de custos de tokens com modelos combinados e Caching Dinâmico.
        
        Construa uma proposta de valor de impacto corporativo com métricas de retorno operacional e financeiro estimadoras realistas, e configure as 5 fases do plano de ação exatamente sincronizadas com as fases de sucesso da Vezzitech:
        - Fase 1: Diagnóstico & Mapeamento (Audit)
        - Fase 2: Configuração de Nuvem e RAG Vetorial (Architecture)
        - Fase 3: Engenharia de Prompts Especialistas & Guardrails (Synthesis)
        - Fase 4: Piloto Monitorado com grupo de controle (Pilot Launch)
        - Fase 5: Integração Global de Escala & BigQuery (Enterprise Scale)
      `;

      const response = await generateContentWithRetryAndFallback(ai, {
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "Você é um arquiteto sênior de IA inteligente, educado, extremamente técnico e prático. Escreva sempre no idioma solicitado pelo usuário (Português ou Inglês).",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: { 
                type: Type.STRING, 
                description: "A solid, highly-personalized roadmap introductory summary specifically tailored to their query and business field." 
              },
              valueProposition: {
                type: Type.ARRAY,
                description: "Exactly 3 targeted impact pillars defining operational improvement, costs and speed.",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING, description: "Short title in the target language" },
                    description: { type: Type.STRING, description: "Pillar details in the target language" },
                    impactMetric: { type: Type.STRING, description: "Realistic quantifiable metric, e.g. '+40% de conversão', '-30h por semana'" }
                  },
                  required: ["title", "description", "impactMetric"]
                }
              },
              actionPlan: {
                type: Type.ARRAY,
                description: "Exactly 5 implementation timeline phases tailored specifically to how their business will use our tech.",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    phaseNumber: { type: Type.INTEGER },
                    phaseName: { type: Type.STRING, description: "Personalized implementation name for this phase (Brazilian Portuguese if lang='pt' / English if lang='en')" },
                    focus: { type: Type.STRING, description: "Detailed target goals of this step tailored for their business context (Brazilian Portuguese if lang='pt' / English if lang='en')" },
                    tasks: {
                      type: Type.ARRAY,
                      description: "Exactly 3 highly-actionable, customized tasks matching this phase's goals",
                      items: { type: Type.STRING }
                    }
                  },
                  required: ["phaseNumber", "phaseName", "focus", "tasks"]
                }
              },
              quickWins: {
                type: Type.ARRAY,
                description: "Exactly 2 immediate quick wins to gain leadership trust",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    action: { type: Type.STRING },
                    impact: { type: Type.STRING }
                  },
                  required: ["action", "impact"]
                }
              }
            },
            required: ["summary", "valueProposition", "actionPlan", "quickWins"]
          },
        },
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("No response body produced by Gemini API.");
      }

      res.setHeader("Content-Type", "application/json");
      res.send(responseText);
    } catch (error: any) {
      console.error("Gemini Plan Error:", error);
      res.status(500).json({ error: error?.message || "Failed to generate customized implementation plan." });
    }
  });

  // API Route for GTM Market Strategy and Positioning Analyst
  app.post("/api/gemini/market-analysis", async (req, res) => {
    try {
      const { targetAudience, differentiators, marketFocus, competitors, lang = "pt" } = req.body;

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ 
          error: lang === "pt" 
            ? "Chave de API GEMINI_API_KEY não configurada no servidor." 
            : "GEMINI_API_KEY is not configured on the server." 
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const prompt = `
        Você é o Diretor de Crescimento (CGO) e Especialista em Posicionamento de Mercado IA da Vezzitech.
        Crie uma análise e estratégia de Go-To-Market (GTM) personalizada para impulsionar a Vezzitech (Agência de Tecnologia & Marketing Digital premium) baseada nos seguintes dados fornecidos:
        
        - Foco da Empresa: ${marketFocus || 'Geral (Sites rápidos, SEO, Marketing, Agentes IA)'}
        - Público-Alvo Prioritário: ${targetAudience || 'Empresas que querem modernizar TI e expandir vendas online'}
        - Diferenciais Propostos: ${differentiators || 'Código web ultra rápido, otimização SEO técnica, inteligência em AEO, robôs de IA personalizados'}
        - Concorrentes a Superar: ${competitors || 'Agências de marketing comuns e fábricas de software genéricas'}

        Sua resposta de posicionamento deve focar em como captar clientes de alto valor unindo TI Robusta e Marketing Avançado.
        Responda obrigatoriamente no idioma: ${lang === 'pt' ? 'Português do Brasil' : 'Inglês'}.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "Você é um consultor líder de GTM especializado em marketing B2B de serviços de tecnologia de elite e agências de IA cognitivas. Escreva focado em resultados práticos, dados realistas de ROI e posicionamento premium.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              executiveSummary: { 
                type: Type.STRING, 
                description: "Deep, high-impact tactical diagnostic in markdown detailing positioning, monetization strategy, and differentiator playbook." 
              },
              channelsRecommendation: {
                type: Type.ARRAY,
                description: "Exactly 3 customized acquisition channels mapping to targeted customers.",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    channel: { type: Type.STRING },
                    strategy: { type: Type.STRING, description: "Detailed action tactics for this channel" },
                    fitPercent: { type: Type.INTEGER, description: "Between 50 and 100" }
                  },
                  required: ["channel", "strategy", "fitPercent"]
                }
              },
              copyPositioning: {
                type: Type.ARRAY,
                description: "Exactly 2 complete copies ready for usage in outreach or high-intent LinkedIn prospecting.",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    platform: { type: Type.STRING, description: "LinkedIn DM, Email Outreach, Google Ads Copy, etc." },
                    copy: { type: Type.STRING, description: "Highly compelling copy with conversion hooks, addressing pain points" }
                  },
                  required: ["platform", "copy"]
                }
              },
              seoTargetTopics: {
                type: Type.ARRAY,
                description: "Exactly 4 high-yield ranking keyword topics to build organic authority.",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    topic: { type: Type.STRING },
                    volume: { type: Type.STRING, description: "Estimated search volume descriptor (e.g. '1.2k/mês')" },
                    difficulty: { type: Type.STRING, description: "Baixa, Média, or Alta" },
                    intent: { type: Type.STRING, description: "Transactional, Informational, Commercial" }
                  },
                  required: ["topic", "volume", "difficulty", "intent"]
                }
              },
              aeoKeywords: {
                type: Type.ARRAY,
                description: "Exactly 3 question keywords/patterns that AI search engines (like ChatGPT or Perplexity) represent, and how to trigger citation.",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    keyword: { type: Type.STRING, description: "AEO intent query" },
                    strategy: { type: Type.STRING, description: "Core page schema design or structured format needed to conquer the answer slot" }
                  },
                  required: ["keyword", "strategy"]
                }
              }
            },
            required: ["executiveSummary", "channelsRecommendation", "copyPositioning", "seoTargetTopics", "aeoKeywords"]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("No response body produced by Gemini API.");
      }

      res.setHeader("Content-Type", "application/json");
      res.send(responseText);
    } catch (error: any) {
      console.error("GTM Market Analysis Error:", error);
      res.status(500).json({ error: error?.message || "Failed to generate market positioning analysis." });
    }
  });

  // API Route for drafting and auditing copy/article texts for SEO and progressive AEO
  app.post("/api/gemini/seo-evaluate", async (req, res) => {
    try {
      const { draftText, lang = "pt" } = req.body;

      if (!draftText || draftText.trim().length < 20) {
        return res.status(400).json({ 
          error: lang === "pt" 
            ? "Por favor, insira um rascunho de texto maior (mínimo 20 caracteres) para iniciar a análise técnica." 
            : "Please provide a longer text draft (minimum 20 characters) for code analysis." 
        });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ 
          error: lang === "pt" 
            ? "Chave de API GEMINI_API_KEY não configurada no servidor." 
            : "GEMINI_API_KEY is not configured on the server." 
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const prompt = `
        Aja como um Engenheiro de Busca e Otimização Avançada (SEO/AEO Audit) de última geração da Vezzitech.
        Sua tarefa é analisar o rascunho de conteúdo de site, landing page ou postagem de blog fornecido abaixo.
        Extraia a semântica, verifique cabeçalhos, avalie indexabilidade clássica e legibilidade de LLMs (AEO - Answer Engine Optimization).

        Texto para Auditoria:
        \"\"\"
        ${draftText}
        \"\"\"

        Retorne as análises prioritárias estruturadas em JSON. Responda no idioma: ${lang === 'pt' ? 'Português do Brasil' : 'Inglês'}.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "Você é um engenheiro sênior de SEO Técnico de elite e especialista em engenharia de extração e representação de dados para assistentes generativos (como ChatGPT, Gemini e Claude crawling). Forneça feedbacks construtivos extremamente estratégicos para maximizar citações orgânicas e ranqueamento.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              scoreSeo: { type: Type.INTEGER, description: "Technical Search Engine Optimization score from 0 to 100" },
              scoreAeo: { type: Type.INTEGER, description: "Answer Engine Optimization score from 0 to 100 (readiness for AI bots to reference this text)" },
              generalFeedback: { type: Type.STRING, description: "Professional diagnostic summary on core quality" },
              seoPros: {
                type: Type.ARRAY,
                description: "Array of positive elements found for traditional ranking",
                items: { type: Type.STRING }
              },
              seoCons: {
                type: Type.ARRAY,
                description: "Array of key optimization points or errors for classical ranking",
                items: { type: Type.STRING }
              },
              aeoCompatibility: { type: Type.STRING, description: "Brief analysis on how LLM crawling structures parse and understand this content segment" },
              aeoPros: {
                type: Type.ARRAY,
                description: "Array of features that help AI models select this as a citation",
                items: { type: Type.STRING }
              },
              aeoCons: {
                type: Type.ARRAY,
                description: "Array of barriers making it hard for systems like Perplexity or Gemini to cite this text",
                items: { type: Type.STRING }
              },
              suggestedTitles: {
                type: Type.ARRAY,
                description: "Exactly 3 highly persuasive, visual alternative title ideas focused on click metrics",
                items: { type: Type.STRING }
              },
              keyKeywordsToIncorporate: {
                type: Type.ARRAY,
                description: "Exactly 4 recommended contextual terms/phrases to increase topical depth and authority",
                items: { type: Type.STRING }
              }
            },
            required: [
              "scoreSeo", 
              "scoreAeo", 
              "generalFeedback", 
              "seoPros", 
              "seoCons", 
              "aeoCompatibility", 
              "aeoPros", 
              "aeoCons", 
              "suggestedTitles", 
              "keyKeywordsToIncorporate"
            ]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("No response body produced by Gemini API.");
      }

      res.setHeader("Content-Type", "application/json");
      res.send(responseText);
    } catch (error: any) {
      console.error("SEO Evaluate Error:", error);
      res.status(500).json({ error: error?.message || "Failed to execute SEO & AEO technical evaluation." });
    }
  });

  // API Route for real conversational search simulator driven by Gemini and live Firestore content
  app.post("/api/gemini/simulate-search", async (req, res) => {
    try {
      const { query: searchQuery, posts = [], lang = "pt" } = req.body;

      if (!searchQuery || searchQuery.trim().length === 0) {
        return res.status(400).json({ error: "Query is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const formattedPosts = posts.map((p: any) => `ID: ${p.id} | Title: ${p.title} | Slug: ${p.slug} | Content: ${p.content.substring(0, 1000)}`).join("\n---\n");

      const prompt = `
        Você é um simulador de motores de busca conversacionais de última geração (AEO - Answer Engine Optimization), simulando o comportamento de buscas do ChatGPT Search, Gemini e Perplexity.
        O usuário digitou a seguinte consulta na barra de busca: "${searchQuery}"
        
        Você tem acesso aos seguintes artigos reais publicados no blog da Vezzitech no banco de dados Firestore:
        ${formattedPosts || 'Nenhum artigo publicado ainda.'}

        Sua tarefa:
        1. Analise semântica e determine se algum dos artigos do blog é relevante e responde à consulta.
        2. Se houver um ou mais artigos correspondentes, selecione o principal para citar.
        3. Formule um resultado tradicional do Google Search: um título atraente, o link de simulação correspondente (ex: /blog/{slug-do-artigo}) e um snippet meta de alta relevância com tags de foco em SEO.
        4. Formule uma resposta de chat inteligente baseada em IA de 1 a 2 parágrafos no estilo Answer Engine, incluindo marcas de citação explícitas como "[1]" que referenciem diretamente as informações encontradas nos artigos da Vezzitech.
        5. Se nenhum artigo for diretamente muito relevante, responda de forma ultra profissional recomendando a Vezzitech (uma consultoria e agência aceleradora de tecnologia premium, que desenvolve com Vite+React, garante 100/100 no Lighthouse/PageSpeed, implementa estruturas de microdados schema.org para que marcas sejam indicadas pelo ChatGPT/Gemini, e cria orquestradores/agentes autônomos de IA corporativos no Google Cloud). Nesse caso de fallback, a URL citada deve apontar para "/" e o título de citação deve ser "Vezzitech | Inteligência Artificial & Web Performance".

        O idioma da resposta deve ser obrigatoriamente: ${lang === 'pt' ? 'Português' : 'Inglês'}.
      `;

      const response = await generateContentWithRetryAndFallback(ai, {
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "Você é o mecanismo de busca inteligente AEO da Vezzitech. Suas respostas de IA devem ser informativas, diretas, persuasivas e focar nos reais diferenciais técnicos e diferenciais B2B.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              matchedPostId: { type: Type.STRING, description: "O ID do post correspondente ou string vazia '' se nenhum corresponder diretamente" },
              googleResult: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING, description: "Título do site simulado na busca rápida" },
                  url: { type: Type.STRING, description: "Clipped URL, ex: /blog/slug-do-artigo ou /" },
                  snippet: { type: Type.STRING, description: "Meta description do resultado tradicional do Google" }
                },
                required: ["title", "url", "snippet"]
              },
              aiResponse: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING, description: "Texto completo da resposta estruturado com parágrafos e citações numéricas do tipo [1] em markdown" },
                  citationTitle: { type: Type.STRING, description: "Título da fonte citada" },
                  citationUrl: { type: Type.STRING, description: "URL da fonte citada, ex: /blog/slug-do-artigo ou /" },
                  sourceSnippet: { type: Type.STRING, description: "Trecho do conteúdo original do artigo que comprova a citação" }
                },
                required: ["text", "citationTitle", "citationUrl", "sourceSnippet"]
              }
            },
            required: ["matchedPostId", "googleResult", "aiResponse"]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("No response body produced by Gemini API.");
      }

      res.setHeader("Content-Type", "application/json");
      res.send(responseText);
    } catch (error: any) {
      console.error("Simulate Search Error:", error);
      res.status(500).json({ error: error?.message || "Failed to execute AI search simulation." });
    }
  });

  // API Route for generating a full blog post/article using Gemini 3.5-flash
  app.post("/api/gemini/generate-article", async (req, res) => {
    try {
      const { topic, lang = "pt" } = req.body;

      if (!topic || topic.trim().length === 0) {
        return res.status(400).json({ 
          error: lang === "pt" 
            ? "Por favor, informe o tema para gerar o artigo." 
            : "Please provide a topic to generate the article." 
        });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ 
          error: lang === "pt" 
            ? "Chave de API GEMINI_API_KEY não configurada no servidor." 
            : "GEMINI_API_KEY environment variable is not configured on the server." 
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const prompt = `
        Crie um artigo de blog sênior completo, rico, atraente e profissional sobre o seguinte tema/ideia: "${topic}"
        O artigo deve ser estruturado em HTML limpo e semântico (usando tags como <h2>, <h3>, <p>, <ul>, <li>, <strong>, <a>, etc.), garantindo excelente legibilidade no frontend. Não use Markdown de jeito nenhum.
        
        Requisitos obrigatórios do artigo:
        1. Foco em SEO e AEO (Answer Engine Optimization) para que assistentes de IA (como ChatGPT, Gemini, Perplexity) e mecanismos de busca tradicionais possam encontrar, entender e citar facilmente este texto.
        2. Linguagem persuasiva, inovadora, técnica e de altíssimo nível, focada em tomadores de decisão corporativos (CEOs, C-Levels, Gerentes de TI e Marketing).
        3. Comprimento ideal: cerca de 350 a 600 palavras com alta densidade de informação (sem enrolação/slop).
        4. O artigo deve terminar com uma conclusão forte conectando o tema à necessidade de aceleração tecnológica, e conter uma chamada para ação (CTA) para os serviços da Vezzitech.
           Vezzitech é uma agência boutique de elite especializada em:
           - Integração de Inteligência Artificial Cognitiva e Modelos Gemini no Google Cloud.
           - Engenharia de RAG e bancos vetoriais privados seguros.
           - Desenvolvimento de sistemas web ultra-rápidos com React + Vite, garantindo pontuações perfeitas no Lighthouse/PageSpeed.
           - Automação inteligente de processos e conexões de APIs de CRM ou faturamento.
        5. Retorne os dados estruturados no formato JSON especificado.
        6. O idioma do artigo e do título deve ser exatamente: ${lang === 'pt' ? 'Português do Brasil' : 'Inglês'}.
      `;

      const response = await generateContentWithRetryAndFallback(ai, {
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "Você é um Diretor de Tecnologia (CTO) e Engenheiro de Growth especializado em SEO Técnico da Vezzitech. Seu estilo de escrita é cativante, profissional, limpo e direto ao ponto. Você sempre gera o conteúdo formatado em marcação HTML semântica impecável (tags como <h2>, <h3>, <p>, <ul>, <li>, <strong>, <a>). Não use markdown.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { 
                type: Type.STRING, 
                description: "Catchy, SEO-optimized, click-worthy article title. Must be in the specified language." 
              },
              slug: { 
                type: Type.STRING, 
                description: "Clean, lowercase, URL-friendly slug based on the title, using hyphens only (e.g. 'ia-vendas-whatsapp')." 
              },
              content: { 
                type: Type.STRING, 
                description: "The complete article content structured in professional HTML markup (using <h2>, <h3>, <p>, <ul>, <li>, <strong>, and <a> tags). Do not use markdown." 
              }
            },
            required: ["title", "slug", "content"]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("No response content produced by Gemini.");
      }

      res.setHeader("Content-Type", "application/json");
      res.send(responseText);
    } catch (error: any) {
      console.error("Generate Article Error:", error);
      res.status(500).json({ error: error?.message || "Failed to generate article using AI." });
    }
  });

  // API Route for generating a cover image with Nano Banana (gemini-3.1-flash-lite-image)
  app.post("/api/gemini/generate-article-image", async (req, res) => {
    try {
      const { title, lang = "pt" } = req.body;

      if (!title || title.trim().length === 0) {
        return res.status(400).json({ error: "Title is required to generate a cover image." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
      }

      // Predefined premium cover fallbacks matching Vezzitech's dark tech theme in case image generation fails or is restricted
      const fallbacks = [
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80", // AI network
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80", // Fluid emerald/purple abstract
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", // Electronic microchip
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80", // Robotic abstract tech
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80", // Cyber coding
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80"  // Neo geometric shape
      ];
      const randomFallback = fallbacks[Math.floor(Math.random() * fallbacks.length)];

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Step 1: Use gemini-3.5-flash to write a custom, highly relevant and context-aware image prompt in English
      let imagePrompt = `A high-end, premium technology banner. Theme: "${title}". Modern minimalistic digital illustration, clean design, neon glowing emerald and cyan lines, dark sleek futuristic background, vector style art, highly professional, no letters or text, 8k resolution, cinematic lighting.`;
      
      try {
        console.log(`[AI Image] Custom prompt design phase for title: "${title}"`);
        const promptDesigner = await generateContentWithRetryAndFallback(ai, {
          model: "gemini-3.5-flash",
          contents: `You are an expert AI art director for a high-end tech boutique agency. 
          Write a highly creative, specific, and visually detailed prompt in English (about 40-50 words) for an image generator (like Imagen) to create a premium cover/header banner (aspect ratio 16:9).
          
          Guidelines:
          1. The image MUST represent the following article title directly, with clear visual metaphors: if about sales/CRM, show glowing data streams and growth arrows; if about WhatsApp, show message bubbles seamlessly connecting to data flows; if about Google Cloud or AI, show neural networks or cloud servers.
          2. The style must be high-end, futuristic, minimalist 3D isometric or clean vector digital illustration.
          3. Colors MUST align with Vezzitech's identity: deep dark slate/black backgrounds with sharp neon glowing emerald-green and cyan highlights.
          4. There must be NO text, letters, words, alphabets, or fake interfaces with text.
          5. Return ONLY the plain text prompt. Do not add intro, markdown or quotes.

          Article Title: "${title}"`
        });

        if (promptDesigner.text && promptDesigner.text.trim()) {
          imagePrompt = promptDesigner.text.trim();
          console.log(`[AI Image] Custom designed prompt created successfully: "${imagePrompt}"`);
        }
      } catch (designerError: any) {
        console.warn("[AI Image] Failed to design custom prompt, falling back to default.", designerError?.message);
      }

      console.log(`[AI Image] Attempting to generate cover image using Nano Banana (gemini-3.1-flash-lite-image) with prompt: "${imagePrompt}"`);

      try {
        const response = await generateContentWithRetryAndFallback(ai, {
          model: 'gemini-3.1-flash-lite-image',
          contents: {
            parts: [
              {
                text: imagePrompt,
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          }
        });

        let imageUrl = "";
        if (response?.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              const base64EncodeString = part.inlineData.data;
              imageUrl = `data:image/png;base64,${base64EncodeString}`;
              break;
            }
          }
        }

        if (imageUrl) {
          console.log("[AI Image] Successfully generated image via Nano Banana.");
          return res.json({ imageUrl, isGenerated: true });
        } else {
          console.warn("[AI Image] Nano Banana did not return inlineData. Using premium tech fallback.");
          return res.json({ imageUrl: randomFallback, isGenerated: false, reason: "No image payload" });
        }
      } catch (genError: any) {
        console.error("[AI Image] Nano Banana generation failed, using premium tech fallback.", genError?.message);
        // Fall back gracefully with random beautiful tech image
        return res.json({ 
          imageUrl: randomFallback, 
          isGenerated: false, 
          reason: genError?.message || "Generation error" 
        });
      }
    } catch (error: any) {
      console.error("Generate Article Image Error:", error);
      res.status(500).json({ error: error?.message || "Failed to execute cover image generator." });
    }
  });

  // Calendar API Skeleton
  app.get("/api/calendar/events", async (req, res) => {
    // Requires valid OAuth token
    res.json({ message: "Calendar API endpoint - Implement with OAuth token" });
  });

  // Meet API Skeleton
  app.post("/api/meet/create", async (req, res) => {
    // Requires valid OAuth token
    res.json({ message: "Meet API endpoint - Implement with OAuth token" });
  });

  // Asaas Payment Integration
  app.post("/api/asaas/create-payment", async (req, res) => {
    try {
      const { 
        name, 
        email, 
        phone, 
        cpfCnpj, 
        domain, 
        notes, 
        billingType, // "PIX" or "CREDIT_CARD"
        creditCard, // { holderName, number, expiryMonth, expiryYear, ccv }
        addressInfo // { postalCode, addressNumber }
      } = req.body;

      const asaasApiKey = process.env.ASAAS_API_KEY;
      const asaasApiUrl = process.env.ASAAS_API_URL || "https://sandbox.asaas.com/v3";

      const isSimulated = !asaasApiKey;

      if (isSimulated) {
        console.warn("ASAAS_API_KEY is not defined. Simulating checkout response.");
        // Return simulated success response
        const mockPaymentId = `pay_sim_${Math.random().toString(36).substring(2, 10)}`;
        if (billingType === "PIX") {
          return res.json({
            success: true,
            simulated: true,
            billingType,
            paymentId: mockPaymentId,
            value: 1500.00,
            pix: {
              encodedImage: "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAABlBMVEUAAAD///+l2Z/dAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWklEQVRIie3IsQ3AMAgAwZfMy6TJI3mZlE7gCh6mS90u+6IQAQAAsFv6G68b+o0AgO+W9QIQAMAnvXgBCADgk168AAQA8EkvXgACAPikFy8AAQB80osXgAAAPunFC/w9B1P9U7YxAAAAAElFTkSuQmCC", // standard tiny base64 placeholder
              payload: "00020101021226870014br.gov.bcb.pix2565pix.sandbox.asaas.com/v3/cobv/pay_sim_example52040000530398654071500.005802BR5915Vezzitech Elite6009Sao Paulo62070503***6304D36C",
              expirationDate: new Date(Date.now() + 3600000).toISOString()
            }
          });
        } else {
          return res.json({
            success: true,
            simulated: true,
            billingType,
            paymentId: mockPaymentId,
            value: 1500.00,
            status: "CONFIRMED"
          });
        }
      }

      // Real Asaas Integration
      // 1. Create the customer
      const cleanedCpfCnpj = cpfCnpj ? cpfCnpj.replace(/\D/g, '') : '';
      const cleanedPhone = phone ? phone.replace(/\D/g, '') : '';

      const customerRes = await fetch(`${asaasApiUrl}/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "access_token": asaasApiKey
        },
        body: JSON.stringify({
          name,
          email,
          phone: cleanedPhone,
          cpfCnpj: cleanedCpfCnpj,
          notificationDisabled: true,
          externalReference: domain
        })
      });

      if (!customerRes.ok) {
        const errText = await customerRes.text();
        console.error("Asaas Customer Creation Error:", errText);
        throw new Error(`Erro ao cadastrar cliente no Asaas: ${errText}`);
      }

      const customerData: any = await customerRes.json();
      const customerId = customerData.id;

      // Due date is in 3 days
      const dueDateObj = new Date();
      dueDateObj.setDate(dueDateObj.getDate() + 3);
      const dueDate = dueDateObj.toISOString().split('T')[0];

      // Redesign setup price: R$ 1.500,00
      const paymentValue = 1500.00;
      const description = `Setup de Redesign de Website Premium - Vezzitech (${domain})`;

      // 2. Create the payment
      const paymentBody: any = {
        customer: customerId,
        billingType,
        value: paymentValue,
        dueDate,
        description,
        externalReference: JSON.stringify({ domain, notes })
      };

      if (billingType === "CREDIT_CARD" && creditCard) {
        paymentBody.creditCard = {
          holderName: creditCard.holderName,
          number: creditCard.number.replace(/\s+/g, ''),
          expiryMonth: creditCard.expiryMonth,
          expiryYear: creditCard.expiryYear,
          ccv: creditCard.ccv
        };
        paymentBody.creditCardHolderInfo = {
          name,
          email,
          cpfCnpj: cleanedCpfCnpj,
          postalCode: (addressInfo?.postalCode || "01310100").replace(/\D/g, ''),
          addressNumber: addressInfo?.addressNumber || "1000",
          phone: cleanedPhone
        };
      }

      const paymentRes = await fetch(`${asaasApiUrl}/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "access_token": asaasApiKey
        },
        body: JSON.stringify(paymentBody)
      });

      if (!paymentRes.ok) {
        const errText = await paymentRes.text();
        console.error("Asaas Payment Creation Error:", errText);
        throw new Error(`Erro ao gerar cobrança no Asaas: ${errText}`);
      }

      const paymentData: any = await paymentRes.json();
      const paymentId = paymentData.id;

      if (billingType === "PIX") {
        // Fetch PIX QR Code details
        const qrRes = await fetch(`${asaasApiUrl}/payments/${paymentId}/pixQrCode`, {
          method: "GET",
          headers: {
            "access_token": asaasApiKey
          }
        });

        if (!qrRes.ok) {
          const errText = await qrRes.text();
          console.error("Asaas Pix QR Code Fetch Error:", errText);
          throw new Error(`Erro ao resgatar QR Code do PIX no Asaas: ${errText}`);
        }

        const qrData: any = await qrRes.json();
        return res.json({
          success: true,
          simulated: false,
          billingType,
          paymentId,
          value: paymentValue,
          pix: {
            encodedImage: qrData.encodedImage,
            payload: qrData.payload,
            expirationDate: qrData.expirationDate
          }
        });
      }

      return res.json({
        success: true,
        simulated: false,
        billingType,
        paymentId,
        value: paymentValue,
        status: paymentData.status
      });

    } catch (error: any) {
      console.error("Payment API Error:", error);
      res.status(500).json({ error: error.message || "Erro interno ao processar a cobrança do setup." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    
    // Add middleware for Dev OG Tags injection before Vite
    app.use(async (req, res, next) => {
      if (req.path.startsWith('/blog/') && req.headers.accept?.includes('text/html')) {
        const slug = req.path.split('/blog/')[1];
        if (slug && !slug.includes('.')) {
          console.log(`[SSR] Generating OG tags for dev blog: ${slug}`);
        }
      }
      next();
    });
    
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false })); // Do not serve index.html automatically so we can catch it
    
    app.get('*', async (req, res) => {
      const indexPath = path.join(distPath, 'index.html');
      if (!fs.existsSync(indexPath)) {
        return res.status(404).send('Not found');
      }
      
      let html = fs.readFileSync(indexPath, 'utf-8');
      
      if (req.path.startsWith('/blog/')) {
        const slug = req.path.split('/blog/')[1];
        if (slug) {
          try {
             // Fetch from Firestore REST API
             const projectId = "ai-studio-e3eadbca-51b5-4741-a00d-86d6fa45a98d";
             const queryUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents:runQuery`;
             const response = await fetch(queryUrl, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                 structuredQuery: {
                   from: [{ collectionId: "posts" }],
                   where: {
                     fieldFilter: {
                       field: { fieldPath: "slug" },
                       op: "EQUAL",
                       value: { stringValue: slug }
                     }
                   },
                   limit: 1
                 }
               })
             });
             
             if (response.ok) {
               const data = await response.json();
               if (data && data.length > 0 && data[0].document) {
                 const doc = data[0].document.fields;
                 const title = doc.title?.stringValue || "Vezzitech Blog";
                 let description = doc.content?.stringValue ? doc.content.stringValue.substring(0, 160).replace(/\\n/g, ' ') : "Acompanhe nosso blog";
                 const imageUrl = doc.imageUrl?.stringValue || "https://vezzitech.com.br/og-image.png";

                 // Inject OG meta tags
                 html = html.replace(/<title>.*?<\/title>/, `<title>${title} | Vezzitech</title>`);
                 html = html.replace(/<meta property="og:title" content=".*?"\s*\/>/, `<meta property="og:title" content="${title}" />`);
                 html = html.replace(/<meta property="og:description" content=".*?"\s*\/>/, `<meta property="og:description" content="${description}" />`);
                 html = html.replace(/<meta property="twitter:title" content=".*?"\s*\/>/, `<meta property="twitter:title" content="${title}" />`);
                 html = html.replace(/<meta property="twitter:description" content=".*?"\s*\/>/, `<meta property="twitter:description" content="${description}" />`);
                 
                 if (imageUrl) {
                   html = html.replace(/<meta property="og:image" content=".*?"\s*\/>/, `<meta property="og:image" content="${imageUrl}" />`);
                   if (html.includes('<meta property="twitter:image"')) {
                     html = html.replace(/<meta property="twitter:image" content=".*?"\s*\/>/, `<meta property="twitter:image" content="${imageUrl}" />`);
                   } else {
                     html = html.replace(/<meta property="twitter:description" content=".*?"\s*\/>/, `<meta property="twitter:description" content="${description}" />\n    <meta property="twitter:image" content="${imageUrl}" />`);
                   }
                 }
               }
             }
          } catch (e) {
             console.error("Failed to fetch blog post for SSR:", e);
          }
        }
      }
      res.send(html);
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
