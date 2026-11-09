import { site } from "@/data/site";
import { Assinatura, Marca } from "./Marca";

const links = [
  { href: "#o-que-eu-trato", texto: "O que eu trato" },
  { href: "#sobre", texto: "Sobre" },
  { href: "#onde-atendo", texto: "Onde atendo" },
];

export function Cabecalho() {
  // Fecha o menu do celular ao escolher um link. Sem JavaScript, o menu continua funcionando.
  function fecharMenu(e: React.MouseEvent<HTMLElement>) {
    e.currentTarget.closest("details")?.removeAttribute("open");
  }

  return (
    <header className="relative z-20 mx-auto flex h-[72px] max-w-site items-center justify-between px-6 md:px-12 lg:h-24 xl:px-24">
      <a href="#topo" className="flex items-center gap-[14px]">
        <Marca cor="tinta" largura={40} className="h-auto w-[38px] lg:w-10" alt="" />
        <span className="hidden font-serif text-[27px] tracking-[-.01em] lg:inline">
          <Assinatura />
        </span>
        <span className="sr-only lg:hidden">{site.nome}, início</span>
      </a>

      {/* Desktop */}
      <nav aria-label="Principal" className="hidden items-center gap-9 text-[17px] font-medium lg:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:underline hover:underline-offset-4">
            {l.texto}
          </a>
        ))}
        <a href={site.marcamed} className="btn h-11 bg-petroleo-profundo px-5 text-base text-papel">
          Agendar
        </a>
      </nav>

      {/* Celular: <details> abre e fecha sem JavaScript */}
      <details className="menu-celular lg:hidden">
        <summary className="cursor-pointer py-3 text-base font-medium underline underline-offset-4">Menu</summary>
        <nav
          aria-label="Principal"
          className="absolute inset-x-0 top-full border-y border-tinta bg-papel px-6 pb-6 pt-2 md:px-12"
        >
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-tinta">
                <a href={l.href} onClick={fecharMenu} className="block py-4 font-serif text-[32px] leading-none">
                  {l.texto}
                </a>
              </li>
            ))}
          </ul>
          <a href={site.marcamed} className="btn mt-6 w-full bg-petroleo-profundo text-papel">
            Agendar consulta
          </a>
        </nav>
      </details>
    </header>
  );
}
