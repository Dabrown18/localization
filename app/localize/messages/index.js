export let Locales = {
  en: 'en',
  es: 'es',
};

export function translationForLocale(locale) {
  switch (locale) {
    case Locales.es:
      return require('./es_US.json');
    case Locales.en: {
      return require('./en_US.json');
    }
    default:
      return require('./en_US.json');
  }
}
