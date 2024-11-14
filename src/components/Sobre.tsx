import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="mx-auto mb-20 flex max-w-[1360px] flex-col items-center justify-between gap-8 bg-[url('../../public/heart.svg')] bg-[length:800px] bg-center bg-no-repeat px-4 py-8 md:px-20 md:py-16 lg:flex-row"
    >
      <motion.div
        className="group flex h-[400px] w-[300px] items-end justify-between rounded-xl bg-[url('../../public/leonardo-perfil.jpeg')] bg-cover bg-center p-12 shadow-[inset_0_-19px_26px_29px_rgba(0,0,0,0.1)] sm:h-[572px] sm:w-[450px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1.5,
        }}
        viewport={{ once: true }}
      >
        <p className="text-3xl font-bold text-white">
          Dr. Leonardo <br />
          Marcolino Ayres
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <p className="max-w-lg text-lg text-blue">
          Sobrinho e filho de médico, o Dr. Leonardo Marcolino Ayres já sabia
          que desde cedo iria seguir pelo mesmo caminho. Entrou para a faculdade
          Souza Marques aos 18 anos de idade, com a certeza de que seguiria pelo
          caminho da cirurgia, quando no final do curso decidiu optar pela
          ortopedia e traumatologia.
        </p>
        <p className="max-w-lg text-lg text-blue">
          Após formar-se, aos 24 anos de idade entrou para a residência de
          ortopedia e traumatologia no reconhecido hospital federal de Ipanema,
          dando seguimento aos estudos e ao sonho de ser cirurgião. Foram 3 anos
          intensos de estudo e aprendizagem, participando de diversas cirurgias
          e atendendo inúmeros pacientes com as mais variadas patologias
          ortopédicas.
        </p>
        <p className="max-w-lg text-lg text-blue">
          Ao término, foi aprovado no exame para ser membro da sociedade
          brasileira de ortopedia e traumatologia. Após um período trabalhando e
          adquirindo experiência, retornou ao hospital federal de Ipanema e
          realizou o treinamento para tornar-se cirurgião de quadril. Concluiu
          os estudos realizando o exame para ser membro da sociedade brasileira
          de quadril. Hoje atua na área da ortopedia e traumatologia, com ênfase
          no estudo das patologias do quadril.
        </p>
      </motion.div>
    </section>
  );
}
