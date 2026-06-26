"use client";

import { useState } from "react";

const sizes = [37, 38, 39, 40, 41, 42, 43, 44];

const models = [
  {
    id: "branco",
    label: "Branco / Preto",
    sub: "Edição lançamento — disponibilidade limitada",
    img: "/uploads/tenis-white copy.png",
    bg: "#0E0E0E",
  },
  {
    id: "preto",
    label: "Preto / Preto",
    sub: "Clássico futurista — disponibilidade limitada",
    img: "/uploads/tenis-black copy.png",
    bg: "#0A0A0A",
  },
];

const badges = [
  { label: "Garantia 1 ano", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 7 L6.5 9 L10 5" stroke="rgba(0,191,255,.7)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><circle cx="7" cy="7" r="5.5" stroke="rgba(0,191,255,.35)" strokeWidth="1" /></svg> },
  { label: "Envio para todo o Brasil", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 5 L7 3 L12 5 L12 9 Q12 12 7 13 Q2 12 2 9 Z" stroke="rgba(0,191,255,.5)" strokeWidth="1" fill="none" /></svg> },
  { label: "Pré-venda exclusiva", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="rgba(0,191,255,.5)" strokeWidth="1" /><path d="M7 4 L7 7 L9.5 7" stroke="rgba(0,191,255,.7)" strokeWidth="1.3" strokeLinecap="round" /></svg> },
];

export default function Comprar() {
  const [activeModel, setActiveModel] = useState("branco");
  const [activeSize, setActiveSize] = useState<number | null>(null);

  return (
    <section
      id="comprar"
      style={{ background: "var(--bg2)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "400px",
          background: "#00BFFF",
          borderRadius: "50%",
          filter: "blur(240px)",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      />

      <div
        className="section-inner"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "140px 80px" }}
      >
        {/* Price header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", color: "#00BFFF", marginBottom: "16px" }}>
            PRÉ-VENDA EXCLUSIVA
          </div>
          <h2 style={{ fontSize: "clamp(36px,4.5vw,58px)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "32px" }}>
            Seu próximo passo.
          </h2>
          <div
            style={{
              display: "inline-block",
              padding: "32px 64px",
              border: "1px solid rgba(0,191,255,.3)",
              borderRadius: "12px",
              background: "rgba(0,191,255,.04)",
            }}
          >
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", color: "var(--text2)", marginBottom: "8px" }}>
              PREÇO LANÇAMENTO
            </div>
            <div style={{ fontSize: "clamp(44px,6vw,72px)", fontWeight: 700, letterSpacing: "-3px", lineHeight: 1 }}>
              R$&nbsp;1.299
              <span style={{ fontSize: ".45em", color: "var(--text2)", letterSpacing: 0, fontWeight: 400 }}>,00</span>
            </div>
            <div style={{ fontSize: "12px", color: "var(--text2)", marginTop: "8px" }}>em até 12x sem juros</div>
          </div>
        </div>

        {/* Model cards */}
        <div
          className="models-row"
          style={{ display: "flex", gap: "24px", marginBottom: "48px" }}
        >
          {models.map((model, i) => {
            const isActive = activeModel === model.id;
            return (
              <div
                key={model.id}
                className={`reveal d${i + 1}`}
                onClick={() => setActiveModel(model.id)}
                style={{
                  flex: 1,
                  border: isActive ? "1px solid var(--accent)" : "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "24px",
                  cursor: "pointer",
                  transition: "all .3s",
                  background: isActive ? "rgba(0,191,255,.055)" : "var(--bg3)",
                  boxShadow: isActive ? "0 0 40px rgba(0,191,255,.1),inset 0 0 30px rgba(0,191,255,.04)" : "none",
                }}
              >
                <div
                  style={{
                    height: "240px",
                    background: model.bg,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "radial-gradient(ellipse at 50% 80%,rgba(0,191,255,.08) 0%,transparent 65%)",
                      pointerEvents: "none",
                    }}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={model.img}
                    alt={model.label}
                    style={{
                      width: "92%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      filter: "drop-shadow(0 20px 48px rgba(0,0,0,.65))",
                    }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <div style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-.3px" }}>{model.label}</div>
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      border: isActive ? "2px solid #00BFFF" : "2px solid var(--border2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: isActive ? "#00BFFF" : "transparent",
                        transition: "background .2s",
                      }}
                    />
                  </div>
                </div>
                <div style={{ fontSize: "13px", color: "var(--text2)" }}>{model.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Size selector */}
        <div className="reveal" style={{ marginBottom: "48px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", color: "var(--text2)", marginBottom: "16px" }}>
            SELECIONE SUA NUMERAÇÃO
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {sizes.map((sz) => {
              const isActive = activeSize === sz;
              return (
                <button
                  key={sz}
                  onClick={() => setActiveSize(sz)}
                  style={{
                    width: "52px",
                    height: "46px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: isActive ? "1px solid var(--accent)" : "1px solid var(--border2)",
                    background: isActive ? "var(--accent-dim)" : "transparent",
                    color: isActive ? "var(--accent)" : "var(--text2)",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all .2s",
                    borderRadius: "4px",
                    fontFamily: "inherit",
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "rgba(0,191,255,.5)";
                      e.currentTarget.style.color = "#fff";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "var(--border2)";
                      e.currentTarget.style.color = "var(--text2)";
                    }
                  }}
                >
                  {sz}
                </button>
              );
            })}
          </div>
        </div>

        {/* Badges */}
        <div className="reveal" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
          {badges.map((b) => (
            <div
              key={b.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "9px 16px",
                border: "1px solid var(--border2)",
                borderRadius: "100px",
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--text2)",
              }}
            >
              {b.icon}
              {b.label}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--accent)",
              color: "#000",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              padding: "18px 48px",
              borderRadius: "4px",
              cursor: "pointer",
              border: "none",
              fontFamily: "inherit",
              textTransform: "uppercase",
              position: "relative",
              overflow: "hidden",
              transition: "all .25s",
            }}
            onMouseOver={(e) => {
              const el = e.currentTarget;
              el.style.background = "#1ACFFF";
              el.style.boxShadow = "0 0 50px rgba(0,191,255,.45), 0 8px 24px rgba(0,0,0,.5)";
            }}
            onMouseOut={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--accent)";
              el.style.boxShadow = "";
            }}
          >
            Comprar agora →
          </button>
          <p style={{ fontSize: "13px", color: "var(--text2)" }}>
            Entrega prevista para o 4º trimestre de 2025
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .models-row { flex-direction: column !important; }
          .section-inner { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
