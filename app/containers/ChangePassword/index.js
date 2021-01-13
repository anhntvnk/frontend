/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * ChangePassword
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { omit as _omit } from 'lodash';
import H1 from 'components/H1';
import CenteredSectionWithBack from 'components/CenteredSectionWithBack';
import { Form, Input, Button } from 'antd';
import { LockOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { changePassword } from './actions';
import { makeSelectErrorMessage, makeSelectSuccessMessage } from './selectors';
import ROUTE from '../../constants/routes';
import { removeUserSession } from '../../../services/auth';
import './styles.less';

const key = 'changePassword';

export function ChangePassword({
  history,
  onChangePassword,
  successMessage,
  errorMessage,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [formItemLayout, setFormItemLayout] = useState({});
  const [validateStatus, setValidateStatus] = useState({});

  useEffect(() => {
    if (errorMessage) {
      setValidateStatus({ validateStatus: 'error' });
      setFormItemLayout({
        help: errorMessage,
        validateStatus: 'error',
      });
    }
  }, [errorMessage]);

  if (successMessage) {
    removeUserSession();
    history.push(ROUTE.LOGIN, {
      successMessage,
    });
  }

  const onFinish = formValues => {
    onChangePassword(_omit(formValues, ['repassword']));
  };

  return (
    <div className="change-password-myp">
      <Helmet>
        <title>Thay đổi mật khẩu tài khoản My Project</title>
        <meta
          name="description"
          content="Thay đổi mật khẩu tài khoản My Project"
        />
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
      </CenteredSectionWithBack>

      <Form
        name="change-password"
        className="change-password-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <H1 className="form-title">Đổi mật khẩu</H1>
        <Form.Item
          name="oldPassword"
          rules={[
            {
              required: true,
              message: 'Mật khẩu cũ là bắt buộc!',
            },
          ]}
          hasFeedback
          {...formItemLayout}
          {...validateStatus}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Nhập mật khẩu cũ"
          />
        </Form.Item>
        <Form.Item
          name="newPassword"
          rules={[
            {
              required: true,
              message: 'Mật khẩu mới là bắt buộc!',
            },
          ]}
          hasFeedback
          {...validateStatus}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Nhập mật khẩu mới"
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
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject('Mật khẩu nhập lại là không khớp!');
              },
            }),
          ]}
          hasFeedback
          {...validateStatus}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="repassword"
            placeholder="Nhập lại mật khẩu mới"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="change-password-form-button"
          >
            Lưu Lại
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

ChangePassword.propTypes = {
  history: PropTypes.any,
  onChangePassword: PropTypes.func,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  successMessage: makeSelectSuccessMessage(),
  errorMessage: makeSelectErrorMessage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangePassword: data => dispatch(changePassword(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ChangePassword);
