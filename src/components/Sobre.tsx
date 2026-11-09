import Image from "next/image";
import { site } from "@/data/site";

// Desktop: três linhas. Celular: residência e treinamento juntos, como no design.
const formacaoDesktop = [
  { rotulo: "Formação", valor: "Souza Marques" },
  { rotulo: "Residência em ortopedia", valor: "Hospital Federal de Ipanema" },
  { rotulo: "Treinamento em quadril", valor: "Hospital Federal de Ipanema" },
];
const formacaoCelular = [
  { rotulo: "Formação", valor: "Souza Marques" },
  { rotulo: "Residência e treinamento em quadril", valor: "Hospital Federal de Ipanema" },
];

export function Sobre() {
  return (
    <section
      id="sobre"
      className="mx-auto grid max-w-site scroll-mt-4 items-center gap-7 px-6 py-14 md:px-12 lg:grid-cols-[43fr_57fr] lg:gap-16 lg:py-[120px] xl:gap-24 xl:px-24"
    >
      {/* Foto: a atual tem 520 px; antes da produção, trocar por uma maior */}
      <div className="relative w-[320px] max-w-full md:w-[400px] lg:w-full lg:max-w-[500px]">
        <div
          aria-hidden="true"
          className="absolute left-[78.6%] top-[78.6%] aspect-square w-[20.4%] rounded-full bg-acento-ponto"
        />
        <Image
          src="/imagens/retrato-jaleco-circulo.jpg"
          alt="Dr. Leonardo Marcolino de jaleco, no consultório"
          width={520}
          height={520}
          sizes="(min-width: 1024px) 500px, (min-width: 768px) 400px, 320px"
          className="relative aspect-square w-full rounded-full object-cover"
        />
      </div>

      <div>
        <h2 className="ml-[-2px] font-serif text-[56px] leading-none tracking-[-.015em] lg:text-[clamp(60px,5.28vw,76px)] lg:leading-[1.02]">
          Sobre o <br className="lg:hidden" />
          <em>Dr. Leonardo</em>
        </h2>
        {/* a confirmar com o Leonardo: o texto de "Sobre" */}
        <p className="mt-4 text-[18px] leading-[1.46] lg:mt-7 lg:text-[21px] lg:leading-[1.5]">
          Sou filho e sobrinho de médico. Atuo em ortopedia e traumatologia, com ênfase nas doenças do quadril.
        </p>

        <dl className="mt-5 text-base leading-[1.3] lg:hidden">
          {formacaoCelular.map((f) => (
            <div key={f.rotulo} className="border-t border-tinta py-[9px]">
              <dt className="text-tinta-suave">{f.rotulo}</dt>
              <dd>{f.valor}</dd>
            </div>
          ))}
        </dl>
        <dl className="mt-8 hidden text-[18px] leading-[1.3] lg:block">
          {formacaoDesktop.map((f) => (
            <div key={f.rotulo} className="flex justify-between gap-6 border-t border-tinta py-[13px]">
              <dt className="text-tinta-suave">{f.rotulo}</dt>
              <dd className="text-right">{f.valor}</dd>
            </div>
          ))}
        </dl>

        <a
          href={site.instagram.url}
          className="mt-1.5 inline-block text-[17px] font-medium underline underline-offset-2 lg:mt-[18px] lg:text-[18px]"
        >
          <span className="hidden lg:inline">Explicações no Instagram: </span>
          {site.instagram.usuario}
        </a>
      </div>
    </section>
  );
}
