/** Blocos de composição para os documentos legais. */

export function SeccaoLegal({
  numero,
  titulo,
  children,
  id,
}: {
  numero: string;
  titulo: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-linha pt-9">
      <h2 className="flex gap-3 text-xl font-bold">
        <span className="font-mono text-base text-aos-laranja">{numero}</span>
        {titulo}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-tinta-suave">{children}</div>
    </section>
  );
}

export function Destaque({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-linha bg-superficie px-6 py-5 text-sm leading-7 text-tinta-suave">
      {children}
    </div>
  );
}

export function ListaLegal({ itens }: { itens: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {itens.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-aos-laranja" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Data da última revisão, apresentada de forma uniforme. */
export function DataRevisao({ iso }: { iso: string }) {
  const data = new Date(`${iso}T00:00:00Z`).toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  return (
    <p className="mt-6 border-t border-linha pt-6 text-2xs uppercase tracking-kicker text-tinta-tenue">
      Última revisão: {data}
    </p>
  );
}
