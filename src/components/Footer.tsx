"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "80px 80px 60px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "60px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                <path d="M4 3 L20 19.5 L36 3 L40 7 L24.5 20.5 L40 37 L36 40 L20 23 L4 40 L0 37 L15.5 20.5 L0 7 Z" fill="white" />
              </svg>
              <span style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "4px" }}>LACX</span>
            </div>
            <p style={{ fontSize: "14px", fontWeight: 300, color: "var(--text2)", lineHeight: 1.65, maxWidth: "280px" }}>
              O futuro se ajusta a você.<br />
              O primeiro tênis com sistema de amarração automática adaptativa.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
            {/* Product */}
            <div>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2.5px", color: "var(--text2)", marginBottom: "20px" }}>
                PRODUTO
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "Tecnologia", href: "#tecnologia" },
                  { label: "Como Funciona", href: "#como-funciona" },
                  { label: "App LACX", href: "#app" },
                  { label: "Pré-venda", href: "#comprar" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,.6)",
                      textDecoration: "none",
                      transition: "color .2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.6)")}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2.5px", color: "var(--text2)", marginBottom: "20px" }}>
                SOCIAL
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a
                  href="https://instagram.com/lacx.oficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,.6)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "color .2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.6)")}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="1" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="10.5" cy="3.5" r="1" fill="currentColor" />
                  </svg>
                  @lacx.oficial
                </a>
                <a
                  href="https://tiktok.com/@lacx.oficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,.6)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "color .2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.6)")}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M8.5 1 Q9 5 12.5 6 L12.5 8.5 Q10 8.5 8.5 7 L8.5 10.5 Q8.5 13 6 13 Q3.5 13 3.5 10.5 Q3.5 8 6 8 L6 10.5 Q5 10.5 5 10.5 Q4.5 10.5 4.5 11 Q4.5 11.5 6 11.5 Q7 11.5 7 10.5 L7 1 Z" stroke="currentColor" strokeWidth="1" fill="none" strokeLinejoin="round" />
                  </svg>
                  @lacx.oficial
                </a>
                <a
                  href="https://lacx.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,.6)",
                    textDecoration: "none",
                    transition: "color .2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.6)")}
                >
                  LACX.COM.BR
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "28px",
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "var(--text3)" }}>© 2025 LACX. Todos os direitos reservados.</p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              className="animate-led-blink"
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#00BFFF",
                boxShadow: "0 0 8px #00BFFF",
                animationDuration: "4s",
              }}
            />
            <span style={{ fontSize: "12px", fontWeight: 500, color: "var(--text3)", letterSpacing: "1px" }}>
              O FUTURO SE AJUSTA A VOCÊ.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 60px 24px 40px !important; }
        }
      `}</style>
    </footer>
  );
}
