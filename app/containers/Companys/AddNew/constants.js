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
  'Bắc Ninh',
  'Cao Bằng',
  'Cà Mau',
  'Cần Thơ',
  'Gia Lai',
  'Hà Nội',
  'Hà Tĩnh',
  'Hưng Yên',
  'Hải Phòng',
  'Hồ Chí Minh',
  'Khánh Hòa',
  'Lai Châu',
  'Lào Cai',
  'Lâm Đồng',
  'Lạng Sơn',
  'Nghệ An',
  'Ninh Bình',
  'Phú Thọ',
  'Quảng Ngãi',
  'Quảng Ninh',
  'Quảng Trị',
  'Sơn La',
  'Thanh Hóa',
  'Thái Nguyên',
  'Thừa Thiên Huế',
  'Vĩnh Long',
  'Tuyên Quang',
  'Tây Ninh',
  'Điện Biên',
  'Đà Nẵng',
  'Đắk Lắk',
  'Đồng Nai',
  'Đồng Tháp',
];
