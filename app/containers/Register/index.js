/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { omit as _omit } from 'lodash';
import H1 from 'components/H1';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import './styles.less';
import { registerAccount } from './actions';
import { makeSelectRegister } from './selectors';

const key = 'register';

export function Register({ onRegister, intl }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const onFinish = formValues => {
    onRegister(_omit(formValues, ['repassword']));
  };

  return (
    <div className="register-myp">
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

      <Form
        name="myp_login"
        className="register-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <H1 className="form-title">
          <FormattedMessage {...messages.myProjRegister} />
        </H1>
        <Form.Item
          name="full_name"
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                ...messages.myProjNameReq,
              }),
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={intl.formatMessage({
              ...messages.myProjName,
            })}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                ...messages.myProjEmailReq,
              }),
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={intl.formatMessage({
              ...messages.myProjEmail,
            })}
          />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                ...messages.myProjPhoneReq,
              }),
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={intl.formatMessage({
              ...messages.myProjPhone,
            })}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                ...messages.myProjPasswordReq,
              }),
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder={intl.formatMessage({
              ...messages.myProjPassword,
            })}
          />
        </Form.Item>
        <Form.Item
          name="repassword"
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                ...messages.myProjRePasswordReq,
              }),
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject(
                  intl.formatMessage({
                    ...messages.myProjRePasswordMath,
                  }),
                );
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="repassword"
            placeholder={intl.formatMessage({
              ...messages.myProjRepassword,
            })}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="register-form-button"
          >
            <FormattedMessage {...messages.myProjRegister} />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

Register.propTypes = {
  onRegister: PropTypes.func,
  intl: intlShape.isRequired,
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

export default compose(withConnect)(injectIntl(Register));
