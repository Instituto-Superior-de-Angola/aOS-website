import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variante = 'primario' | 'secundario' | 'fantasma';

const VARIANTES: Record<Variante, string> = {
  primario: 'bg-gradiente-aos text-white shadow-cartao hover:brightness-110',
  secundario: 'bg-tinta text-white hover:bg-noite-700',
  fantasma: 'bg-transparent text-tinta ring-1 ring-inset ring-linha-forte hover:bg-subtil',
};

export function Botao({
  href,
  variante = 'primario',
  className,
  children,
  externo = false,
}: {
  href: string;
  variante?: Variante;
  className?: string;
  children: React.ReactNode;
  externo?: boolean;
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-display text-sm font-semibold transition',
    VARIANTES[variante],
    className,
  );

  if (externo) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
