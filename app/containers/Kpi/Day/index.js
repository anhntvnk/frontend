/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * DayPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import KpiDay from 'components/Kpi';
import { makeSelectKPIs } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadKPI } from './actions';

const key = 'kpiDay';

export function KpiByDay({ history, kpis, onLoadKPIs }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onLoadKPIs();
  }, []);

  // useEffect(() => {
  //   if (!kpis) {
  //     message.success('Thiết lập KPIs hôm nay thành công!');
  //   }
  // }, [kpis]);

  return <KpiDay history={history} kpi={kpis} Back={ArrowLeftOutlined} />;
}

KpiByDay.propTypes = {
  onLoadKPIs: PropTypes.func,
  history: PropTypes.object,
  kpis: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  kpis: makeSelectKPIs(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadKPIs: () => dispatch(loadKPI()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(KpiByDay));
