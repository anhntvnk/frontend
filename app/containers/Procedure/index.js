/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * ProjectPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Card, Row, Col, Button, Popconfirm, message } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import styled from 'styled-components';
import H1 from 'components/H1';
import { injectIntl, intlShape } from 'react-intl';
import { ENUMS } from '../../constants';
import { updateStateProcedure } from './actions';
import { makeSelectErrorMessage, makeSelectSuccessMessage } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './styles.less';
import projectImg from '../../assets/images/home/p-2.png';

const key = 'procedure';

export function Procedure({
  history,
  data,
  successMessage,
  errorMessage,
  onUpdateStatus,
  intl,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [projectDetail, setProjectDetail] = useState(data);

  const taskCurrent = _get(ENUMS.STATE_LIST, `[${data.status_code}]`);
  const nextTask = _get(ENUMS.STATE_LIST, `[${data.status_code + 1}]`);

  if (successMessage) {
    message.success(successMessage);
    history.replace({ ...history.location, state: { data: projectDetail } });
  }

  if (errorMessage) {
    message.error(errorMessage);
  }

  const comfirmChangeTask = project => {
    if (nextTask) {
      const newData = Object.assign(project, {
        status_code: nextTask.status_code,
        status: nextTask.name,
        last_modified: moment().format(),
      });

      setProjectDetail(newData);
      onUpdateStatus(newData);
    }
  };

  return (
    <ProcedureComponent>
      <Helmet>
        <title>
          {intl.formatMessage({
            ...messages.myProjMeta,
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            ...messages.myProjMeta,
          })}
        />
      </Helmet>
      <CenteredSection>
        <Button
          type="primary"
          shape="round"
          icon={<ArrowLeftOutlined />}
          onClick={() =>
            history.replace({
              pathname: '/projects/details',
              state: { data: projectDetail },
            })
          }
        >
          {intl.formatMessage({
            ...messages.myProjBack,
          })}
        </Button>
        <H1>
          {intl.formatMessage({
            ...messages.myProjMeta,
          })}
        </H1>
      </CenteredSection>
      <ProcedureState>
        <Row gutter={{ xs: 8, sm: 24, md: 24, lg: 32 }}>
          {ENUMS.STATE_LIST.map(status => (
            <Col lg={8} xs={8} key={status.status_code}>
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
                          <img src={projectImg} alt="" />
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
      </ProcedureState>
      <ChangeStatus>
        {nextTask ? (
          <Row>
            <Col lg={8} xs={8}>
              <Status flexCenter="center">
                <span className="status-change">{taskCurrent.status_code}</span>
                <StatusItem bgColor={taskCurrent.color} mobile>
                  <h2 style={{ color: taskCurrent.colorText }}>
                    {taskCurrent.i18nlabel}
                  </h2>
                </StatusItem>
              </Status>
            </Col>
            <Col className="btn-change-status" lg={8} xs={8}>
              <Popconfirm
                placement="top"
                title={intl.formatMessage({
                  ...messages.myProjChangeStatus,
                })}
                onConfirm={() => comfirmChangeTask(data)}
                okText="Yes"
                cancelText="No"
              >
                <Button>
                  {intl.formatMessage({
                    ...messages.myProjStatus,
                  })}
                </Button>
              </Popconfirm>
            </Col>
            <Col lg={8} xs={8}>
              <Status flexCenter="center">
                <span className="status-change">{nextTask.status_code}</span>
                <StatusItem bgColor={nextTask.color} mobile>
                  <h2 style={{ color: nextTask.colorText }}>
                    {nextTask.i18nlabel}
                  </h2>
                </StatusItem>
              </Status>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col lg={24} xs={24}>
              <Status flexCenter="center">
                <span className="status-change">{taskCurrent.status_code}</span>
                <StatusItem bgColor={taskCurrent.color} mobile>
                  <h2 style={{ color: taskCurrent.colorText }}>
                    {taskCurrent.i18nlabel}
                  </h2>
                </StatusItem>
              </Status>
            </Col>
          </Row>
        )}
      </ChangeStatus>
    </ProcedureComponent>
  );
}

const CenteredSection = styled.section`
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
    font-size: 8px;
    margin: 30px 0px;
  }
`;

const ProcedureState = styled.section`
  @media only screen and (max-width: 767.99px) {
    padding: 10px;
  }
`;

const ChangeStatus = styled.section`
  background: #fff;
  border: 1px solid #f0f0f0;
  height: 200px;
  .btn-change-status {
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-btn {
      background: linear-gradient(#b92327, #00acc1);
      color: #fff;
      font-weight: 600;
      text-transform: capitalize;
      padding: 20px;
      display: flex;
      align-items: center;

      @media only screen and (max-width: 767.99px) {
        padding: 10px;
        margin-top: 50px;
      }
    }
  }
`;

const ProcedureComponent = styled.div`
  dispay: block;
  max-width: 800px;
  margin: 30px auto;
`;

const Status = styled.section`
  display: grid;
  justify-content: ${props => props.flexCenter || 'flex-end'};
  align-items: center;
  text-align: center;
  padding-top: ${props => (props.flexCenter ? '10px' : '20px')};
  @media only screen and (max-width: 767.99px) {
    padding-top: 16px;
  }

  .status-change {
    font-weight: 600;
    font-size: 24px;
  }
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
  h1 {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 24px;
    padding: 10px;
  }

  h2 {
    margin-bottom: 0;
    font-size: 15px;
    padding: 10px;
  }

  img {
    height: 118px;
    @media only screen and (max-width: 767.99px) {
      height: 50px;
    }
  }

  @media only screen and (max-width: 767.99px) {
    width: ${props => (props.mobile ? '90px' : '50px')};
    height: ${props => (props.mobile ? '90px' : '50px')};
  }
`;

const CardStatus = styled.div`
  margin-bottom: 30px;
  height: 200px;
  @media only screen and (max-width: 767.99px) {
    margin-bottom: 0px;
    height: 160px;
  }
  .ant-card {
    @media only screen and (max-width: 767.99px) {
      height: 140px;
    }
  }
  .ant-card-body {
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    @media only screen and (max-width: 767.99px) {
      font-size: 12px;
      font-weight: 500;
      padding: 12px;
    }
  }
`;

Procedure.propTypes = {
  onUpdateStatus: PropTypes.func,
  data: PropTypes.object,
  history: PropTypes.object,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  intl: intlShape.Required,
};

const mapStateToProps = createStructuredSelector({
  successMessage: makeSelectSuccessMessage(),
  errorMessage: makeSelectErrorMessage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onUpdateStatus: data => dispatch(updateStateProcedure(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(injectIntl(Procedure)));
