export let Locales = {
  en: 'en',
  el: 'el',
};

export function translationForLocale(locale) {
  switch (locale) {
    case Locales.el:
      return require('./es_US.json');
    case Locales.en: {
      return require('./en_US.json');
    }
  }
}
