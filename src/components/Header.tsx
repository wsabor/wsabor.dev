export default function Header() {
  return (
    <header className="bg-neutral-900 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">wsabor.dev</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="hover:text-cyan-400 transition-colors"
              >
                Projetos
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-cyan-400 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
