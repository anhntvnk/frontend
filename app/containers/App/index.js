/* eslint-disable no-return-assign */
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
import Procedure from 'containers/Procedure';
import Companys from 'containers/Companys/Loadable';
import CompanyDetails from 'containers/Companys/Details';
import CompanyAddNew from 'containers/Companys/AddNew';
import KpiDay from 'containers/Kpi/Day';
import Settings from 'containers/Kpi/Settings';
import KpiMonth from 'containers/Kpi/Month';
import LoginForm from 'containers/LoginForm/Loadable';
import Register from 'containers/Register/Loadable';
import ChangePassword from 'containers/ChangePassword/Loadable';
import User from 'containers/User/Loadable';
import Notes from 'containers/Notes/Loadable';
import Reports from 'containers/Reports/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

import axios from 'axios';
import API from 'constants/apis';
import { PrivateLayout, PublicLayout } from '../../components/Layouts';
import GlobalStyle from '../../global-styles';
import { ROUTE } from '../../constants';
import { getToken } from '../../../services/auth';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  min-height: 100%;
  scroll-behavior: smooth;
`;

const App = () => {
  React.useEffect(() => () => {
    window.addEventListener('beforeunload', () => {
      axios
        .create({
          baseURL: API.BASE_URL,
          timeout: 5000,
          validateStatus(status) {
            return (status >= 200 && status < 300) || status === 403; // default
          },
          headers: { 'Content-Type': 'application/json' },
        })
        .post(`${API.BASE_URL}/user/logout?access_token=${getToken()}`);
    });
  });

  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - My Project" defaultTitle="My Project">
        <meta name="description" content="My Project application" />
      </Helmet>
      <Switch>
        <PublicLayout exact path={ROUTE.LOGIN} component={LoginForm} />
        <PublicLayout exact path={ROUTE.REGISTER} component={Register} />
        <PublicLayout
          exact
          path={ROUTE.CHANGE_PASSWORD}
          component={ChangePassword}
        />
        <PublicLayout exact path={ROUTE.HOMEPAGE} component={HomePage} />
        <PrivateLayout exact path={ROUTE.PACKAGES} component={Packages} />
        <PrivateLayout exact path={ROUTE.PROJECT} component={Projects} />
        <PrivateLayout exact path={ROUTE.COMPANY} component={Companys} />
        <PrivateLayout exact path={ROUTE.DASHBOARD} component={Dashboard} />
        <PrivateLayout exact path={ROUTE.USER} component={User} />
        <PrivateLayout exact path={ROUTE.KPI_DAY} component={KpiDay} />
        <PrivateLayout exact path={ROUTE.KPI_SETTINGS} component={Settings} />
        <PrivateLayout exact path={ROUTE.KPI_MONTH} component={KpiMonth} />
        <PrivateLayout exact path={ROUTE.NOTES} component={Notes} />
        <PrivateLayout exact path={ROUTE.REPORTS} component={Reports} />
        <PrivateLayout
          exact
          path={ROUTE.COMPANY}
          getComponent={({ props: { location } }) =>
            _get(location, 'state.data') ? (
              <Companys {...location.state} />
            ) : (
              <Redirect strict to={ROUTE.PROJECT} />
            )
          }
        />
        <PrivateLayout
          exact
          path={ROUTE.PROCEDURE}
          getComponent={({ props: { location } }) =>
            _get(location, 'state.data') ? (
              <Procedure {...location.state} />
            ) : (
              <Redirect strict to={ROUTE.PROJECT} />
            )
          }
        />
        <PrivateLayout
          path={`${ROUTE.PROJECT_DETAILS}/:follow/:projectID`}
          getComponent={
            ({ props: { location } }) => (
              // _get(location, 'state.data') ? (
              <ProjectDetails {...location.state} />
            )
            // ) : (
            //   <Redirect strict to={ROUTE.PROJECT} />
            // )
          }
        />
        <PrivateLayout
          exact
          path={ROUTE.COMPANY_DETAILS}
          getComponent={({ props: { location } }) =>
            _get(location, 'state.data') ? (
              <CompanyDetails {...location.state} />
            ) : (
              <Redirect strict to={ROUTE.COMPANY} />
            )
          }
        />
        {/* <PrivateLayout
          exact
          path={ROUTE.KPI_DAY}
          getComponent={({ props: { location } }) =>
            _get(location, 'state.data') ? (
              <KpiDay {...location.state} />
            ) : (
              <Redirect strict to={ROUTE.HOMEPAGE} />
            )
          }
        />
        <PrivateLayout
          exact
          path={ROUTE.KPI_MONTH}
          getComponent={({ props: { location } }) =>
            _get(location, 'state.data') ? (
              <KpiMonth {...location.state} />
            ) : (
              <Redirect strict to={ROUTE.HOMEPAGE} />
            )
          }
        /> */}
        <PrivateLayout
          exact
          path={ROUTE.PROJECT_ADDNEW}
          getComponent={() => <ProjectAddNew />}
        />
        <PrivateLayout
          exact
          path={ROUTE.COMPANY_ADDNEW}
          getComponent={() => <CompanyAddNew />}
        />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
};

export default withRouter(App);
