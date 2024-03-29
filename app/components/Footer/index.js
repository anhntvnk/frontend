/* eslint-disable global-require */
import React from 'react';
import { Card, Row, Col, Avatar } from 'antd';
import styled from 'styled-components';
import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  AppstoreOutlined,
  FieldNumberOutlined,
} from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';
import ROUTE from '../../constants/routes';
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
                      <a href="tel: 02437373366">024.3737.3366</a>
                    </span>
                  </p>
                  <p>
                    <MailOutlined />
                    &ensp;
                    <span>
                      <a href="mailto: admin@myp.vn">admin@myp.vn</a>
                    </span>
                  </p>
                  <p>
                    <FieldNumberOutlined />
                    &ensp;
                    <span>
                      <b>001188004366</b>&ensp; (
                      <FormattedMessage {...messages.codeCer} />)
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
              <b>
                <FormattedMessage {...messages.footerMsg2} />
              </b>
            </ChatNow>
          </VnkAdress>
        </Col>
        <Support lg={6} md={6} sm={24} xs={24}>
          {/* <Card title="Card title">Card content</Card> */}
          <Card bordered={false}>
            <FooterSupport>
              <Link to={ROUTE.POLICY}>
                <AppstoreOutlined />
                &nbsp;
                <FormattedMessage {...messages.footerPolicy} />
              </Link>
            </FooterSupport>
            <FooterSupport>
              <Link to={ROUTE.PROVISION}>
                <AppstoreOutlined />
                &nbsp;
                <FormattedMessage {...messages.footerProvision} />
              </Link>
            </FooterSupport>
            <FooterSupport>
              <Link to={ROUTE.SOLUTION}>
                <AppstoreOutlined />
                &nbsp;
                <FormattedMessage {...messages.footerSolution} />
              </Link>
            </FooterSupport>
            <FooterSupport>
              <Link to={ROUTE.PRICE}>
                <AppstoreOutlined />
                &nbsp;
                <FormattedMessage {...messages.footerPriceList} />
              </Link>
            </FooterSupport>
          </Card>
        </Support>
        <Support lg={6} md={6} sm={24} xs={24}>
          {/* <Card title="Card title">Card content</Card> */}
          <Card bordered={false}>
            <p>
              <span className="sp-title">
                <FormattedMessage {...messages.footerService} />
              </span>
            </p>
            <p>
              <FormattedMessage {...messages.footerServiceAcademy} />
            </p>
            <p>
              <FormattedMessage {...messages.footerServiceShare} />
            </p>
            <p>
              <FormattedMessage {...messages.footerServiceInvite} />
            </p>
            <p>
              <FormattedMessage {...messages.footerServiceProvided} />
            </p>

            <p>
              <span className="sp-title">
                <FormattedMessage {...messages.footerSupport} />
              </span>
            </p>
            <p>
              <span>Hotline: 024.3737.3366</span>
            </p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <MailOutlined />
              &ensp;
              <span>Email: admin@myp.vn</span>
            </p>
          </Card>
        </Support>
        <Chairman lg={4} md={4} sm={24} xs={24}>
          <Card
            bordered={false}
            hoverable
            style={{ width: 200 }}
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

const FooterSupport = styled.p`
  font-size: 18px;
  padding-left: 70px;

  a {
    display: flex;
    align-items: center;
    color: #fff;
  }
  a:hover {
    color: #fff;
    font-weight: bold;
  }
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
