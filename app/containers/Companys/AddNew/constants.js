/*
 * CompanyConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ADD_COMPANY = 'vnk/Projects/ADD_COMPANY';
export const ADD_COMPANY_SUCCESS = 'vnk/Projects/ADD_COMPANY_SUCCESS';
export const ADD_COMPANY_ERROR = 'vnk/Projects/ADD_COMPANY_ERROR';
export const UPDATE_COMPANY = 'vnk/Projects/UPDATE_COMPANY';
export const UPDATE_COMPANY_SUCCESS = 'vnk/Projects/UPDATE_COMPANY_SUCCESS';
export const UPDATE_COMPANY_ERROR = 'vnk/Projects/UPDATE_COMPANY_ERROR';
export const RESET_STATE = 'vnk/Projects/RESET_STATE';

export const citys = [
  'An Giang',
  'Vũng Tàu',
  'Bình Dương',
  'Bình Phước',
  'Bình Thuận',
  'Bình Định',
  'Bạc Liêu',
  'Bắc Giang',
  'Bắc Kạn',
  'Bắc Ninh',
  'Bến Tre',
  'Cao Bằng',
  'Cà Mau',
  'Cần Thơ',
  'Gia Lai',
  'Hoà Bình',
  'Hà Giang',
  'Hà Nam',
  'Hà Nội',
  'Hà Tĩnh',
  'Hưng Yên',
  'Hải Dương',
  'Hải Phòng',
  'Hậu Giang',
  'Hồ Chí Minh',
  'Khánh Hòa',
  'Kiên Giang',
  'Kon Tum',
  'Lai Châu',
  'Long An',
  'Lào Cai',
  'Lâm Đồng',
  'Lạng Sơn',
  'Nam Định',
  'Nghệ An',
  'Ninh Bình',
  'Ninh Thuận',
  'Phú Thọ',
  'Phú Yên',
  'Quảng Bình',
  'Quảng Nam',
  'Quảng Ngãi',
  'Quảng Ninh',
  'Quảng Trị',
  'Sóc Trăng',
  'Sơn La',
  'Thanh Hóa',
  'Thái Bình',
  'Thái Nguyên',
  'Thừa Thiên Huế',
  'Tiền Giang',
  'Trà Vinh',
  'Tuyên Quang',
  'Tây Ninh',
  'Vĩnh Long',
  'Vĩnh Phúc',
  'Yên Bái',
  'Điện Biên',
  'Đà Nẵng',
  'Đắk Lắk',
  'Đắk Nông',
  'Đồng Nai',
  'Đồng Tháp',
];
