import Link from "next/link";
import { Assinatura, Marca } from "@/components/Marca";
import { Seo } from "@/components/Seo";
import { registro, site, telefonePrincipal } from "@/data/site";

// Política de privacidade do site e do assistente de WhatsApp do consultório.
// Exigida pela Meta para publicar o app do WhatsApp. Ao mudar o que o
// assistente faz com os dados, atualizar aqui e a data no fim.

const EMAIL = "hls.servicosmedicos@gmail.com";
const ATUALIZADA_EM = "12 de novembro de 2026";

function Secao({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-tinta pt-5 lg:pt-6">
      <h2 className="font-serif text-[30px] leading-[1.1] tracking-[-.01em] lg:text-[36px]">
        {titulo}
      </h2>
      <div className="mt-3 space-y-3 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  );
}

export default function Privacidade() {
  return (
    <>
      <Seo
        titulo="Política de privacidade | Dr. Leonardo Marcolino Ayres"
        descricao="Como o consultório do Dr. Leonardo Marcolino Ayres trata os seus dados no site e no atendimento pelo WhatsApp."
        caminho="/privacidade"
      />
      <header className="mx-auto flex h-[72px] max-w-site items-center px-6 md:px-12 lg:h-24 xl:px-24">
        <Link href="/" className="flex items-center gap-[14px]">
          <Marca
            cor="tinta"
            largura={40}
            className="h-auto w-[38px] lg:w-10"
            alt=""
          />
          <span className="font-serif text-[22px] tracking-[-.01em] lg:text-[27px]">
            <Assinatura />
          </span>
        </Link>
      </header>

      <main className="mx-auto max-w-[760px] px-6 pb-20 pt-8 text-[17px] leading-[1.55] md:px-12 lg:pt-14 lg:text-[18px]">
        <h1 className="ml-[-2px] font-serif text-[52px] leading-none tracking-[-.015em] lg:text-[72px]">
          Política de <em>privacidade</em>
        </h1>
        <p className="mt-5 text-tinta-suave">
          Esta política explica como o consultório do {site.nome} trata os seus
          dados neste site e no atendimento pelo WhatsApp, de acordo com a Lei
          Geral de Proteção de Dados (Lei 13.709/2018, a LGPD).
        </p>

        <div className="mt-10 space-y-10">
          <Secao titulo="Quem é o responsável">
            <p>
              O responsável pelos seus dados é o consultório do {site.nome},
              médico ortopedista e traumatologista ({registro()}), na Rua da
              Conceição, 188, sala 2207-A, Torre do Niterói Shopping, Centro,
              Niterói-RJ.
            </p>
            <p>
              Para qualquer assunto sobre os seus dados, escreva para{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="underline underline-offset-4"
              >
                {EMAIL}
              </a>
              .
            </p>
          </Secao>

          <Secao titulo="O assistente de WhatsApp">
            <p>
              O consultório tem um assistente virtual no WhatsApp que responde
              dúvidas (endereços, horários, convênios) e marca, remarca e
              cancela consultas no consultório. Ele usa inteligência artificial
              para entender e responder as mensagens. Sempre que você pedir, ou
              quando o assistente não souber responder, a conversa passa para a
              secretária.
            </p>
            <p>
              O assistente <strong>não dá orientação médica</strong>. Em caso de
              urgência, procure um pronto-socorro ou ligue para o SAMU (192).
            </p>
          </Secao>

          <Secao titulo="Quais dados tratamos">
            <ul>
              <li>
                o seu número de WhatsApp e as mensagens de texto que você envia
                ao assistente;
              </li>
              <li>
                o seu nome e a sua data de nascimento, quando você pede para
                marcar uma consulta, para encontrar ou criar o seu cadastro no
                sistema de agenda do consultório;
              </li>
              <li>
                os dados das suas consultas: data, horário e convênio ou
                particular.
              </li>
            </ul>
            <p>
              O assistente só lê mensagens de texto. Ele não abre fotos, áudios
              nem documentos. Não é preciso enviar exames nem descrever sintomas
              para marcar uma consulta.
            </p>
            <p>
              Este site não usa cookies. Ele conta apenas quantas vezes os
              botões de agendamento são clicados, sem guardar nenhum dado
              pessoal.
            </p>
          </Secao>

          <Secao titulo="Para que usamos">
            <ul>
              <li>responder às suas dúvidas sobre o atendimento;</li>
              <li>marcar, remarcar e cancelar consultas, a seu pedido;</li>
              <li>
                enviar lembretes e pedidos de confirmação das suas consultas;
              </li>
              <li>
                passar o atendimento para a secretária, quando necessário.
              </li>
            </ul>
            <p>
              Não usamos os seus dados para publicidade e não os vendemos.
              Fazemos isso para atender ao seu pedido e para a organização do
              seu atendimento de saúde (art. 7º, V, e art. 11, II, “f”, da
              LGPD).
            </p>
          </Secao>

          <Secao titulo="Com quem compartilhamos">
            <p>
              Apenas com os serviços necessários para o atendimento funcionar:
            </p>
            <ul>
              <li>
                <strong>Meta (WhatsApp)</strong>, que entrega as mensagens;
              </li>
              <li>
                <strong>Anthropic</strong>, empresa dos Estados Unidos que
                fornece a inteligência artificial do assistente e processa o
                texto das conversas para gerar as respostas. Pelos termos de uso
                dela, as conversas não são usadas para treinar os seus modelos;
              </li>
              <li>
                <strong>provedores de servidor e de banco de dados</strong>, que
                guardam as conversas em servidores no Brasil (São Paulo);
              </li>
              <li>
                <strong>ConClínica (Tecnoarte)</strong>, o sistema de agenda e
                prontuário do consultório.
              </li>
            </ul>
          </Secao>

          <Secao titulo="Por quanto tempo guardamos">
            <p>
              As conversas com o assistente são{" "}
              <strong>apagadas automaticamente 90 dias</strong> depois da última
              mensagem. O seu cadastro e as suas consultas ficam no sistema do
              consultório pelo tempo exigido pelas normas de registro médico.
            </p>
          </Secao>

          <Secao titulo="Os seus direitos">
            <p>
              Você pode pedir, a qualquer momento: a confirmação de que tratamos
              os seus dados, o acesso a eles, a correção, a exclusão (menos o
              que a lei nos obriga a guardar), informações sobre com quem foram
              compartilhados e a revisão de decisões tomadas de forma
              automatizada. Para isso, escreva para{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="underline underline-offset-4"
              >
                {EMAIL}
              </a>{" "}
              ou ligue para{" "}
              <a
                href={`tel:${telefonePrincipal.tel}`}
                className="underline underline-offset-4"
              >
                {telefonePrincipal.exibicao}
              </a>
              .
            </p>
            <p>
              Se não quiser mais falar com o assistente, basta não enviar
              mensagens. Para apagar as conversas antes dos 90 dias, peça pelo
              e-mail acima. Você também pode reclamar à Autoridade Nacional de
              Proteção de Dados (ANPD).
            </p>
          </Secao>

          <Secao titulo="Segurança">
            <p>
              Os dados trafegam por conexões criptografadas, e o acesso a eles é
              restrito a quem cuida do atendimento do consultório e da
              manutenção do assistente.
            </p>
          </Secao>
        </div>

        <p className="micro mt-14 text-tinta-suave">
          Atualizada em {ATUALIZADA_EM}
        </p>
      </main>
    </>
  );
}
