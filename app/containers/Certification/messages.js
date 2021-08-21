/*
 * ChangePassword Messages
 *
 * This contains all the text for the ChangePassword component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.Certification';

export default defineMessages({
  authorTitle: {
    id: `${scope}.cer.author`,
    defaultMessage: 'Giấy Chứng Nhận Quyền Tác Giả',
  },
  businessTitle: {
    id: `${scope}.cer.business`,
    defaultMessage: 'Điều Khoản Kinh Doanh',
  },
});
