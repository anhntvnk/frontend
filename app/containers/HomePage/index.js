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
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H1 from 'components/H1';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  IdcardOutlined,
} from '@ant-design/icons';
import CenteredSection from './CenteredSection';
import Section from './Section';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import welcomeLeft from '../../assets/images/welcome-left.png';
import welcomeRight from '../../assets/images/welcome-right.png';
import searchData from '../../assets/images/search-data.png';
import market from '../../assets/images/market.png';
import './styles.less';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <article>
      <Helmet>
        <title>My Project Welcome</title>
        <meta name="description" content="My Project Welcome" />
      </Helmet>
      <Row className="vnk-welcome">
        <CenteredSection>
          <H1 className="welcome-back">Welcome Back!</H1>
        </CenteredSection>
        <Col span={24} xs={24}>
          <div className="vnk-login">
            <CenteredSection>
              <H1 className="welcome-text">
                Chào mừng bạn đến với Hệ thống dữ liệu My Project!
              </H1>
            </CenteredSection>

            <div className="flex">
              <img src={welcomeLeft} alt="" className="img-welcome-left" />
              <div className="vnk-content-login">
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <H1 className="form-title">Đăng Nhập</H1>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Email!',
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Password!',
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox className="vnk-remember">Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                      Quên mật khẩu
                    </a>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Đăng Nhập
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>

            <img src={welcomeRight} alt="" className="img-welcome-right" />
            <div className="sercurity">
              <div className="sercurity-bg" />
              <div className="sercurity-text">
                <H1 className="sercurity-title">Sercurity Code</H1>
                <p className="sercurity-content">
                  Data Security is one of our best facilities. Allows for your
                  files to be safer. The file can be secured with a code or
                  password that you created, so only you can open the file.
                </p>
                <p className="learn-more">
                  Lean More <ArrowRightOutlined />
                </p>
              </div>
            </div>

            <Col span={24} xs={24} style={{ marginTop: '100px' }}>
              <Section>
                <img src={searchData} alt="" className="img-search-data" />
                <div className="sercurity">
                  <div className="search-data-bg" />
                  <div className="search-data-text">
                    <H1 className="sercurity-title">Sercurity Code</H1>
                    <p className="sercurity-content">
                      Data Security is one of our best facilities. Allows for
                      your files to be safer. The file can be secured with a
                      code or password that you created, so only you can open
                      the file.
                    </p>
                    <p className="learn-more">
                      Lean More <ArrowRightOutlined />
                    </p>
                  </div>
                </div>
                <div className="vnk-content-regisrer">
                  <Form
                    name="normal_register"
                    className="register-form"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                  >
                    <H1 className="form-title">Đăng ký tài khoản!</H1>
                    <Form.Item style={{ marginBottom: 0, width: '420px' }}>
                      <Form.Item
                        name="name"
                        rules={[{ required: true }]}
                        style={{
                          display: 'inline-block',
                          width: 'calc(50% - 8px)',
                        }}
                      >
                        <Input
                          prefix={
                            <IdcardOutlined className="site-form-item-icon" />
                          }
                          placeholder="Nhập Họ Tên"
                        />
                      </Form.Item>
                      <Form.Item
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: 'Số Điện Thoại là bắt buộc!',
                          },
                        ]}
                        style={{
                          display: 'inline-block',
                          width: 'calc(50% - 8px)',
                          margin: '0 8px',
                        }}
                      >
                        <Input
                          prefix={
                            <PhoneOutlined className="site-form-item-icon" />
                          }
                          placeholder="Số Điện Thoại"
                        />
                      </Form.Item>
                    </Form.Item>
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Địa chỉ Email là bắt buộc!',
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Địa chỉ Email"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Mật khẩu là bắt buộc!',
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Nhập Mật Khẩu"
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        Đăng Ký
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
                <img src={market} alt="" className="img-market" />
              </Section>
            </Col>
          </div>
        </Col>
      </Row>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
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
)(HomePage);
