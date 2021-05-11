/*
 * ChangePassword Messages
 *
 * This contains all the text for the ChangePassword component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.ChangePassword';

export default defineMessages({
  myPasswordTitle: {
    id: `${scope}.my_pwd.title`,
    defaultMessage: 'Đổi mật khẩu',
  },
  myPasswordBtnBack: {
    id: `${scope}.my_pwd.btnBack`,
    defaultMessage: 'Quay lại',
  },
  myPasswordRuleOld: {
    id: `${scope}.my_pwd.ruleOld`,
    defaultMessage: 'Mật khẩu cũ là bắt buộc!',
  },
  myPasswordOld: {
    id: `${scope}.my_pwd.old`,
    defaultMessage: 'Nhập mật khẩu cũ',
  },
  myPasswordRuleNew: {
    id: `${scope}.my_pwd.newRule`,
    defaultMessage: 'Mật khẩu mới là bắt buộc!',
  },
  myPasswordNew: {
    id: `${scope}.my_pwd.new`,
    defaultMessage: 'Nhập mật khẩu mới',
  },
  myPasswordNewTurnRule: {
    id: `${scope}.my_pwd.newTurnRule`,
    defaultMessage: 'Mật khẩu nhập lại là bắt buộc!',
  },
  myPasswordNotMatch: {
    id: `${scope}.my_pwd.notMatch`,
    defaultMessage: 'Mật khẩu nhập lại là không khớp!',
  },
  myPasswordNewTurn: {
    id: `${scope}.my_pwd.newTurn`,
    defaultMessage: 'Nhập lại mật khẩu mới',
  },
  myPasswordBtnSave: {
    id: `${scope}.my_pwd.btnSave`,
    defaultMessage: 'Lưu lại',
  },
});
