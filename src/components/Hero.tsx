import Image from 'next/image'
import logo from '../../public/logo.svg'
import { BsArrowRightShort } from 'react-icons/bs'

export function Hero(){
  return(
    <section className='flex justify-between items-center mt-20 mb-40'>
      <article className="flex flex-col gap-16">
        <h1 className="text-6xl leading-normal text-blue">Make a difference <br /> in the lives of <br /> others</h1>
        <h3 className="max-w-md text-lg text-gray">
          It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software. 
        </h3>
        <div className="flex items-center gap-4">
          <button className="bg-green text-blue rounded-xl px-8 py-4">Entre em contato</button>
          <a className="text-blue flex items-center gap-1 cursor-pointer">Conheça mais <BsArrowRightShort /></a>
        </div>
      </article>
      <Image src={logo} alt="Leonardo Marcolino Logo" />
    </section>
  )
}