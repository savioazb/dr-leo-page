import Image from "next/image";
import doctor from '../../public/portrait.png'

export function Sobre() {
  return (
    <section className="mb-20">
      <div className="bg-blue w-[100%] h-[750px] absolute left-0 -z-10"></div>
      <article className="flex justify-between py-10">
        <Image
          src={doctor}
          alt="Imagem do doutor Leonardo Marcolino"
          width={400}
          height={400}
        />
        <div className="flex flex-col gap-8">
          <p className="max-w-lg text-lg text-white">
            Sobrinho e filho de médico, já sabia que desde cedo iria seguir pelo
            mesmo caminho. Entrei para faculdade Souza Marques aos 18 anos de
            idade, com a certeza de que seguiria pelo caminho da cirurgia,
            quando no final do curso decidi optar pela ortopedia e
            traumatologia.
          </p>
          <p className="max-w-lg text-lg text-white">
            Após me formar, aos 24 anos de idade entrei para a residência de
            ortopedia e traumatologia no reconhecido hospital federal de
            Ipanema, dando seguimento aos estudos e ao sonho de ser cirurgião.
            Foram 3 anos intensos de estudo e aprendizagem, participando de
            diversas cirurgias e atendendo inúmeros pacientes com as mais
            variadas patologias ortopédicas.
          </p>
          <p className="max-w-lg text-lg text-white">
            Ao término, fui aprovado no exame para ser membro da sociedade
            brasileira de ortopedia e traumatologia. Após um período trabalhando
            e adquirindo experiência, retornei ao hospital federal de Ipanema e
            realizei meu treinamento para me tornar cirurgião de quadril.
            Concluí os estudos realizando o exame para ser membro da sociedade
            brasileira de quadril. Hoje atuo na área da ortopedia e
            traumatologia, com ênfase no estudo das patologias do quadril.
          </p>
        </div>
      </article>
    </section>
  );
}