import { Button } from 'antd';
import React from 'react';
import ROUTE from './routes';

const isLogin = true;

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
    key: 'company',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  {
    exact: true,
    path: ROUTE.PROJECT,
    title: 'Dự Án',
    key: 'project',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  {
    exact: true,
    path: '',
    title: 'Thông Báo',
    key: 'notify',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  {
    exact: true,
    path: ROUTE.PACKAGES,
    title: 'Nâng Cấp MVP',
    key: 'package',
  },
  {
    path: ROUTE.SETTING,
    title: 'Cài Đặt',
    key: 'settings',
    label: {
      iconClass: 'far fa-home-alt',
    },
    isLogin: !isLogin,
  },
  {
    path: ROUTE.LOGIN,
    title: (
      <Button className="btn-login" type="primary" shape="round" size="large">
        Đăng Nhập
      </Button>
    ),
    key: 'login',
    className: 'login-item',
    label: {
      iconClass: 'far fa-home-alt',
    },
    isLogin,
  },
];
