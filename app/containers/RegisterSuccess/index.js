import React, { useEffect } from 'react';
import H1 from 'components/H1';
import { Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './styles.less';
import styled from 'styled-components';
import { CheckCircleOutlined } from '@ant-design/icons';
import messages from './messages';
import ROUTE from '../../constants/routes';

export default function RegisterSuccess({ history }) {
  const goToLogin = () => {
    history.push(ROUTE.LOGIN);
  };

  return (
    <StyledRegisterSuccess>
      <Col span={24}>
        <CheckCircleOutlined style={{ fontSize: '60px', color: '#52c41a' }} />
        <H1>
          <FormattedMessage {...messages.myProjRegisterSuccess} />
        </H1>
        <p>
          <FormattedMessage {...messages.myProjRegisterSuccessContent} />
        </p>
      </Col>
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
      <Col lg={24} xs={24}>
        <Link to={{ pathname: 'https://zalo.me/g/muhxnn082' }} target="_blank">
          <Button
            lg={24}
            type="primary"
            htmlType="submit"
            className="btn-goto-zalo"
          >
            <FormattedMessage {...messages.myProjGoToZalo} />
          </Button>
        </Link>
      </Col>
      <Col lg={24} xs={24}>
        <Button
          type="primary"
          htmlType="submit"
          className="btn-goto-login"
          onClick={goToLogin}
        >
          <FormattedMessage {...messages.myProjGoToLogin} />
        </Button>
      </Col>
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
  }

  .btn-goto-zalo {
    :active {
      background: linear-gradient(45deg, #3386ff, #0068ff);
      border-color: unset;
    }
    background: linear-gradient(45deg, #3386ff, #0068ff);
    border-color: unset;
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
