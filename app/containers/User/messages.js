/*
 * User Messages
 *
 * This contains all the text for the User component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.User';

export default defineMessages({
  myProfiletTitle: {
    id: `${scope}.my_profile.title`,
    defaultMessage: 'Thông tin cá nhân',
  },
  myProfileaBtnBack: {
    id: `${scope}.my_profile.btnBack`,
    defaultMessage: 'Quay lại',
  },
  myProfileId: {
    id: `${scope}.my_profile.id`,
    defaultMessage: 'Mã NV:',
  },
  myProfileName: {
    id: `${scope}.my_profile.name`,
    defaultMessage: 'Họ tên:',
  },
  myProfilePosition: {
    id: `${scope}.my_profile.position`,
    defaultMessage: 'Chức vụ:',
  },
  myProfileSalary: {
    id: `${scope}.my_profile.salary`,
    defaultMessage: 'Ngày lương:',
  },
  myProfileAddressOffice: {
    id: `${scope}.my_profile.addressOffice`,
    defaultMessage: 'Địa chỉ (office):',
  },
  myProfileAddressHome: {
    id: `${scope}.my_profile.addressHome`,
    defaultMessage: 'Địa chỉ (nhà):',
  },
  myProfileCity: {
    id: `${scope}.my_profile.city`,
    defaultMessage: 'Thành phố:',
  },
  myProfiletCompany: {
    id: `${scope}.my_profile.company`,
    defaultMessage: 'Công ty:',
  },
  myProfileNote: {
    id: `${scope}.my_profile.note`,
    defaultMessage: 'Ghi chú',
  },
  myProfileService: {
    id: `${scope}.my_profile.service`,
    defaultMessage: 'Gói dịch vụ:',
  },
  myProfiletitleEndDate: {
    id: `${scope}.my_profile.endDate`,
    defaultMessage: 'Ngày hết hạn:',
  },
  myProfileUpdating: {
    id: `${scope}.my_profile.updating`,
    defaultMessage: 'Đang cập nhật...',
  },
  myProfileContact: {
    id: `${scope}.my_profile.contact`,
    defaultMessage: 'Liên hệ',
  },
  myProfileAssign: {
    id: `${scope}.my_profile.assign`,
    defaultMessage: 'Giao việc',
  },
  myProfileBascicPackage: {
    id: `${scope}.my_profile.basic`,
    defaultMessage: 'Gói Basic',
  },
  myProfileStandardPackage: {
    id: `${scope}.my_profile.standard`,
    defaultMessage: 'Gói Standard',
  },
  myProfileEnterprisePackage: {
    id: `${scope}.my_profile.enterprise`,
    defaultMessage: 'Gói Enterprise',
  },
  myProfileBuyPackage: {
    id: `${scope}.my_profile.buyPackage`,
    defaultMessage: 'Mua gói',
  },
  myProfileRenewPackage: {
    id: `${scope}.my_profile.renewPackage`,
    defaultMessage: 'Gia hạn',
  },
  myProfileTitlePackage: {
    id: `${scope}.my_profile.titlePackage`,
    defaultMessage: 'Gói Dịch Vụ',
  },
  myProfileContentConfirmPackage: {
    id: `${scope}.my_profile.content.confirm`,
    defaultMessage: 'Bạn có muốn gia hạn {package} không?',
  },
  myProfileRenewSuccess: {
    id: `${scope}.my_profile.package.success`,
    defaultMessage:
      'Gia hạn gói thành công, nhân viên bán hàng sẽ liên hệ với bạn!',
  },
});
