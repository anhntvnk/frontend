/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState, useEffect } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isEmpty as _isEmpty, get as _get } from 'lodash';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H1 from 'components/H1';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import reducer from './reducer';
import saga from './saga';
import { makeSelectErrorMessage, makeSelectLoginForm } from './selectors';
import { loginForm } from './actions';
import routes from '../../constants/routes';
import './styles.less';
// eslint-disable-next-line import/order
import { createStructuredSelector } from 'reselect';
import { setUserSession } from '../../../services/auth';
import messages from './messages';
const key = 'loginForm';

// eslint-disable-next-line react/prop-types
export function LoginForm({ history, intl, onLoginForm, user, errorMessage }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [formItemLayout, setFormItemLayout] = useState({});
  const [validateStatus, setValidateStatus] = useState({});

  useEffect(() => {
    if (!_isEmpty(user)) {
      const {
        access_token: accessToken,
        userId,
        packageOrder,
        packageExpire,
        expireDate,
      } = user;
      if (accessToken) {
        if (!packageExpire) {
          setValidateStatus({ validateStatus: 'error' });
          setFormItemLayout({
            help: intl.formatMessage({ ...messages.myFormAccountExpire }),
            validateStatus: 'error',
          });
          return;
        }

        setUserSession(accessToken, userId, packageOrder, expireDate);
        setFormItemLayout({});
        history.replace('/dashboard');
      }
    }

    if (errorMessage) {
      let messageError = intl.formatMessage({ ...messages.myFormLoginFail });
      if (errorMessage === 'LOGIN_TO_MULTIPLE_DEVICE') {
        messageError = intl.formatMessage({
          ...messages.myFormLoginMultipleDevice,
        });
      }
      setValidateStatus({ validateStatus: 'error' });
      setFormItemLayout({
        help: messageError,
        validateStatus: 'error',
      });
    }
  }, [user, errorMessage]);

  if (history.location.state) {
    message.success(_get(history.location.state, 'successMessage', ''));
    history.replace({ ...history.location, state: undefined });
  }

  const onFinish = async values => {
    const { email, password } = values;
    onLoginForm({ email, password, device_id: 'system' });
  };

  return (
    <div className="form-login">
      <Helmet>
        <title>Đăng Nhập</title>
        <meta name="description" content="Đăng Nhập My Project" />
      </Helmet>

      <Form
        name="myp_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <H1 className="form-title">
          <FormattedMessage {...messages.myFormTitle} />
        </H1>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Địa chỉ Email không hợp lệ!',
            },
            {
              required: true,
              message: 'Địa chỉ Email là bắt buộc!',
            },
          ]}
          {...validateStatus}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={intl.formatMessage({ ...messages.myFormInputEmail })}
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
          {...formItemLayout}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder={intl.formatMessage({ ...messages.myFormInputPwd })}
          />
        </Form.Item>

        <Form.Item className="btn-login">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Đăng Nhập
          </Button>
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="" noStyle>
            <Checkbox className="vnk-remember">
              <FormattedMessage {...messages.myFormSavePwd} />
            </Checkbox>
          </Form.Item>

          <Link className="login-form-forgot" to={routes.REGISTER}>
            <FormattedMessage {...messages.myFormSignUp} />
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}

LoginForm.propTypes = {
  onLoginForm: PropTypes.func,
  user: PropTypes.object,
  errorMessage: PropTypes.string,
  intl: intlShape.required,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectLoginForm(),
  errorMessage: makeSelectErrorMessage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoginForm: data => dispatch(loginForm(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(injectIntl(LoginForm));
