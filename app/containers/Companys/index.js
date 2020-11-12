/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * ProjectPage
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
import List from 'components/ListItem';
import { loadCompanys } from './actions';
import { makeSelectCompanys } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.less';

const key = 'companys';

export function Companys({ company, onFetchCompany }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onFetchCompany();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Danh Sách Dự Án</title>
        <meta name="description" content="Danh sách dự án" />
      </Helmet>
      <List data={company} />
    </div>
  );
}

Companys.propTypes = {
  onFetchCompany: PropTypes.func,
  company: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  company: makeSelectCompanys(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchCompany: () => dispatch(loadCompanys()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Companys);
