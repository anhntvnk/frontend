/*
 * Contact Messages
 *
 * This contains all the text for the Contact component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.Contact';

export default defineMessages({
  myContactList: {
    id: `${scope}.contact.list`,
    defaultMessage: 'Danh sách thành viên trong dự án:',
  },
  myContactEmail: {
    id: `${scope}.contact.email`,
    defaultMessage: 'Địa chỉ Email:',
  },
  myContactPhone: {
    id: `${scope}.contact.phone`,
    defaultMessage: 'Số điện thoại:',
  },
  myContactAddress: {
    id: `${scope}.contact.address`,
    defaultMessage: 'Địa chỉ (nhà):',
  },
  myContactPosition: {
    id: `${scope}.contact.position`,
    defaultMessage: 'Vị trí:',
  },
  myContactNoData: {
    id: `${scope}.contact.noData`,
    defaultMessage: 'Không có dữ liệu!',
  },
  myContactModalTitle: {
    id: `${scope}.contact.modalTitle`,
    defaultMessage: 'Thêm người liên hệ',
  },
  myContactModalBtnOK: {
    id: `${scope}.contact.modalBtnOK`,
    defaultMessage: 'Lưu lại',
  },
  myContactModalBtnExit: {
    id: `${scope}.contact.modalBtnExit`,
    defaultMessage: 'Thoát',
  },
  myContactModalFullName: {
    id: `${scope}.contact.modalFullName`,
    defaultMessage: 'Tên đầy đủ',
  },
  myContactModalFullNameReq: {
    id: `${scope}.contact.modalFullNameReq`,
    defaultMessage: 'Họ và tên là bắt buộc!',
  },
  myContactModalPosition: {
    id: `${scope}.contact.modalPosition`,
    defaultMessage: 'Chức danh',
  },
  myContactModalPositionReq: {
    id: `${scope}.contact.modalPositionReq`,
    defaultMessage: 'Chức danh là bắt buộc!',
  },
  myContactModalPhone: {
    id: `${scope}.contact.modalPhone`,
    defaultMessage: 'Số điện thoại',
  },
  myContactModalPhoneReq: {
    id: `${scope}.contact.modalPhoneReq`,
    defaultMessage: 'Số điện thoại là bắt buộc!',
  },
  myContactModalEmail: {
    id: `${scope}.contact.modalEmail`,
    defaultMessage: 'Email',
  },
  myContactModalEmailReq: {
    id: `${scope}.contact.modalEmailReq`,
    defaultMessage: 'Địa chỉ Email không hợp lệ!',
  },
  myContactModalRole: {
    id: `${scope}.contact.modalRole`,
    defaultMessage: 'Vai trò',
  },
  myContactModalCompany: {
    id: `${scope}.contact.modalCompany`,
    defaultMessage: 'Công ty',
  },
  myContactModalAddress: {
    id: `${scope}.contact.modalAddress`,
    defaultMessage: 'Địa chỉ (nhà)',
  },
});
