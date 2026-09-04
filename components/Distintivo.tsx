import { cn } from '@/lib/utils';

/** Etiqueta de estado, com anel de 1px. Usada em edições e lançamentos. */
export function Distintivo({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-display text-2xs font-semibold uppercase tracking-kicker ring-1 ring-inset',
        className,
      )}
    >
      {children}
    </span>
  );
}
