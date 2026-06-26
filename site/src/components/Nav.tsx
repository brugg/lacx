"use client";

import { useEffect, useRef } from "react";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      if (window.scrollY > 60) {
        nav.classList.add("nav-solid");
      } else {
        nav.classList.remove("nav-solid");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 60px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "transparent",
        transition: "background .4s, border .4s, backdrop-filter .4s",
        borderBottom: "1px solid transparent",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
          <path
            d="M4 3 L20 19.5 L36 3 L40 7 L24.5 20.5 L40 37 L36 40 L20 23 L4 40 L0 37 L15.5 20.5 L0 7 Z"
            fill="white"
          />
        </svg>
        <span
          style={{
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "4px",
            marginLeft: "2px",
          }}
        >
          LACX
        </span>
      </div>

      {/* Links */}
      <div
        className="hide-mobile"
        style={{ display: "flex", alignItems: "center", gap: "36px" }}
      >
        {["Tecnologia", "Como Funciona", "App", "Performance"].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
            style={{
              color: "rgba(255,255,255,.55)",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: ".4px",
              transition: "color .2s",
              whiteSpace: "nowrap",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = "#fff")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,.55)")
            }
          >
            {label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a href="#comprar">
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "var(--accent)",
            color: "#000",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            padding: "10px 22px",
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
            el.style.boxShadow =
              "0 0 50px rgba(0,191,255,.45), 0 8px 24px rgba(0,0,0,.5)";
          }}
          onMouseOut={(e) => {
            const el = e.currentTarget;
            el.style.background = "var(--accent)";
            el.style.boxShadow = "";
          }}
        >
          Pré-venda →
        </button>
      </a>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          nav { padding: 0 24px !important; }
        }
      `}</style>
    </nav>
  );
}
