import {Platform} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import {translationForLocale, Locales} from './messages';
import moment from 'moment-timezone';

export const getLocalCurrency = () => RNLocalize.getCurrencies()[0];

export function getLocalTime(time) {
  const localTimeZone = RNLocalize.getTimeZone();
  return moment.tz(time, localTimeZone).format('h:mm z');
}

function determineBestLocale(locale) {
  if (Locales[locale]) {
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

  if (locale.lastIndexOf('-') > 0) {
    return locale;
  }

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
  /**
   * locale returns the language of device
   * exp. en_US
   */
  const locale = deviceLocal();

  /**
   * Returns all screen strings in the device language
   * @type {{
   * "home_page.settings": string,
   * "home_page.update_name": string,
   * "home_page.update_address": string,
   * "home_page.social_media": string,
   * "home_page.location": string,
   * "home_page.first_name": string,
   * "home_page.last_name": string
   * }}
   */
  const peerspaceString = translationForLocale(determineBestLocale(locale));

  /**
   * Returns loomkey value
   * Exp. home_screen.settings = Ajustes
   */
  let result =
    peerspaceString[loomkey] || translationForLocale(Locales.base)[loomkey];

  if (result) {
    result = result.replace(/\%s\d+/g, r => String(args[r.slice(2) - 1]));
  }

  return result;
}

export default localized;
