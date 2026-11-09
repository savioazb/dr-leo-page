import { useEffect, useState } from "react";
import { linkWhatsapp, registro, site, telefonePrincipal } from "@/data/site";
import { FioPonto } from "./FioPonto";
import { Marca } from "./Marca";

/**
 * Ano do build (o mesmo no servidor e no navegador, sem erro de hidratação),
 * atualizado no navegador para não ficar defasado entre deploys.
 */
function useAno() {
  const [ano, setAno] = useState(Number(process.env.NEXT_PUBLIC_ANO_BUILD));
  useEffect(() => setAno(new Date().getFullYear()), []);
  return ano;
}

export function Fechamento() {
  const whatsapp = linkWhatsapp();
  const ano = useAno();

  return (
    <footer className="overflow-hidden bg-petroleo-profundo text-papel">
      <div className="relative mx-auto flex min-h-[500px] max-w-site flex-col px-6 pb-7 pt-[92px] md:px-12 md:pt-[clamp(99px,12.9vw,186px)] lg:min-h-[560px] lg:pb-9 xl:px-24">
        <FioPonto
          className="md:hidden"
          quadro={[390, 500]}
          y={62}
          resto="L270 62C322 62 352 90 354 134"
          ponto={{ cx: 354, cy: 140, r: 5 }}
          espessura={2}
        />
        <FioPonto
          className="hidden md:block"
          quadro={[1440, 560]}
          y={132}
          resto="L1130 132C1234 132 1296 182 1296 276"
          ponto={{ cx: 1296, cy: 282, r: 7 }}
          espessura={2}
        />

        <h2 className="relative ml-[-2px] max-w-[310px] font-serif text-[64px] leading-none tracking-[-.015em] md:max-w-none md:text-[76px] lg:ml-[-3px] lg:text-[clamp(96px,8.34vw,120px)]">
          Agende sua <em>consulta</em>
        </h2>

        <div className="relative mt-5 flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-3 lg:mt-[34px]">
          <a href={site.marcamed} className="btn h-[52px] bg-papel px-4 text-[17px] text-petroleo-profundo md:h-14 md:px-8 md:text-[18px]">
            Agendar online
          </a>
          <div className="flex gap-2 md:contents">
            {whatsapp && (
              <a href={whatsapp} className="btn btn-papel h-[52px] flex-1 px-4 text-[17px] md:h-14 md:flex-none md:px-8 md:text-[18px]">
                WhatsApp
              </a>
            )}
            <a
              href={`tel:${telefonePrincipal.tel}`}
              className="btn btn-papel h-[52px] flex-1 px-4 text-[17px] md:h-14 md:flex-none md:px-8 md:text-[18px]"
            >
              Ligar<span className="hidden md:inline">&nbsp;{telefonePrincipal.exibicao}</span>
            </a>
          </div>
        </div>

        {/* Identificação do médico (Resolução CFM 2.336/2023) */}
        <div className="relative mt-auto flex flex-col gap-3 pt-14 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="flex items-center gap-[14px] lg:gap-[18px]">
            <Marca
              cor="papel"
              largura={56}
              alt="Símbolo da pelve que forma um coração"
              className="h-auto w-11 shrink-0 lg:w-14"
            />
            <p className="text-[14px] leading-[1.4] lg:text-base">
              {site.nomeCompleto}
              <br />
              {site.especialidadeProfissional}
              <br className="lg:hidden" />
              <span className="micro text-[11px] tracking-[.12em] lg:hidden">{registro()}</span>
            </p>
          </div>
          <p className="micro hidden lg:block">{registro()}</p>
          <p className="text-[14px] text-texto-invertido-suave lg:text-[15px]">© {ano}</p>
        </div>
      </div>
    </footer>
  );
}
