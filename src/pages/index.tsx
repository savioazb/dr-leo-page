import { Contato } from "@/components/Contato";
import { Convenios } from "@/components/Convenios";
import { Especialidades } from "@/components/Especialidades";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Sobre from "@/components/Sobre";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Dr. Leonardo Marcolino</title>
        </Head>
      </div>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Especialidades />
        <Contato />
        <Convenios />
      </main>
      <Footer />
    </>
  );
}
