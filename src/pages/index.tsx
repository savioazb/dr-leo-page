import { BarraAgendar } from "@/components/BarraAgendar";
import { Cabecalho } from "@/components/Cabecalho";
import { FaixaInfo } from "@/components/FaixaInfo";
import { Fechamento } from "@/components/Fechamento";
import { OndeAtendo } from "@/components/OndeAtendo";
import { OQueEuTrato } from "@/components/OQueEuTrato";
import { Seo } from "@/components/Seo";
import { Sobre } from "@/components/Sobre";
import { Topo } from "@/components/Topo";

export default function Home() {
  return (
    <>
      <Seo
        titulo="Dr. Leonardo Marcolino | Ortopedia e cirurgia do quadril em Niterói"
        // a confirmar com o Leonardo: "Atuação em cirurgia do quadril"
        descricao="Dr. Leonardo Marcolino, médico ortopedista e traumatologista com atuação em cirurgia do quadril. Atendimento em Niterói, por convênio e particular. Agende sua consulta."
        caminho="/"
      />
      {/* Espaço para a barra fixa do celular não cobrir o fim da página */}
      <div className="pb-[calc(72px+env(safe-area-inset-bottom))] lg:pb-0">
        <Cabecalho />
        <main>
          <Topo />
          <FaixaInfo />
          <OQueEuTrato />
          <Sobre />
          <OndeAtendo />
        </main>
        <Fechamento />
      </div>
      <BarraAgendar />
    </>
  );
}
