"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export function Comments() {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  // Este useEffect garante que o script do Giscus seja recarregado quando o tema muda.
  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    // Aqui você cola os atributos do script gerado pelo Giscus
    script.setAttribute("data-repo", "wsabor/wsabor.dev"); // SEU REPO
    script.setAttribute("data-repo-id", "R_kgDOO_R1ow"); // SEU REPO ID
    script.setAttribute("data-category", "General"); // SUA CATEGORIA
    script.setAttribute("data-category-id", "DIC_kwDOO_R1o84CsvnC"); // SEU CATEGORY ID
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-lang", "pt");

    // A mágica da troca de tema acontece aqui
    script.setAttribute("data-theme", theme === "dark" ? "dark" : "light");

    ref.current.appendChild(script);
  }, [theme]); // O efeito roda de novo sempre que o 'theme' muda

  return (
    <div className="not-prose my-16">
      <h3 className="mb-6 text-2xl font-bold text-text-main">Comentários</h3>
      <div ref={ref} />
    </div>
  );
}
