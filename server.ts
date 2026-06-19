import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Middleware for parsing JSON requests
  app.use(express.json());

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

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
