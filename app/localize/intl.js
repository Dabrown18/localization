import {createIntl, createIntlCache} from 'react-intl';
import loadMessages from './loadMessages';
import getLocal, {deviceLocal} from './getLocal';

const locale = deviceLocal();
const messages = loadMessages();

const cache = createIntlCache();

const intl = createIntl(
  {
    locale,
    messages,
  },
  cache,
);

export default intl;
