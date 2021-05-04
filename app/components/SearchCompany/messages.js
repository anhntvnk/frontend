/*
 * Company Messages
 *
 * This contains all the text for the Company component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.Company';

export default defineMessages({
  myCompanySearchName: {
    id: `${scope}.company.searchName`,
    defaultMessage: 'Tên công ty',
  },
  myCompanySearchCity: {
    id: `${scope}.company.searchCity`,
    defaultMessage: 'Thành phố',
  },
  myCompanySelectCity: {
    id: `${scope}.company.selectCity`,
    defaultMessage: 'Chọn thành phố',
  },
  myCompanySearchCompany: {
    id: `${scope}.company.searchCompany`,
    defaultMessage: 'Công ty',
  },
  myCompanyAll: {
    id: `${scope}.company.allCompany`,
    defaultMessage: 'Toàn bộ công ty',
  },
  myCompanyFollow: {
    id: `${scope}.company.follow`,
    defaultMessage: 'Công ty đang theo dõi',
  },
  myCompanyBtnAdd: {
    id: `${scope}.company.btnAdd`,
    defaultMessage: 'Thêm công ty',
  },
  myCompanyBtnSearch: {
    id: `${scope}.company.btnSearch`,
    defaultMessage: 'Tìm kiếm',
  },
  myCompanyBtnClear: {
    id: `${scope}.company.btnClear`,
    defaultMessage: 'Xóa bộ lọc',
  },
});
