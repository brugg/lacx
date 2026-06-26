"use client";

const steps = [
  {
    num: "01",
    title: "Calça o pé",
    desc: "Vista normalmente. Os sensores ativam automaticamente ao detectar seu pé.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M10 4 Q6 7 6 14 Q6 22 14 24 Q22 22 22 14 Q22 7 18 4" stroke="rgba(255,255,255,.8)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M10 4 Q14 2 18 4" stroke="rgba(255,255,255,.8)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="3" fill="rgba(0,191,255,.7)" />
      </svg>
    ),
    highlight: false,
  },
  {
    num: "02",
    title: "Sensores escaneiam",
    desc: "Pressão, formato e movimento são mapeados com precisão milimétrica em milissegundos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="8" stroke="rgba(0,191,255,.8)" strokeWidth="1.3" strokeDasharray="4 3" />
        <path d="M9 14 Q11 10 14 14 Q17 18 19 14" stroke="rgba(255,255,255,.7)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    highlight: false,
  },
  {
    num: "03",
    title: "Motor ajusta",
    desc: "O motor silencioso tensiona os cabos de Kevlar® ao ponto exato para o seu conforto.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="5" stroke="#00BFFF" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="9" stroke="rgba(0,191,255,.3)" strokeWidth="1" strokeDasharray="5 3" />
        <path d="M14 9 L14 5" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    highlight: false,
  },
  {
    num: "04",
    title: "Ajuste perfeito",
    desc: "Conforto e performance automáticos. Pronto para ir mais longe.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 14 L11.5 20 L22 8" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    highlight: true,
  },
];

const delayClass = ["d1", "d2", "d3", "d4"];

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          width: "800px",
          height: "300px",
          background: "#00BFFF",
          borderRadius: "50%",
          filter: "blur(240px)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />

      <div
        className="section-inner"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "140px 80px" }}
      >
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "88px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", color: "#00BFFF", marginBottom: "16px" }}>
            PROCESSO
          </div>
          <h2 style={{ fontSize: "clamp(36px,4.5vw,58px)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "16px" }}>
            Simples como calçar.
          </h2>
          <p style={{ fontSize: "16px", fontWeight: 300, color: "var(--text2)", maxWidth: "440px", margin: "0 auto", lineHeight: 1.7 }}>
            Quatro passos. Zero esforço. Ajuste automático perfeito.
          </p>
        </div>

        {/* Steps row */}
        <div
          className="steps-row"
          style={{ display: "flex", alignItems: "flex-start", gap: 0, position: "relative" }}
        >
          {/* Connecting line */}
          <div
            className="step-connector"
            style={{
              position: "absolute",
              top: "36px",
              left: "calc(12.5% + 20px)",
              right: "calc(12.5% + 20px)",
              height: "1px",
              background:
                "linear-gradient(to right,rgba(0,191,255,.15),rgba(0,191,255,.4),rgba(0,191,255,.4),rgba(0,191,255,.15))",
            }}
          />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal ${delayClass[i]}`}
              style={{ flex: 1, textAlign: "center", padding: "0 20px" }}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    border: step.highlight ? "1.5px solid #00BFFF" : "1.5px solid rgba(0,191,255,.4)",
                    background: step.highlight ? "rgba(0,191,255,.1)" : "rgba(0,191,255,.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                    flexShrink: 0,
                    boxShadow: step.highlight ? "0 0 24px rgba(0,191,255,.25)" : "none",
                  }}
                >
                  {step.icon}
                </div>
              </div>
              <div
                style={{
                  fontSize: "72px",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(0,191,255,.5)",
                  letterSpacing: "-3px",
                  marginBottom: "14px",
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "8px",
                  color: step.highlight ? "#00BFFF" : "#fff",
                }}
              >
                {step.title}
              </div>
              <p style={{ fontSize: "13px", fontWeight: 400, color: "var(--text2)", lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-row { flex-direction: column !important; gap: 40px !important; align-items: flex-start !important; }
          .step-connector { display: none !important; }
          .section-inner { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
