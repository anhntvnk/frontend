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
import { get as _get } from 'lodash';
import { Switch, withRouter, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import Packages from 'containers/Packages/Loadable';
import Projects from 'containers/Projects/Loadable';
import ProjectDetails from 'containers/Projects/Details';
import ProjectAddNew from 'containers/Projects/AddNew';
import Companys from 'containers/Companys/Loadable';
import LoginForm from 'containers/LoginForm/Loadable';
import Register from 'containers/Register/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { PrivateLayout, PublicLayout } from '../../components/Layouts';
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
      <PublicLayout exact path={ROUTE.LOGIN} component={LoginForm} />
      <PublicLayout exact path={ROUTE.REGISTER} component={Register} />
      <PublicLayout exact path={ROUTE.HOMEPAGE} component={HomePage} />
      <PrivateLayout exact path={ROUTE.PACKAGES} component={Packages} />
      <PrivateLayout exact path={ROUTE.PROJECT} component={Projects} />
      <PrivateLayout exact path={ROUTE.COMPANY} component={Companys} />
      <PrivateLayout exact path={ROUTE.DASHBOARD} component={Dashboard} />
      <PrivateLayout
        exact
        path={ROUTE.PROJECT_DETAILS}
        getComponent={({ props: { location } }) =>
          _get(location, 'state.data') ? (
            <ProjectDetails {...location.state} />
          ) : (
            <Redirect strict to={ROUTE.PROJECT} />
          )
        }
      />
      <PrivateLayout
        exact
        path={ROUTE.PROJECT_ADDNEW}
        getComponent={() => <ProjectAddNew />}
      />
    </Switch>
    <GlobalStyle />
  </AppWrapper>
);

export default withRouter(App);
