/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { omit as _omit } from 'lodash';
import H1 from 'components/H1';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
// import { loadLoginForm } from './actions';
// import { makeSelectLoginForm } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.less';
import { registerAccount } from './actions';
import { makeSelectRegister } from './selectors';

const key = 'register';

export function Register({ onRegister, user }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  });

  const onFinish = formValues => {
    onRegister(_omit(formValues, ['repassword']));
  };

  return (
    <div className="register-myp">
      <Helmet>
        <title>Đăng Ký Tài Khoản My Project</title>
        <meta name="description" content="Đăng Ký Tài Khoản My Project" />
      </Helmet>

      <Form
        name="myp_login"
        className="register-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <H1 className="form-title">Đăng Ký</H1>
        <Form.Item
          name="full_name"
          rules={[
            {
              required: true,
              message: 'Họ và tên là bắt buộc!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Họ tên"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Địa chỉ Email là bắt buộc!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Điạ chỉ Email"
          />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Số điện thoại là bắt buộc!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Số điện thoại"
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
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <Form.Item
          name="repassword"
          rules={[
            {
              required: true,
              message: 'Mật khẩu nhập lại là bắt buộc!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject('Mật khẩu nhập lại là không khớp!');
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="repassword"
            placeholder="Điền lại mật khẩu"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="register-form-button"
          >
            Đăng Ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

Register.propTypes = {
  onRegister: PropTypes.func,
  user: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectRegister(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onRegister: data => dispatch(registerAccount(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Register);
