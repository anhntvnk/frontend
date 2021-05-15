import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const STATE = {
  DU_AN: <FormattedMessage {...messages.enumProject} />,
  SANG_LOC: <FormattedMessage {...messages.enumCheck} />,
  GOI_DIEN: <FormattedMessage {...messages.enumCall} />,
  GIOI_THIEU: <FormattedMessage {...messages.enumIntroduce} />,
  THUYET_TRINH: <FormattedMessage {...messages.enumSolution} />,
  CHAO_GIA: <FormattedMessage {...messages.enumOffers} />,
  THUONG_THAO_HD: <FormattedMessage {...messages.enumPriceNegotiation} />,
  THUONG_THAO_GIA: <FormattedMessage {...messages.enumNegotiation} />,
  CLOSE: 'CLOSE',
};

const STATE_LIST = [
  {
    status_code: false,
    name: 'Dự án',
    label: <FormattedMessage {...messages.enumProject} />,
    i18nlabel: <FormattedMessage {...messages.enumProject} />,
    color: '',
  },
  {
    status_code: 1,
    name: 'Sàng lọc',
    label: <FormattedMessage {...messages.enumCheck} />,
    i18nlabel: <FormattedMessage {...messages.enumCheck} />,
    color: '#e8fb60',
    colorText: '#4f4b4b',
  },
  {
    status_code: 2,
    name: 'Gọi điện',
    label: <FormattedMessage {...messages.enumCall} />,
    i18nlabel: <FormattedMessage {...messages.enumCall} />,
    color: '#13f9d8',
    colorText: '#4f4b4b',
  },
  {
    status_code: 3,
    name: 'Giới thiệu về công ty (USP)',
    label: <FormattedMessage {...messages.enumIntroduce} />,
    i18nlabel: <FormattedMessage {...messages.enumIntroduce} />,
    color: '#9cf732',
    colorText: '#4f4b4b',
  },
  {
    status_code: 4,
    name: 'Thuyết trình giải pháp',
    label: <FormattedMessage {...messages.enumSolution} />,
    i18nlabel: <FormattedMessage {...messages.enumSolution} />,
    color: '#7ed321',
    colorText: '#ffffff',
  },
  {
    status_code: 5,
    name: 'Chào giá',
    label: <FormattedMessage {...messages.enumOffers} />,
    i18nlabel: <FormattedMessage {...messages.enumOffers} />,
    color: '#f91a06',
    colorText: '#ffffff',
  },
  {
    status_code: 6,
    name: 'Thương thảo giá',
    label: <FormattedMessage {...messages.enumPriceNegotiation} />,
    i18nlabel: <FormattedMessage {...messages.enumPriceNegotiation} />,
    color: '#fa9703',
    colorText: '#ffffff',
  },
  {
    status_code: 7,
    name: 'Thương thảo hợp đồng',
    label: <FormattedMessage {...messages.enumNegotiation} />,
    i18nlabel: <FormattedMessage {...messages.enumNegotiation} />,
    color: '#00bcd4',
    colorText: '#ffffff',
  },
  {
    status_code: 8,
    name: 'CLOSE',
    label: 'CLOSE',
    i18nlabel: 'CLOSE',
    color: '#7ed321',
    colorText: '#ffffff',
  },
];

export default { STATE, STATE_LIST };
