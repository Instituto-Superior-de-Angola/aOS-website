/** Cabeçalho padrão das páginas interiores. */
export function CabecalhoPagina({
  kicker,
  titulo,
  descricao,
}: {
  kicker: string;
  titulo: string;
  descricao: string;
}) {
  return (
    <header className="border-b border-linha bg-superficie">
      <div className="contentor py-16 sm:py-20">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold sm:text-5xl">{titulo}</h1>
        <p className="prosa mt-5 text-base">{descricao}</p>
      </div>
    </header>
  );
}
