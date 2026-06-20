import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import { google } from "googleapis";

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);

  // Middleware for parsing JSON requests
  app.use(express.json());

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

      const response = await ai.models.generateContent({
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
