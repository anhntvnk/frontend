/**
 *
 * Default Layout
 *
 * This component defines the common layout for web user pages,
 * which need to check authorization before access
 */

// ===== IMPORTS =====
// Modules
import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

// Custom Components
import VnkFooter from '../Footer';
import MypHeader from './Header';
// import { isLoggedIn } from '../../../services/auth';
// Utilities, Constants & Styles
// import { ROUTE } from '../../constants';
import '../../scss/components/layouts/layouts.less';
import './static/index.less';

const { Content } = Layout;
// ===================

// ===== MAIN COMPONENT =====
// eslint-disable-next-line react/prop-types
export default ({ component: Component, getComponent, ...remain }) => (
  <Route
    {...remain}
    render={props => {
      // eslint-disable-next-line react/prop-types
      const { location } = props;
      const module = location.pathname.replace(/(^\/|\/$)/g, '').split('/')[0];
      const hasFooter = ['login', 'register', 'dashboard'];

      return (
        <Layout>
          <MypHeader {...remain} />
          <Content>
            {getComponent ? getComponent({ props }) : <Component {...props} />}
          </Content>
          {!hasFooter.includes(module) && (
            <div className="vnk-footer">
              <VnkFooter />
            </div>
          )}
        </Layout>
      );
    }}
  />
);
// ==========================