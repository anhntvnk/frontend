/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.Project';

export default defineMessages({
  myFormProjName: {
    id: `${scope}.form_search.projName`,
    defaultMessage: 'Tên dự án',
  },
  myFormOwner: {
    id: `${scope}.form_search.owner`,
    defaultMessage: 'Chủ sở hữu',
  },
  myFormContractor: {
    id: `${scope}.form_search.contractor`,
    defaultMessage: 'Nhà thầu chính',
  },
  myFormSubContractor: {
    id: `${scope}.form_search.subContractor`,
    defaultMessage: 'Nhà thầu phụ',
  },
  myFormStartMonth: {
    id: `${scope}.form_search.startMonth`,
    defaultMessage: 'Tháng khởi công',
  },
  myFormSelectMonth: {
    id: `${scope}.form_search.selectMonth`,
    defaultMessage: 'Chọn tháng',
  },
  myFormComplMonth: {
    id: `${scope}.form_search.complMonth`,
    defaultMessage: 'Tháng hoàn công',
  },
  myFormCity: {
    id: `${scope}.form_search.city`,
    defaultMessage: 'Thành phố',
  },
  myFormSelectCity: {
    id: `${scope}.form_search.selectCity`,
    defaultMessage: 'Chọn thành phố',
  },
  myFormType: {
    id: `${scope}.form_search.type`,
    defaultMessage: 'Loại hình',
  },
  myFormSelectType: {
    id: `${scope}.form_search.selectType`,
    defaultMessage: 'Chọn loại hình',
  },
  myFormPeriod: {
    id: `${scope}.form_search.period`,
    defaultMessage: 'Giai đoạn',
  },
  myFormSelectPeriod: {
    id: `${scope}.form_search.selectPeriod`,
    defaultMessage: 'Chọn giai đoạn',
  },
  myFormProject: {
    id: `${scope}.form_search.project`,
    defaultMessage: 'Dự án',
  },
  myFormFullProjects: {
    id: `${scope}.form_search.fullProj`,
    defaultMessage: 'Toàn bộ dự án',
  },
  myFormFollowProj: {
    id: `${scope}.form_search.followProj`,
    defaultMessage: 'Dự án đang theo dõi',
  },
  myFormBtnAddProj: {
    id: `${scope}.form_search.btnAddProj`,
    defaultMessage: 'Thêm dự án',
  },
  myFormBtnSearch: {
    id: `${scope}.form_search.btnSearch`,
    defaultMessage: 'Tìm kiếm',
  },
  myFormBtnDelete: {
    id: `${scope}.form_search.btnDelete`,
    defaultMessage: 'Xóa bộ lọc',
  },
});
