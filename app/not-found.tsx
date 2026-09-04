import { Botao } from '@/components/Botao';

export default function NaoEncontrado() {
  return (
    <div className="contentor flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl font-extrabold texto-gradiente">404</p>
      <h1 className="mt-5 text-3xl font-bold">Página não encontrada</h1>
      <p className="prosa mx-auto mt-4 text-center">
        O endereço que procurou não existe neste sítio. Pode ter sido movido, ou a ligação estar incorrecta.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Botao href="/">Voltar ao início</Botao>
        <Botao href="/documentacao" variante="fantasma">
          Ver a documentação
        </Botao>
      </div>
    </div>
  );
}
