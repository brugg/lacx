"use client";

import { useEffect, useRef } from "react";

const appFeatures = [
  {
    title: "Ajuste Personalizado",
    desc: "Controle a pressão ideal para você e salve seus perfis favoritos.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="5" stroke="#00BFFF" strokeWidth="1.2" />
        <circle cx="8" cy="8" r="2" fill="#00BFFF" />
      </svg>
    ),
  },
  {
    title: "Modo Corrida / Casual",
    desc: "Perfis de ajuste otimizados para cada momento do seu dia.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 12 L5 4 L7 8 L9 6 L11 12" stroke="#00BFFF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Monitor de Bateria",
    desc: "Acompanhe o nível em tempo real e receba alertas antes de zerar.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="5" width="10" height="6" rx="1" stroke="#00BFFF" strokeWidth="1.2" />
        <path d="M12 7.5v1" stroke="#00BFFF" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="3.5" y="6.5" width="5" height="3" rx=".5" fill="#00BFFF" />
      </svg>
    ),
  },
  {
    title: "Estatísticas de Performance",
    desc: "Passos, distância, calorias e tempo de uso detalhados por sessão.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="#00BFFF" strokeWidth="1.2" />
        <path d="M5 10 L6.5 8 L8 10 L10 6 L12 9" stroke="#00BFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Atualizações OTA",
    desc: "Novos perfis e melhorias chegam direto no tênis via app, sem cabos.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2 L14 5 L14 9 Q14 13 8 15 Q2 13 2 9 L2 5 Z" stroke="#00BFFF" strokeWidth="1.2" />
        <path d="M5 8 L7 10 L11 6" stroke="#00BFFF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const delayClass = ["d1", "d2", "d3", "d4", "d5"];

export default function AppLacx() {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (window.innerWidth < 768) return;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section || !phoneRef.current) { ticking = false; return; }
        const rect = section.getBoundingClientRect();
        const progress = window.innerHeight - rect.top;
        if (progress < 0 || rect.top > window.innerHeight) { ticking = false; return; }
        // Phone floats up faster than surrounding content
        phoneRef.current.style.transform = `translateY(${progress * -0.07}px)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section
      id="app"
      ref={sectionRef}
      style={{ background: "var(--bg2)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          left: "-100px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          background: "#00BFFF",
          borderRadius: "50%",
          filter: "blur(220px)",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />

      <div
        className="section-inner"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "140px 80px" }}
      >
        <div className="app-cols" style={{ display: "flex", alignItems: "center", gap: "80px" }}>
          {/* Phone mockup */}
          <div ref={phoneRef} className="reveal" style={{ flexShrink: 0, position: "relative", willChange: "transform" }}>
            <div
              style={{
                position: "absolute",
                inset: "-40px",
                background: "radial-gradient(ellipse at 50% 60%,rgba(0,191,255,.12) 0%,transparent 65%)",
                pointerEvents: "none",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/uploads/tenis-app.jpg"
              alt="LACX App"
              className="phone-img"
              style={{
                width: "300px",
                display: "block",
                borderRadius: "48px",
                boxShadow: "0 40px 100px rgba(0,0,0,.8), 0 0 50px rgba(0,191,255,.12)",
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>

          {/* Features */}
          <div style={{ flex: 1 }}>
            <div className="reveal" style={{ marginBottom: "48px" }}>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", color: "#00BFFF", marginBottom: "16px" }}>
                CONECTIVIDADE
              </div>
              <h2 style={{ fontSize: "clamp(34px,4vw,52px)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.08, marginBottom: "16px" }}>
                Controle total na<br />palma da mão.
              </h2>
              <p style={{ fontSize: "15px", fontWeight: 300, color: "var(--text2)", lineHeight: 1.7, maxWidth: "420px" }}>
                O app LACX é o centro de comando do seu tênis. Mais tecnologia, mais personalização, mais controle.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "48px" }}>
              {appFeatures.map((f, i) => (
                <div
                  key={f.title}
                  className={`reveal ${delayClass[i]}`}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "18px",
                    padding: "20px 0",
                    borderBottom: i < appFeatures.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "var(--accent-dim)",
                      border: "1px solid rgba(0,191,255,.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 600, marginBottom: "4px" }}>{f.title}</div>
                    <p style={{ fontSize: "13px", color: "var(--text2)", lineHeight: 1.55 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App badges */}
            <div className="reveal" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                {
                  label: "App Store",
                  sub: "DISPONÍVEL NA",
                  icon: (
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="white">
                      <path d="M17.1 12.8c0-3.2 2.6-4.7 2.7-4.8-1.5-2.1-3.7-2.4-4.5-2.4-1.9-.2-3.8 1.1-4.7 1.1-.9 0-2.4-1.1-4-1.1-2 0-3.9 1.2-5 3-.2.4-2.1 6.3-.4 9.4 1.7 2.9 3.3 2.9 3.3 2.9s1.3-1.1 3.1-.2c0 0 1.5 1 3.1.3 1.6-.8 2.9-2.3 3.1-2.3.1 0 2.7-.5 4.1-3.2 0 0-.9-.5-1.8-2.7z" />
                      <path d="M13.4 2.3c.8-1 1.4-2.3 1.2-3.6-1.2.1-2.6.8-3.5 1.8-.8.9-1.5 2.3-1.3 3.7 1.3.1 2.7-.7 3.6-1.9z" />
                    </svg>
                  ),
                },
                {
                  label: "Google Play",
                  sub: "DISPONÍVEL NO",
                  icon: (
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                      <path d="M1 1.5 L10 11 L1 20.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M1 1.5 L17 8 L10 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 20.5 L17 14 L10 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
              ].map((badge) => (
                <div
                  key={badge.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 20px",
                    border: "1px solid var(--border2)",
                    borderRadius: "10px",
                    background: "var(--bg3)",
                  }}
                >
                  {badge.icon}
                  <div>
                    <div style={{ fontSize: "9px", color: "var(--text2)", letterSpacing: ".5px" }}>{badge.sub}</div>
                    <div style={{ fontSize: "13px", fontWeight: 600 }}>{badge.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .app-cols { flex-direction: column !important; align-items: center !important; gap: 40px !important; }
          .section-inner { padding: 80px 24px !important; }
          .phone-img { width: min(260px, 70vw) !important; border-radius: 32px !important; }
        }
      `}</style>
    </section>
  );
}
