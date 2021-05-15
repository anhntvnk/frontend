/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.constants.HomePage';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Trang Chủ',
  },
  dashboard: {
    id: `${scope}.dashboard`,
    defaultMessage: 'Bảng Điều Khiển',
  },
  project: {
    id: `${scope}.project`,
    defaultMessage: 'Dự Án',
  },
  company: {
    id: `${scope}.company`,
    defaultMessage: 'Công Ty',
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
