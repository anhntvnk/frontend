import { Button } from 'antd';
import React from 'react';
import ROUTE from './routes';

export default [
  {
    exact: true,
    url: ROUTE.HOMEPAGE,
    title: 'Trang Chủ',
    key: 'home',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  {
    exact: true,
    url: ROUTE.COMPANY,
    title: 'Công Ty',
    key: 'company',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  {
    exact: true,
    url: ROUTE.PROJECT,
    title: 'Dự Án',
    key: 'project',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  {
    exact: true,
    url: '',
    title: 'Thông Báo',
    key: 'notify',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  {
    url: ROUTE.SETTING,
    title: 'Cài Đặt',
    key: 'settings',
    label: {
      iconClass: 'far fa-home-alt',
    },
    isLogin: false,
  },
  {
    url: ROUTE.LOGIN,
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
    isLogin: true,
  },
];
