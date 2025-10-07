/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: 'This project is licensed under the MIT license.',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made with love by {author}.
    `,
  },
  myBanner2Title: {
    id: `${scope}.my_banner2.title`,
    defaultMessage: 'Phần mềm My Project',
  },
  myBanner2Msg: {
    id: `${scope}.my_banner2.msg`,
    defaultMessage: 'Tiết kiệm thời gian và gia tăng số lượng dự án cho bạn!',
  },
  myProjectSaveTime: {
    id: `${scope}.my_project.save`,
    defaultMessage: 'Save Time More Project',
  },
  myBanner2DownApp: {
    id: `${scope}.my_banner2.down`,
    defaultMessage: 'Tải App My Project trên kho ứng dụng',
  },
  address: {
    id: `${scope}.address`,
    defaultMessage:
      'Số 7 Ngõ Thông Phong, Tôn Đức Thắng, Phường Quốc Tử Giám, Quận Đống Đa, Hà Nội',
  },
  footerMsg1: {
    id: `${scope}.msg1`,
    defaultMessage:
      'Chia sẻ cơ hội và kết nối doanh nghiệp ngành xây dựng, cơ điện, nội thất về các công trình. Giúp bạn tiết kiệm 50% thời gian và gia tăng gấp 3 lần doanh số với App My Project!',
  },
  footerMsg2: {
    id: `${scope}.msg2`,
    defaultMessage: 'Tôi xin sẵn sàng phục vụ bạn!',
  },
  footerSupport: {
    id: `${scope}.support`,
    defaultMessage: 'Hỗ trợ khách hàng',
  },
  codeCer: {
    id: `${scope}.codeCer`,
    defaultMessage: 'Mã giấy phép kinh doanh',
  },
  footerService: {
    id: `${scope}.service`,
    defaultMessage: 'DỊCH VỤ HỖ TRỢ',
  },
  footerServiceAcademy: {
    id: `${scope}.service.academy`,
    defaultMessage: '• Đào tạo quy trình chuẩn Bán Hàng Dự Án',
  },
  footerServiceShare: {
    id: `${scope}.service.share`,
    defaultMessage: '• Chia sẻ cơ hội – hỗ trợ kết nối dự án',
  },
  footerServiceProvided: {
    id: `${scope}.service.provided`,
    defaultMessage: '• Cung cấp công cụ quản lý và theo dõi dự án hiệu quả',
  },
  footerServiceInvite: {
    id: `${scope}.service.invite`,
    defaultMessage: '• Tham gia cộng đồng Hiệp Hội Xây Dựng Công Nghiệp',
  },
  footerCopyright: {
    id: `${scope}.copyright`,
    defaultMessage: '@Copyright by MYP - Một sản phầm của MYP',
  },
  footerPolicy: {
    id: `${scope}.policy`,
    defaultMessage: 'Chính Sách',
  },
  footerProvision: {
    id: `${scope}.provision`,
    defaultMessage: 'Điều Khoản',
  },
  footerSolution: {
    id: `${scope}.solution`,
    defaultMessage: 'Giải Pháp',
  },
  footerPriceList: {
    id: `${scope}.priceList`,
    defaultMessage: 'Bảng Giá',
  },
});
