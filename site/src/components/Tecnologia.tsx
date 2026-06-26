"use client";

import { useEffect, useRef } from "react";

const techCards = [
  {
    num: "01",
    title: "Dial Inteligente",
    desc: "Ajusta a tensão dos cabos com precisão milimétrica através de um motor silencioso.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="#00BFFF" strokeWidth="1.3" />
        <circle cx="9" cy="9" r="2.5" fill="#00BFFF" />
        <line x1="9" y1="2" x2="9" y2="5.5" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Cabos de Kevlar®",
    desc: "Cabos ultra resistentes e leves que se ajustam ao formato único do seu pé.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 15 Q9 2 15 15" stroke="#00BFFF" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <path d="M5 12 Q9 5 13 12" stroke="rgba(0,191,255,.5)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Sensores de Pressão",
    desc: "Detectam o pé e o movimento em tempo real para um ajuste automático e personalizado.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 9 Q5 5 9 9 Q13 13 16 9" stroke="#00BFFF" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <circle cx="9" cy="9" r="1.8" fill="#00BFFF" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Motor Silencioso",
    desc: "Compacto, eficiente e de alta durabilidade. Praticamente inaudível durante o uso.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="3.5" stroke="#00BFFF" strokeWidth="1.3" />
        <circle cx="9" cy="9" r="7" stroke="rgba(0,191,255,.4)" strokeWidth="1" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Bateria Recarregável",
    desc: "Até 30 dias com uma carga. Carregamento via USB-C. Indicador LED de status.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="5" width="13" height="8" rx="1.5" stroke="#00BFFF" strokeWidth="1.3" />
        <path d="M15 8v3" stroke="#00BFFF" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="4" y="7.5" width="7" height="3" rx=".8" fill="#00BFFF" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Sola Inteligente",
    desc: "Amortecimento responsivo e LEDs de status que indicam o nível de ajuste e bateria.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 13 Q5 10 9 12 Q13 14 16 11" stroke="#00BFFF" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <rect x="5" y="13.5" width="8" height="2.5" rx="1.25" fill="rgba(0,191,255,.4)" />
      </svg>
    ),
  },
];

const delayClass = ["d1", "d2", "d3", "d4", "d5", "d6"];

export default function Tecnologia() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const explodedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (window.innerWidth < 768) return;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) { ticking = false; return; }
        const rect = section.getBoundingClientRect();
        const progress = -rect.top; // px scrolled past section top
        if (progress < 0 || progress > rect.height + window.innerHeight) { ticking = false; return; }
        // Glow orb drifts up slowly
        if (glowRef.current) glowRef.current.style.transform = `translateY(calc(-50% + ${progress * 0.08}px))`;
        // Exploded shoe drifts up at medium speed — feels like it floats
        if (explodedRef.current) explodedRef.current.style.transform = `translateY(${progress * -0.06}px)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="tecnologia"
      ref={sectionRef}
      style={{
        background: "var(--bg2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          right: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          background: "#00BFFF",
          borderRadius: "50%",
          filter: "blur(200px)",
          opacity: 0.04,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      <div
        className="section-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "140px 80px",
        }}
      >
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", color: "#00BFFF", marginBottom: "16px" }}>
            INOVAÇÃO
          </div>
          <h2 style={{ fontSize: "clamp(36px,4.5vw,58px)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "20px" }}>
            Engenharia de precisão.
          </h2>
          <p style={{ fontSize: "16px", fontWeight: 300, color: "var(--text2)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Seis componentes integrados, um sistema unificado de IA que se adapta ao seu corpo em tempo real.
          </p>
        </div>

        {/* Exploded view image */}
        <div ref={explodedRef} className="reveal exploded-wrap" style={{ position: "relative", margin: "0 -80px 72px", willChange: "transform" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/uploads/Gemini_Generated_Image_3ebczi3ebczi3ebc.png"
            alt="LACX — Vista explodida com LED"
            style={{ width: "100%", display: "block" }}
          />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "18%", background: "linear-gradient(var(--bg2),transparent)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "18%", background: "linear-gradient(transparent,var(--bg2))", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "10%", background: "linear-gradient(to right,var(--bg2),transparent)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "10%", background: "linear-gradient(to left,var(--bg2),transparent)", pointerEvents: "none" }} />
        </div>

        {/* 6 Tech cards */}
        <div
          className="tech-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "16px",
            marginBottom: "64px",
          }}
        >
          {techCards.map((card, i) => (
            <div
              key={card.num}
              className={`tech-card reveal ${delayClass[i]}`}
              style={{
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "28px 24px 26px",
                transition: "all .3s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(0,191,255,.28)";
                el.style.transform = "translateY(-4px)";
                el.style.background = "#181820";
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.transform = "";
                el.style.background = "var(--bg3)";
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "2px solid rgba(0,191,255,.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "18px",
                  background: "rgba(0,191,255,.06)",
                }}
              >
                {card.icon}
              </div>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", color: "#00BFFF", marginBottom: "8px" }}>
                {card.num}
              </div>
              <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "10px" }}>{card.title}</div>
              <p style={{ fontSize: "13px", fontWeight: 400, color: "var(--text2)", lineHeight: 1.65 }}>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* IA Adaptativa highlight */}
        <div
          className="reveal"
          style={{
            border: "1px solid rgba(0,191,255,.25)",
            borderRadius: "10px",
            padding: "36px 40px",
            background: "rgba(0,191,255,.04)",
            display: "flex",
            alignItems: "center",
            gap: "48px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "#00BFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 30px rgba(0,191,255,.4)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 3 L19 8 L19 14 L11 19 L3 14 L3 8 Z" stroke="#000" strokeWidth="1.5" />
                <circle cx="11" cy="11" r="2.5" fill="#000" />
                <line x1="11" y1="6" x2="11" y2="8.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="11" y1="13.5" x2="11" y2="16" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2.5px", color: "#00BFFF", marginBottom: "4px" }}>EXCLUSIVO</div>
              <div style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-.5px" }}>IA Adaptativa</div>
            </div>
          </div>
          <p style={{ fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,.65)", lineHeight: 1.7, maxWidth: "520px" }}>
            O sistema aprende com seu jeito de andar e se ajusta automaticamente para o máximo conforto e performance. A cada uso, o LACX fica mais seu.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tech-grid { grid-template-columns: 1fr !important; }
          .section-inner { padding: 80px 24px !important; }
          /* Exploded image: cancel the negative margin bleed on mobile */
          .exploded-wrap { margin: 0 0 48px !important; }
        }
      `}</style>
    </section>
  );
}
