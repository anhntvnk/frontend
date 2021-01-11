import ROUTE from './routes';
import { isLoggedIn } from '../../services/auth';

export default [
  {
    exact: true,
    path: ROUTE.HOMEPAGE,
    title: 'Trang Chủ',
    key: 'home',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  {
    exact: true,
    path: ROUTE.COMPANY,
    title: 'Công Ty',
    key: 'companys',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  {
    exact: true,
    path: ROUTE.PROJECT,
    title: 'Dự Án',
    key: 'projects',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  // {
  //   exact: true,
  //   path: '',
  //   title: 'Thông Báo',
  //   key: 'notify',
  //   label: {
  //     iconClass: 'far fa-home-alt',
  //   },
  // },
  // {
  //   exact: true,
  //   path: ROUTE.PACKAGES,
  //   title: 'Nâng Cấp MVP',
  //   key: 'packages',
  // },
  {
    exact: true,
    path: ROUTE.REGISTER,
    title: 'Đổi mật khẩu',
    key: 'changePassword',
    isMobile: true,
    isLogin: !isLoggedIn(),
  },
  {
    exact: true,
    path: ROUTE.USER,
    title: 'Thông tin cá nhân',
    key: 'profile',
    isMobile: true,
    isLogin: !isLoggedIn(),
  },
  // {
  //   path: ROUTE.SETTING,
  //   title: 'Cài Đặt',
  //   key: 'settings',
  //   label: {
  //     iconClass: 'far fa-home-alt',
  //   },
  //   isLogin: !isLoggedIn(),
  // },
];
