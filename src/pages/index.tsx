import { Contato } from "@/components/Contato";
import { Convenios } from "@/components/Convenios";
import { Especialidades } from "@/components/Especialidades";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Sobre } from "@/components/Sobre";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1360px] m-auto px-20 py-10">
        <Hero />
        <Sobre />
        <Especialidades />
        <Contato />
        <Convenios />
      </main>
      <Footer />
    </>
  )
}
