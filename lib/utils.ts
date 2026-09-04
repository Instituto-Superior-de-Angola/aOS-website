import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Compõe classes Tailwind resolvendo conflitos de utilitários. */
export function cn(...entradas: ClassValue[]) {
  return twMerge(clsx(entradas));
}

/** Formata uma data ISO no formato longo em português de Angola. */
export function formatarData(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
