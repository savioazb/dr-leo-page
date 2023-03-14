import Image from 'next/image'
import logo from '../../public/logo.svg'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link';

export function Hero(){
  return (
    <section id='home' className="max-w-[1360px] m-auto flex flex-col-reverse md:flex-row justify-center md:justify-between items-center mt-20 sm:mt-40 mb-20 sm:mb-40 px-4 md:px-20 py-10">
      <article className="flex flex-col justify-center items-center md:items-start gap-16 text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl leading-normal text-blue font-bold">
          O meu objetivo <br /> é o seu bem-estar <br /> e qualidade de vida
        </h1>
        <h3 className="max-w-md text-xl text-blue">
          Sinta-se seguro e confiante com o cuidado de um especialista em
          ortopedia. Agende a sua consulta e viva sem limitações.
        </h3>
        <div className="flex items-center gap-4">
          <button className="transition bg-green hover:bg-green-light text-blue rounded-xl px-8 py-4">
            <Link href="#contato">Entre em contato</Link>
          </button>
          <Link href="#especialidades" className="transition hover:underline text-blue flex items-center gap-1 cursor-pointer">
            Conheça mais <BsArrowRightShort />
          </Link>
        </div>
      </article>
      <Image
        src={logo}
        className="w-24 sm:w-[30vw] mb-4 sm:mb-0"
        alt="Leonardo Marcolino Logo"
      />
    </section>
  );
}