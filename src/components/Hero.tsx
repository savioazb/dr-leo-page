import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import LogoAnimated from "./LogoAnimated";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="m-auto mt-20 mb-12 flex max-w-[1360px] flex-col-reverse items-center justify-center px-4 py-20 sm:mt-40 sm:mb-40 md:justify-between md:px-20 lg:flex-row"
    >
      <article className="flex flex-col items-center justify-center gap-8 text-center md:items-start md:gap-16 md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
          }}
        >
          <h1 className="text-3xl font-bold leading-normal text-blue sm:text-6xl">
            O meu objetivo <br /> é o seu bem-estar <br /> e qualidade de vida
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1,
          }}
        >
          <h3 className="max-w-md text-xl text-blue">
            Sinta-se seguro e confiante com o cuidado de um especialista em
            ortopedia. Agende a sua consulta e viva sem limitações.
          </h3>
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-4 md:flex-row "
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.5,
          }}
        >
          <button className="rounded-xl bg-green px-8 py-4 text-blue transition hover:bg-green-light">
            <Link href="#contato">Marque uma consulta</Link>
          </button>
          <Link
            href="#especialidades"
            className="flex cursor-pointer items-center gap-1 text-blue transition hover:underline"
          >
            Conheça mais <BsArrowRightShort />
          </Link>
        </motion.div>
      </article>
      <div className="mb-4 w-24 sm:mb-0 sm:w-[30vw]">
        <LogoAnimated />
      </div>
    </section>
  );
}
