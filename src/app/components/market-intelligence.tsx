import { motion } from "motion/react";
import { BarChart3, Globe, ShieldAlert, Layers, BookOpen } from "lucide-react";

interface IntelItem {
  source: string;
  icon: React.ElementType;
  type: string;
  highlights: string[];
  insight: string;
  isSystemic?: boolean;
}

const sectorReports: IntelItem[] = [
  {
    source: "IBM X-Force Threat Intelligence Index 2026",
    icon: BarChart3,
    type: "Relatório Setorial",
    highlights: [
      "+44% ataques via aplicações públicas",
      "+49% crescimento ransomware",
      "56% vulnerabilidades exploradas sem autenticação",
    ],
    insight: "Tempo entre CVE e exploit reduzido para horas.",
    isSystemic: true,
  },
  {
    source: "WEF Global Cybersecurity Outlook 2026",
    icon: Globe,
    type: "Relatório Global",
    highlights: [
      "94% veem IA como principal fator de mudança",
      "77% organizações usam IA para defesa",
      "73% sofreram fraude cibernética em 2025",
    ],
    insight: "Desigualdade cibernética se torna vetor de risco sistêmico.",
    isSystemic: true,
  },
  {
    source: "FS-ISAC — Nova Estratégia 2026",
    icon: ShieldAlert,
    type: "Estratégia Setorial",
    highlights: [
      "Supply chain",
      "Geopolítica",
      "Fraude",
      "IA e criptografia pós-quântica",
    ],
    insight: "Redefinição de prioridades globais no setor financeiro.",
  },
];

const techStandards: IntelItem[] = [
  {
    source: "OWASP Top 10 2026",
    icon: Layers,
    type: "Padrão Técnico",
    highlights: [
      "Supply chain comprometida",
      "Modelos de IA inseguros",
      "Templates IaC inseguros",
    ],
    insight: "Supply chain e IA reconhecidos como risco de primeira linha.",
    isSystemic: true,
  },
  {
    source: "NIST — Consulta Pública",
    icon: BookOpen,
    type: "Consulta Pública",
    highlights: [
      "SP 800-82 (OT Security)",
      "Framework Profile para IA",
      "Prazo: 30/03/2026",
    ],
    insight: "Benchmark global futuro para reguladores como BACEN e ANPD.",
  },
];

function IntelCard({ item, index }: { item: IntelItem; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.08, duration: 0.5 }}
      className="p-5 rounded-lg transition-all duration-300 hover:translate-y-[-1px]"
      style={{
        background: "#171A21",
        border: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded flex items-center justify-center"
            style={{ background: "rgba(59,130,246,0.1)" }}
          >
            <Icon size={15} style={{ color: "#3B82F6" }} />
          </div>
          <div>
            <p style={{ color: "#6B7280", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em" }}>
              {item.type.toUpperCase()}
            </p>
          </div>
        </div>
        {item.isSystemic && (
          <span
            className="px-2 py-0.5 rounded"
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.15)",
              color: "#EF4444",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            TENDÊNCIA SISTÊMICA
          </span>
        )}
      </div>

      <h4 style={{ color: "#F3F4F6", fontSize: "13.5px", fontWeight: 600, marginBottom: 12, lineHeight: 1.4, fontFamily: "Inter, sans-serif" }}>
        {item.source}
      </h4>

      <div className="space-y-1.5 mb-4">
        {item.highlights.map((h, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#4B5563" }} />
            <span style={{ color: "#9CA3AF", fontSize: "12px", lineHeight: 1.5 }}>{h}</span>
          </div>
        ))}
      </div>

      <div className="pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p style={{ color: "#6B7280", fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", marginBottom: 4 }}>
          INSIGHT ESTRATÉGICO
        </p>
        <p style={{ color: "#D1D5DB", fontSize: "12px", lineHeight: 1.5 }}>{item.insight}</p>
      </div>
    </motion.div>
  );
}

export function MarketIntelligence() {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rounded-full" style={{ background: "#F59E0B" }} />
        <h2 style={{ color: "white", fontSize: "18px", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>
          Inteligência de Mercado & Padrões Técnicos
        </h2>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          <p style={{ color: "#6B7280", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", marginBottom: 12 }}>
            RELATÓRIOS SETORIAIS
          </p>
          <div className="space-y-3">
            {sectorReports.map((item, i) => (
              <IntelCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div>
          <p style={{ color: "#6B7280", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", marginBottom: 12 }}>
            PADRÕES TÉCNICOS
          </p>
          <div className="space-y-3">
            {techStandards.map((item, i) => (
              <IntelCard key={i} item={item} index={i + sectorReports.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
