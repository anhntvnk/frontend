import React from 'react';
import { Card, Row, Col, Avatar, Button } from 'antd';
import styled from 'styled-components';
import { HomeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import iso from '../../assets/images/vnk-iso.png';
import chPlay from '../../assets/images/ch-play.png';
import appStore from '../../assets/images/app-store.png';

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
                    <span>Số 88 Láng Hạ, Đống Đa, Hà Nội</span>
                  </p>
                  <p>
                    <PhoneOutlined />
                    &ensp;
                    <span>
                      <a href="tel: support@vnk.com.vn">0912808996</a>
                    </span>
                  </p>
                  <p>
                    <MailOutlined />
                    &ensp;
                    <span>
                      <a href="mailto: support@vnk.com.vn">
                        support@vnk.com.vn
                      </a>
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
              <p>Chat với chúng tôi để được hỗ trợ ngay</p>
              <Button>
                <a
                  target="_blank"
                  href="https://m.me/718183361653935?ref=Default-Block"
                >
                  Chát Ngay
                </a>
              </Button>
            </ChatNow>
          </VnkAdress>
        </Col>
        <Support lg={8} md={8} sm={24} xs={24}>
          {/* <Card title="Card title">Card content</Card> */}
          <Card bordered={false}>
            <p>
              <span className="sp-title">TẢI ỨNG DỤNG MY PROJECT</span>
            </p>
            <p>
              <a className="logo" href="/">
                <img src={appStore} alt="" className="vnk-download-app" />
              </a>
            </p>
            <p>
              <a className="logo" href="/">
                <img src={chPlay} alt="" className="vnk-download-app" />
              </a>
            </p>

            <p>
              <span className="sp-title">HỖ TRỢ KHÁCH HÀNG</span>
            </p>
            <p>
              <span>Hotline: 091 280 89 96</span>
            </p>
            <p>
              <MailOutlined />
              &ensp;
              <span>Email: cskh@vnk.com.vn</span>
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
          <Col span={12}>@Copyright by MYP - Một sản phẩm của VNK</Col>
          <Col span={12}>
            <a className="logo" href="/">
              <img src={iso} alt="VNK ISO" className="vnk-iso" />
            </a>
          </Col>
        </Copyright>
      </Info>
    </FooterMyp>
  );
}

const ChatNow = styled.div`
  text-align: center;
  margin-top: 20px;

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
  top: -20px;
  height: 379px;
  background: #ffffff;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0px 0px !important;

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
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  top: -20px;
  border-top: 1px solid #fff;
  width: 100%;
  background-color: #b7252c;
  .vnk-iso {
    width: 170px;
    height: 64px;
  }
`;

export default Footer;
