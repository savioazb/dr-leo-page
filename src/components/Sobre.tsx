import Image from "next/image";
import doctor from "../../public/portrait.jpg";

export function Sobre() {
  return (
    <section id="sobre" className="mb-20 bg-blue w-[100%]">
      <article className="max-w-[1360px] m-auto flex flex-col lg:flex-row justify-between items-center py-10 px-4 md:px-20 gap-8">
        <div className="">
          <Image
            src={doctor}
            alt="Imagem do doutor Leonardo Marcolino"
            width={600}
            height={300}
          />
        </div>

        <div className="flex flex-col gap-8">
          <p className="max-w-lg text-lg text-white">
            Sobrinho e filho de médico, o Dr. Leonardo Marcolino Ayres já sabia
            que desde cedo iria seguir pelo mesmo caminho. Entrou para a
            faculdade Souza Marques aos 18 anos de idade, com a certeza de que
            seguiria pelo caminho da cirurgia, quando no final do curso decidiu
            optar pela ortopedia e traumatologia.
          </p>
          <p className="max-w-lg text-lg text-white">
            Após formar-se, aos 24 anos de idade entrou para a residência de
            ortopedia e traumatologia no reconhecido hospital federal de
            Ipanema, dando seguimento aos estudos e ao sonho de ser cirurgião.
            Foram 3 anos intensos de estudo e aprendizagem, participando de
            diversas cirurgias e atendendo inúmeros pacientes com as mais
            variadas patologias ortopédicas.
          </p>
          <p className="max-w-lg text-lg text-white">
            Ao término, foi aprovado no exame para ser membro da sociedade
            brasileira de ortopedia e traumatologia. Após um período trabalhando
            e adquirindo experiência, retornou ao hospital federal de Ipanema e
            realizou o treinamento para tornar-se cirurgião de quadril. Concluiu
            os estudos realizando o exame para ser membro da sociedade
            brasileira de quadril. Hoje atua na área da ortopedia e
            traumatologia, com ênfase no estudo das patologias do quadril.
          </p>
        </div>
      </article>
    </section>
  );
}
