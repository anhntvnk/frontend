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
import { loadProjectsFollow } from './actions';
import { makeSelectDashboard } from './selectors';
// import { Page } from 'components';
import NumberCard from './numberCard';
import reducer from './reducer';
import saga from './saga';
import './styles.less';

const key = 'dashboard';

export function Dashboard({ projectFollows, onFetchProjectFollow }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onFetchProjectFollow();
  }, []);

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
      // number: 2781,
      url: '',
    },
    {
      icon: 'kpi',
      color: Color.blue,
      title: 'KPI',
      url: '',
    },
    {
      icon: 'search',
      color: Color.yellow,
      title: 'tìm kiếm dự án',
      url: ROUTE.PROJECT,
    },
    {
      icon: 'project-follow',
      color: Color.red,
      title: 'Danh mục dự án đang theo',
      number: 4324,
      url: `${ROUTE.PROJECT}?project-follow`,
    },
    {
      icon: 'search',
      color: Color.grey,
      title: 'tìm kiếm công ty',
      url: ROUTE.COMPANY,
    },
    {
      icon: 'company',
      color: Color.vnk,
      title: 'danh mục công ty đang theo',
      number: 3241,
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
  onFetchProjectFollow: PropTypes.func,
  projectFollows: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  projectFollows: makeSelectDashboard(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchProjectFollow: () => dispatch(loadProjectsFollow()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dashboard);
