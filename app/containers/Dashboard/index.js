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
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Row, Col } from 'antd';
import { ROUTE } from '../../constants';
import { loadDashboard } from './actions';
import { makeSelectDashboard } from './selectors';
// import { Page } from 'components';
import NumberCard from './numberCard';
import reducer from './reducer';
import saga from './saga';
import './styles.less';

const key = 'dashboard';

export function Dashboard({ dashboards, onFetchDashboard }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onFetchDashboard();
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
      title: 'Công việc hàng ngày',
      url: ROUTE.NOTES,
      url: '',
    },
    {
      icon: 'kpi',
      color: Color.blue,
      title: 'KPI',
      url: ROUTE.KPI_DAY,
    },
    {
      icon: 'search',
      color: Color.yellow,
      title: 'tìm kiếm dự án',
      number: countProject,
      url: ROUTE.PROJECT,
    },
    {
      icon: 'project-follow',
      color: Color.red,
      title: 'Danh mục dự án đang theo',
      number: countProjectsFollowed,
      url: `${ROUTE.PROJECT}?project-follow`,
    },
    {
      icon: 'search',
      color: Color.grey,
      title: 'tìm kiếm công ty',
      number: countCompany,
      url: ROUTE.COMPANY,
    },
    {
      icon: 'company',
      color: Color.vnk,
      title: 'danh mục công ty đang theo',
      number: countCompanyFollowed,
      url: ROUTE.COMPANY,
    },
    {
      icon: 'report',
      color: Color.purple,
      title: 'Báo cáo',
      url: ROUTE.REPORT,
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
        <title>Danh Sách Dự Án</title>
        <meta name="description" content="Danh sách dự án" />
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
