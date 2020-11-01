/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, withRouter } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Packages from 'containers/Packages/Loadable';
import Projects from 'containers/Projects/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { PrivateLayout } from '../../components/Layouts';
import GlobalStyle from '../../global-styles';
import { ROUTE } from '../../constants';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  min-height: 100%;
  overflow-x: hidden;
`;

const App = () => (
  <AppWrapper>
    <Helmet titleTemplate="%s - My Project" defaultTitle="My Project">
      <meta name="description" content="My Project application" />
    </Helmet>
    <Switch>
      <PrivateLayout exact path={ROUTE.HOMEPAGE} component={HomePage} />
      <PrivateLayout exact path={ROUTE.PACKAGES} component={Packages} />
      <PrivateLayout exact path={ROUTE.PROJECT} component={Projects} />
    </Switch>
    <GlobalStyle />
  </AppWrapper>
);

export default withRouter(App);
