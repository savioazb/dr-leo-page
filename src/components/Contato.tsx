import { MapPinLine } from "phosphor-react";
import Link from "next/link";
import { motion } from "framer-motion";
export function Contato() {
  return (
    <section
      id="contato"
      className="m-auto grid max-w-[1360px] grid-cols-1 gap-8 px-4 py-10 lg:px-20"
    >
      <article className="flex flex-col items-center justify-center gap-20 py-4 px-4 sm:flex-row sm:items-center sm:gap-40 md:py-16">
        <motion.div
          className="group flex h-[400px] w-[300px] items-end justify-between rounded-xl bg-[url('../../public/consultorio.jpg')] bg-cover bg-center p-12 shadow-[inset_0_-19px_26px_29px_rgba(0,0,0,0.1)] sm:h-[572px] sm:w-[450px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1.5,
          }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-8"
        >
          <div>
            <h2 className="text-3xl text-blue">Marque sua consulta</h2>
          </div>
          <div className="flex w-full flex-col gap-12 sm:flex-row">
            <div className="flex items-baseline gap-2">
              <MapPinLine className="text-blue" />
              <div className="flex flex-col justify-start">
                <h2 className="mb-2 text-lg font-bold text-blue">
                  Consultório
                </h2>
                <p className="mb-2 text-blue">
                  Horário: <b>Terça feira 8h-12h</b>
                </p>
                <p className="mb-2 text-blue">
                  Rua da Conceição, 188 - sala 2207-A <br /> Torre do Niterói
                  Shopping <br />
                  Centro, Niterói-RJ <br />{" "}
                  <a className="underline" href="tel:+552127224317">
                    (21) 2722-4317
                  </a>
                </p>
                <button className="mt-4 rounded-xl bg-green px-4 py-2 text-blue transition hover:bg-green-light">
                  <Link
                    href="https://leonardomarcolino.marcamed.com.br/"
                    target="_blank"
                  >
                    Marcar consulta
                  </Link>
                </button>
                <h3 className="mt-4 text-center text-sm text-blue">
                  *ACEITAMOS CONVÊNIO E PARTICULAR
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </section>
  );
}
