type LocaleValue = { en: string; es: string };
type TranslationTree = { [key: string]: LocaleValue | TranslationTree };

function isLocaleValue(value: LocaleValue | TranslationTree): value is LocaleValue {
  return 'en' in value && 'es' in value;
}

function flatten(
  tree: TranslationTree,
  prefix = '',
  en: Record<string, string> = {},
  es: Record<string, string> = {},
): { en: Record<string, string>; es: Record<string, string> } {
  for (const [key, value] of Object.entries(tree)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (isLocaleValue(value)) {
      en[path] = value.en;
      es[path] = value.es;
    } else {
      flatten(value, path, en, es);
    }
  }
  return { en, es };
}

export function buildResources(translations: TranslationTree) {
  const { en, es } = flatten(translations);
  return {
    en: { translation: en },
    es: { translation: es },
  };
}
