"use client";

import { Analytics } from "@vercel/analytics/next";
import { useMounted } from "@/hooks/useMounted";

/**
 * Vercel Analytics só nos domínios servidos pela Vercel (wsabor.dev e
 * previews *.vercel.app). No wsabor.com (Oracle) o script daria 404.
 * Checa o domínio no navegador para não depender de variáveis de ambiente
 * configuradas no painel da Vercel.
 */
export default function VercelAnalytics() {
  const mounted = useMounted();
  if (!mounted) return null;

  const host = window.location.hostname;
  const onVercel = host.endsWith("wsabor.dev") || host.endsWith(".vercel.app");
  return onVercel ? <Analytics /> : null;
}
