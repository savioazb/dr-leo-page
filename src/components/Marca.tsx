import Image from "next/image";

type Props = {
  /** "tinta" sobre papel, "papel" sobre petróleo */
  cor: "tinta" | "papel";
  largura: number;
  alt?: string;
  className?: string;
};

/** O símbolo da pelve que forma um coração */
export function Marca({ cor, largura, alt = "", className }: Props) {
  return (
    <Image
      src={`/imagens/marca-${cor}.svg`}
      alt={alt}
      width={largura}
      height={largura}
      unoptimized
      className={className}
    />
  );
}

/** "Dr. Leonardo" em redondo e "Marcolino" em itálico */
export function Assinatura() {
  return (
    <>
      Dr. Leonardo <em>Marcolino</em>
    </>
  );
}
