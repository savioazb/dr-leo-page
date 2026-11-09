import Image from "next/image";

const itens = [
  {
    titulo: "Artroplastia total de quadril",
    texto:
      "A prótese, nos casos de artrose primária e secundária: osteonecrose da cabeça do fêmur, sequela de fraturas ou doenças da infância.",
  },
  {
    titulo: "Fraturas da região do quadril",
    texto: "Colo do fêmur, acetábulo e transtrocanteriana, em jovens e em idosos, como na queda da própria altura.",
  },
  {
    titulo: "Cirurgia preservadora do quadril",
    texto: "Osteonecrose da cabeça do fêmur, impacto femoroacetabular e tendinopatias do quadril, entre outras.",
  },
  {
    titulo: "Ortopedia e traumatologia",
    texto: "Tendinite do manguito rotador, túnel do carpo, fraturas de punho e tornozelo em adultos, entre outras.",
  },
];

const ALT = "Corte do fêmur em gravura, mostrando a estrutura interna do osso";

/**
 * Fêmur com o círculo vermelho por baixo do traço e a geometria de construção por cima.
 * Coordenadas no sistema da própria imagem, como no design.
 */
function FemurDesktop() {
  return (
    <div className="relative aspect-[760/931] w-full">
      <svg aria-hidden="true" viewBox="0 0 760 931" className="absolute inset-0 h-full w-full">
        <circle cx="570" cy="180" r="100" fill="#d9482a" />
      </svg>
      <Image
        src="/imagens/femur-corte-tinta.webp"
        alt={ALT}
        fill
        sizes="(min-width: 1440px) 760px, 53vw"
        className="object-contain"
      />
      <svg aria-hidden="true" viewBox="0 0 760 931" fill="none" className="absolute inset-0 h-full w-full overflow-visible">
        <g stroke="#f2eee5" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round">
          <circle cx="570" cy="180" r="165" />
          <path d="M680 103L220 425" />
          <path d="M166 926L244 270" />
        </g>
        <circle cx="570" cy="180" r="7" fill="#f2eee5" />
      </svg>
    </div>
  );
}

function FemurCelular() {
  return (
    <div className="relative aspect-[300/367] w-full">
      <svg aria-hidden="true" viewBox="0 0 300 367" className="absolute inset-0 h-full w-full">
        <circle cx="194" cy="74" r="42" fill="#d9482a" />
      </svg>
      <Image
        src="/imagens/femur-corte-tinta.webp"
        alt={ALT}
        fill
        sizes="(min-width: 768px) 400px, 300px"
        className="object-contain"
      />
      <svg aria-hidden="true" viewBox="0 0 300 367" fill="none" className="absolute inset-0 h-full w-full">
        <circle cx="194" cy="74" r="63" stroke="#1c1b18" strokeWidth="1.4" strokeDasharray="2 6" strokeLinecap="round" />
        <circle cx="194" cy="74" r="4" fill="#1c1b18" />
      </svg>
    </div>
  );
}

export function OQueEuTrato() {
  return (
    <section id="o-que-eu-trato" className="scroll-mt-4 overflow-hidden bg-papel-fundo">
      <div className="relative mx-auto max-w-site px-6 pb-14 pt-11 md:px-12 lg:min-h-[min(920px,calc(64.68vw-10px))] lg:pb-[72px] lg:pt-[72px] xl:px-24">
        {/* Desktop: o fêmur ocupa a metade direita e sangra na base */}
        <div className="absolute bottom-[-11px] left-[44.4%] hidden w-[52.8%] lg:block">
          <FemurDesktop />
        </div>

        <div className="relative lg:w-[min(500px,38vw)]">
          <h2 className="ml-[-2px] font-serif text-[72px] leading-[.94] tracking-[-.015em] lg:text-[clamp(96px,8.6vw,124px)]">
            O que
            <br />
            eu <em>trato</em>
          </h2>

          <div className="-mr-12 ml-auto mt-[-47px] w-[300px] md:-mt-20 md:mr-0 md:w-[400px] lg:hidden">
            <FemurCelular />
          </div>

          <ul className="mt-[15px] lg:mt-[34px]">
            {itens.map((item, i) => (
              <li
                key={item.titulo}
                className={`border-t border-tinta pt-3 lg:pt-[14px] ${i < itens.length - 1 ? "pb-4" : ""}`}
              >
                <h3 className="font-serif text-[30px] leading-[1.08] lg:text-[31px] lg:leading-[1.1]">{item.titulo}</h3>
                <p className="mt-1.5 text-[17px] leading-[1.38] lg:leading-[1.4]">{item.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
