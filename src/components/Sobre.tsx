import Image from "next/image";
import doctor from '../../public/portrait.png'

export function Sobre() {
  return (
    <section className="mb-20">
        <div className="bg-blue w-[100%] h-[600px] absolute left-0 -z-10"></div>
        <article className="flex justify-between py-20">
          <Image
            src={doctor}
            alt="Imagem do doutor Leonardo Marcolino"
            width={400}
            height={400}
          />
          <div className="flex flex-col gap-10">
            <p className="max-w-lg text-lg text-white">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software.
            </p>
            <p className="max-w-lg text-lg text-white">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software.
            </p>
            <p className="max-w-lg text-lg text-white">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software.
            </p>
          </div>
        </article>
    </section>
  );
}