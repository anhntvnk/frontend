const STATE = {
  DU_AN: 'Dự án',
  SANG_LOC: 'Sàng lọc',
  GOI_DIEN: 'Gọi điện',
  GIOI_THIEU: 'Giới thiệu',
  THUYET_TRINH: 'Thuyết trình giải pháp',
  CHAO_GIA: 'Chào giá',
  THUONG_THAO_HD: 'Thương thảo hợp đồng',
  THUONG_THAO_GIA: 'Thương thảo giá',
  CLOSE: 'CLOSE',
};

const STATE_LIST = [
  {
    status_code: false,
    name: 'Dự án',
    label: 'Dự án',
    color: '',
  },
  {
    status_code: 1,
    name: 'Sàng lọc',
    label: 'Sàng lọc',
    color: '#e8fb60',
    colorText: '#4f4b4b',
  },
  {
    status_code: 2,
    name: 'Gọi điện',
    label: 'Gọi điện',
    color: '#13f9d8',
    colorText: '#4f4b4b',
  },
  {
    status_code: 3,
    name: 'Giới thiệu về công ty (USP)',
    label: 'Giới thiệu',
    color: '#9cf732',
    colorText: '#4f4b4b',
  },
  {
    status_code: 4,
    name: 'Thuyết trình giải pháp',
    label: 'Thuyết trình giải pháp',
    color: '#7ed321',
    colorText: '#ffffff',
  },
  {
    status_code: 5,
    name: 'Chào giá',
    label: 'Chào giá',
    color: '#f91a06',
    colorText: '#ffffff',
  },
  {
    status_code: 6,
    name: 'Thương thảo giá',
    label: 'Thương thảo giá',
    color: '#fa9703',
    colorText: '#ffffff',
  },
  {
    status_code: 7,
    name: 'Thương thảo hợp đồng',
    label: 'Thương thảo hợp đồng',
    color: '#00bcd4',
    colorText: '#ffffff',
  },
  {
    status_code: 8,
    name: 'CLOSE',
    label: 'CLOSE',
    color: '#7ed321',
    colorText: '#ffffff',
  },
];

export default { STATE, STATE_LIST };
