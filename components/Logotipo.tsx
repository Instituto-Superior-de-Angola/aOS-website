import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MARCA } from '@/lib/marca';

type Props = {
  /** Aresta do símbolo em pixels. */
  tamanho?: number;
  /** Oculta o texto e deixa apenas o símbolo. */
  apenasSimbolo?: boolean;
  /** Inverte o texto para superfícies escuras. */
  invertido?: boolean;
  className?: string;
};

/**
 * Assinatura da marca: símbolo (engrenagem + ave) seguido do nome.
 * O símbolo nunca é recolorido nem distorcido — usa sempre o ficheiro oficial.
 */
export function Logotipo({ tamanho = 36, apenasSimbolo = false, invertido = false, className }: Props) {
  return (
    <Link href="/" className={cn('group inline-flex items-center gap-2.5', className)} aria-label={`${MARCA.nome} — página inicial`}>
      <Image
        src="/logo-aos.png"
        alt=""
        width={tamanho}
        height={tamanho}
        priority
        className="transition-transform duration-300 group-hover:rotate-12"
      />
      {!apenasSimbolo && (
        <span className="flex flex-col leading-none">
          <span className={cn('font-display text-[1.05rem] font-bold tracking-tight', invertido ? 'text-white' : 'text-tinta')}>
            angolan<span className="text-aos-laranja">OS</span>
          </span>
          <span
            className={cn(
              'mt-1 whitespace-nowrap text-2xs uppercase tracking-kicker',
              invertido ? 'text-white/55' : 'text-tinta-tenue',
            )}
          >
            Instituto Superior de Angola
          </span>
        </span>
      )}
    </Link>
  );
}
