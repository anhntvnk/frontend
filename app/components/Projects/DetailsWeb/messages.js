/*
 * DetailWeb Messages
 *
 * This contains all the text for the DetailWeb component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.DetailWeb';

export default defineMessages({
  myDetailWebOwner: {
    id: `${scope}.detail_web.owner`,
    defaultMessage: 'Chủ sở hữu:',
  },
  myDetailWebContractor: {
    id: `${scope}.detail_web.contractor`,
    defaultMessage: 'Nhà thầu chính:',
  },
  myDetailWebSubContractor: {
    id: `${scope}.detail_web.subContractor`,
    defaultMessage: 'Nhà thầu phụ:',
  },
  myDetailWebProjNum: {
    id: `${scope}.detail_web.projNum`,
    defaultMessage: 'Số hiệu dự án:',
  },
  myDetailWebStatus: {
    id: `${scope}.detail_web.status`,
    defaultMessage: 'Chi tiết trạng thái:',
  },
  myDetailWebValue: {
    id: `${scope}.detail_web.value`,
    defaultMessage: 'Giá trị:',
  },
  myDetailWebFloorNum: {
    id: `${scope}.detail_web.floorNum`,
    defaultMessage: 'Số sàn:',
  },
  myDetailWebArea: {
    id: `${scope}.detail_web.area`,
    defaultMessage: 'Diện tích:',
  },
  myDetailWebStart: {
    id: `${scope}.detail_web.start`,
    defaultMessage: 'Khởi công:',
  },
  myDetailWebComplete: {
    id: `${scope}.detail_web.complete`,
    defaultMessage: 'Hoàn công:',
  },
  myDetailWebNation: {
    id: `${scope}.detail_web.nation`,
    defaultMessage: 'Quốc gia:',
  },
  myDetailWebVietNam: {
    id: `${scope}.detail_web.vietNam`,
    defaultMessage: 'Việt Nam:',
  },
  myDetailWebProvince: {
    id: `${scope}.detail_web.province`,
    defaultMessage: 'Tỉnh thành:',
  },
  myDetailWebDistrict: {
    id: `${scope}.detail_web.district`,
    defaultMessage: 'Quận huyện:',
  },
  myDetailWebAddress: {
    id: `${scope}.detail_web.address`,
    defaultMessage: 'Địa chỉ:',
  },
  myDetailWebVersion: {
    id: `${scope}.detail_web.version`,
    defaultMessage: 'Phiên bản:',
  },
  myDetailWebVersionDescribe: {
    id: `${scope}.detail_web.versionDescribe`,
    defaultMessage: 'Quốc gia:',
  },
  myDetailWebNote: {
    id: `${scope}.detail_web.note`,
    defaultMessage: 'Ghi chú:',
  },
});
