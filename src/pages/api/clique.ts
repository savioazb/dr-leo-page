import type { NextApiRequest, NextApiResponse } from "next";
import { DESTINOS, ORIGENS } from "@/data/site";

/**
 * Conta cliques dos botões de /agendar.
 * Chave: cliques:{origem}:{destino}:{AAAA-MM-DD} (data de Brasília), no Upstash Redis via API REST.
 * Sem cookie e sem dado pessoal: só o contador.
 *
 * Só conta em produção (VERCEL_ENV === "production"). Sem as variáveis do Upstash,
 * responde 204 sem erro.
 */

function dataBrasilia(): string {
  // en-CA formata como AAAA-MM-DD
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo" }).format(new Date());
}

function campo(body: unknown, nome: string): string | null {
  if (typeof body === "string") {
    try {
      return new URLSearchParams(body).get(nome);
    } catch {
      return null;
    }
  }
  if (body && typeof body === "object") {
    const valor = (body as Record<string, unknown>)[nome];
    return typeof valor === "string" ? valor : null;
  }
  return null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  const destino = campo(req.body, "destino");
  const origem = campo(req.body, "origem");
  if (
    !destino ||
    !origem ||
    !(DESTINOS as readonly string[]).includes(destino) ||
    !(ORIGENS as readonly string[]).includes(origem)
  ) {
    return res.status(400).end();
  }

  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

  if (process.env.VERCEL_ENV !== "production" || !url || !token) {
    return res.status(204).end();
  }

  const chave = `cliques:${origem}:${destino}:${dataBrasilia()}`;
  try {
    await fetch(`${url.replace(/\/$/, "")}/incr/${encodeURIComponent(chave)}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch {
    // Falha na contagem não é problema do visitante
  }
  return res.status(204).end();
}
