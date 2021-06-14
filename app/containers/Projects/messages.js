/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.Project';

export default defineMessages({
  myProjImage: {
    id: `${scope}.my_project.image`,
    defaultMessage: 'Ảnh',
  },
  myProjName: {
    id: `${scope}.my_project.name`,
    defaultMessage: 'Tên dự án',
  },
  myProjValue: {
    id: `${scope}.my_project.value`,
    defaultMessage: 'Giá trị (USD)',
  },
  myProjAddress: {
    id: `${scope}.my_project.address`,
    defaultMessage: 'Địa chỉ',
  },
  myProjPeriod: {
    id: `${scope}.my_project.period`,
    defaultMessage: 'Giai đoạn',
  },
  myProjStatus: {
    id: `${scope}.my_project.status`,
    defaultMessage: 'Trạng thái',
  },
  myProjUpdate: {
    id: `${scope}.my_project.update`,
    defaultMessage: 'Ngày cập nhật',
  },
  myProjFollow: {
    id: `${scope}.my_project.follow`,
    defaultMessage: 'Theo dõi',
  },
  myProjFollowCostM: {
    id: `${scope}.my_project.costM`,
    defaultMessage: 'Triệu',
  },
  myProjFollowCostB: {
    id: `${scope}.my_project.costB`,
    defaultMessage: 'Tỷ',
  },
});
