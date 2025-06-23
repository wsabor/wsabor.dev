export default function Footer() {
  return (
    <footer className="bg-background py-8 text-neutral-300">
      <div className="container mx-auto px-4 text-center md:flex md:items-center md:justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Wagner Sabor. Todos os direitos
          reservados.
        </p>
        <p className="mt-2 text-xs md:mt-0">
          Desenvolvido com ❤️ usando Next.js e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
