/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.Procedure';

export default defineMessages({
  myProjMeta: {
    id: `${scope}.meta`,
    defaultMessage: 'Quy trình Quản lý dự án',
  },
  myProjBack: {
    id: `${scope}.back`,
    defaultMessage: 'Quay lại',
  },
  myProjStatus: {
    id: `${scope}.status`,
    defaultMessage: 'Chuyển trạng thái',
  },
  myProjChangeStatus: {
    id: `${scope}.changeStatus`,
    defaultMessage: 'Bạn có muốn chuyển trạng thái không ?',
  },
  myProjChangeStatusSuccess: {
    id: `${scope}.changeStatus.success`,
    defaultMessage: 'Chuyển trạng thái thành công!',
  },
});
