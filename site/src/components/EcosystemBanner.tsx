"use client";

import { useEffect, useRef } from "react";

export default function EcosystemBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;
    const apply = () => {
      const section = sectionRef.current;
      if (!section || !imgRef.current) return;
      const rect = section.getBoundingClientRect();
      const sectionCenterY = rect.top + rect.height / 2;
      const viewportCenterY = window.innerHeight / 2;
      // offset=0 when section is centered in viewport; negative above, positive below
      const offset = (sectionCenterY - viewportCenterY) * 0.25;
      imgRef.current.style.transform = `translateY(${offset}px)`;
    };

    const onScroll = () => {
      if (window.innerWidth < 768) return;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { apply(); ticking = false; });
    };

    apply(); // set initial position before first scroll
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0A0A0A",
        padding: 0,
        overflow: "hidden",
        position: "relative",
        lineHeight: 0,
        height: "65vh",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src="/uploads/Gemini_Generated_Image_u1f4mxu1f4mxu1f4.png"
        alt="LACX — Tênis, App e Tecnologia"
        style={{
          width: "100%",
          display: "block",
          height: "75vh",      /* taller than the 65vh clip — gives parallax room */
          objectFit: "cover",
          objectPosition: "center 35%",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(transparent,#0F0F0F)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "20%",
          background: "linear-gradient(#0A0A0A,transparent)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
