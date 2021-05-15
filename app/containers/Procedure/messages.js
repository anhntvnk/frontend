/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.Procedure';

export default defineMessages({
  myProjMeta: {
    id: `${scope}.meta`,
    defaultMessage: 'Quy trình Quản lý dự án',
  },
  myProjBack: {
    id: `${scope}.back`,
    defaultMessage: 'Quay lại',
  },
  myProjStatus: {
    id: `${scope}.status`,
    defaultMessage: 'Chuyển trạng thái',
  },
  myProjChangeStatus: {
    id: `${scope}.changeStatus`,
    defaultMessage: 'Bạn có muốn chuyển trạng thái không ?',
  },
  // myProjRepassword: {
  //   id: `${scope}.repassword`,
  //   defaultMessage: 'Nhập lại mật khẩu',
  // },
  // myProjRegister: {
  //   id: `${scope}.title`,
  //   defaultMessage: 'Đăng Ký',
  // },
  // myProjNameReq: {
  //   id: `${scope}.name.req`,
  //   defaultMessage: 'Họ và tên là bắt buộc!',
  // },
  // myProjEmailReq: {
  //   id: `${scope}.email.req`,
  //   defaultMessage: 'Địa chỉ Email là bắt buộc!',
  // },
  // myProjPhoneReq: {
  //   id: `${scope}.phone.req`,
  //   defaultMessage: 'Số điện thoại là bắt buộc!',
  // },
  // myProjPasswordReq: {
  //   id: `${scope}.password.req`,
  //   defaultMessage: 'Mật khẩu là bắt buộc!',
  // },
  // myProjRePasswordReq: {
  //   id: `${scope}.repassword.req`,
  //   defaultMessage: 'Nhập lại khẩu là bắt buộc!',
  // },
  // myProjRePasswordMath: {
  //   id: `${scope}.repassword.math`,
  //   defaultMessage: 'Mật khẩu nhập lại không khớp!',
  // },
});
