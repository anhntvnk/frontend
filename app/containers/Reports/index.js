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
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import styled from 'styled-components';
import { makeSelectReports } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getReports } from './actions';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';

const key = 'reports';

// eslint-disable-next-line react/prop-types
export function Reports({ history, reports, onFetchReports, intl }) {
  console.log(reports, 'reports');
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [costData, setCostData] = useState([]);

  console.log(costData, 'costData');

  useEffect(() => {
    onFetchReports();
  }, []);

  const headerCost = [
    [
      'Element',
      intl.formatMessage({
        ...messages.projectFollows,
      }),
      { role: 'style' },
    ],
  ];
  const headerCount = [
    [
      'Element',
      intl.formatMessage({
        ...messages.projectFollowsCount,
      }),
      { role: 'style' },
    ],
  ];

  const STATE_LIST = [
    {
      status_code: false,
      name: 'Dự án',
      label: intl.formatMessage({
        ...messages.enumProject,
      }),
      i18nlabel: intl.formatMessage({
        ...messages.enumProject,
      }),
      color: '',
    },
    {
      status_code: 1,
      name: 'Sàng lọc',
      label: intl.formatMessage({
        ...messages.enumCheck,
      }),
      i18nlabel: intl.formatMessage({
        ...messages.enumCheck,
      }),
      color: '#e8fb60',
      colorText: '#4f4b4b',
    },
    {
      status_code: 2,
      name: 'Gọi điện',
      label: intl.formatMessage({
        ...messages.enumCall,
      }),
      i18nlabel: intl.formatMessage({
        ...messages.enumCall,
      }),
      color: '#13f9d8',
      colorText: '#4f4b4b',
    },
    {
      status_code: 3,
      name: 'Giới thiệu về công ty (USP)',
      label: intl.formatMessage({
        ...messages.enumIntroduce,
      }),
      i18nlabel: intl.formatMessage({
        ...messages.enumIntroduce,
      }),
      color: '#9cf732',
      colorText: '#4f4b4b',
    },
    {
      status_code: 4,
      name: 'Thuyết trình giải pháp',
      label: intl.formatMessage({
        ...messages.enumSolution,
      }),
      i18nlabel: intl.formatMessage({
        ...messages.enumSolution,
      }),
      color: '#7ed321',
      colorText: '#ffffff',
    },
    {
      status_code: 5,
      name: 'Chào giá',
      label: intl.formatMessage({
        ...messages.enumOffers,
      }),
      i18nlabel: intl.formatMessage({
        ...messages.enumOffers,
      }),
      color: '#f91a06',
      colorText: '#ffffff',
    },
    {
      status_code: 6,
      name: 'Thương thảo giá',
      label: intl.formatMessage({
        ...messages.enumPriceNegotiation,
      }),
      i18nlabel: intl.formatMessage({
        ...messages.enumPriceNegotiation,
      }),
      color: '#fa9703',
      colorText: '#ffffff',
    },
    {
      status_code: 7,
      name: 'Thương thảo hợp đồng',
      label: intl.formatMessage({
        ...messages.enumNegotiation,
      }),
      i18nlabel: intl.formatMessage({
        ...messages.enumNegotiation,
      }),
      color: '#00bcd4',
      colorText: '#ffffff',
    },
    {
      status_code: 8,
      name: 'CLOSE',
      label: 'CLOSE',
      i18nlabel: 'CLOSE',
      color: '#7ed321',
      colorText: '#ffffff',
    },
  ];

  useEffect(() => {
    if (!_isEmpty(reports)) {
      const { costStat, countStat } = reports;
      const costStatMap = headerCost.concat(
        costStat.map(cost => [
          _get(STATE_LIST, `[${cost.status_code}].label`),
          _get(cost, 'cost_total'),
          'rgb(51, 102, 204)',
        ]),
      );

      console.log(headerCount);
      const countStatMap = headerCount.concat(
        countStat.map(count => [
          _get(STATE_LIST, `[${count.status_code}].label`),
          _get(count, 'project_count'),
          'rgb(51, 102, 204)',
        ]),
      );

      console.log(countStatMap, 'countStatMap');
      setCostData({ costStat: costStatMap, countStat: countStatMap });
    }
  }, [reports]);

  return (
    <NotesComponent>
      <Helmet>
        <title>
          {intl.formatMessage({
            ...messages.reportTitle,
          })}
        </title>
        <meta name="description" content="Notes" />
      </Helmet>
      <CenteredSectionWithBack>
        <Button
          type="primary"
          shape="round"
          icon={<ArrowLeftOutlined />}
          onClick={() => history.goBack()}
        >
          <FormattedMessage {...messages.goBack} />
        </Button>
        <h1>
          <FormattedMessage {...messages.reportTitle} />
        </h1>
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
  margin-bottom: 50px;
`;

Reports.propTypes = {
  history: PropTypes.object,
  onFetchReports: PropTypes.func,
  reports: PropTypes.any,
  intl: intlShape.isRequired,
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

export default compose(withConnect)(withRouter(injectIntl(Reports)));
