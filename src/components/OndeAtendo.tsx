import { listaPorExtenso, locais } from "@/data/site";

export function OndeAtendo() {
  return (
    <section
      id="onde-atendo"
      className="mx-auto max-w-site scroll-mt-4 px-6 pb-14 md:px-12 lg:pb-[120px] xl:px-24"
    >
      <h2 className="mb-[22px] ml-[-2px] font-serif text-[56px] leading-none tracking-[-.015em] lg:mb-11 lg:text-[clamp(60px,5.28vw,76px)]">
        Onde <em>atendo</em>
      </h2>
      <div className="grid text-[17px] leading-[1.42] md:grid-cols-2 md:gap-x-10 md:gap-y-8 lg:grid-cols-3 lg:gap-12 lg:text-[18px] lg:leading-[1.45]">
        {locais.map((local, i) => (
          <article
            key={local.id}
            className={`border-t border-tinta pt-3 lg:pt-[18px] ${i < locais.length - 1 ? "pb-5 md:pb-0" : ""}`}
          >
            <h3 className="mb-1.5 font-serif text-[32px] leading-[1.08] lg:mb-3 lg:text-[36px]">{local.nome}</h3>
            <address className="not-italic">
              {local.endereco.map((linha) => (
                <span key={linha} className="block">
                  {linha}
                </span>
              ))}
              <a href={`tel:${local.telefone.tel}`} className="underline underline-offset-2">
                {local.telefone.exibicao}
              </a>
            </address>
            <p className="mt-2 text-tinta-suave lg:mt-[14px]">
              {local.horarios.map((h) => (
                <span key={h} className="block">
                  {h}
                </span>
              ))}
            </p>
            {local.convenios && (
              <p className="mt-3 lg:mt-4">
                <b className="font-semibold">{local.aceitaParticular ? "Particular e convênios:" : "Convênios:"}</b>{" "}
                {listaPorExtenso(local.convenios)}.
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
