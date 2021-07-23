import {Platform} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import {translationForLocale, Locales} from './messages';

function determineBestLocale(locale) {
  if (Locales[locale]) {
    console.log('Locales[locale]', Locales[locale]);
    return Locales[locale];
  }

  const subIdx = locale.lastIndexOf('_');
  if (subIdx > 0) {
    return determineBestLocale(locale.substring(0, subIdx));
  }
  return Locales.base;
}

function iosDeviceLocale() {
  const locale = RNLocalize.getLocales()[0].languageCode;
  console.log('ios locale', locale);

  if (locale.lastIndexOf('-') > 0) {
    console.log('::::: lastIndexOf', locale);
    return locale;
  }

  console.log('RNLocalize', {
    RNLocalize:
      RNLocalize.getLocales()[0].languageCode +
      '_' +
      RNLocalize.getLocales()[0].countryCode,
  });

  return (
    RNLocalize.getLocales()[0].languageCode +
    '_' +
    RNLocalize.getLocales()[0].countryCode
  );
}

function androidDeviceLocale() {
  return (
    RNLocalize.getLocales()[0].languageCode +
    '_' +
    RNLocalize.getLocales()[0].countryCode
  );
}

export function deviceLocal() {
  return Platform.select({
    ios: iosDeviceLocale(),
    android: androidDeviceLocale(),
  });
}

function localized(loomkey, ...args) {
  console.clear();
  const locale = deviceLocal();
  console.log('locale');
  const peerspaceString = translationForLocale(determineBestLocale(locale));
  console.log('::::: peerspaceString', peerspaceString);

  let result =
    peerspaceString[loomkey] || translationForLocale(Locales.base)[loomkey];
  console.log('result', result);

  if (result) {
    result = result.replace(/\%s\d+/g, r => String(args[r.slice(2) - 1]));
    console.log('::::: result', result);
  }

  return result;
}

export default localized;
