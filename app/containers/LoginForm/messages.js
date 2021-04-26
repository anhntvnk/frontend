/*
 * LoginForm Messages
 *
 * This contains all the text for the LoginForm component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.LoginForm';

export default defineMessages({
  myFormTitle: {
    id: `${scope}.my_form.title`,
    defaultMessage: 'Đăng nhập',
  },
  myFormInputEmail: {
    id: `${scope}.my_form.inputEmail`,
    defaultMessage: 'Địa chỉ Email',
  },
  myFormInputPwd: {
    id: `${scope}.my_form.inputPwd`,
    defaultMessage: 'Mật khẩu',
  },
  myFormSavePwd: {
    id: `${scope}.my_form.savePwd`,
    defaultMessage: 'Lưu mật khẩu',
  },
  myFormSignUp: {
    id: `${scope}.my_form.signup`,
    defaultMessage: 'Chưa là thành viên? Đăng ký',
  },
});
