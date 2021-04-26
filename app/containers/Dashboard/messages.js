/*
 * DashBoard Messages
 *
 * This contains all the text for the DashBoard component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.DashBoard';

export default defineMessages({
  myDashBoardJob: {
    id: `${scope}.my_dashboard.job`,
    defaultMessage: 'Công việc hàng ngày',
  },
  myDashBoardKPI: {
    id: `${scope}.my_dashboard.KPI`,
    defaultMessage: 'KPI',
  },
  myDashBoardSearch: {
    id: `${scope}.my_dashboard.search`,
    defaultMessage: 'Tìm kiếm dự án',
  },
  myDashBoardCateProj: {
    id: `${scope}.my_dashboard.cateProj`,
    defaultMessage: 'Danh mục dự án đang theo',
  },
  myDashBoardSearchComp: {
    id: `${scope}.my_dashboard.searchComp`,
    defaultMessage: 'Tìm kiếm công ty',
  },
  myDashBoardCateComp: {
    id: `${scope}.my_dashboard.cateComp`,
    defaultMessage: 'Danh mục công ty đang theo',
  },
  myDashBoardProfile: {
    id: `${scope}.my_dashboard.profile`,
    defaultMessage: 'Thông tin cá nhân',
  },
  myDashBoardReport: {
    id: `${scope}.my_dashboard.report`,
    defaultMessage: 'Báo cáo',
  },
});
