/*
 * Provision Messages
 *
 * This contains all the text for the ChangePassword component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.Provision';

export default defineMessages({
  myProjRegisterSuccess: {
    id: `${scope}.success`,
    defaultMessage: 'Đăng ký thành công!',
  },
  myProjRegisterSuccessContent: {
    id: `${scope}.content`,
    defaultMessage:
      'MYP cảm ơn bạn đã đăng ký sử dụng My Project - Ứng dụng cung cấp thông tin và quản lý dự án!',
  },
  myProjGoToLogin: {
    id: `${scope}.nextLogin`,
    defaultMessage: 'Đi tới trang Đăng Nhập',
  },
  myProjGoToZalo: {
    id: `${scope}.nextZalo`,
    defaultMessage: 'Tham gia nhóm Zalo',
  },
});
