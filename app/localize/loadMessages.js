import es from './messages/es_US.json';
import en from './messages/en_US.json';
import fr from './messages/fr_FR.json';

const messages = {
  es,
  en,
  fr,
};

const loadMessages = locale => {
  return messages[locale] ?? messages.en;
};

export default loadMessages;
