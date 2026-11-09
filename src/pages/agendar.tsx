import { FioPonto } from "@/components/FioPonto";
import { Marca } from "@/components/Marca";
import { Seo } from "@/components/Seo";
import { Destino, linkWhatsapp, ORIGENS, Origem, registro, site, telefonePrincipal } from "@/data/site";

/** Lê ?origem= da URL; qualquer valor desconhecido conta como "direto" */
function origemAtual(): Origem {
  const valor = new URLSearchParams(window.location.search).get("origem");
  return (ORIGENS as readonly string[]).includes(valor ?? "") ? (valor as Origem) : "direto";
}

/**
 * Conta o clique sem atrasar a navegação. O link continua sendo um href normal,
 * então o agendamento funciona sem JavaScript ou se a contagem falhar.
 */
function contar(destino: Destino) {
  try {
    const dados = new URLSearchParams({ destino, origem: origemAtual() });
    if (!navigator.sendBeacon?.("/api/clique", dados)) {
      fetch("/api/clique", { method: "POST", body: dados, keepalive: true }).catch(() => {});
    }
  } catch {
    // A contagem nunca pode impedir o agendamento
  }
}

export default function Agendar() {
  const whatsapp = linkWhatsapp();
  const btn = "btn h-16 w-full px-6 text-[19px] md:w-auto md:px-9";

  return (
    <>
      <Seo
        titulo="Agende sua consulta | Dr. Leonardo Marcolino"
        descricao="Agende sua consulta com o Dr. Leonardo Marcolino, médico ortopedista e traumatologista em Niterói. Online, por WhatsApp ou telefone."
        caminho="/agendar"
        indexar={false}
      />
      <main className="min-h-screen overflow-hidden bg-petroleo-profundo text-papel">
        <div className="relative mx-auto flex min-h-screen max-w-site flex-col px-6 pb-7 pt-10 md:px-12 md:pt-[72px] lg:pb-10 xl:px-24">
          <FioPonto
            className="md:hidden"
            quadro={[390, 844]}
            y={268}
            resto="L262 268C322 268 356 296 358 340"
            ponto={{ cx: 358, cy: 346, r: 6 }}
            espessura={2.4}
          />
          <FioPonto
            className="hidden md:block"
            quadro={[1440, 900]}
            y={352}
            resto="L1130 352C1234 352 1296 402 1296 496"
            ponto={{ cx: 1296, cy: 502, r: 9 }}
            espessura={3}
          />

          <div className="relative flex flex-col gap-3 md:flex-row md:items-start md:gap-9">
            <Marca
              cor="papel"
              largura={112}
              alt="Símbolo da pelve que forma um coração"
              className="h-auto w-16 shrink-0 lg:w-28"
            />
            <div>
              <p className="font-serif text-[42px] leading-none tracking-[-.01em] md:text-[56px] lg:mt-[-6px] lg:text-[clamp(64px,6.4vw,92px)]">
                Dr. Leonardo <em>Marcolino</em>
              </p>
              {/* a confirmar com o Leonardo: "Atuação em cirurgia do quadril" */}
              <p className="mt-3 text-[17px] leading-[1.4] lg:mt-4 lg:text-[21px] lg:leading-[1.5]">
                {site.especialidadeProfissional}
                <br />
                {site.atuacao} · {site.cidade}
              </p>
            </div>
          </div>

          <h1 className="relative ml-[-2px] mt-[66px] max-w-[300px] font-serif text-[68px] leading-[.98] tracking-[-.015em] md:mt-[clamp(80px,12vw,173px)] md:max-w-none md:text-[96px] lg:ml-[-4px] lg:text-[clamp(110px,10.4vw,150px)] lg:leading-none">
            Agende sua <em>consulta</em>
          </h1>

          <div className="relative mt-[34px] flex flex-col gap-2.5 md:mt-12 md:flex-row md:flex-wrap md:gap-3">
            <a
              href={site.marcamed}
              onClick={() => contar("marcamed")}
              className={`${btn} bg-papel text-petroleo-profundo`}
            >
              Agendar online
            </a>
            <p className="mb-2 text-center text-[15px] leading-[1.35] text-texto-invertido-suave md:hidden">
              Você cria um cadastro no Marcamed e escolhe o horário.
            </p>
            {whatsapp && (
              <a href={whatsapp} onClick={() => contar("whatsapp")} className={`${btn} btn-papel`}>
                Falar no WhatsApp
              </a>
            )}
            <a
              href={`tel:${telefonePrincipal.tel}`}
              onClick={() => contar("telefone")}
              className={`${btn} btn-papel`}
            >
              Ligar {telefonePrincipal.exibicao}
            </a>
          </div>
          <p className="relative mt-4 hidden text-[18px] text-texto-invertido-suave md:block">
            No agendamento online, você cria um cadastro no Marcamed e escolhe o horário.
          </p>

          <div className="relative mt-auto flex flex-col gap-10 pt-12 lg:flex-row lg:items-baseline lg:justify-between">
            <p className="text-base leading-[1.42] lg:text-[19px]">
              Niterói Shopping · Niterói D&apos;Or · CHN
              <span className="hidden lg:inline"> · </span>
              <br className="lg:hidden" />
              Convênio e particular
            </p>
            <p className="micro text-[11px] lg:text-[13px]">{registro()}</p>
          </div>
        </div>
      </main>
    </>
  );
}
