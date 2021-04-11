/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.HomePage';

export default defineMessages({
  mypIntroduceHeader: {
    id: `${scope}.myp_introduce.header`,
    defaultMessage: 'KHÔNG CHỈ LÀ CẬP NHẬT THÔNG TIN DỰ ÁN',
  },
  bannerTitle: {
    id: `${scope}.banner.title`,
    defaultMessage: 'Save Time More Project',
  },
  bannerMessage: {
    id: `${scope}.banner.message`,
    defaultMessage: 'Giúp bạn có nhiều dự án hơn với thời gian ít hơn cùng',
  },
});
