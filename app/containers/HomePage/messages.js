/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.HomePage';

export default defineMessages({
  mypHomeCountTitle1: {
    id: `${scope}.home_count.title1`,
    defaultMessage: 'TỔNG DỰ ÁN MỚI KHỞI CÔNG',
  },
  mypHomeCountTitle2: {
    id: `${scope}.home_count.title2`,
    defaultMessage: 'TỔNG ĐƠN HÀNG',
  },
  mypHomeCountTitle3: {
    id: `${scope}.home_count.title3`,
    defaultMessage: 'TỔNG KHÁCH HÀNG MYP',
  },
  mypHomeCountTitle4: {
    id: `${scope}.home_count.title4`,
    defaultMessage: 'TỔNG CÔNG TY',
  },
  mypHomeCoutViewall: {
    id: `${scope}.home_count.viewall`,
    defaultMessage: 'Xem tất cả',
  },
  homeChartLineTitle: {
    id: `${scope}.home_chart_line.title`,
    defaultMessage: 'TỔNG HỢP DỰ ÁN BÁN ĐƯỢC TỐT NHẤT VIỆT NAM',
  },
  homeChartLineToday: {
    id: `${scope}.home_chart_line.today`,
    defaultMessage: 'Hôm nay',
  },
  homeChartLineWeek: {
    id: `${scope}.home_chart_line.week`,
    defaultMessage: 'Tuần này',
  },
  homeChartLineMonth: {
    id: `${scope}.home_chart_line.month`,
    defaultMessage: 'Tháng này',
  },
  homeChartLineYear: {
    id: `${scope}.home_chart_line.year`,
    defaultMessage: 'Năm này',
  },
  homeChartLineOrders: {
    id: `${scope}.home_chart_line.orders`,
    defaultMessage: 'Đơn hàng',
  },
  homeChartLineNewlyStarted: {
    id: `${scope}.home_chart_line.newly_started`,
    defaultMessage: 'Dự án mới khởi công',
  },
  homeChartLineCompleted: {
    id: `${scope}.home_chart_line.completed`,
    defaultMessage: 'Dự án vừa hoàn thành',
  },
  homeChartLineWon: {
    id: `${scope}.home_chart_line.won`,
    defaultMessage: 'Tổng thầu mới trúng',
  },
  homeChartLineCurrencyBillion: {
    id: `${scope}.home_chart_line.currency_billion`,
    defaultMessage: 'tỷ đồng',
  },
  topProjectsTitle: {
    id: `${scope}.top_projects.title`,
    defaultMessage: 'Tổng thầu mới trúng tốt nhất Việt Nam',
  },
  projectTableDomesticTitle: {
    id: `${scope}.project_table.domestic_title`,
    defaultMessage: 'Top dự án khu vực trong nước',
  },
  projectTableDomesticTitleUpper: {
    id: `${scope}.project_table.domestic_title_upper`,
    defaultMessage: 'TOP DỰ ÁN KHU VỰC TRONG NƯỚC',
  },
  homeChartTitle3Regions: {
    id: `${scope}.home_chart.title_3_regions`,
    defaultMessage: 'Biểu đồ dự án khu vực 03 miền',
  },
  countryMapTitle: {
    id: `${scope}.country_map.title`,
    defaultMessage: 'DỰ ÁN KHU VỰC VIỆT NAM VÀ NGOÀI NƯỚC',
  },
  countryMapExportReport: {
    id: `${scope}.country_map.export_report`,
    defaultMessage: 'Xuất báo cáo',
  },
  countryVietnam: {
    id: `${scope}.country_map.vietnam`,
    defaultMessage: 'Việt Nam',
  },
  countryJapan: {
    id: `${scope}.country_map.japan`,
    defaultMessage: 'Nhật Bản',
  },
  countryChina: {
    id: `${scope}.country_map.china`,
    defaultMessage: 'Trung Quốc',
  },
  mypIntroduceHome: {
    id: `${scope}.myp_introduce.home`,
    defaultMessage: 'Trang Chủ',
  },
  myIntroTitle: {
    id: `${scope}.myp_introduce.title`,
    defaultMessage: 'Các dự án đang theo dõi được lưu vào Trang chủ',
  },
  myIntroSubTitle: {
    id: `${scope}.myp_introduce.subTitle`,
    defaultMessage:
      'Tất cả các thông tin dự án bạn đang quan tâm bao gồm cả trạng thái, tiến trình ra sao sẽ được truy cập một cách đơn giản trên Trang chủ',
  },
  myIntroText1: {
    id: `${scope}.myp_introduce.text1`,
    defaultMessage: 'Việc thêm dự án mới rất thuận tiện vì được ưu tiên.',
  },
  myIntroText2: {
    id: `${scope}.myp_introduce.text2`,
    defaultMessage: 'Thêm các công ty mới cũng thuận tiện không kém.',
  },
  myIntroText3: {
    id: `${scope}.myp_introduce.text3`,
    defaultMessage: 'Tiến trình làm việc của dự án được nêu bật',
  },
  myIntroText4: {
    id: `${scope}.myp_introduce.text4`,
    defaultMessage: 'Bổ sung dễ dàng nhiệm vụ làm việc',
  },
  myIntroText5: {
    id: `${scope}.myp_introduce.text5`,
    defaultMessage: 'Thanh tìm kiếm giúp bạn tiết kiệm thời gian.',
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
  myFunction: {
    id: `${scope}.my_function.title`,
    defaultMessage: 'Tính năng nổi bật',
  },
  myFunctionSubTitle1: {
    id: `${scope}.my_function.subTitle1`,
    defaultMessage: '1. Quy trình',
  },
  myFunctionMsg1: {
    id: `${scope}.my_function.msg1`,
    defaultMessage:
      'Nó sẽ giúp bạn có được một quy trình bán hàng dự án hiệu quả!',
  },
  myFunctionSubTitle2: {
    id: `${scope}.my_function.subTitle2`,
    defaultMessage: '2. Đo Lường',
  },
  myFunctionMsg2: {
    id: `${scope}.my_function.msg2`,
    defaultMessage:
      'Nó sẽ giúp bạn biết được hôm nay mình có được thu nhập bao nhiêu.',
  },
  myFunctionSubTitle3: {
    id: `${scope}.my_function.subTitle3`,
    defaultMessage: '3. Công việc',
  },
  myFunctionMsg3: {
    id: `${scope}.my_function.msg3`,
    defaultMessage:
      'Nó sẽ giúp bạn quản lý được các công việc bản thân phải làm.',
  },
  myFunctionSubTitle4: {
    id: `${scope}.my_function.subTitle4`,
    defaultMessage: '4. Thông tin',
  },
  myFunctionMsg4: {
    id: `${scope}.my_function.msg4`,
    defaultMessage:
      'Nó sẽ giúp bạn có được thông tin các dự án mà không phải tốn công sức.',
  },
  myFunctionSubTitle5: {
    id: `${scope}.my_function.subTitle5`,
    defaultMessage: '5. Đo KPI',
  },
  myFunctionMsg5: {
    id: `${scope}.my_function.msg5`,
    defaultMessage:
      'Nó sẽ giúp bạn biết được hôm nay mình có được thu nhập bao nhiêu.',
  },
  myFunctionSubTitle6: {
    id: `${scope}.my_function.subTitle6`,
    defaultMessage: '6. Giao việc',
  },
  myFunctionMsg6: {
    id: `${scope}.my_function.msg6`,
    defaultMessage: 'Nó sẽ giúp bạn giao việc được cho đội nhóm của mình.',
  },
  myFunctionSubTitle7: {
    id: `${scope}.my_function.subTitle7`,
    defaultMessage: '7. Quảng Bá',
  },
  myFunctionMsg7: {
    id: `${scope}.my_function.msg7`,
    defaultMessage:
      'Nó sẽ giúp bạn quảng bá được thông tin công ty của các bạn.',
  },
  myFunctionSubTitle8: {
    id: `${scope}.my_function.subTitle8`,
    defaultMessage: '8. Doanh số',
  },
  myFunctionMsg8: {
    id: `${scope}.my_function.msg8`,
    defaultMessage: 'Nó sẽ giúp bạn dự đoán và gia tăng thu nhập khi sử dụng.',
  },
  myLanguage: {
    id: `${scope}.my_language.title`,
    defaultMessage: 'GIAO DIỆN TIẾNG VIỆT THÂN THIỆN',
  },
  myExperience: {
    id: `${scope}.my_exp.title`,
    defaultMessage: 'TRẢI NGHIỆM ỨNG DỤNG',
  },
  myBlog: {
    id: `${scope}.my_exp.blog`,
    defaultMessage: 'TRUYỀN THÔNG VỚI CHÚNG TÔI',
  },
  myExperienceMsg: {
    id: `${scope}.my_exp.msg`,
    defaultMessage:
      'Hãy click hoặc quét mã QR xuống các biểu tượng dưới đây để tải ứng dụng My Project về điện thoại của bạn!',
  },
});
