/* eslint-disable dot-notation */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * Settings KPI Page
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { get as _get } from 'lodash';
import moment from 'moment';
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  SmileTwoTone,
  ReconciliationTwoTone,
  PhoneTwoTone,
} from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Input, Form, Card, Row, Col, Button, List, Avatar } from 'antd';
import styled from 'styled-components';
import { makeSelectUserProfille } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadUserProfile } from './actions';

const key = 'settings';
const { Meta } = Card;

// eslint-disable-next-line react/prop-types
function Point({ point }) {
  return (
    <span style={{ color: 'red' }}>
      {point} <span style={{ color: 'blue' }}>Điểm</span>
    </span>
  );
}

export function Settings({ history, kpi, onLoadUserProfile }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const initialValues = {
    cuoc_goi: 1111,
    lich_hen_gap: 0,
    chao_gia: 0,
    chot_don: 0,
  };

  const getFieldChange = (fieldName, value) => {
    const listKey = {
      cuoc_goi: { cuoc_goi: value },
      lich_hen_gap: { lich_hen_gap: value },
      chao_gia: { chao_gia: value },
      chot_don: { chot_don: value },
    };

    return listKey[`${fieldName}`];
  };

  const [formValues, setFommValues] = useState(initialValues);

  useEffect(() => {
    onLoadUserProfile();
  }, []);

  const onSettingsKPI = formValues => {};

  const onFieldsChange = e => {
    // eslint-disable-next-line radix
    const fieldValues = getFieldChange(e.target.name, parseInt(e.target.value));
    const data = Object.assign(formValues, fieldValues);

    setFommValues(initialValues);
  };

  return (
    <SettingsComponent>
      <Helmet>
        <title>KPIs Tháng</title>
        <meta name="description" content="Thông tin cá nhân" />
      </Helmet>
      <CenteredSectionWithBack>
        <Button
          type="primary"
          shape="round"
          icon={<ArrowLeftOutlined />}
          // onClick={() => history.goBack()}
        >
          Quay lại
        </Button>
        <h1>KPIs: Chấm lương ngày hôm nay</h1>
      </CenteredSectionWithBack>
      <KpiState>
        <Row gutter={{ sm: 24, md: 24, lg: 16 }}>
          <Col lg={8} xs={24}>
            <h3>Thông tin cá nhân</h3>
            <CardStatus>
              <Card>
                <Meta
                  avatar={
                    <Avatar
                      // eslint-disable-next-line global-require
                      src={require('../../../assets/images/globe/noavatar.png')}
                    />
                  }
                  description={
                    <div>
                      <p>
                        Mã NV: <b>MYP{_get(kpi, 'id')}</b>
                      </p>
                      <p>
                        Họ tên: <b>{_get(kpi, 'full_name')}</b>
                      </p>
                      <p>
                        Chức vụ: <b>{_get(kpi, 'position')}</b>
                      </p>
                      <p>
                        Ngày lương: <b>{moment().format('D/M/YYYY')}</b>
                      </p>
                    </div>
                  }
                />
              </Card>
            </CardStatus>
          </Col>
          <Col lg={16} xs={24}>
            <Rate>
              <Form name="validate_settings" onFinish={onSettingsKPI}>
                <h3>TỰ ĐÁNH GIÁ KPIs: </h3>
                <List size="small" bordered>
                  <List.Item>
                    <Col lg={12}>
                      <PhoneTwoTone
                        style={{ fontSize: '24px', paddingRight: '8px' }}
                      />
                      <b>
                        1. Cuộc gọi (<Point point="1" />)
                      </b>
                      {_get(kpi, 'phone')}
                    </Col>
                    <Col lg={12}>
                      <Form.Item>
                        <Input name="cuoc_goi" onChange={onFieldsChange} /> Cuộc
                        gọi
                      </Form.Item>
                    </Col>
                  </List.Item>
                  <List.Item>
                    <Col lg={12}>
                      <SmileTwoTone
                        style={{ fontSize: '24px', paddingRight: '8px' }}
                      />
                      <b>
                        2. Lịch hẹn gặp (<Point point="3" />)
                      </b>
                      : {_get(kpi, 'phone')}
                    </Col>
                    <Col lg={12}>
                      <Form.Item>
                        <Input name="lich_hen_gap" onChange={onFieldsChange} />
                        &nbsp;Lịch hẹn
                      </Form.Item>
                    </Col>
                  </List.Item>
                  <List.Item>
                    <Col lg={12}>
                      <ReconciliationTwoTone
                        style={{ fontSize: '24px', paddingRight: '8px' }}
                      />
                      <b>
                        3. Chào giá (<Point point="5" />)
                      </b>
                      : {_get(kpi, 'phone')}
                    </Col>
                    <Col lg={12}>
                      <Form.Item>
                        <Input name="chao_gia" onChange={onFieldsChange} /> Chào
                        giá
                      </Form.Item>
                    </Col>
                  </List.Item>
                  <List.Item>
                    <Col lg={12}>
                      <CheckCircleOutlined
                        style={{
                          fontSize: '24px',
                          paddingRight: '8px',
                          color: 'rgb(24, 144, 255)',
                        }}
                      />
                      <b>
                        4. Chốt đơn hàng (<Point point="15" />)
                      </b>
                      : {_get(kpi, 'phone')}
                    </Col>
                    <Col lg={12}>
                      <Form.Item>
                        <Input name="chot_don" onChange={onFieldsChange} /> Chốt
                        đơn
                      </Form.Item>
                    </Col>
                  </List.Item>
                </List>
              </Form>
            </Rate>
          </Col>
          <Col lg={24} xs={24}>
            <Result>
              <h3>Kết quả thực hiện </h3>
              <List size="small" bordered>
                <List.Item>
                  <p>
                    {console.log(formValues)}
                    <b>Tổng:</b> (1x{formValues.cuoc_goi} + 3x
                    {formValues.lich_hen_gap} + 5x{formValues.chao_gia} + 15x
                    {formValues.chot_don})
                  </p>
                </List.Item>
                <List.Item>
                  <p style={{ color: 'blue' }}>
                    Quy định mỗi ngày đạt 0 điểm sẽ được hưởng 0% lương KPIs: (0
                    : 0) ={' '}
                  </p>
                </List.Item>
                <List.Item>
                  <p style={{ color: 'blue' }}>
                    Hôm nay bạn được hưởng{' '}
                    <span style={{ color: 'red' }}>%</span> lương KPIs
                  </p>
                </List.Item>
              </List>
            </Result>
          </Col>
        </Row>
      </KpiState>
    </SettingsComponent>
  );

  // return <KpiDay kpi={userProfile} Back={ArrowLeftOutlined} />;
}

const Rate = styled.div`
  .ant-list {
    background: #fff;
  }

  .ant-list-bordered.ant-list-sm .ant-list-item {
    padding: 11px 16px;
    @media only screen and (max-width: 767.99px) {
      padding: 14px 2px;
    }
  }

  .ant-btn-round.ant-btn-sm {
    height: 26px;
    padding: 0px 28px;
    font-size: 14px;
    border-radius: 24px;
    margin-right: 15px;

    @media only screen and (max-width: 767.99px) {
      padding: 0px 10px;
      margin-right: 6px;
    }
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-input {
    width: 60px;
  }
`;

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

const KpiState = styled.section`
  @media only screen and (max-width: 767.99px) {
    padding: 10px;
  }

  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab {
    color: #b7252c;
    font-weight: bold;
    line-height: 24px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px !important;
    border: initial;
  }

  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active,
  .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab-active {
    background-color: #b7252c;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #ffffff;
  }

  .ant-tabs {
    .ant-tabs-tab {
      margin-right: 6px !important;
    }

    .ant-tabs-nav-wrap {
      overflow: initial !important;
    }
  }

  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab {
    padding: 5px 16px;
  }
`;

const SettingsComponent = styled.div`
  height: 650px;
  dispay: block;
  max-width: 800px;
  margin: 30px auto;
`;

const CardStatus = styled.div`
  margin-bottom: 30px;
  height: 200px;
  @media only screen and (max-width: 767.99px) {
    margin-bottom: 0px;
    height: 160px;
  }

  .ant-avatar {
    width: 80px;
    height: 80px;
  }

  .ant-card-meta {
    margin: 6px 0;
  }

  .ant-card-meta-avatar {
    padding-right: 10px;
  }

  .ant-card-meta-description {
    color: initial;
    b {
      color: blue;
    }
  }

  .ant-card-bordered {
    border: 1px solid #d9d9d9;
    border-radius: 2px;
  }
  .ant-card {
    @media only screen and (max-width: 767.99px) {
      height: 140px;
    }
  }
  .ant-card-body {
    @media only screen and (max-width: 767.99px) {
      font-size: 12px;
      font-weight: 500;
      padding: 12px;
    }
  }
`;

const Result = styled.div`
  .ant-list {
    background: #fff;
  }
  .ant-list-bordered.ant-list-sm .ant-list-item {
    padding: 15px 0px 0px 15px;
  }

  .ant-btn-round.ant-btn-sm {
    height: 26px;
    padding: 0px 28px;
    font-size: 14px;
    border-radius: 24px;
    margin-right: 15px;
    @media only screen and (max-width: 767.99px) {
      height: 18px;
      font-size: 11px;
    }
  }
`;

Settings.propTypes = {
  onLoadUserProfile: PropTypes.func,
  history: PropTypes.object,
  kpi: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  kpi: makeSelectUserProfille(),
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

export default compose(withConnect)(withRouter(Settings));