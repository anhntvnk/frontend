/* eslint-disable react/react-in-jsx-scope */
/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.HomePage';

export default defineMessages({
  bannerTitle: {
    id: `${scope}.banner.title`,
    defaultMessage: 'Save Time More Project',
  },
  bannerMessage: {
    id: `${scope}.banner.message`,
    defaultMessage:
      'Giúp bạn có nhiều dự án hơn với thời gian ít hơn cùng {myProject}.',
  },
  signIn: {
    id: `${scope}.signIn.message`,
    defaultMessage: 'Đăng Nhập',
  },
  register: {
    id: `${scope}.register.message`,
    defaultMessage: 'Đăng Ký',
  },
  logOut: {
    id: `${scope}.logOut.message`,
    defaultMessage: 'Đăng Xuất',
  },
});
