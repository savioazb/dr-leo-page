import sulamerica from '../../public/sulamerica.svg'
import unimed from '../../public/unimed.svg'
import bradesco from '../../public/bradesco.svg'
import amil from '../../public/amil.svg'
import Image from 'next/image'

export function Convenios() {
  return(
    <section className='flex flex-col gap-16 justify-center items-center mb-20 px-4 md:px-8'>
      <h1 className='text-blue text-4xl'>Convênios</h1>
      <div>
        <ul className='flex flex-col md:flex-row gap-16'>
          <li><Image src={sulamerica} alt="logo da sulamerica" /></li>
          <li><Image src={unimed} alt="logo da unimed" /></li>
          <li><Image src={bradesco} alt="logo da bradesco seguros" /></li>
          <li><Image src={amil} alt="logo da amil" /></li>
        </ul>
      </div>
    </section>
  )
}