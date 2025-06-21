export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Wagner Sabor. Todos os direitos
          reservados.
        </p>
        <p className="text-xs mt-2">
          Desenvolvido com ❤️ usando Next.js e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
