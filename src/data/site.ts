// Fonte única dos dados do site. Altere aqui, e só aqui.

export type Local = {
  id: string;
  nome: string;
  /** Linhas do endereço, na ordem em que aparecem */
  endereco: string[];
  telefone: { exibicao: string; tel: string };
  horarios: string[];
  /** Convênios aceitos neste local. Só o consultório mostra a lista. */
  convenios?: string[];
  aceitaParticular?: boolean;
};

export const site = {
  url: "https://drleonardomarcolino.com.br",
  nome: "Dr. Leonardo Marcolino Ayres",
  especialidade: "Ortopedia e traumatologia",
  especialidadeProfissional: "Médico ortopedista e traumatologista",
  atuacao: "Atuação em cirurgia do quadril",
  cidade: "Niterói",

  // Se algum voltar a ser null, aparece "⋯" no lugar do número e o botão de WhatsApp fica escondido.
  crm: "955612" as string | null,
  rqe: "26190" as string | null,
  /** Só dígitos, com DDI e DDD. Ex.: "5521999999999" */
  whatsapp: "5521964876011" as string | null,

  marcamed: "https://leonardomarcolino.marcamed.com.br/",
  instagram: {
    usuario: "@dr.leonardo.marcolino",
    url: "https://www.instagram.com/dr.leonardo.marcolino/",
  },

  sociedades: "Membro da SBOT e da SBQ",
} as const;

export const locais: Local[] = [
  {
    id: "consultorio",
    nome: "Consultório",
    endereco: ["Rua da Conceição, 188, sala 2207-A", "Torre do Niterói Shopping, Centro"],
    telefone: { exibicao: "(21) 2722-4317", tel: "+552127224317" },
    horarios: ["Seg 9h às 12h", "Ter 9h às 12h e 14h às 18h", "Qui 14h às 18h"],
    convenios: ["Porto Seguro", "SulAmérica", "Assim"],
    aceitaParticular: true,
  },
  {
    id: "niteroi-dor",
    nome: "Niterói D'Or",
    endereco: ["Centro Médico", "Rua Mariz e Barros, 550, Santa Rosa"],
    telefone: { exibicao: "(21) 3509-4700", tel: "+552135094700" },
    horarios: ["Seg 14h às 18h", "Qui 10h às 13h"],
  },
  {
    id: "chn",
    nome: "CHN Unidade II",
    endereco: ["Rua Manoel de Abreu, 9", "Centro"],
    telefone: { exibicao: "(21) 4020-0057", tel: "+552140200057" },
    horarios: ["Sex 8h às 12h"],
  },
];

/** Telefone principal, usado nos botões "Ligar" */
export const telefonePrincipal = locais[0].telefone;

export const conveniosConsultorio = locais[0].convenios ?? [];

/** "Porto Seguro, SulAmérica e Assim" */
export function listaPorExtenso(itens: readonly string[]): string {
  if (itens.length <= 1) return itens.join("");
  return `${itens.slice(0, -1).join(", ")} e ${itens[itens.length - 1]}`;
}

/** "CRM-RJ 12345 · RQE 678" ou "CRM-RJ ⋯ · RQE ⋯" enquanto não houver número */
export function registro(): string {
  return `CRM-RJ ${site.crm ?? "⋯"} · RQE ${site.rqe ?? "⋯"}`;
}

/** Link do WhatsApp, ou null se ainda não houver número (o botão deve ser escondido) */
export function linkWhatsapp(): string | null {
  if (!site.whatsapp) return null;
  const texto = encodeURIComponent("Olá! Gostaria de agendar uma consulta com o Dr. Leonardo Marcolino Ayres.");
  return `https://wa.me/${site.whatsapp}?text=${texto}`;
}

// Contagem de cliques em /agendar
export const ORIGENS = ["instagram", "site", "direto"] as const;
export const DESTINOS = ["marcamed", "whatsapp", "telefone"] as const;
export type Origem = (typeof ORIGENS)[number];
export type Destino = (typeof DESTINOS)[number];
