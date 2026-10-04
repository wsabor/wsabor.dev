"use client";

import { openConsentPreferences } from "@/lib/analytics";

/** Reabre o banner de cookies (rodapé e política de privacidade). */
export default function CookiePreferencesButton({
  className = "hover:text-primary underline-offset-2 transition-colors hover:underline",
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={openConsentPreferences}
      className={className}
    >
      Preferências de cookies
    </button>
  );
}
