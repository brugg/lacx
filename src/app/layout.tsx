import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "LACX — Amarre. Conecte. Vá.",
  description:
    "O primeiro tênis com sistema de amarração automática adaptativa do mundo. Tecnologia de IA que aprende com cada passo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} h-full`}>
      <body
        style={{ fontFamily: "var(--font-space), -apple-system, sans-serif" }}
        className="min-h-full"
      >
        {children}
      </body>
    </html>
  );
}
