"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Um ouvinte de cliques para o site todo: envia ao GA4 os cliques em
 * elementos com `data-track` (ver trackAttrs em lib/analytics.ts).
 */
export default function TrackClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const el = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-track]",
      );
      if (!el) return;

      const { track, ...rest } = el.dataset;
      const params: Record<string, string> = {};
      for (const [key, value] of Object.entries(rest)) {
        // data-track-method → dataset.trackMethod → method
        if (key.startsWith("track") && value) {
          params[key.charAt(5).toLowerCase() + key.slice(6)] = value;
        }
      }
      if (track) trackEvent(track, params);

      // Conversão do Google Ads: evento próprio para o WhatsApp, porque o
      // "criar evento sem código" do GA4 não aceita contact_click como acionador
      if (track === "contact_click" && params.method === "whatsapp") {
        trackEvent("whatsapp_click", params);
      }
    };

    // auxclick: clique do meio (abrir em nova aba)
    document.addEventListener("click", onClick);
    document.addEventListener("auxclick", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("auxclick", onClick);
    };
  }, []);

  return null;
}
