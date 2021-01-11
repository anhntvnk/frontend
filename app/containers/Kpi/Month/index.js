/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * ProjectPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { get as _get } from 'lodash';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Card, Row, Col, Button, List, Tabs } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import styled from 'styled-components';
import H1 from 'components/H1';
import { makeSelectUserProfille } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadUserProfile } from './actions';

const key = 'user';

const { TabPane } = Tabs;

export function User({ history, userProfile, onLoadUserProfile }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  console.log(userProfile);
  useEffect(() => {
    onLoadUserProfile();
  }, []);

  const callback = value => {
    console.log(value);
  };

  return (
    <UserProfile>
      <Helmet>
        <title>Thông tin cá nhân</title>
        <meta name="description" content="Thông tin cá nhân" />
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
        <H1>Thông tin cá nhân</H1>
      </CenteredSectionWithBack>
      <UserProfileState>
        <Row gutter={{ xs: 8, sm: 24, md: 24, lg: 16 }}>
          <Col lg={8} xs={8}>
            <CardStatus>
              <Card
                cover={
                  <Status>
                    <StatusItem>
                      <img
                        // eslint-disable-next-line global-require
                        src={require('../../../assets/images/globe/noavatar.png')}
                        alt=""
                      />
                    </StatusItem>
                  </Status>
                }
              >
                <span>{_get(userProfile, 'full_name')}</span>
              </Card>
            </CardStatus>
          </Col>
          <Col lg={16} xs={16}>
            <Tabs onChange={callback} type="card">
              <TabPane tab="Liên hệ" key="profile">
                <Profile>
                  <List
                    size="small"
                    // header={<div>Header</div>}
                    // footer={<div>Footer</div>}
                    bordered
                  >
                    <List.Item>
                      <Col lg={12}>
                        <b>Mobile</b>: {_get(userProfile, 'phone')}
                      </Col>
                      <Col lg={12}>
                        <b>Tel (officee)</b>: {_get(userProfile, 'tel_office')}
                      </Col>
                    </List.Item>
                    <List.Item>
                      <Col lg={24}>
                        <b>Email</b>: {_get(userProfile, 'email')}
                      </Col>
                    </List.Item>
                    <List.Item>
                      <Col lg={24}>
                        <b>Địa chỉ (officee)</b>:{' '}
                        {_get(userProfile, 'address_office')}
                      </Col>
                    </List.Item>
                    <List.Item>
                      <Col lg={12}>
                        <b>Địa chỉ (nhà)</b>: {_get(userProfile, 'address')}
                      </Col>
                      <Col lg={12}>
                        <b>Thành phố</b>: {_get(userProfile, 'city')}
                      </Col>
                    </List.Item>
                    <List.Item>
                      <Col lg={12}>
                        <b>Công ty</b>: {_get(userProfile, 'company')}
                      </Col>
                      <Col lg={12}>
                        <b>Ghi chú</b>: {_get(userProfile, 'note')}
                      </Col>
                    </List.Item>
                  </List>
                </Profile>
              </TabPane>
              <TabPane tab="Giao việc" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Ghi chú" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </UserProfileState>
    </UserProfile>
  );
}

const Profile = styled.div`
  .ant-list {
    background: #fff;
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

const UserProfileState = styled.section`
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

const UserProfile = styled.div`
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

User.propTypes = {
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

export default compose(withConnect)(withRouter(User));
