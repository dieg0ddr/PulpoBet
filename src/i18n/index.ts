import { translations } from './translations';

export type Lang = 'es' | 'pt' | 'en';

const STORAGE_KEY = 'pulpobet.lang';

function readStored(): Lang {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'es' || v === 'pt' || v === 'en') return v;
  } catch {}
  return 'es';
}

let currentLang: Lang = readStored();

/** Maps the language-switch codes used in the header/footer to locales. */
export const LANG_BY_SWITCH_CODE: Record<string, Lang> = { ES: 'es', BR: 'pt', EN: 'en' };
export const SWITCH_CODE_BY_LANG: Record<Lang, string> = { es: 'ES', pt: 'BR', en: 'EN' };
const HTML_LANG: Record<Lang, string> = { es: 'es-419', pt: 'pt-BR', en: 'en-US' };

export function getLang(): Lang {
  return currentLang;
}

/** Called by App on every render, before children render, so t() always sees the active language. */
export function setLang(lang: Lang) {
  if (lang === currentLang && document.documentElement.lang === HTML_LANG[lang]) return;
  currentLang = lang;
  try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
  document.documentElement.lang = HTML_LANG[lang];
}

/**
 * Translates a UI string. The key is the string as written in the source (Spanish for
 * PulpoBet screens, Portuguese for the sportsbook). Anything that isn't a known string
 * (numbers, elements, unknown text) is returned unchanged.
 */
export function t<T>(value: T): T {
  if (typeof value !== 'string') return value;
  const entry = translations[value] ?? translations[value.trim()];
  if (!entry) return value;
  const out = entry[currentLang];
  if (!out) return value;
  if (entry === translations[value]) return out as unknown as T;
  // preserve surrounding whitespace when matched on the trimmed key
  const lead = value.match(/^\s*/)![0];
  const trail = value.match(/\s*$/)![0];
  return (lead + out + trail) as unknown as T;
}
