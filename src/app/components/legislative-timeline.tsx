import { motion } from "motion/react";
import { AlertTriangle, Clock } from "lucide-react";

interface LegislativeItem {
  date: string;
  name: string;
  jurisdiction: string;
  impact: string;
  urgency: "Alta" | "Média" | "Baixa";
  daysLeft?: number;
}

const items: LegislativeItem[] = [
  {
    date: "17/03/2026",
    name: "ECA Digital",
    jurisdiction: "Brasil",
    impact: "Obrigação de mecanismos de proteção a menores",
    urgency: "Alta",
    daysLeft: 14,
  },
  {
    date: "30/03/2026",
    name: "NIST SP 800-82 / IA Profile",
    jurisdiction: "EUA",
    impact: "Benchmark global para reguladores",
    urgency: "Média",
    daysLeft: 27,
  },
  {
    date: "31/03/2026",
    name: "NIS2 / ENISA Compliance",
    jurisdiction: "União Europeia",
    impact: "Convergência regulatória global com Brasil e EUA",
    urgency: "Média",
    daysLeft: 28,
  },
  {
    date: "03/06/2026",
    name: "SEC Regulation S-P",
    jurisdiction: "EUA",
    impact: "Disclosure de incidentes em 4 dias úteis + divulgação anual de gestão de risco",
    urgency: "Média",
    daysLeft: 92,
  },
  {
    date: "2026",
    name: "Basel Committee — Relatório 2026",
    jurisdiction: "Internacional",
    impact: "IA, criptoativos, fraude digital, gestão de risco de TIC",
    urgency: "Baixa",
  },
];

const urgencyColors: Record<string, string> = {
  Alta: "#EF4444",
  Média: "#F59E0B",
  Baixa: "#3B82F6",
};

export function LegislativeTimeline() {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rounded-full" style={{ background: "#3B82F6" }} />
        <h2 style={{ color: "white", fontSize: "18px", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>
          Monitoramento Legislativo
        </h2>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[18px] top-0 bottom-0 w-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        <div className="space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="flex items-start gap-4 relative"
            >
              {/* Milestone dot */}
              <div className="relative z-10 flex-shrink-0 mt-5">
                <div
                  className="w-[9px] h-[9px] rounded-full border-2"
                  style={{
                    borderColor: urgencyColors[item.urgency],
                    background: "#0F1115",
                    marginLeft: "10px",
                  }}
                />
              </div>

              {/* Card */}
              <div
                className="flex-1 p-4 rounded-lg transition-all duration-300 hover:translate-y-[-1px]"
                style={{
                  background: "#171A21",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span style={{ color: "#F3F4F6", fontSize: "13.5px", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>
                      {item.name}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded"
                      style={{
                        background: `${urgencyColors[item.urgency]}10`,
                        border: `1px solid ${urgencyColors[item.urgency]}25`,
                        color: urgencyColors[item.urgency],
                        fontSize: "10px",
                        fontWeight: 600,
                      }}
                    >
                      {item.urgency === "Alta" && <AlertTriangle size={9} className="inline mr-1" style={{ marginBottom: 1 }} />}
                      {item.urgency.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span style={{ color: "#6B7280", fontSize: "11px" }}>{item.jurisdiction}</span>
                    <span className="flex items-center gap-1" style={{ color: "#9CA3AF", fontSize: "11px" }}>
                      <Clock size={10} />
                      {item.date}
                    </span>
                    {item.daysLeft && (
                      <span style={{ color: item.daysLeft <= 14 ? "#EF4444" : "#F59E0B", fontSize: "10px", fontWeight: 600 }}>
                        {item.daysLeft}d
                      </span>
                    )}
                  </div>
                </div>
                <p style={{ color: "#9CA3AF", fontSize: "12px", lineHeight: 1.5 }}>{item.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
