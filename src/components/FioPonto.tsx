type Props = {
  /** Largura e altura do quadro do design, em px */
  quadro: [number, number];
  /** Altura do trecho reto */
  y: number;
  /** Resto do caminho depois do trecho reto, no formato do design. Ex.: "L1130 132C1234 132 1296 182 1296 276" */
  resto: string;
  ponto: { cx: number; cy: number; r: number };
  espessura: number;
  className?: string;
};

/**
 * O fio fino que atravessa a tela e termina num ponto, sobre petróleo.
 * O trecho reto começa fora do quadro (overflow visível) para encostar na borda da tela
 * em qualquer largura; a seção que o contém corta o excesso.
 */
export function FioPonto({ quadro, y, resto, ponto, espessura, className = "" }: Props) {
  const [w, h] = quadro;
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      className={`pointer-events-none absolute left-0 top-0 h-auto w-full overflow-visible ${className}`}
    >
      <path d={`M-4000 ${y}${resto}`} stroke="#f2eee5" strokeWidth={espessura} strokeLinecap="round" />
      <circle cx={ponto.cx} cy={ponto.cy} r={ponto.r} fill="#f2eee5" />
    </svg>
  );
}
