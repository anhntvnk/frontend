/* eslint-disable import/order */
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
import { Form, Input, Button, Spin, Row, Col } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import messages from './messages';
import reducer from './reducer';
import ROUTE from '../../constants/routes';
import saga from './saga';
import './styles.less';
import styled from 'styled-components';
import { registerAccount } from './actions';
import {
  makeSelectStatusResponse,
  makeSelectRegisterLoading,
} from './selectors';

const key = 'register';

export function Register({
  history,
  onRegister,
  isLoading,
  statusResponse,
  intl,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (statusResponse === 'success') {
      window.gtag('config', 'AW-880683669', {
        page_title: 'Register Success',
        page_path: ROUTE.REGISTER,
      });
    }
  }, [statusResponse]);

  const onFinish = formValues => {
    onRegister(_omit(formValues, ['repassword']));
  };

  const goToLogin = () => {
    history.push(ROUTE.LOGIN);
  };

  return !statusResponse ? (
    <div className="register-myp">
      <Spin spinning={isLoading} tip="Loading...">
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
      </Spin>
    </div>
  ) : (
    <StyledRegisterSuccess status={statusResponse === 'success' ? 1 : 0}>
      <Col span={24}>
        {statusResponse === 'success' ? (
          <CheckCircleOutlined style={{ fontSize: '60px', color: '#52c41a' }} />
        ) : (
          <ExclamationCircleOutlined
            style={{ fontSize: '60px', color: 'red' }}
          />
        )}
        <H1>
          {statusResponse === 'success' ? (
            <FormattedMessage {...messages.myProjRegisterSuccess} />
          ) : (
            <FormattedMessage {...messages.myProjRegisterError} />
          )}
        </H1>
        <p>
          {statusResponse === 'success' ? (
            <FormattedMessage {...messages.myProjRegisterSuccessContent} />
          ) : (
            <FormattedMessage {...messages.myProjRegisterErrorContent} />
          )}
        </p>
      </Col>
      {statusResponse === 'success' && (
        <IframeContainer lg={24}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VCJcaVHdxe4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </IframeContainer>
      )}
      <Button
        type="primary"
        htmlType="submit"
        className="btn-goto-login"
        onClick={goToLogin}
      >
        <FormattedMessage {...messages.myProjGoToLogin} />
      </Button>
    </StyledRegisterSuccess>
  );
}

const StyledRegisterSuccess = styled(Row)`
  padding: 48px 100px;
  border-radius: 4px;
  display: inline-block;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    padding: 50px 20px;
  }

  .ant-col {
    margin: 15px auto;
    text-align: center;
  }

  h1 {
    text-align: center;
    color: ${props => (props.status ? '#52c41a' : 'red')};
    font-weight: 900;
    margin: 20px 0px;
    font-size: 28px;
  }
  p {
    text-align: center;
    margin: 0;
    color: #404f5e;
    font-size: 20px;
  }

  .btn-goto-login {
    margin: auto;
    margin-top: 20px;
  }
`;

const IframeContainer = styled(Col)`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

Register.propTypes = {
  history: PropTypes.any,
  onRegister: PropTypes.func,
  statusResponse: PropTypes.string,
  isLoading: PropTypes.bool,
  intl: intlShape.isRequired,
};

const mapStateToProps = createStructuredSelector({
  statusResponse: makeSelectStatusResponse(),
  isLoading: makeSelectRegisterLoading(),
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
