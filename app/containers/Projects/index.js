/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H1 from 'components/H1';
import List from 'components/ListItem';
import CenteredSection from 'components/CenteredSection';
import { loadRepos } from '../App/actions';
import { changeUsername, loadProjects } from './actions';
import { makeSelectUsername, makeSelectProjects } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.less';

const key = 'projects';

export function ProjectsManager({ onFetchProject }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onFetchProject();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Packages</title>
        <meta name="description" content="Danh sách dự án" />
      </Helmet>
      <CenteredSection>
        <H1>Danh sách dự án</H1>
      </CenteredSection>

      <List />
    </div>
  );
}

ProjectsManager.propTypes = {
  onFetchProject: PropTypes.func,
  projects: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  projects: makeSelectProjects(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchProject: () => dispatch(loadProjects()),
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProjectsManager);
