import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Seção Hero */}
      <section className="hero-aspect-ratio relative">
        <div className="hero-content-wrapper flex items-center justify-center text-center">
          {/* Contêiner da Imagem e Overlay (sem alterações) */}
          <div className="absolute inset-0 z-0">
            <div className="hero-background h-full w-full bg-cover bg-center bg-no-repeat"></div>
            {/* 
            O overlay foi ajustado para ter uma cor mais escura no tema claro, 
            garantindo que o texto claro no tema escuro tenha contraste.
          */}
            {/* <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-background via-transparent to-black/40 dark:bg-background/20 dark:to-background/40"></div> */}
          </div>

          {/* Conteúdo do Hero (acima do overlay) */}
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              {/*
              AQUI ESTÁ A MUDANÇA PRINCIPAL:
              - Padrão (Tema Claro): O texto é da cor 'text-main' (preto).
              - No Tema Escuro (dark:): Aplicamos o gradiente de branco que você já tinha.
            */}
              <h1 className="mb-6 text-4xl font-bold text-text-main dark:bg-gradient-to-b dark:from-white dark:to-neutral-300 dark:bg-clip-text dark:text-transparent md:text-6xl">
                Wagner Sabor
              </h1>

              {/*
              - Padrão (Tema Claro): O texto é 'text-muted' (cinza escuro).
              - No Tema Escuro (dark:): O texto é 'text-neutral-200' (branco suave).
            */}
              <p className="mx-auto mb-8 max-w-2xl text-xl text-text-main/80 dark:text-neutral-200 md:text-2xl">
                Do Pixel ao Código. Do Código à Educação. <br />
                Eu construo experiências digitais e capacito a próxima geração
                de desenvolvedores.
              </p>

              {/* Botão Hero (já usa 'primary', então está perfeito) */}
              <Link
                href="/projects"
                className="inline-block rounded-lg bg-primary px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-primary-light"
              >
                Conheça meus Projetos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
