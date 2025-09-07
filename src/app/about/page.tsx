// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
      {/* Usando a cor de texto principal do tema */}
      <h1 className="mb-8 text-4xl font-bold text-text-main md:text-5xl">
        Do Pixel ao Código
      </h1>

      {/* 
        A classe 'prose' estiliza o conteúdo.
        'dark:prose-invert' diz para usar as variáveis --tw-prose-invert-* que definimos no globals.css para o tema escuro.
      */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p>
          Minha jornada começou no design e me levou ao código. Por isso, não
          vejo a programação como um fim, mas como um meio para um objetivo
          maior: construir experiências. Minha paixão é unir código robusto e
          design intuitivo para criar produtos que as pessoas amam usar.
        </p>

        {/* Os h2 e ul dentro de .prose serão estilizados automaticamente */}
        <h2>Minha Filosofia</h2>
        <ul>
          <li>
            <strong>Design em Primeiro Lugar:</strong> A experiência do usuário
            não é uma etapa final, é o ponto de partida. Penso em UX/UI antes
            mesmo da primeira linha de código.
          </li>
          <li>
            <strong>Valor Acima de Tudo:</strong> Meu objetivo é entregar
            soluções eficientes e duradouras que resolvam problemas reais, seja
            para um cliente ou para um aluno.
          </li>
          <li>
            <strong>Aprender Ensinando:</strong> Como instrutor no SENAI-SP,
            capacito a próxima geração de desenvolvedores e, nesse processo, me
            mantenho em constante evolução.
          </li>
        </ul>

        <h2>Paixões Atuais</h2>
        <p>
          Fora da sala de aula, minha curiosidade me leva a explorar o potencial
          da Inteligência Artificial Generativa e a materializar ideias com
          impressão 3D.
        </p>
      </div>
    </main>
  );
}
