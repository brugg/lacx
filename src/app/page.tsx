import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Tecnologia from "@/components/Tecnologia";
import ComoFunciona from "@/components/ComoFunciona";
import EcosystemBanner from "@/components/EcosystemBanner";
import AppLacx from "@/components/AppLacx";
import Performance from "@/components/Performance";
import Comprar from "@/components/Comprar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Tecnologia />
        <ComoFunciona />
        <EcosystemBanner />
        <AppLacx />
        <Performance />
        <Comprar />
      </main>
      <Footer />
    </>
  );
}
