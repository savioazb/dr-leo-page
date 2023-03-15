import { BsArrowRightShort } from "react-icons/bs";
import { Wrench, Heartbeat, Activity, FirstAidKit } from "phosphor-react";
import Link from "next/link";

export function Especialidades() {
  return (
    <section id="especialidades" className="mb-8 max-w-[1360px] m-auto py-10 px-4 md:px-8 lg:px-20">
      <article className="flex flex-col md:flex-row gap-12 justify-between mb-20 text-center md:text-left">
        <h2 className="text-3xl text-blue">
          Recupere a sua mobilidade e qualidade de vida com o tratamento
          ortopédico adequado
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-lg text-gray">
            Lesões e dores crônicas podem afetar a sua vida de diversas
            maneiras. Não espere mais para buscar ajuda e agende uma consulta
            com o Dr. Leonardo Marcolino.
          </p>
          <Link href="#contato" className="transition hover:underline text-blue flex items-center justify-center md:justify-start gap-1 cursor-pointer">
            Entre em contato <BsArrowRightShort />
          </Link>
        </div>
      </article>
      <article>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col md:flex-row items-center py-12 justify-start gap-4 border-b md:border-r border-border">
            <div className="rounded-full bg-green w-16 h-16 flex justify-center items-center">
              <Wrench size={32} className="text-blue" />
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="text-blue text-lg font-medium">
                Artroplastia total de quadril
              </h3>
              <p className="text-blue max-w-sm">
                Realizado nos pacientes com quadro de artrose primária e
                secundária (ocasionada por doenças como osteonecrose da cabeça
                do fêmur, sequela de fraturas no quadril ou doenças da
                infância).
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center py-12 justify-start md:justify-center gap-4 border-b  border-border ml-0 md:ml-4">
            <div className="rounded-full bg-green w-16 h-16 flex justify-center items-center">
              <Heartbeat size={32} className="text-blue" />
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="text-blue text-lg font-medium">
                Fraturas da região do quadril
              </h3>
              <p className="text-blue max-w-sm">
                Fraturas do colo do fêmur, acetábulo ou transtrocanteriana são
                exemplos de fraturas que podem acometer os pacientes jovens
                (traumas de alta energia) ou idosos (traumas de baixa energia,
                como queda da própria altura).
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center py-12 justify-start gap-4 border-b md:border-b-0 md:border-r border-border">
            <div className="rounded-full bg-green w-16 h-16 flex justify-center items-center">
              <Activity size={32} className="text-blue" />
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="text-blue text-lg font-medium">
                Cirurgia preservadora do quadril
              </h3>
              <p className="text-blue max-w-sm">
                Tratamento cirúrgico de doenças como osteonecrose da cabeça do
                fêmur, impacto femoro-acetabular, Tendinopatias ao nível do
                quadril, entre outras.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center py-12 justify-start md:justify-center gap-4 border-b md:border-none border-border ml-0 md:ml-4">
            <div className="rounded-full bg-green w-16 h-16 flex justify-center items-center">
              <FirstAidKit size={32} className="text-blue" />
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="text-blue text-lg font-medium">
                Cirurgia Ortopédica 4
              </h3>
              <p className="text-blue max-w-sm">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages. It was popularised in
                the 1960s.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}