"use client";

const benefits = [
  {
    title: "Mais Estabilidade",
    desc: "Ajuste firme e preciso que elimina movimentos indesejados e dá segurança real em cada passo, sprint ou curva.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3 L10 17M3 10 L17 10" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="6" stroke="rgba(0,191,255,.4)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Maior Conforto",
    desc: "Amortecimento responsivo e inteligente que reduz impactos e distribui a pressão de forma uniforme.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 15 Q8 8 10 10 Q12 12 15 5" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="10" cy="17" r="2" fill="rgba(0,191,255,.4)" />
      </svg>
    ),
  },
  {
    title: "Redução de Lesões",
    desc: "Ajuste personalizado que diminui atrito, pontos de pressão e o risco de lesões por uso prolongado.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6 10 L8 12 L14 6" stroke="#00BFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="10" r="7.5" stroke="rgba(0,191,255,.35)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Desempenho Superior",
    desc: "Mais energia, mais segurança e mais performance em cada sessão. Do treino à competição.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 16 L10 4 L16 16" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 12 L13 12" stroke="#00BFFF" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const idealChips = [
  { label: "Corrida", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11 L5 4 L7 8 L9 6 L11 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { label: "Treino", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 10 Q7 4 10 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /><line x1="4" y1="10" x2="10" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg> },
  { label: "Dia a dia", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" /><path d="M3 13 Q3 9 7 9 Q11 9 11 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg> },
  { label: "Trilhas leves", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12 L5 7 L7 9 L9 5 L12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { label: "Viagens", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="5" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" /><path d="M5 5 L5 3.5 Q5 2 7 2 Q9 2 9 3.5 L9 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg> },
];

const delayClass = ["d1", "d2", "d3", "d4"];

export default function Performance() {
  return (
    <section
      id="performance"
      style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          right: "-100px",
          bottom: "-100px",
          width: "600px",
          height: "400px",
          background: "#00BFFF",
          borderRadius: "50%",
          filter: "blur(220px)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />

      <div
        className="section-inner"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "140px 80px" }}
      >
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", color: "#00BFFF", marginBottom: "16px" }}>
            RESULTADOS
          </div>
          <h2 style={{ fontSize: "clamp(36px,4.5vw,58px)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "16px" }}>
            Feito para ir mais longe.
          </h2>
          <p style={{ fontSize: "16px", fontWeight: 300, color: "var(--text2)", maxWidth: "440px", margin: "0 auto", lineHeight: 1.7 }}>
            Desenvolvido para atletas, urbanos e para todos que buscam o melhor de cada passo.
          </p>
        </div>

        {/* Benefit cards */}
        <div
          className="perf-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px", marginBottom: "60px" }}
        >
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`reveal ${delayClass[i]}`}
              style={{
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "32px 28px",
                transition: "all .3s",
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(0,191,255,.25)";
                el.style.background = "#181820";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.background = "var(--bg3)";
                el.style.transform = "";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "var(--accent-dim)",
                    border: "1px solid rgba(0,191,255,.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {b.icon}
                </div>
                <div style={{ fontSize: "19px", fontWeight: 700, letterSpacing: "-.3px" }}>{b.title}</div>
              </div>
              <p style={{ fontSize: "14px", fontWeight: 400, color: "var(--text2)", lineHeight: 1.65 }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Ideal para chips */}
        <div className="reveal" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", color: "var(--text2)", marginBottom: "20px" }}>
            IDEAL PARA
          </div>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            {idealChips.map((chip) => (
              <div
                key={chip.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 18px",
                  border: "1px solid var(--border2)",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--text2)",
                  transition: "all .25s",
                  whiteSpace: "nowrap",
                  cursor: "default",
                }}
                onMouseOver={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "#fff";
                  el.style.borderColor = "rgba(0,191,255,.4)";
                  el.style.background = "var(--accent-dim)";
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--text2)";
                  el.style.borderColor = "var(--border2)";
                  el.style.background = "";
                }}
              >
                {chip.icon}
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .section-inner { padding: 80px 24px !important; }
          .perf-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
