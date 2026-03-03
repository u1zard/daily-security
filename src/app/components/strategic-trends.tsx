import { motion } from "motion/react";
import { Network, Brain, Link2 } from "lucide-react";

interface Trend {
  title: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  tagColor: string;
}

const trends: Trend[] = [
  {
    title: "Convergência Regulatória Global Simultânea",
    description:
      "BACEN, ANPD, SEC, NIS2 e Basel Committee estão simultaneamente reforçando exigências de cibersegurança e proteção de dados. Pela primeira vez, reguladores de diferentes jurisdições convergem em timing e escopo, criando uma janela de compliance acelerado para organizações multinacionais e do setor financeiro. Empresas que anteciparem essa convergência terão vantagem competitiva e menor exposição regulatória.",
    tags: ["Convergência Reguladora", "Multi-jurisdicional"],
    icon: Network,
    tagColor: "#3B82F6",
  },
  {
    title: "IA como Multiplicador de Ataque e Defesa",
    description:
      "O IBM X-Force Index 2026 confirma IA como acelerador de ameaças (+44% em ataques), enquanto 77% das organizações já utilizam IA para defesa (WEF). O gap entre ataque e defesa está diminuindo, mas a velocidade de exploração de vulnerabilidades — agora medida em horas — exige capacidades de resposta automatizada. Reguladores estão começando a incorporar IA em seus frameworks de risco.",
    tags: ["IA como Vetor de Risco", "Automação Defensiva"],
    icon: Brain,
    tagColor: "#8B5CF6",
  },
  {
    title: "Supply Chain como Vetor Sistêmico de Risco",
    description:
      "OWASP, FS-ISAC e NIST reconhecem formalmente supply chain como risco de primeira linha. A combinação de modelos de IA inseguros, templates IaC comprometidos e dependências de terceiros cria uma superfície de ataque que transcende controles organizacionais individuais. A gestão de risco de terceiros passa de recomendação para obrigação regulatória.",
    tags: ["Supply Chain Crítico", "Risco Sistêmico"],
    icon: Link2,
    tagColor: "#F59E0B",
  },
];

export function StrategicTrends() {
  return (
    <section className="mb-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rounded-full" style={{ background: "#10B981" }} />
        <h2 style={{ color: "white", fontSize: "18px", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>
          Padrões Emergentes Identificados
        </h2>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
      </div>

      <div
        className="p-6 rounded-lg"
        style={{
          background: "linear-gradient(135deg, rgba(23,26,33,0.9), rgba(23,26,33,0.6))",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="space-y-6">
          {trends.map((trend, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className={i < trends.length - 1 ? "pb-6" : ""}
              style={i < trends.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.04)" } : {}}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${trend.tagColor}12`, border: `1px solid ${trend.tagColor}20` }}
                >
                  <trend.icon size={18} style={{ color: trend.tagColor }} />
                </div>
                <div className="flex-1">
                  <h3 style={{ color: "#F3F4F6", fontSize: "15px", fontWeight: 600, marginBottom: 8, fontFamily: "Inter, sans-serif" }}>
                    {trend.title}
                  </h3>
                  <p style={{ color: "#9CA3AF", fontSize: "13px", lineHeight: 1.7, marginBottom: 12 }}>
                    {trend.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {trend.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 rounded"
                        style={{
                          background: `${trend.tagColor}10`,
                          border: `1px solid ${trend.tagColor}20`,
                          color: trend.tagColor,
                          fontSize: "10px",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
