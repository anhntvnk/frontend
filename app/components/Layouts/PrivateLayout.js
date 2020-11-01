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
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

// Custom Components
import Navbar from '../NavBar';
import VnkFooter from '../Footer';
import MypHeader from './Header';
import Menu from '../../constants/menu';
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
    render={({ location }) => (
      <Layout>
        <MypHeader isMobile={false} />
        {/* <Header>
          <Navbar data={Menu} />
        </Header> */}
        <Content>
          {getComponent ? getComponent({ location }) : <Component />}
        </Content>
        <div className="vnk-footer">
          <VnkFooter />
        </div>
      </Layout>
    )}
  />
);
// ==========================
