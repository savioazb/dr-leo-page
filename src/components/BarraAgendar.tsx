import { linkWhatsapp, site } from "@/data/site";

/** Celular e tablet: Agendar consulta e WhatsApp fixos no rodapé da tela */
export function BarraAgendar() {
  const whatsapp = linkWhatsapp();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-tinta bg-papel px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-[10px] lg:hidden">
      <a href={site.marcamed} className="btn h-[52px] flex-[1.6] bg-petroleo-profundo px-4 text-[17px] text-papel">
        Agendar consulta
      </a>
      {whatsapp && (
        <a href={whatsapp} className="btn btn-tinta h-[52px] flex-1 px-4 text-[17px]">
          WhatsApp
        </a>
      )}
    </div>
  );
}
