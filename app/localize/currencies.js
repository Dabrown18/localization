export let Locales = {
  USD: 'USD',
  GBP: 'GBP',
};

export function translationForLocale(locale) {
  switch (locale) {
    case Locales.USD:
      return '$';
    case Locales.GBP: {
      return '£';
    }
    default:
      return '$';
  }
}
