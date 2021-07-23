import React from 'react';
import {RawIntlProvider} from 'react-intl';
import intl from './intl';

const IntlProvider = ({children}) => (
  <RawIntlProvider value={intl}>{children}</RawIntlProvider>
);

export default IntlProvider;
