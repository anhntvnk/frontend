import ROUTE from './routes';
import { isLoggedIn } from '../../services/auth';

const menu = [
  {
    exact: true,
    path: !isLoggedIn() ? ROUTE.HOMEPAGE : ROUTE.DASHBOARD,
    title: !isLoggedIn() ? 'Trang Chủ' : 'Bảng điều khiển',
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
];

export default menu;
