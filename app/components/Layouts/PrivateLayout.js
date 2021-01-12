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
// import VnkFooter from '../Footer';
import MypHeader from './Header';
import { isLoggedIn } from '../../../services/auth';
// Utilities, Constants & Styles
import { ROUTE } from '../../constants';
import '../../scss/components/layouts/layouts.less';
import './static/index.less';

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
          <MypHeader {...props} />
          <Content>
            {getComponent ? getComponent({ props }) : <Component {...props} />}
          </Content>
          {/* <div className="vnk-footer">
            <VnkFooter />
          </div> */}
        </Layout>
      ) : (
        <Redirect to={ROUTE.LOGIN} />
      )
    }
  />
);
// ==========================
