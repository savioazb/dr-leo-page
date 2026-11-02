import { MapPinLine } from "phosphor-react";

export function Convenios() {
  return (
    <section className="mb-20 flex flex-col items-center justify-center gap-16 px-4 md:px-8">
      <h1 className="text-center text-2xl text-blue">
        Outros locais de atendimento
      </h1>
      <div className="flex flex-col gap-20 sm:flex-row">
        <div className="flex items-baseline gap-2 self-baseline">
          <MapPinLine className="text-blue" />
          <div className="flex flex-col justify-start">
            <h2 className="mb-2 text-lg font-bold text-blue">
              Niterói D&apos;or - Centro Médico
            </h2>
            <p className="mb-2 text-blue">
              Horário:{" "}
              <b>
                Segunda feira 14h-18h / <br /> Quinta feira 10h-13h
              </b>
            </p>
            <p className="text-blue">
              Rua Mariz e Barros, 550 <br /> Santa Rosa, Niterói-RJ <br />{" "}
              <a className="underline" href="tel:+552135094700">
                (21) 3509-4700
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-baseline gap-2 self-baseline">
          <MapPinLine className="text-blue" />
          <div className="flex flex-col justify-start">
            <h2 className="mb-2 text-lg font-bold text-blue">CHN Unidade II</h2>
            <p className="mb-2 text-blue">
              Horário:{" "}
              <b>
                <b>Sexta feira 8h-12h</b>
              </b>
            </p>
            <p className="text-blue">
              Rua Manoel de Abreu, 9 <br /> Centro, Niterói-RJ <br />{" "}
              <a className="underline" href="tel:+552140200057">
                (21) 4020-0057
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
