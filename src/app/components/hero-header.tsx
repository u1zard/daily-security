import { Shield, FileText, Clock, TrendingUp, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { label: "Novas Normas", value: "4", icon: FileText, color: "#3B82F6" },
  { label: "Consultas Públicas", value: "2", icon: Shield, color: "#6366F1" },
  { label: "Prazos Críticos", value: "3", icon: Clock, color: "#F59E0B" },
  { label: "Tendências", value: "3", icon: TrendingUp, color: "#10B981" },
];

const highlights = [
  "Prazo final do BACEN para adequação aos 14 controles mínimos entra em vigor",
  "ANPD consolidada como agência reguladora (Lei 15.352/2026)",
  "IBM X-Force registra aumento de 44% em ataques impulsionados por IA",
  "94% dos executivos veem IA como principal vetor de mudança (WEF)",
  "FS-ISAC redefine estratégia global de resiliência financeira",
  "OWASP Top 10 atualiza foco para supply chain e IA",
];

export function HeroHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        {/* Left side */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-10 rounded-full" style={{ background: "linear-gradient(180deg, #3B82F6, #6366F1)" }} />
            <div>
              <p className="tracking-[0.25em] uppercase" style={{ color: "#6B7280", fontSize: "11px", letterSpacing: "0.25em" }}>
                Intelligence Report
              </p>
              <h1 className="text-white" style={{ fontSize: "28px", fontWeight: 600, lineHeight: 1.2, fontFamily: "Inter, sans-serif" }}>
                Daily Security — Regulatory Intelligence
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 mb-6">
            <span style={{ color: "#9CA3AF", fontSize: "13px" }}>03 de Março de 2026</span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: "rgba(245, 158, 11, 0.12)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
              <AlertTriangle size={12} style={{ color: "#F59E0B" }} />
              <span style={{ color: "#F59E0B", fontSize: "11px", fontWeight: 500 }}>Atenção</span>
            </span>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                className="flex items-start gap-2"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3B82F6" }} />
                <span style={{ color: "#D1D5DB", fontSize: "13px", lineHeight: 1.6 }}>{h}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side - Stats */}
        <div className="grid grid-cols-2 gap-3 lg:w-[320px]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              className="p-4 rounded-lg transition-all duration-300"
              style={{
                background: "#171A21",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <stat.icon size={16} style={{ color: stat.color, marginBottom: 8 }} />
              <div style={{ color: "white", fontSize: "24px", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>
                {stat.value}
              </div>
              <div style={{ color: "#6B7280", fontSize: "11px", letterSpacing: "0.05em" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
