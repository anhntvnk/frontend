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
// Custom Components
import Navbar from '../NavBar';
import Footer from '../Footer';
import Menu from '../../constants/menu';
// import { isLoggedIn } from '../../../services/auth';
// Utilities, Constants & Styles
// import { ROUTE } from '../../constants';
import '../../scss/components/layouts/layouts.less';
// ===================

// ===== MAIN COMPONENT =====
// eslint-disable-next-line react/prop-types
export default ({ component: Component, getComponent, ...remain }) => (
  <Route
    {...remain}
    render={({ location }) => (
      <div className="vnk-main">
        <div className="vnk-navbar">
          <Navbar data={Menu} />
        </div>
        <div className="vnk-content" style={{ marginTop: '100px' }}>
          {getComponent ? getComponent({ location }) : <Component />}
        </div>
        <div className="vnk-footer">
          <Footer />
        </div>
      </div>
    )}
  />
);
// ==========================
