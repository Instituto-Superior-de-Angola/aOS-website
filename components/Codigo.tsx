/** Bloco de código monoespaçado sobre superfície escura. */
export function Codigo({ children, legenda }: { children: React.ReactNode; legenda?: string }) {
  return (
    <figure className="overflow-hidden rounded-xl bg-noite-900 ring-1 ring-noite-600">
      {legenda && (
        <figcaption className="border-b border-noite-600 px-5 py-2.5 font-mono text-2xs uppercase tracking-widest text-white/40">
          {legenda}
        </figcaption>
      )}
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[0.8125rem] leading-6 text-white/80">
        <code>{children}</code>
      </pre>
    </figure>
  );
}
