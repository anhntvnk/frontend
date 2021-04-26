/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: 'This project is licensed under the MIT license.',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made with love by {author}.
    `,
  },
  address: {
    id: `${scope}.address`,
    defaultMessage: 'Số 88 Láng Hạ, Đống Đa, Hà Nội',
  },
  footerMsg1: {
    id: `${scope}.msg1`,
    defaultMessage: 'Nếu bạn cần gia tăng doanh số?',
  },
  footerMsg2: {
    id: `${scope}.msg2`,
    defaultMessage: 'Tôi xin sẵn sàng phục vụ bạn!',
  },
  footerSupport: {
    id: `${scope}.support`,
    defaultMessage: 'Hỗ trợ khách hàng',
  },
  footerDown: {
    id: `${scope}.download`,
    defaultMessage: 'TẢI ỨNG DỤNG MY PROJECT',
  },
  footerCopyright: {
    id: `${scope}.copyright`,
    defaultMessage: '@Copyright by MYP - Một sản phầm của MYP',
  },
});
