/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * ProjectPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { get as _get } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Card, Row, Col, Button, List, Tabs, Avatar, Modal, Alert } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import H1 from 'components/H1';
import { makeSelectOrder, makeSelectUserProfille } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.less';
import { loadUserProfile, resetForm, setPackageOrder } from './actions';
import messages from './messages';
import packageIcon from '../../assets/images/settings/ic_box.png';

const key = 'user';

const { TabPane } = Tabs;
const { Meta } = Card;

export function User({
  history,
  userProfile,
  onLoadUserProfile,
  onOrderPlan,
  onResetForm,
  isSuccess,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [visible, setVisible] = React.useState(false);
  const [orderPackage, setOrderPackage] = React.useState({});
  const [edit, setEdit] = React.useState(false);
  const [alert, setAlert] = React.useState(false);

  useEffect(() => {
    onLoadUserProfile();
  }, []);

  useEffect(() => {
    setAlert(isSuccess);
  }, [isSuccess]);

  const openModal = (item, isEdit) => {
    setVisible(true);
    setOrderPackage(item);
    setEdit(isEdit);
  };

  const orderPlan = (item, isEdit) => {
    const params = {
      user_id: userProfile.id,
      package: item.key,
      note: item.key,
      created: moment().format(),
    };

    if (userProfile.team_id) {
      params.team_id = userProfile.team_id;
    }
    onOrderPlan(params, isEdit ? userProfile.orderId : isEdit);
    setVisible(false);
  };

  const addDot = value =>
    value ? value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.') : '';

  const listPackage = [
    {
      key: 'basic',
      title: <FormattedMessage {...messages.myProfileBascicPackage} />,
      price: 580000,
      level: 1,
    },
    {
      key: 'standard',
      title: <FormattedMessage {...messages.myProfileStandardPackage} />,
      price: 1868000,
      level: 2,
    },
    {
      key: 'enterprise',
      title: <FormattedMessage {...messages.myProfileEnterprisePackage} />,
      price: 6868000,
      level: 3,
    },
  ];

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
          <FormattedMessage {...messages.myProfileaBtnBack} />
        </Button>
        <H1>
          <FormattedMessage {...messages.myProfiletTitle} />
        </H1>
      </CenteredSectionWithBack>
      <UserProfileState>
        <Row
          style={{ marginBottom: '50px' }}
          gutter={{ xs: 8, sm: 24, md: 24, lg: 16 }}
        >
          <Col lg={8} xs={24}>
            <CardStatus>
              <Card>
                <Meta
                  avatar={
                    <Avatar
                      // eslint-disable-next-line global-require
                      src={require('../../assets/images/globe/noavatar.png')}
                    />
                  }
                  description={
                    <div>
                      <p>
                        <FormattedMessage {...messages.myProfileId} />
                        &nbsp;
                        <b>MYP{_get(userProfile, 'id')}</b>
                      </p>
                      <p>
                        <FormattedMessage {...messages.myProfileName} />
                        &nbsp;
                        <b>{_get(userProfile, 'full_name')}</b>
                      </p>
                      <p>
                        <FormattedMessage {...messages.myProfilePosition} />
                        &nbsp;
                        <b>{_get(userProfile, 'position')}</b>
                      </p>
                      <p>
                        <FormattedMessage {...messages.myProfileSalary} />
                        &nbsp;
                        <b>{moment().format('D/M/YYYY')}</b>
                      </p>
                    </div>
                  }
                />
              </Card>
            </CardStatus>
          </Col>
          <Col lg={16} xs={24}>
            <Tabs type="card">
              <TabPane
                tab={<FormattedMessage {...messages.myProfileContact} />}
                key="profile"
              >
                <Profile>
                  <List size="small" bordered>
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
                        <b>
                          <FormattedMessage
                            {...messages.myProfileAddressOffice}
                          />
                        </b>
                        {_get(userProfile, 'address_office')}
                      </Col>
                    </List.Item>
                    <List.Item>
                      <Col lg={12}>
                        <b>
                          <FormattedMessage
                            {...messages.myProfileAddressHome}
                          />
                        </b>
                        {_get(userProfile, 'address')}
                      </Col>
                      <Col lg={12}>
                        <b>
                          <FormattedMessage {...messages.myProfileCity} />
                        </b>
                        {_get(userProfile, 'city')}
                      </Col>
                    </List.Item>
                    <List.Item>
                      <Col lg={12}>
                        <b>
                          <FormattedMessage {...messages.myProfiletCompany} />
                          &nbsp;
                        </b>
                        {_get(userProfile, 'company')}
                      </Col>
                      <Col lg={12}>
                        <b>
                          <FormattedMessage {...messages.myProfileNote} />
                          :&nbsp;
                        </b>
                        {_get(userProfile, 'note')}
                      </Col>
                    </List.Item>
                    <List.Item>
                      <Col lg={12} style={{ textTransform: 'capitalize' }}>
                        <b>
                          <FormattedMessage {...messages.myProfileService} />
                          &nbsp;
                        </b>
                        <span style={{ color: 'red', fontWeight: 600 }}>
                          {_get(userProfile, 'package')}
                        </span>
                      </Col>
                      <Col lg={12} style={{ textTransform: 'capitalize' }}>
                        <b>
                          <FormattedMessage
                            {...messages.myProfiletitleEndDate}
                          />
                          &nbsp;
                        </b>
                        <span style={{ color: '#279d58', fontWeight: 500 }}>
                          {moment(_get(userProfile, 'expireDate')).format(
                            'D/M/YYYY',
                          )}
                        </span>
                      </Col>
                    </List.Item>
                  </List>
                </Profile>
              </TabPane>
              <TabPane
                tab={<FormattedMessage {...messages.myProfileAssign} />}
                key="2"
              >
                <FormattedMessage {...messages.myProfileUpdating} />
              </TabPane>
              <TabPane
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '80px',
                }}
                tab={
                  <Link to="/notes" style={{ padding: '12px' }}>
                    <FormattedMessage {...messages.myProfileNote} />
                    &nbsp;
                  </Link>
                }
                key="3"
              >
                <FormattedMessage {...messages.myProfileUpdating} />
              </TabPane>
            </Tabs>
          </Col>
        </Row>

        {alert && (
          <Alert
            message={<FormattedMessage {...messages.myProfileRenewSuccess} />}
            style={{ marginBottom: '20px' }}
            type="success"
            afterClose={() => onResetForm()}
            showIcon
            closable
          />
        )}

        <StyledPackageCard>
          <Row gutter={{ sm: 24, md: 24, lg: 16 }}>
            {listPackage.map(item => (
              <Col
                lg={8}
                xs={24}
                key={item.key}
                style={{ marginBottom: '20px' }}
              >
                <Card
                  title={
                    <div>
                      <StylePackageImg src={packageIcon} alt={item.title} />
                      {item.title}
                    </div>
                  }
                  bordered={false}
                >
                  <StyledCardContent
                    isMyPackage={_get(userProfile, 'package') === item.key}
                  >
                    <StylePrice>{addDot(item.price)}</StylePrice>
                    <StyleButtonPackage
                      onClick={() =>
                        openModal(
                          item,
                          _get(userProfile, 'package') === item.key,
                        )
                      }
                      type="primary"
                      shape="round"
                      size="small"
                    >
                      {_get(userProfile, 'package') === item.key ? (
                        <FormattedMessage {...messages.myProfileRenewPackage} />
                      ) : (
                        <FormattedMessage {...messages.myProfileBuyPackage} />
                      )}
                    </StyleButtonPackage>
                  </StyledCardContent>
                </Card>
              </Col>
            ))}
          </Row>
        </StyledPackageCard>
        <ModalConfirm
          visible={visible}
          orderPackage={orderPackage}
          setVisible={setVisible}
          orderPlan={() => orderPlan(orderPackage, edit)}
          title={<FormattedMessage {...messages.myProfileTitlePackage} />}
        />
      </UserProfileState>
    </UserProfile>
  );
}

const ModalConfirm = ({
  orderPackage,
  orderPlan,
  visible,
  setVisible,
  title,
}) => (
  <Modal
    title={title}
    centered
    visible={visible}
    onOk={orderPlan}
    onCancel={() => setVisible(false)}
  >
    <FormattedMessage
      {...messages.myProfileContentConfirmPackage}
      values={{
        package: orderPackage.title,
      }}
    />
  </Modal>
);

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
      display: flex;
      justify-content: center;
      width: 80px;
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

const CardStatus = styled.div`
  margin-top: 50px;
  height: 200px;
  @media only screen and (max-width: 767.99px) {
    margin-bottom: 0px;
    height: 160px;
  }

  .ant-avatar {
    width: 60px;
    height: 60px;
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

const StyledPackageCard = styled.div`
  padding: 30px;
  background: #ececec;
  margin: auto;
`;

const StylePackageImg = styled.img`
  width: 32px;
  padding-right: 5px;
`;

const StyleButtonPackage = styled(Button)``;

const StyledCardContent = styled.div`
  display: flex;
  justify-content: space-between;

  .ant-btn {
    font-weight: 500;
    background-color: ${({ isMyPackage }) =>
      isMyPackage ? '#279d58' : '#FA860A'};
    border-color: ${({ isMyPackage }) => (isMyPackage ? '#279d58' : '#FA860A')};
  }

  .ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active {
    background-color: ${({ isMyPackage }) =>
      isMyPackage ? '#279d58' : '#FA860A'};
    border-color: ${({ isMyPackage }) => (isMyPackage ? '#279d58' : '#FA860A')};
  }
`;

const StylePrice = styled.span`
  color: #bb2121;
  font-weight: 600;
`;

User.propTypes = {
  onLoadUserProfile: PropTypes.func,
  onResetForm: PropTypes.func,
  onOrderPlan: PropTypes.func,
  history: PropTypes.object,
  userProfile: PropTypes.any,
  isSuccess: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  userProfile: makeSelectUserProfille(),
  isSuccess: makeSelectOrder(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadUserProfile: () => dispatch(loadUserProfile()),
    onResetForm: () => dispatch(resetForm()),
    onOrderPlan: (data, isEdit) => dispatch(setPackageOrder(data, isEdit)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(User));
