/*
 * ProjectDetail Messages
 *
 * This contains all the text for the ProjectDetail component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.ProjectDetail';

export default defineMessages({
  myProjDetailBtnBack: {
    id: `${scope}.proj_detail.btnBack`,
    defaultMessage: 'Quay lại',
  },
  myProjDetailTitle: {
    id: `${scope}.proj_detail.title`,
    defaultMessage: 'Chi tiết công ty',
  },
  myProjDetailProj: {
    id: `${scope}.proj_detail.proj`,
    defaultMessage: 'Dự án:',
  },
  myProjDetailUpdate: {
    id: `${scope}.proj_detail.update`,
    defaultMessage: 'Cập nhật mới:',
  },
  myProjDetailHome: {
    id: `${scope}.proj_detail.home`,
    defaultMessage: 'Việt Nam',
  },
  myProjDetailStatus: {
    id: `${scope}.proj_detail.status`,
    defaultMessage: 'Chuyển trạng thái',
  },
  myProjDetailOverview: {
    id: `${scope}.proj_detail.overview`,
    defaultMessage: 'Tổng quan',
  },
  myProjDetailContact: {
    id: `${scope}.proj_detail.contact`,
    defaultMessage: 'Người liên hệ',
  },
  myProjDetailNote: {
    id: `${scope}.proj_detail.note`,
    defaultMessage: 'Ghi chú',
  },
  myProjDetailAssign: {
    id: `${scope}.proj_detail.assign`,
    defaultMessage: 'Giao việc',
  },
  myProjAddContactSuccess: {
    id: `${scope}.proj_detail.add_contact`,
    defaultMessage: 'Thêm người liên hệ thành công!',
  },
  myProjAddNoteSuccess: {
    id: `${scope}.proj_detail.add_note`,
    defaultMessage: 'Thêm ghi chú thành công!',
  },
});
