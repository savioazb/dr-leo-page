import { Contato } from "@/components/Contato";
import { Convenios } from "@/components/Convenios";
import { Especialidades } from "@/components/Especialidades";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Sobre } from "@/components/Sobre";
import SobreTeste from "@/components/SobreTeste";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreTeste />
        <Especialidades />
        <Contato />
        <Convenios />
      </main>
      <Footer />
    </>
  );
}
