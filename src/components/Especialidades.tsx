import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
import { Wrench, Heartbeat, Activity, FirstAidKit } from "phosphor-react";
import Link from "next/link";

export function Especialidades() {
  return (
    <section
      id="especialidades"
      className="m-auto mb-0 max-w-[1360px] py-10 px-4 md:mb-8 md:px-8 lg:px-20"
    >
      <article className="mb-4 flex flex-col justify-between gap-12 text-center md:mb-20 md:flex-row md:text-left">
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
            className="flex cursor-pointer items-center justify-center gap-1 text-blue transition hover:underline md:justify-start"
          >
            Entre em contato <BsArrowRightShort />
          </Link>
        </motion.div>
      </article>
      <article>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            className="flex flex-col items-center justify-start gap-8 border-b border-border py-12 pr-0 md:border-r md:pr-4 lg:flex-row"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green">
              <Wrench size={32} className="text-blue" />
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="text-lg font-medium text-blue">
                Artroplastia total de quadril
              </h3>
              <p className="max-w-sm text-blue">
                Realizado nos pacientes com quadro de artrose primária e
                secundária (ocasionada por doenças como osteonecrose da cabeça
                do fêmur, sequela de fraturas no quadril ou doenças da
                infância).
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-start gap-8 border-b border-border py-12 pl-0  md:justify-center md:pl-4 lg:flex-row"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green">
              <Heartbeat size={32} className="text-blue" />
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="text-lg font-medium text-blue">
                Fraturas da região do quadril
              </h3>
              <p className="max-w-sm text-blue">
                Fraturas do colo do fêmur, acetábulo ou transtrocanteriana são
                exemplos de fraturas que podem acometer os pacientes jovens
                (traumas de alta energia) ou idosos (traumas de baixa energia,
                como queda da própria altura).
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-start gap-8 border-b border-border py-12 pr-0 md:border-b-0 md:border-r md:pr-4 lg:flex-row"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green">
              <Activity size={32} className="text-blue" />
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="text-lg font-medium text-blue">
                Cirurgia preservadora do quadril
              </h3>
              <p className="max-w-sm text-blue">
                Tratamento cirúrgico de doenças como osteonecrose da cabeça do
                fêmur, impacto femoro-acetabular, Tendinopatias ao nível do
                quadril, entre outras.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-start gap-8 border-b border-border py-12 pl-0 md:justify-center md:border-none md:pl-4 lg:flex-row"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green">
              <FirstAidKit size={32} className="text-blue" />
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="text-lg font-medium text-blue">
                Cirurgia Ortopédica 4
              </h3>
              <p className="max-w-sm text-blue">
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
