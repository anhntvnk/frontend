import ROUTE from './routes';
import { isLoggedIn } from '../../services/auth';

const menu = [
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
];

export default menu;
