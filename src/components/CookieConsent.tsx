"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";

import {
  CONSENT_CHANGE_EVENT,
  OPEN_CONSENT_EVENT,
  getStoredConsent,
  setConsent,
  type ConsentChoice,
} from "@/lib/analytics";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
  };
}

// No servidor e na hidratação: "unknown" (não renderiza nada)
const getServerSnapshot = () => "unknown" as const;

/**
 * Banner de consentimento do GA4 (LGPD). Aparece até o visitante escolher;
 * o link "Preferências de cookies" do rodapé reabre. Aceitar e recusar têm
 * o mesmo peso visual.
 */
export default function CookieConsent() {
  const stored = useSyncExternalStore(
    subscribe,
    getStoredConsent,
    getServerSnapshot,
  );
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  if (stored === "unknown" || (stored !== null && !reopened)) return null;

  const choose = (choice: ConsentChoice) => {
    setConsent(choice);
    setReopened(false);
  };

  return (
    <section
      aria-label="Consentimento de cookies"
      className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
    >
      <div className="card bg-surface mx-auto flex max-w-3xl flex-col gap-4 p-5 shadow-2xl md:flex-row md:items-center md:gap-6">
        <p className="text-text-muted text-sm text-pretty">
          Uso cookies do Google Analytics para entender como o site é usado. O
          site funciona igual se você recusar. Detalhes na{" "}
          <Link
            href="/privacidade"
            className="text-primary hover:text-primary-deep dark:hover:text-primary-light font-medium underline underline-offset-2"
          >
            política de privacidade
          </Link>
          .
        </p>
        <div className="grid shrink-0 grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="border-primary/40 text-text-main hover:border-primary rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="bg-primary-strong hover:bg-primary-deep rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </section>
  );
}
