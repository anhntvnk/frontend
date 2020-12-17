/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * ProjectPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Card, Row, Col, Button } from 'antd';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import styled from 'styled-components';
import CenteredSection from 'components/CenteredSection';
import H1 from 'components/H1';
import { ENUMS } from '../../constants';
import { loadCompanys } from './actions';
import { makeSelectCompanys } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.less';
import projectImg from '../../assets/images/home/p-2.png';

const key = 'procedure';

export function Procedure({ history, data }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const comfirmChangeTask = project => {
    const nextTask = _.get(ENUMS.STATE_LIST, `[${project.status_code + 1}]`);
    if (nextTask) {
      const newData = Object.assign(project, {
        status_code: nextTask.status_code,
        name: nextTask.name,
        last_modified: moment().format(),
      });
    }
  };

  return (
    <ProcedureComponent>
      <Helmet>
        <title>Quy trình Quản lý dự án</title>
        <meta name="description" content="Quy trình Quản lý dự án" />
      </Helmet>
      <CenteredSection>
        <H1>Quy trình Quản lý dự án</H1>
      </CenteredSection>

      <Row gutter={32}>
        {ENUMS.STATE_LIST.map(status => (
          <Col lg={8} sm={24}>
            <CardStatus>
              <Card
                cover={
                  <Status>
                    <StatusItem bgColor={status.color}>
                      {status.status_code ? (
                        <h1 style={{ color: status.colorText }}>
                          {status.status_code}
                        </h1>
                      ) : (
                        <img src={projectImg} height={118} alt="" />
                      )}
                    </StatusItem>
                  </Status>
                }
              >
                {status.label}
              </Card>
            </CardStatus>
          </Col>
        ))}
      </Row>
      <ChangeStatus>
        <Row>
          <Col lg={8}>
            <Status flexCenter="center">
              <StatusItem bgColor="red">
                <h1 style={{ color: 'black' }}>1</h1>
              </StatusItem>
            </Status>
          </Col>
          <Col className="btn-change-status" lg={8}>
            <Button onClick={() => comfirmChangeTask(data)}>
              Chuyển trạng thái
            </Button>
          </Col>
          <Col lg={8}>
            <Status flexCenter="center">
              <StatusItem bgColor="red">
                <h1 style={{ color: 'black' }}>3</h1>
              </StatusItem>
            </Status>
          </Col>
        </Row>
      </ChangeStatus>
    </ProcedureComponent>
  );
}

const ChangeStatus = styled.section`
  background: #fff;
  border: 1px solid #f0f0f0;
  height: 200px;
`;

const ProcedureComponent = styled.div`
  dispay: block;
  max-width: 800px;
  margin: 30px auto;
`;

const Status = styled.section`
  display: flex;
  justify-content: ${props => props.flexCenter || 'flex-end'};
  align-items: center;
  text-align: center;
  padding-top: ${props => (props.flexCenter ? '30px' : '20px')};
`;

const StatusItem = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 126px;
  background: ${props => props.bgColor};
  box-shadow: ${props =>
    props.bgColor ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : ''};
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
`;

const CardStatus = styled.div`
  margin-bottom: 30px;
  height: 250px;
`;

Procedure.propTypes = {
  // onFetchCompany: PropTypes.func,
  data: PropTypes.object,
  history: PropTypes.object,
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

export default compose(withConnect)(withRouter(Procedure));
