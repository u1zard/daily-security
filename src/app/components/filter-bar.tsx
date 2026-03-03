import { useState } from "react";
import { motion } from "motion/react";
import { Filter, Download, Zap, ChevronDown, X } from "lucide-react";

const filterOptions = {
  regulador: ["BACEN", "ANPD", "CMN", "SEC", "NIST", "OWASP"],
  jurisdicao: ["Brasil", "EUA", "União Europeia", "Internacional"],
  risco: ["Alto", "Médio", "Monitoramento"],
  tipo: ["Nova Norma", "Marco Legislativo", "Consulta Pública", "Governança", "Agenda"],
};

interface FilterBarProps {
  activeFilters: Record<string, string[]>;
  onFilterChange: (filters: Record<string, string[]>) => void;
}

export function FilterBar({ activeFilters, onFilterChange }: FilterBarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleFilter = (category: string, value: string) => {
    const current = activeFilters[category] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange({ ...activeFilters, [category]: updated });
  };

  const hasActiveFilters = Object.values(activeFilters).some((v) => v.length > 0);

  const clearAll = () => {
    onFilterChange({ regulador: [], jurisdicao: [], risco: [], tipo: [] });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap items-center gap-3 mb-8"
    >
      <div className="flex items-center gap-1.5 mr-2">
        <Filter size={13} style={{ color: "#6B7280" }} />
        <span style={{ color: "#6B7280", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em" }}>
          FILTROS
        </span>
      </div>

      {Object.entries(filterOptions).map(([key, values]) => {
        const labels: Record<string, string> = {
          regulador: "Regulador",
          jurisdicao: "Jurisdição",
          risco: "Nível de Risco",
          tipo: "Tipo",
        };
        const active = activeFilters[key] || [];

        return (
          <div key={key} className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors duration-200"
              style={{
                background: active.length > 0 ? "rgba(59,130,246,0.1)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${active.length > 0 ? "rgba(59,130,246,0.25)" : "rgba(255,255,255,0.06)"}`,
                color: active.length > 0 ? "#60A5FA" : "#9CA3AF",
                fontSize: "11px",
                cursor: "pointer",
              }}
            >
              {labels[key]}
              {active.length > 0 && (
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: "#3B82F6", color: "white", fontSize: "9px", fontWeight: 700 }}
                >
                  {active.length}
                </span>
              )}
              <ChevronDown size={11} />
            </button>

            {openDropdown === key && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setOpenDropdown(null)} />
                <div
                  className="absolute top-full left-0 mt-1 py-1 rounded-lg z-50 min-w-[160px]"
                  style={{
                    background: "#1E2028",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  }}
                >
                  {values.map((val) => {
                    const isActive = active.includes(val);
                    return (
                      <button
                        key={val}
                        onClick={() => toggleFilter(key, val)}
                        className="w-full text-left px-3 py-1.5 transition-colors duration-150 flex items-center gap-2"
                        style={{
                          color: isActive ? "#60A5FA" : "#9CA3AF",
                          fontSize: "12px",
                          cursor: "pointer",
                          background: isActive ? "rgba(59,130,246,0.08)" : "transparent",
                        }}
                      >
                        <span
                          className="w-3 h-3 rounded border flex items-center justify-center"
                          style={{
                            borderColor: isActive ? "#3B82F6" : "rgba(255,255,255,0.15)",
                            background: isActive ? "#3B82F6" : "transparent",
                          }}
                        >
                          {isActive && <span style={{ color: "white", fontSize: "8px" }}>✓</span>}
                        </span>
                        {val}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        );
      })}

      {hasActiveFilters && (
        <button
          onClick={clearAll}
          className="flex items-center gap-1 px-2 py-1 rounded transition-colors duration-200"
          style={{
            color: "#EF4444",
            fontSize: "10px",
            cursor: "pointer",
            background: "rgba(239,68,68,0.08)",
          }}
        >
          <X size={10} />
          Limpar
        </button>
      )}

      <div className="flex-1" />

      {/* Action buttons */}
      <button
        className="flex items-center gap-1.5 px-3 py-1.5 rounded transition-all duration-200 hover:translate-y-[-1px]"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "#9CA3AF",
          fontSize: "11px",
          cursor: "pointer",
        }}
      >
        <Download size={12} />
        Exportar PDF
      </button>

      <button
        className="flex items-center gap-1.5 px-3 py-1.5 rounded transition-all duration-200 hover:translate-y-[-1px]"
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(99,102,241,0.15))",
          border: "1px solid rgba(59,130,246,0.25)",
          color: "#60A5FA",
          fontSize: "11px",
          cursor: "pointer",
        }}
      >
        <Zap size={12} />
        Gerar Plano de Ação
      </button>
    </motion.div>
  );
}
