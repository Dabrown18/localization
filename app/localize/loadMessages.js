import es from './messages/es_US.json';
import en from './messages/en_US.json';

const messages = {
  es,
  en,
};

const loadMessages = locale => {
  return messages[locale] ?? messages.en;
};

export default loadMessages;
