/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { get as _get } from 'lodash';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import H1 from 'components/H1';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { postLogin } from '../../../services/auth';
import routes from '../../constants/routes';
import './styles.less';

// eslint-disable-next-line react/prop-types
export function LoginForm({ history }) {
  const onFinish = async values => {
    const { email, password } = values;

    const auth = await postLogin('user/login', { email, password });

    const token = _get(auth, 'id', false);
    if (token) {
      history.replace('/dashboard');
    } else {
      const unauthorized = _get(auth, 'data.error', false);
      // eslint-disable-next-line no-useless-return
      if (unauthorized) return;
    }
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
        <H1 className="form-title">Đăng Nhập</H1>
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
          help={false}
          // validateStatus="error"
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
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
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
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
            <Checkbox className="vnk-remember">Lưu mật khẩu</Checkbox>
          </Form.Item>

          <Link className="login-form-forgot" to={routes.REGISTER}>
            Chưa là thành viên? Đăng ký
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}

LoginForm.propTypes = {
  //   onFetchProject: PropTypes.func,
  //   project: PropTypes.array,
};

// const mapStateToProps = createStructuredSelector({
//   project: makeSelectLoginForm(),
// });

// export function mapDispatchToProps(dispatch) {
//   return {
//     onFetchProject: () => dispatch(loadLoginForm()),
//   };
// }

const withConnect = connect(
  null,
  null,
);

export default compose(withConnect)(LoginForm);
