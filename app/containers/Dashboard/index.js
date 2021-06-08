/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * DashboardPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { get as _get } from 'lodash';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Row, Col } from 'antd';
import { ROUTE } from '../../constants';
import { loadDashboard } from './actions';
import { makeSelectDashboard } from './selectors';
import messages from './messages';
import NumberCard from './numberCard';
import reducer from './reducer';
import saga from './saga';
import './styles.less';

const key = 'dashboard';

export function Dashboard({ dashboards, onFetchDashboard }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (dashboards.length === 0) onFetchDashboard();
  }, []);

  const {
    countCompany,
    countCompanyFollowed,
    countProject,
    countProjectsFollowed,
  } = dashboards;

  const Color = {
    green: '#64ea91',
    blue: '#8fc9fb',
    purple: '#d897eb',
    red: '#f69899',
    yellow: '#f8c82e',
    peach: '#f797d6',
    borderBase: '#e5e5e5',
    borderSplit: '#f4f4f4',
    grass: '#d6fbb5',
    sky: '#c1e0fc',
    vnk: '#b7252c',
    grey: '#58585A',
  };

  const mockDashboard = [
    {
      icon: 'workday',
      color: Color.green,
      title: <FormattedMessage {...messages.myDashBoardJob} />,
      url: ROUTE.NOTES,
    },
    {
      icon: 'kpi',
      color: Color.blue,
      title: <FormattedMessage {...messages.myDashBoardKPI} />,
      url: ROUTE.KPI_DAY,
    },
    {
      icon: 'search',
      color: Color.yellow,
      title: <FormattedMessage {...messages.myDashBoardSearch} />,
      number: countProject,
      url: ROUTE.PROJECT,
    },
    {
      icon: 'project-follow',
      color: Color.red,
      title: <FormattedMessage {...messages.myDashBoardCateProj} />,
      number: countProjectsFollowed,
      url: `${ROUTE.PROJECT}?project-follow`,
    },
    {
      icon: 'search',
      color: Color.grey,
      title: <FormattedMessage {...messages.myDashBoardSearchComp} />,
      number: countCompany,
      url: ROUTE.COMPANY,
    },
    {
      icon: 'company',
      color: Color.vnk,
      title: <FormattedMessage {...messages.myDashBoardCateComp} />,
      number: countCompanyFollowed,
      url: ROUTE.COMPANY,
    },
    {
      icon: 'profile',
      color: Color.peach,
      title: <FormattedMessage {...messages.myDashBoardProfile} />,
      url: ROUTE.USER,
    },
    {
      icon: 'report',
      color: Color.purple,
      title: <FormattedMessage {...messages.myDashBoardReport} />,
      url:
        _get(user, 'saleteam_position') === 'SALE_MANAGER'
          ? ROUTE.REPORTS
          : '#',
      show: _get(user, 'saleteam_position') === 'SALE_MANAGER',
    },
  ];

  const numberCards = mockDashboard.map((item, k) => (
    <Col key={k} lg={6} md={12} xs={24} sm={24} className="dashboard-card">
      <NumberCard {...item} />
    </Col>
  ));

  return (
    <div className="dashboard">
      <Helmet>
        <title>Dashboard - My Project</title>
        <meta name="description" content="Dashboard - My Project" />
      </Helmet>
      <div className="dashboard-welcome">
        <Row gutter={24}>{numberCards}</Row>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  onFetchDashboard: PropTypes.func,
  dashboards: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  dashboards: makeSelectDashboard(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchDashboard: () => dispatch(loadDashboard()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dashboard);
