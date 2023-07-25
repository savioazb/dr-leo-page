import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
import { Wrench, Heartbeat, Activity, FirstAidKit } from "phosphor-react";
import Link from "next/link";

export function Especialidades() {
  return (
    <section
      id="especialidades"
      className="mb-0 md:mb-8 max-w-[1360px] m-auto py-10 px-4 md:px-8 lg:px-20"
    >
      <article className="flex flex-col md:flex-row gap-12 justify-between mb-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl text-blue">
            Recupere a sua mobilidade e qualidade de vida com o tratamento
            ortopédico adequado
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray">
            Lesões e dores crônicas podem afetar a sua vida de diversas
            maneiras. Não espere mais para buscar ajuda e agende uma consulta
            com o Dr. Leonardo Marcolino.
          </p>
          <Link
            href="#contato"
            className="transition hover:underline text-blue flex items-center justify-center md:justify-start gap-1 cursor-pointer"
          >
            Entre em contato <BsArrowRightShort />
          </Link>
        </motion.div>
      </article>
      <article>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            className="flex flex-col lg:flex-row items-center py-12 justify-start gap-8 border-b md:border-r border-border pr-0 md:pr-4"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
          <motion.div
            className="flex flex-col lg:flex-row items-center py-12 justify-start md:justify-center gap-8 border-b  border-border pl-0 md:pl-4"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
          <motion.div
            className="flex flex-col lg:flex-row items-center py-12 justify-start gap-8 border-b md:border-b-0 md:border-r border-border pr-0 md:pr-4"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
          <motion.div
            className="flex flex-col lg:flex-row items-center py-12 justify-start md:justify-center gap-8 border-b md:border-none border-border pl-0 md:pl-4"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </article>
    </section>
  );
}
