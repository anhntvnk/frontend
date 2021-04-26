/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.constants.HomePage';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Trang Chủ',
  },
  dashboard: {
    id: `${scope}.dashboard`,
    defaultMessage: 'Bảng Điều Khiển',
  },
  project: {
    id: `${scope}.project`,
    defaultMessage: 'Dự Án',
  },
  company: {
    id: `${scope}.company`,
    defaultMessage: 'Công Ty',
  },
});
