"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const shoeRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (window.innerWidth < 768) return;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (shoeRef.current) shoeRef.current.style.transform = `translateY(${y * 0.35}px)`;
        if (orb1Ref.current) orb1Ref.current.style.transform = `translateY(${y * 0.18}px)`;
        if (orb2Ref.current) orb2Ref.current.style.transform = `translateY(${y * 0.08}px)`;
        if (gridRef.current) gridRef.current.style.transform = `translateY(${y * 0.05}px)`;
        if (textRef.current) textRef.current.style.transform = `translateY(${y * 0.12}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: "#0A0A0A",
      }}
    >
      {/* Background grid */}
      <div
        ref={gridRef}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      {/* Glow orb 1 — moves faster */}
      <div
        ref={orb1Ref}
        className="animate-glow-pulse"
        style={{
          position: "absolute",
          width: "600px",
          height: "500px",
          background: "#00BFFF",
          borderRadius: "50%",
          right: "-5%",
          top: "10%",
          filter: "blur(90px)",
          opacity: 0.12,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      {/* Glow orb 2 — moves slower */}
      <div
        ref={orb2Ref}
        className="animate-glow-pulse"
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "#0060FF",
          borderRadius: "50%",
          right: "20%",
          bottom: "15%",
          filter: "blur(90px)",
          opacity: 0.12,
          animationDelay: "1s",
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      {/* Shoe image panel — fastest layer, most foreground-like */}
      <div
        ref={shoeRef}
        className="shoe-panel"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "58%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none",
          willChange: "transform",
        }}
      >
        <div
          className="animate-float"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('/uploads/gemini-2.5-flash-image_I_want_better_quality_images_from_those_tenis_to_use_in_the_website_I_m_creating-0.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right,#0A0A0A 0%,rgba(10,10,10,.7) 18%,rgba(10,10,10,.2) 35%,transparent 55%)",
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: "linear-gradient(transparent,#0A0A0A)",
          }}
        />
        {/* Top fade */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "18%",
            background: "linear-gradient(#0A0A0A,transparent)",
          }}
        />
        {/* LED strip */}
        <div
          className="animate-led-blink"
          style={{
            position: "absolute",
            bottom: "31%",
            right: "12%",
            width: "200px",
            height: "4px",
            background: "#00BFFF",
            borderRadius: "2px",
            boxShadow:
              "0 0 18px #00BFFF, 0 0 36px rgba(0,191,255,.5), 0 0 60px rgba(0,191,255,.25)",
          }}
        />
        {/* Scan line */}
        <div
          className="animate-scan"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg,transparent,rgba(0,191,255,.4),transparent)",
          }}
        />
      </div>

      {/* Hero text — drifts up gently, stays readable */}
      <div
        ref={textRef}
        className="hero-text"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "620px",
          padding: "72px 0 0 80px",
          willChange: "transform",
        }}
      >
        {/* Pre-sale badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            border: "1px solid rgba(0,191,255,.35)",
            borderRadius: "100px",
            marginBottom: "40px",
            background: "rgba(0,191,255,.06)",
          }}
        >
          <div
            className="animate-led-blink"
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#00BFFF",
              boxShadow: "0 0 8px #00BFFF",
              animationDuration: "3s",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "2.5px",
              color: "#00BFFF",
            }}
          >
            PRÉ-VENDA EXCLUSIVA
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(56px,7vw,92px)",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-3px",
            marginBottom: "28px",
          }}
        >
          AMARRE.
          <br />
          CONECTE.
          <br />
          <span style={{ color: "#00BFFF" }}>VÁ.</span>
        </h1>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "rgba(255,255,255,.6)",
            maxWidth: "420px",
            marginBottom: "48px",
          }}
        >
          O primeiro tênis com sistema de amarração automática adaptativa do
          mundo. Tecnologia de IA que aprende com cada passo.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "56px",
            flexWrap: "wrap",
          }}
        >
          <a href="#comprar">
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "var(--accent)",
                color: "#000",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                padding: "14px 30px",
                borderRadius: "4px",
                cursor: "pointer",
                border: "none",
                fontFamily: "inherit",
                transition: "all .25s",
                position: "relative",
                overflow: "hidden",
                textTransform: "uppercase",
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget;
                el.style.background = "#1ACFFF";
                el.style.boxShadow =
                  "0 0 50px rgba(0,191,255,.45), 0 8px 24px rgba(0,0,0,.5)";
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--accent)";
                el.style.boxShadow = "";
              }}
            >
              Garantir o meu →
            </button>
          </a>
          <a href="#tecnologia">
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "rgba(255,255,255,.65)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: ".5px",
                padding: "14px 24px",
                borderRadius: "4px",
                cursor: "pointer",
                border: "1px solid var(--border2)",
                transition: "all .25s",
                fontFamily: "inherit",
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget;
                el.style.color = "#fff";
                el.style.borderColor = "rgba(0,191,255,.45)";
                el.style.background = "var(--accent-dim)";
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget;
                el.style.color = "rgba(255,255,255,.65)";
                el.style.borderColor = "var(--border2)";
                el.style.background = "transparent";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              Ver tecnologia
            </button>
          </a>
        </div>

        {/* Color chips */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "2px",
              color: "var(--text2)",
            }}
          >
            CORES:
          </span>
          {[
            {
              gradient: "linear-gradient(135deg,#F0F0F0,#C8C8C8)",
              border: "rgba(255,255,255,.3)",
              label: "Branco / Preto",
            },
            {
              gradient: "linear-gradient(135deg,#222,#0A0A0A)",
              border: "rgba(255,255,255,.2)",
              label: "Preto / Preto",
            },
          ].map((c) => (
            <div
              key={c.label}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: c.gradient,
                  border: `2px solid ${c.border}`,
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,.6)",
                }}
              >
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.4,
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "3px", color: "#fff" }}>
          SCROLL
        </span>
        <div
          className="animate-float-scroll"
          style={{
            width: "1px",
            height: "32px",
            background: "linear-gradient(to bottom,#fff,transparent)",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-text {
            padding: 100px 24px 40px !important;
            max-width: 100% !important;
            z-index: 3 !important;
          }
          /* On mobile the shoe becomes a full-bleed background with heavy fade */
          .shoe-panel {
            width: 100% !important;
            opacity: 0.35 !important;
          }
        }
      `}</style>
    </section>
  );
}
