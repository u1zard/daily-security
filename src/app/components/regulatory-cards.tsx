import { motion } from "motion/react";

interface RegulatoryItem {
  tag: string;
  tagColor: string;
  regulator: string;
  headline: string;
  date: string;
  summary: string;
  whyItMatters: string;
  risk: "Alto" | "Médio" | "Monitoramento";
  riskDetail?: string;
}

const riskColors: Record<string, string> = {
  Alto: "#EF4444",
  Médio: "#F59E0B",
  Monitoramento: "#3B82F6",
};

const items: RegulatoryItem[] = [
  {
    tag: "NOVA NORMA",
    tagColor: "#EF4444",
    regulator: "BACEN",
    headline: "Res. CMN 5.274/2025 e BCB 538/2025",
    date: "Vigência: 01/03/2026",
    summary:
      "Instituições financeiras devem comprovar adoção de 14 controles mínimos obrigatórios: MFA, criptografia, isolamento, CTI, testes de intrusão e gestão de certificados.",
    whyItMatters:
      "Transforma boas práticas em obrigações técnicas auditáveis. Não conformidade implica sanções regulatórias diretas.",
    risk: "Alto",
  },
  {
    tag: "MARCO LEGISLATIVO",
    tagColor: "#8B5CF6",
    regulator: "ANPD",
    headline: "Lei 15.352/2026",
    date: "Publicação: 25/02/2026",
    summary:
      "ANPD torna-se agência reguladora com autonomia ampliada, reforço sancionatório e criação de carreira regulatória.",
    whyItMatters:
      "Início de enforcement real da LGPD no Brasil. Expectativa de aumento significativo de ações fiscalizatórias.",
    risk: "Alto",
    riskDetail: "Estrutural",
  },
  {
    tag: "AGENDA REGULATÓRIA",
    tagColor: "#F59E0B",
    regulator: "ANPD",
    headline: "Agenda Regulatória 2026–2027",
    date: "2026–2027",
    summary:
      "Temas prioritários: dados biométricos, dados de saúde, dados financeiros, uso secundário para publicidade, IA e poder público.",
    whyItMatters:
      "Antecipação obrigatória de adequação para próximos 2 anos. Planejamento estratégico essencial.",
    risk: "Médio",
    riskDetail: "Antecipação Estratégica",
  },
  {
    tag: "GOVERNANÇA",
    tagColor: "#3B82F6",
    regulator: "CMN",
    headline: "Resolução CMN 5.274/2025",
    date: "Em vigor",
    summary:
      "Cibersegurança torna-se pauta obrigatória de board com exigência de evidências documentais.",
    whyItMatters:
      "Accountability formal da alta gestão. Diretores e conselheiros passam a ter responsabilidade direta.",
    risk: "Alto",
    riskDetail: "Governança",
  },
];

export function RegulatoryCards() {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rounded-full" style={{ background: "#EF4444" }} />
        <h2 style={{ color: "white", fontSize: "18px", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>
          Reguladores Diretos
        </h2>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            className="flex rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-1px]"
            style={{
              background: "#171A21",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            {/* Risk indicator bar */}
            <div
              className="w-1 flex-shrink-0"
              style={{ background: riskColors[item.risk] }}
            />

            <div className="flex-1 p-5">
              {/* Tag + Regulator */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="px-2 py-0.5 rounded"
                  style={{
                    background: `${item.tagColor}15`,
                    border: `1px solid ${item.tagColor}30`,
                    color: item.tagColor,
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                  }}
                >
                  {item.tag}
                </span>
                <span style={{ color: "#9CA3AF", fontSize: "12px", fontWeight: 500 }}>
                  {item.regulator}
                </span>
              </div>

              {/* Headline */}
              <h3 style={{ color: "#F3F4F6", fontSize: "14px", fontWeight: 600, marginBottom: 4, fontFamily: "Inter, sans-serif" }}>
                {item.headline}
              </h3>
              <p style={{ color: "#6B7280", fontSize: "11px", marginBottom: 10 }}>{item.date}</p>

              {/* Summary */}
              <p style={{ color: "#9CA3AF", fontSize: "12.5px", lineHeight: 1.6, marginBottom: 12 }}>
                {item.summary}
              </p>

              {/* Why it matters */}
              <div
                className="p-3 rounded"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}
              >
                <p style={{ color: "#6B7280", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", marginBottom: 4 }}>
                  POR QUE IMPORTA
                </p>
                <p style={{ color: "#D1D5DB", fontSize: "12px", lineHeight: 1.6 }}>{item.whyItMatters}</p>
              </div>

              {/* Risk badge */}
              <div className="flex items-center gap-2 mt-3">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: riskColors[item.risk] }}
                />
                <span style={{ color: riskColors[item.risk], fontSize: "11px", fontWeight: 500 }}>
                  Risco {item.risk}
                  {item.riskDetail ? ` (${item.riskDetail})` : ""}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
