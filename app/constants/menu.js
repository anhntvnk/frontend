import ROUTE from './routes';

const menus = [
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

const menuPrivate = [
  {
    exact: true,
    path: ROUTE.DASHBOARD,
    title: 'Bảng điều khiển',
    key: 'dashboard',
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

export { menus, menuPrivate };
