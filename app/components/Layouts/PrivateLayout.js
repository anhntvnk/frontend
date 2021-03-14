/**
 *
 * Private Layout
 *
 * This component defines the common layout for web user pages,
 * which need to check authorization before access
 */

// ===== IMPORTS =====
// Modules
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

// Custom Components
import MypHeader from './Header';
import { isLoggedIn } from '../../../services/auth';
// Utilities, Constants & Styles
import { ROUTE } from '../../constants';
import '../../scss/components/layouts/layouts.less';
import './static/index.less';
import { menuPrivate } from '../../constants/menu';

const { Content } = Layout;

// ===================
// ===== MAIN COMPONENT =====
// eslint-disable-next-line react/prop-types
export default ({ component: Component, getComponent, ...remain }) => (
  <Route
    {...remain}
    render={props =>
      isLoggedIn() ? (
        <Layout>
          <MypHeader {...props} menus={menuPrivate} />
          <Content>
            {getComponent ? getComponent({ props }) : <Component {...props} />}
          </Content>
        </Layout>
      ) : (
        <Redirect to={ROUTE.LOGIN} />
      )
    }
  />
);
// ==========================
