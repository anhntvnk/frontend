/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.constants.HomePage';

export default defineMessages({
  reportTitle: {
    id: `${scope}.reportTitle`,
    defaultMessage: 'Báo cáo các dự án trong quá trình',
  },
  goBack: {
    id: `${scope}.goBack`,
    defaultMessage: 'Quay lại',
  },
  projectFollows: {
    id: `${scope}.project.follow`,
    defaultMessage: 'Giá trị dự án đang theo dõi triệu USD',
  },
  projectFollowsCount: {
    id: `${scope}.project.follow.count`,
    defaultMessage: 'Số lượng dự án đang theo dõi',
  },
  enumProject: {
    id: `${scope}.project`,
    defaultMessage: 'Dự án',
  },
  enumCheck: {
    id: `${scope}.check`,
    defaultMessage: 'Sàng lọc',
  },
  enumCall: {
    id: `${scope}.call`,
    defaultMessage: 'Gọi điện',
  },
  enumIntroduce: {
    id: `${scope}.introduce`,
    defaultMessage: 'Giới thiệu',
  },
  enumIntroduceCompany: {
    id: `${scope}.introduce_company`,
    defaultMessage: 'Giới thiệu về công ty (USP)',
  },
  enumSolution: {
    id: `${scope}.solutioon`,
    defaultMessage: 'Thuyết trình giải pháp',
  },
  enumOffers: {
    id: `${scope}.offers`,
    defaultMessage: 'Chào giá',
  },
  enumPriceNegotiation: {
    id: `${scope}.priceNegotiation`,
    defaultMessage: 'Thương thảo giá',
  },
  enumNegotiation: {
    id: `${scope}.negotiation`,
    defaultMessage: 'Thương thảo hợp đồng',
  },
});
