/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.Register';

export default defineMessages({
  myProjName: {
    id: `${scope}.name`,
    defaultMessage: 'Họ Tên',
  },
  myProjEmail: {
    id: `${scope}.email`,
    defaultMessage: 'Địa chỉ Email',
  },
  myProjPhone: {
    id: `${scope}.phone`,
    defaultMessage: 'Số điện thoại',
  },
  myProjPassword: {
    id: `${scope}.password`,
    defaultMessage: 'Mật khẩu',
  },
  myProjRepassword: {
    id: `${scope}.repassword`,
    defaultMessage: 'Nhập lại mật khẩu',
  },
  myProjRegister: {
    id: `${scope}.title`,
    defaultMessage: 'Đăng Ký',
  },
  myProjMeta: {
    id: `${scope}.meta`,
    defaultMessage: 'Đăng Ký Tài Khoản My Project',
  },
  myProjNameReq: {
    id: `${scope}.name.req`,
    defaultMessage: 'Họ và tên là bắt buộc!',
  },
  myProjEmailReq: {
    id: `${scope}.email.req`,
    defaultMessage: 'Địa chỉ Email là bắt buộc!',
  },
  myProjPhoneReq: {
    id: `${scope}.phone.req`,
    defaultMessage: 'Số điện thoại là bắt buộc!',
  },
  myProjPasswordReq: {
    id: `${scope}.password.req`,
    defaultMessage: 'Mật khẩu là bắt buộc!',
  },
  myProjRePasswordReq: {
    id: `${scope}.repassword.req`,
    defaultMessage: 'Nhập lại khẩu là bắt buộc!',
  },
  myProjRePasswordMath: {
    id: `${scope}.repassword.math`,
    defaultMessage: 'Mật khẩu nhập lại không khớp!',
  },
  myProjRegisterError: {
    id: `${scope}.error`,
    defaultMessage: 'Đã xảy ra lỗi!',
  },
  myProjRegisterErrorContent: {
    id: `${scope}.error.content`,
    defaultMessage: 'Đăng ký tài khoản không thành công, vui long thử lại sau!',
  },
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
});
