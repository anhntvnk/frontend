/*
 * KPI Messages
 *
 * This contains all the text for the KPI component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.KPI';

export default defineMessages({
  myKPItitle: {
    id: `${scope}.my_KPI.title`,
    defaultMessage: 'KPIS: Chấm lương ngày hôm nay',
  },
  myKPIbtnBack: {
    id: `${scope}.my_KPI.btnBack`,
    defaultMessage: 'Quay lại',
  },
  myKPIprofile: {
    id: `${scope}.my_KPI.profile`,
    defaultMessage: 'Thông tin cá nhân',
  },
  myKPIprofileAccessCode: {
    id: `${scope}.my_KPI.accessCode`,
    defaultMessage: 'Mã NV:',
  },
  myKPIprofileName: {
    id: `${scope}.my_KPI.name`,
    defaultMessage: 'Họ tên:',
  },
  myKPIprofilePosition: {
    id: `${scope}.my_KPI.position`,
    defaultMessage: 'Chức vụ:',
  },
  myKPIprofileSalary: {
    id: `${scope}.my_KPI.salary`,
    defaultMessage: 'Ngày lương:',
  },
  myKPIevl: {
    id: `${scope}.my_KPI.evaluate`,
    defaultMessage: 'Tự đánh giá KPIs',
  },
  myKPIevlCall: {
    id: `${scope}.my_KPI.call`,
    defaultMessage: 'Cuộc gọi',
  },
  myKPIevlSchedule: {
    id: `${scope}.my_KPI.schedule`,
    defaultMessage: 'Lịch hẹn gặp',
  },
  myKPIevlPrice: {
    id: `${scope}.my_KPI.price`,
    defaultMessage: 'Chào giá',
  },
  myKPIevlOrder: {
    id: `${scope}.my_KPI.order`,
    defaultMessage: 'Chốt đơn hàng',
  },
  myKPIresult: {
    id: `${scope}.my_KPI.result`,
    defaultMessage: 'Kết quả thực hiện',
  },
  myKPIresultSum: {
    id: `${scope}.my_KPI.sum`,
    defaultMessage: 'Tổng',
  },
  myKPIresultScore: {
    id: `${scope}.my_KPI.score`,
    defaultMessage: 'Điểm',
  },
  myKPIresultRule: {
    id: `${scope}.my_KPI.rule`,
    defaultMessage: 'Quy định mỗi ngày đạt',
  },
  myKPIresultEnjoy: {
    id: `${scope}.my_KPI.enjoy`,
    defaultMessage: 'điểm sẽ hưởng',
  },
  myKPIresultSalary: {
    id: `${scope}.my_KPI.rsSalary`,
    defaultMessage: 'lương',
  },
  myKPIresultToday: {
    id: `${scope}.my_KPI.today`,
    defaultMessage: 'Hôm nay bạn được hưởng',
  },
  myKPIresultKPIs: {
    id: `${scope}.my_KPI.kpis`,
    defaultMessage: 'KPIs',
  },
  myKPIevlToday: {
    id: `${scope}.my_KPI.evaluateToday`,
    defaultMessage: 'Tự đánh giá KPIs ngày hôm nay',
  },
  myKPIbtnSave: {
    id: `${scope}.my_KPI.btnSave`,
    defaultMessage: 'Lưu lại',
  },
  myKPIsuccessMsg: {
    id: `${scope}.my_KPI.successMsg`,
    defaultMessage: 'Thiết lập KPIs hôm nay thành công!',
  },
});
