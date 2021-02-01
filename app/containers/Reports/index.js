/* eslint-disable no-unused-expressions */
/*
 * Notes Page
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Button } from 'antd';
import styled from 'styled-components';
import { ENUMS } from '../../constants';
import { makeSelectReports } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getReports } from './actions';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';

const key = 'reports';

const headerCost = [
  ['Element', 'Giá trị dự án đang theo dõi triệu USD', { role: 'style' }],
];
const headerCount = [
  ['Element', 'Số lượng dự án đang theo dõi', { role: 'style' }],
];

// eslint-disable-next-line react/prop-types
export function Reports({ history, reports, onFetchReports }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [costData, setCostData] = useState([]);

  useEffect(() => {
    onFetchReports();
  }, []);

  useEffect(() => {
    if (!_isEmpty(reports)) {
      const { costStat, countStat } = reports;
      const costStatMap = headerCost.concat(
        costStat.map(cost => [
          _get(ENUMS.STATE_LIST, `[${cost.status_code}].label`),
          _get(cost, 'cost_total'),
          '#b7252c',
        ]),
      );
      const countStatMap = headerCount.concat(
        countStat.map(count => [
          _get(ENUMS.STATE_LIST, `[${count.status_code}].label`),
          _get(count, 'project_count'),
          '#b7252c',
        ]),
      );
      setCostData({ costStat: costStatMap, countStat: countStatMap });
    }
  }, [reports]);

  return (
    <NotesComponent>
      <Helmet>
        <title>Báo cáo</title>
        <meta name="description" content="Notes" />
      </Helmet>
      <CenteredSectionWithBack>
        <Button
          type="primary"
          shape="round"
          icon={<ArrowLeftOutlined />}
          onClick={() => history.goBack()}
        >
          Quay lại
        </Button>
        <h1>Báo cáo các dự án trong quá trình</h1>
      </CenteredSectionWithBack>
      {!_isEmpty(_get(costData, 'costStat')) && (
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={_get(costData, 'costStat')}
        />
      )}

      <hr />

      {!_isEmpty(_get(costData, 'countStat')) && (
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={_get(costData, 'countStat')}
        />
      )}
    </NotesComponent>
  );
}

const CenteredSectionWithBack = styled.section`
  text-align: center;
  margin: 50px 0px;
  text-transform: uppercase;
  .ant-btn {
    display: flex;
    align-items: center;
    float: left;
    margin-top: 6px;
    @media only screen and (max-width: 767.99px) {
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 767.99px) {
    padding: 10px;
    font-size: 7px;
    margin: 30px 0px;
  }
`;

const NotesComponent = styled.div`
  dispay: block;
  max-width: 860px;
  margin: auto;
`;

Reports.propTypes = {
  history: PropTypes.object,
  onFetchReports: PropTypes.func,
  reports: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  reports: makeSelectReports(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchReports: () => dispatch(getReports()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(Reports));
