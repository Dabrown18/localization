export let Locales = {
  en: 'en',
  es: 'es',
  fr: 'fr',
};

export function translationForLocale(locale) {
  switch (locale) {
    case Locales.es:
      return require('./es_US.json');
    case Locales.en: {
      return require('./en_US.json');
    }
    case Locales.fr: {
      return require('./fr_FR.json');
    }
    default:
      return require('./en_US.json');
  }
}
