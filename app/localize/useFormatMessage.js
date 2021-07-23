import {useIntl} from 'react-intl';

const useFormatMessage = () => {
  const intl = useIntl();

  return intl.formatMessage;
};

export default useFormatMessage;
