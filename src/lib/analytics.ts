/** ID de medição do GA4 (uma propriedade para wsabor.com e wsabor.dev). */
export const GA_MEASUREMENT_ID = "G-B2JE8SNHP3";

/** Chave no localStorage com a escolha do banner: "granted" | "denied". */
export const CONSENT_STORAGE_KEY = "cookie-consent";

/** Evento de janela que reabre o banner (link "Preferências de cookies"). */
export const OPEN_CONSENT_EVENT = "open-cookie-preferences";

/** Evento de janela disparado depois que a escolha muda. */
export const CONSENT_CHANGE_EVENT = "cookie-consent-change";

export type ConsentChoice = "granted" | "denied";

type Gtag = (...args: unknown[]) => void;

function gtag(...args: unknown[]) {
  const fn = (window as unknown as { gtag?: Gtag }).gtag;
  fn?.(...args);
}

// Escolha da página atual, para quando o navegador bloqueia o localStorage
let memoryChoice: ConsentChoice | null = null;

export function getStoredConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === "granted" || value === "denied") return value;
  } catch {
    // segue para a escolha em memória
  }
  return memoryChoice;
}

// Ao recusar depois de ter aceitado, remove os cookies que o GA4 já gravou
function clearGaCookies() {
  const domain = location.hostname.replace(/^www\./, "");
  for (const cookie of document.cookie.split("; ")) {
    const name = cookie.split("=")[0];
    if (name === "_ga" || name.startsWith("_ga_")) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`;
      document.cookie = `${name}=; Max-Age=0; path=/`;
    }
  }
}

/** Grava a escolha e avisa o GA4 (Consent Mode v2). Anúncios ficam sempre negados. */
export function setConsent(choice: ConsentChoice) {
  memoryChoice = choice;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Sem storage (aba anônima restrita): vale só para esta página
  }
  gtag("consent", "update", { analytics_storage: choice });
  if (choice === "denied") clearGaCookies();
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

/**
 * Envia um evento ao GA4. Sem o gtag (localhost, previews) não faz nada.
 * No modo avançado, antes do aceite o evento vai sem cookies.
 */
export function trackEvent(name: string, params: Record<string, string> = {}) {
  gtag("event", name, params);
}

/**
 * Atributos para rastrear cliques sem tornar o componente client:
 * `<a {...trackAttrs("contact_click", { method: "email" })}>`. O ouvinte
 * fica em TrackClicks.tsx.
 */
export function trackAttrs(name: string, params: Record<string, string>) {
  const attrs: Record<string, string> = { "data-track": name };
  for (const [key, value] of Object.entries(params)) {
    attrs[`data-track-${key}`] = value;
  }
  return attrs;
}

export function openConsentPreferences() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}

/**
 * Script inline do GA4. Só roda nos domínios de produção (não em localhost
 * nem nos previews da Vercel). Modo avançado do Consent Mode: o gtag carrega
 * sempre, mas sem cookies até o visitante aceitar no banner.
 */
export const gaInlineScript = `
if (/(^|\\.)wsabor\\.(com|dev)$/.test(location.hostname)) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500
  });
  try {
    if (localStorage.getItem("${CONSENT_STORAGE_KEY}") === "granted") {
      gtag("consent", "update", { analytics_storage: "granted" });
    }
  } catch (e) {}
  gtag("js", new Date());
  gtag("config", "${GA_MEASUREMENT_ID}");
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}";
  document.head.appendChild(s);
}
`;
