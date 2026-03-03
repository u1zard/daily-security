import { useState } from "react";
import { HeroHeader } from "./components/hero-header";
import { RegulatoryCards } from "./components/regulatory-cards";
import { MarketIntelligence } from "./components/market-intelligence";
import { LegislativeTimeline } from "./components/legislative-timeline";
import { StrategicTrends } from "./components/strategic-trends";
import { FilterBar } from "./components/filter-bar";
import { Shield, Moon, Sun } from "lucide-react";

export default function App() {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    regulador: [],
    jurisdicao: [],
    risco: [],
    tipo: [],
  });
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: isDark ? "#0F1115" : "#F8F9FB",
        fontFamily: "Inter, -apple-system, sans-serif",
        transition: "background 0.3s ease",
      }}
    >
      {/* Top bar */}
      <div
        className="w-full px-6 lg:px-12 py-3 flex items-center justify-between"
        style={{ borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.06)"}` }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #3B82F6, #6366F1)" }}
          >
            <Shield size={14} color="white" />
          </div>
          <span style={{ color: isDark ? "#6B7280" : "#9CA3AF", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em" }}>
            DAILY SECURITY
          </span>
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
          style={{
            background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)"}`,
            cursor: "pointer",
          }}
        >
          {isDark ? (
            <Sun size={14} style={{ color: "#9CA3AF" }} />
          ) : (
            <Moon size={14} style={{ color: "#6B7280" }} />
          )}
        </button>
      </div>

      {/* Main content */}
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-8">
        <HeroHeader />
        <FilterBar activeFilters={activeFilters} onFilterChange={setActiveFilters} />
        <RegulatoryCards />
        <MarketIntelligence />
        <LegislativeTimeline />
        <StrategicTrends />

        {/* Footer */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p style={{ color: "#4B5563", fontSize: "11px" }}>
            Daily Security — Regulatory Intelligence Report • 03 de Março de 2026
          </p>
          <p style={{ color: "#374151", fontSize: "10px", letterSpacing: "0.08em" }}>
            CLASSIFICAÇÃO: USO INTERNO • CONFIDENCIAL
          </p>
        </div>
      </div>
    </div>
  );
}
