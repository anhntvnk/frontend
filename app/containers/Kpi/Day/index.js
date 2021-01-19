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
import { makeSelectUserProfille } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadUserProfile } from './actions';

const key = 'kpiDay';

export function KpiByDay({ history, userProfile, onLoadUserProfile }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  console.log(userProfile);
  useEffect(() => {
    onLoadUserProfile();
  }, []);

  return <KpiDay kpi={userProfile} Back={ArrowLeftOutlined} />;
}

KpiByDay.propTypes = {
  onLoadUserProfile: PropTypes.func,
  history: PropTypes.object,
  userProfile: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userProfile: makeSelectUserProfille(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadUserProfile: () => dispatch(loadUserProfile()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(KpiByDay));
