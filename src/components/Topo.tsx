import Image from "next/image";
import { linkWhatsapp, registro, site } from "@/data/site";

export function Topo() {
  const whatsapp = linkWhatsapp();

  return (
    <section
      id="topo"
      className="mx-auto grid max-w-site gap-10 px-6 pb-12 pt-1 md:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,51%)] lg:gap-6 lg:pt-0 lg:pb-[66px] xl:px-24"
    >
      <div className="lg:pt-[72px]">
        <p className="micro text-[11px] tracking-[.12em] lg:text-[13px] lg:tracking-[.14em]">
          Médico · {registro()}
        </p>
        <h1 className="ml-[-2px] mt-3 font-serif text-[68px] leading-[.94] tracking-[-.02em] lg:ml-[-4px] lg:mt-6 lg:text-[clamp(84px,8.34vw,120px)]">
          Dr. Leonardo <br />
          <em>Marcolino Ayres</em>
        </h1>
        <p className="mt-4 font-serif text-[29px] leading-[1.1] lg:mt-7 lg:text-[clamp(32px,2.92vw,42px)] lg:tracking-[-.005em]">
          {site.especialidade}.<br />
          Cirurgia do quadril.
        </p>
        <p className="mt-3 max-w-[340px] text-[17px] md:max-w-none leading-[1.36] lg:mt-[18px] lg:max-w-none lg:text-[21px] lg:leading-[1.4]">
          Atendimento em {site.cidade}, por convênio e particular.
        </p>
        {/* No celular, estes botões ficam na barra fixa do rodapé */}
        <div className="mt-[30px] hidden gap-3 lg:flex">
          <a href={site.marcamed} className="btn bg-petroleo-profundo text-papel">
            Agendar consulta
          </a>
          {whatsapp && (
            <a href={whatsapp} className="btn btn-tinta">
              WhatsApp
            </a>
          )}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[336px] md:max-w-[440px] lg:mx-0 lg:ml-auto lg:mt-[42px] lg:max-w-[636px]">
        {/* Círculo vermelho encostado por baixo da foto */}
        <div
          aria-hidden="true"
          className="absolute left-[-1.9%] top-[76%] aspect-square w-[20%] rounded-full bg-acento-ponto"
        />
        <Image
          src="/imagens/retrato-consultorio.jpg"
          alt="Dr. Leonardo Marcolino Ayres sorrindo durante uma conversa no consultório"
          width={1300}
          height={1720}
          priority
          sizes="(min-width: 1440px) 636px, (min-width: 1024px) 51vw, (min-width: 768px) 440px, 336px"
          className="relative aspect-square w-full rounded-full object-cover object-top"
        />
      </div>
    </section>
  );
}
