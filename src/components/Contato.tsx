import Image from "next/image";
import { MapPinLine } from "phosphor-react";
import logo from '../../public/logo-white.svg'

export function Contato() {
  return (
    <section className="grid grid-cols-2 gap-8 mb-20">
      <article className="bg-blue py-16 flex flex-col justify-center items-center">
        <div className="flex flex-col items-start gap-12">
          <div className="flex flex-col gap-4 justify-center items-center">
            <Image src={logo} alt="Doutor Leonardo Marcolino Logo" />
            <h1 className="logo text-white text-lg">
              Dr. Leonardo Marcolino Ayres
            </h1>
          </div>

          <div className="flex items-baseline gap-2">
            <MapPinLine className="text-white" />
            <div className="flex flex-col justify-start">
              <h2 className="text-white font-bold text-lg">Consultório</h2>
              <p className="text-white">
                Rua da Conceição, 188 - sala 2207-A <br /> Torre do Niterói
                Shopping <br />
                Centro, Niterói-RJ <br /> (21) 2722-4317
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <MapPinLine className="text-white" />
            <div className="flex flex-col justify-start">
              <h2 className="text-white font-bold text-lg">Clínica Osteo</h2>
              <p className="text-white">
                Rua Geraldo Martins, 116 <br /> Santa Rosa, Niterói-RJ <br /> (21) 2722-7404 |
                (21) 2272-7464
              </p>
            </div>
          </div>
        </div>
      </article>
      <article>
      <h3 className="text-5xl text-blue mb-8">Agende sua consulta</h3>
        <form action="" method="post">
          <label className="text-blue font-medium text-lg block mb-4" htmlFor="">Nome</label>
          <input className="block mb-6 rounded-xl border border-border w-[100%] placeholder:text-gray h-14" type="text" name="nome" id="" placeholder="Nome completo" />

          <label className="text-blue font-medium text-lg block mb-4" htmlFor="">E-mail</label>
          <input className="block mb-6 rounded-xl border border-border w-[100%] placeholder:text-gray h-14" type="text" name="nome" id="" placeholder="email@exemplo.com" />

          <label className="text-blue font-medium text-lg block mb-4" htmlFor="">Telefone</label>
          <input className="block mb-6 rounded-xl border border-border w-[100%] placeholder:text-gray h-14" type="text" name="nome" id="" placeholder="(XX) XXXXX XXXX" />

          <label className="text-blue font-medium text-lg block mb-4" htmlFor="">Selecione o local:</label>
          <input className="block mb-6 rounded-xl border border-border w-[100%] placeholder:text-gray h-14" type="text" name="nome" id="" placeholder="Excolha o local do atendimento" />

          <button className="bg-green text-blue rounded-xl px-8 py-4">Enviar</button>
        </form>
      </article>
    </section>
  );
}