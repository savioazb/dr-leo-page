import Head from "next/head";
import { site } from "@/data/site";

type Props = {
  titulo: string;
  descricao: string;
  caminho: string;
  indexar?: boolean;
};

export function Seo({ titulo, descricao, caminho, indexar = true }: Props) {
  const url = `${site.url}${caminho}`;
  const imagem = `${site.url}/og.png`;
  return (
    <Head>
      <title>{titulo}</title>
      <meta name="description" content={descricao} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      {!indexar && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={site.nome} />
      <meta property="og:title" content={titulo} />
      <meta property="og:description" content={descricao} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imagem} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Dr. Leonardo Marcolino Ayres, ortopedia e traumatologia, em Niterói" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
