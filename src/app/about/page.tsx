// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
      {/* Usando a cor de texto principal do tema */}
      <h1 className="mb-8 text-4xl font-bold text-text-main md:text-5xl">
        Minha Jornada: Do Pixel ao Código
      </h1>

      {/* 
        A classe 'prose' estiliza o conteúdo.
        'dark:prose-invert' diz para usar as variáveis --tw-prose-invert-* que definimos no globals.css para o tema escuro.
      */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p>
          Minha jornada na tecnologia começou com um pixel e evoluiu para o
          código. Com um background em design, eu não apenas escrevo software
          —eu construo experiências. Minha paixão é criar soluções digitais
          completas, onde a funcionalidade robusta e a usabilidade intuitiva
          andam de mãos dadas.
        </p>

        {/* Os h2 e ul dentro de .prose serão estilizados automaticamente */}
        <h2>Filosofia de Trabalho</h2>
        <ul>
          <li>
            <strong>Design-Driven Development:</strong> O código deve resolver
            um problema, mas a experiência deve encantar. Penso em UX/UI desde a
            primeira linha de código.
          </li>
          <li>
            <strong>Foco em Valor:</strong> Seja em um projeto pessoal ou
            orientando alunos, busco sempre entregar valor real, construindo
            soluções duráveis e eficientes.
          </li>
          <li>
            <strong>Ensino para Aprender:</strong> Acredito que a melhor forma
            de aprofundar o conhecimento é ensinando. Minha atuação como
            instrutor me mantém em constante aprendizado e atualização.
          </li>
        </ul>

        <h2>Além do Código</h2>
        <p>
          Hoje, como Instrutor de Formação Profissional no SENAI-SP, minha
          missão é capacitar a próxima geração de desenvolvedores. Fora da sala
          de aula, estou sempre explorando o potencial da Inteligência
          Artificial Generativa e da prototipagem com impressão 3D para
          transformar ideias em realidade.
        </p>
      </div>
    </main>
  );
}
