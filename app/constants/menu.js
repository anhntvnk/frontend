import React from 'react';
import { FormattedMessage } from 'react-intl';
import ROUTE from './routes';
import messages from './messages';

const menus = [
  {
    exact: true,
    path: ROUTE.HOMEPAGE,
    title: <FormattedMessage {...messages.home} />,
    key: 'home',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  {
    exact: true,
    path: ROUTE.COMPANY,
    title: <FormattedMessage {...messages.company} />,
    key: 'companys',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  {
    exact: true,
    path: ROUTE.PROJECT,
    title: <FormattedMessage {...messages.project} />,
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
    title: <FormattedMessage {...messages.dashboard} />,
    key: 'dashboard',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  {
    exact: true,
    path: ROUTE.COMPANY,
    title: <FormattedMessage {...messages.company} />,
    key: 'companys',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
  {
    exact: true,
    path: ROUTE.PROJECT,
    title: <FormattedMessage {...messages.project} />,
    key: 'projects',
    label: {
      iconClass: 'far fa-home-alt',
    },
  },
];

export { menus, menuPrivate };
