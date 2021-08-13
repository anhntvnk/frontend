/* eslint-disable global-require */
import React from 'react';
import { Card, Row, Col, Avatar } from 'antd';
import styled from 'styled-components';
import { HomeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
const { Meta } = Card;

function Footer() {
  return (
    <FooterMyp>
      <Info>
        <Col lg={8} md={8} sm={24} xs={24}>
          <VnkAdress>
            <Meta
              avatar={
                <Avatar
                  src={require('../../assets/images/logo/my-project.png')}
                />
              }
              description={
                <>
                  <p>
                    <HomeOutlined />
                    &ensp;
                    <span>
                      <FormattedMessage {...messages.address} />
                    </span>
                  </p>
                  <p>
                    <PhoneOutlined />
                    &ensp;
                    <span>
                      <a href="tel: 0912808996">0912808996</a>
                    </span>
                  </p>
                  <p>
                    <MailOutlined />
                    &ensp;
                    <span>
                      <a href="mailto: crm@myp.vn">crm@myp.vn</a>
                    </span>
                  </p>
                </>
              }
            />
            <hr
              style={{
                borderTop: '1px solid #333',
                borderBottom: 'initial',
                margin: '26px 0px',
              }}
            />
            <ChatNow>
              <p>
                <FormattedMessage {...messages.footerMsg1} />
              </p>
              <p>
                <FormattedMessage {...messages.footerMsg2} />
              </p>
            </ChatNow>
          </VnkAdress>
        </Col>
        <Support lg={8} md={8} sm={24} xs={24}>
          {/* <Card title="Card title">Card content</Card> */}
          <Card bordered={false}>
            <p>
              <span className="sp-title">
                <FormattedMessage {...messages.footerDown} />
              </span>
            </p>
            <p>
              <a className="logo" href="/">
                <img
                  src={require('../../assets/images/ch-play.png')}
                  alt=""
                  className="vnk-download-app"
                />
              </a>
            </p>
            <p>
              <a className="logo" href="/">
                <img
                  src={require('../../assets/images/app-store.png')}
                  alt=""
                  className="vnk-download-app"
                />
              </a>
            </p>

            <p>
              <span className="sp-title">
                <FormattedMessage {...messages.footerSupport} />
              </span>
            </p>
            <p>
              <span>Hotline: 091 280 89 96</span>
            </p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <MailOutlined />
              &ensp;
              <span>Email: crm@myp.vn</span>
            </p>
          </Card>
        </Support>
        <Chairman lg={8} md={8} sm={24} xs={24}>
          <Card
            bordered={false}
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={require('../../assets/images/home/chairman.jpg')}
              />
            }
          >
            <Meta title="Ninh Việt Tú" description="Chair man" />
          </Card>
        </Chairman>
        <Copyright>
          <Col span={12}>
            <FormattedMessage {...messages.footerCopyright} />
          </Col>
          <Col span={12}>
            {/* <a className="logo" href="/">
              <img
                src={require('../../assets/images/vnk-iso.png')}
                alt="VNK ISO"
                className="vnk-iso"
              />
            </a> */}
          </Col>
        </Copyright>
      </Info>
    </FooterMyp>
  );
}

const ChatNow = styled.div`
  text-align: center;
  margin-top: 50px;

  .ant-btn,
  .ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active {
    color: #fff;
    border-color: initial;
    text-transform: capitalize;
    background: hsl(214deg 89% 52%);
  }
`;

const FooterMyp = styled.div`
  color: #ffffff;

  .sp-title {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
  }
`;

const Support = styled(Col)`
  .ant-card-body {
    // padding: 40px 68px;

    @media screen and (max-width: 767px) {
      padding-left: 70px;
    }
  }
  .vnk-download-app {
    width: 153px;
    height: 45px;
  }
  .ant-card {
    background-color: #b7252c;
    color: #ffffff;
  }
`;

const VnkAdress = styled(Card)`
  position: absolute;
  height: 379px;
  background: #ffffff;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 767px) {
    height: auto;
  }
  .ant-avatar {
    width: 150px;
    height: 150px;
    border-radius: initial;
  }

  .ant-card-meta-detail {
    margin-top: 20px;
    .ant-card-meta-description {
      p {
        display: flex;
        align-items: center;
      }
      span {
        color: #223645;
        font-weight: 400;
        svg {
          font-size: 18px;
        }
        a {
          color: #223645;
        }
      }
    }
  }
`;

const Chairman = styled(Col)`
  margin-top: 20px;

  .ant-card-meta-detail {
    text-align: center;
  }

  .ant-card {
    @media screen and (max-width: 767px) {
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }
`;

const Info = styled(Row)`
  background-color: #b7252c;
  border-bottom: 1px solid #ffffff;
`;

const Copyright = styled(Row)`
  display: flex;
  width: 100%;
  padding: 10px 0px;
  text-align: center;
  align-items: center;
  border-top: 1px solid #fff;
  background-color: #b7252c;
  .vnk-iso {
    width: 170px;
    height: 64px;
  }
`;

export default Footer;
