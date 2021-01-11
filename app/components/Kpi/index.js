import React from 'react';
import { get as _get } from 'lodash';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Card, Row, Col, Button, List } from 'antd';
import {
  CheckCircleOutlined,
  SmileTwoTone,
  ReconciliationTwoTone,
  PhoneTwoTone,
} from '@ant-design/icons';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
function Point({ point }) {
  return (
    <span style={{ color: 'red' }}>
      {point} <span style={{ color: 'blue' }}>Điểm</span>
    </span>
  );
}

function Kpi({ kpi, back }) {
  return (
    <KpiComponent>
      <Helmet>
        <title>KPIs Tháng</title>
        <meta name="description" content="Thông tin cá nhân" />
      </Helmet>
      <CenteredSectionWithBack>
        <Button
          type="primary"
          shape="round"
          icon={<back />}
          // onClick={() => history.goBack()}
        >
          Quay lại
        </Button>
        <h1>Thông tin cá nhân</h1>
      </CenteredSectionWithBack>
      <KpiState>
        <Row gutter={{ xs: 8, sm: 24, md: 24, lg: 16 }}>
          <Col lg={8} xs={24}>
            <h3>Thông tin cá nhân</h3>
            <CardStatus>
              <Card
                cover={
                  <Status>
                    <StatusItem>
                      <img
                        // eslint-disable-next-line global-require
                        src={require('../../assets/images/globe/noavatar.png')}
                        alt=""
                      />
                    </StatusItem>
                  </Status>
                }
              >
                <span>{_get(kpi, 'full_name')}</span>
              </Card>
            </CardStatus>
          </Col>
          <Col lg={16} xs={24}>
            <Profile>
              <h3>KPIs tháng </h3>
              <List
                size="small"
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
              >
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
                    <Button type="primary" shape="round" size="small">
                      20
                    </Button>
                    <Button shape="round" size="small">
                      Cuộc gọi
                    </Button>
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
                    <Button type="primary" shape="round" size="small">
                      20
                    </Button>
                    <Button shape="round" size="small">
                      Lịch hẹn
                    </Button>
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
                    <Button type="primary" shape="round" size="small">
                      20
                    </Button>
                    <Button shape="round" size="small">
                      Chào giá
                    </Button>
                  </Col>
                </List.Item>
                <List.Item>
                  <Col lg={12}>
                    <CheckCircleOutlined
                      style={{ fontSize: '24px', paddingRight: '8px' }}
                    />
                    <b>
                      4. Chốt đơn hàng (<Point point="15" />)
                    </b>
                    : {_get(kpi, 'phone')}
                  </Col>
                  <Col lg={12}>
                    <Button type="primary" shape="round" size="small">
                      20
                    </Button>
                    <Button shape="round" size="small">
                      Chốt đơn
                    </Button>
                  </Col>
                </List.Item>
              </List>
            </Profile>
          </Col>
        </Row>
      </KpiState>
    </KpiComponent>
  );
}

const Profile = styled.div`
  .ant-list {
    background: #fff;
  }
  .ant-list-bordered.ant-list-sm .ant-list-item {
    padding: 14px 16px;
  }

  .ant-btn-round.ant-btn-sm {
    height: 26px;
    padding: 0px 28px;
    font-size: 14px;
    border-radius: 24px;
    margin-right: 15px;
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
    font-size: 8px;
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

const KpiComponent = styled.div`
  height: 500px;
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

  span {
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

Kpi.propTypes = {
  kpi: PropTypes.any,
  back: PropTypes.any,
};

export default Kpi;
