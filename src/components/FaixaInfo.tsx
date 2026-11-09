import { conveniosConsultorio, listaPorExtenso, site } from "@/data/site";

const itens = [
  { rotulo: "Onde atendo", valor: "Niterói Shopping, Niterói D'Or e CHN" },
  { rotulo: "Convênios no consultório", valor: listaPorExtenso(conveniosConsultorio) },
  { rotulo: "Sociedades", valor: site.sociedades },
];

export function FaixaInfo() {
  return (
    <section aria-label="Informações rápidas" className="mx-auto max-w-site px-6 pb-5 md:px-12 lg:pb-0 xl:px-24">
      <dl className="grid text-[17px] leading-[1.36] md:grid-cols-3 md:gap-8 lg:gap-12 lg:pb-9 lg:pt-8 lg:text-[19px] lg:leading-[1.4]">
        {itens.map((i) => (
          <div key={i.rotulo} className="border-t border-tinta py-3 md:border-t-0 md:py-0">
            <dt className="mb-0.5 text-[15px] text-tinta-suave lg:mb-1.5 lg:text-base">{i.rotulo}</dt>
            <dd>{i.valor}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
