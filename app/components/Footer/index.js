/* eslint-disable global-require */
import React from 'react';
import H1 from 'components/H1';
import { Card, Row, Col } from 'antd';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';
import ROUTE from '../../constants/routes';
import bgFooter2 from '../../assets/images/globe/bg-footer2.jpg';
import iconFeature1 from '../../assets/images/globe/icon-feature1.png';
import iconFeature2 from '../../assets/images/globe/icon-feature2.png';
import iconFeature3 from '../../assets/images/globe/icon-feature3.png';
import iconFeature4 from '../../assets/images/globe/icon-feature4.png';
import iconFeature5 from '../../assets/images/globe/icon-feature5.png';
import iconFeature6 from '../../assets/images/globe/icon-feature6.png';
import iconFeature7 from '../../assets/images/globe/icon-feature7.png';
import iconFeature8 from '../../assets/images/globe/icon-feature8.png';
const { Meta } = Card;

function Footer() {
  return (
    <FooterMyp>
      <Info gutter={{ lg: 50, md: 24 }}>
        <FooterTopLeft md={24} lg={24} xl={8}>
          <div className="relative [&_h1]:text-[22px] [&_span]:text-[18px] [&_span]:leading-[22px] xl:[&_h1]:text-[28px] xl:[&_span]:text-[26px] p-5 pb-10 lg:pb-20">
            <H1 className="vnk-headline title">
              <FormattedMessage {...messages.myBanner2Title} />
            </H1>
            <p className="vnk-paragraph ">
              <FormattedMessage {...messages.myBanner2Msg} />
            </p>
            <H1 className="vnk-headline title">
              <FormattedMessage {...messages.myProjectSaveTime} />
            </H1>
            <p className="vnk-paragraph ">
              <FormattedMessage {...messages.myBanner2DownApp} />
            </p>
          </div>
          <Row className="-mt-10" gutter={{ lg: 20, md: 10, sm: 10, xs: 10 }}>
            <Col className="text-center" xs={12} sm={12}>
              <a
                className="mb-5 inline-block border border-white leading-[0px] rounded-lg overflow-hidden"
                target="_black"
                href="https://itunes.apple.com/us/app/my-project/id1442049236?mt=8"
              >
                <img
                  src={require('../../assets/images/app-store.png')}
                  alt="App-store App My Project"
                />
              </a>
              <BackgroudQRCode
                image={require('../../assets/images/globe/appstore-qrcode.jpg')}
              />
            </Col>
            <Col className="text-center" xs={12} sm={12}>
              <a
                className="mb-5 inline-block border border-white leading-[0px] rounded-lg overflow-hidden"
                target="_black"
                href="https://play.google.com/store/apps/details?id=vn.com.vnk.myp&hl=vi"
              >
                <img
                  src={require('../../assets/images/ch-play.png')}
                  alt="App-store App My Project"
                />
              </a>
              <BackgroudQRCode
                image={require('../../assets/images/globe/android-qrcode.jpg')}
              />
            </Col>
          </Row>
        </FooterTopLeft>
        <AlignItemEnd className="!hidden xl:!flex" xl={4}>
          <img
            className="img-responsive"
            src={require('../../assets/images/globe/footer-top1.png')}
            alt="images"
          />
        </AlignItemEnd>
        <FooterTopRight md={24} lg={24} xl={12} className="text-center">
          <img
            className="img-responsive mx-auto"
            src={require('../../assets/images/globe/footer-top2.png')}
            alt="images"
          />
        </FooterTopRight>
        <Col lg={12} xl={12} sm={24} className="mb-10 xl:mb-0">
          <Row>
            <Chairman xl={8} lg={8} sm={8}>
              <Profile
                bordered={false}
                hoverable
                style={{ width: 190 }}
                cover={
                  <img
                    alt="example"
                    src={require('../../assets/images/home/chairman.jpg')}
                  />
                }
              >
                <Meta title="Ninh Việt Tú" description="Chair man" />
              </Profile>
            </Chairman>
            <FooterMypRight xl={16} lg={16} sm={16}>
              <img
                className="hidden sm:inline-block"
                width={150}
                alt="logo"
                src={require('../../assets/images/logo/my-project.png')}
              />
              <p className="mb-2">
                <span className="sp-title">
                  <FormattedMessage {...messages.footerService} />
                </span>
              </p>
              <p className="mb-1 dot-span">
                <FormattedMessage {...messages.footerServiceAcademy} />
              </p>
              <p className="mb-1 dot-span">
                <FormattedMessage {...messages.footerServiceShare} />
              </p>
              <p className="mb-1 dot-span">
                <FormattedMessage {...messages.footerServiceInvite} />
              </p>
              <p className="dot-span">
                <FormattedMessage {...messages.footerServiceProvided} />
              </p>
            </FooterMypRight>
          </Row>
        </Col>
        <Col lg={24} xl={12} sm={24} xs={24}>
          <Row>
            <Support lg={10} sm={8} xs={24}>
              <Card
                bordered={false}
                className="[&_img]:w-10 [&_img]:mr-1 [&_p]:mb-4"
              >
                <FooterSupport>
                  <Link to={ROUTE.POLICY}>
                    <img src={iconFeature1} alt="images" />
                    &nbsp;
                    <FormattedMessage {...messages.footerPolicy} />
                  </Link>
                </FooterSupport>
                <FooterSupport>
                  <Link to={ROUTE.PROVISION}>
                    <img src={iconFeature2} alt="images" />
                    &nbsp;
                    <FormattedMessage {...messages.footerProvision} />
                  </Link>
                </FooterSupport>
                <FooterSupport>
                  <Link to={ROUTE.SOLUTION}>
                    <img src={iconFeature5} alt="images" />
                    &nbsp;
                    <FormattedMessage {...messages.footerSolution} />
                  </Link>
                </FooterSupport>
                <FooterSupport>
                  <Link to={ROUTE.PRICE}>
                    <img src={iconFeature4} alt="images" />
                    &nbsp;
                    <FormattedMessage {...messages.footerPriceList} />
                  </Link>
                </FooterSupport>
              </Card>
            </Support>
            <Col lg={14} md={8} sm={8} xs={24}>
              <VnkAdress className="[&_img]:w-10 [&_img]:mr-1 [&_p]:mb-4">
                <Meta
                  description={
                    <>
                      <p>
                        <img src={iconFeature6} alt="images" />
                        &ensp;
                        <span>
                          <FormattedMessage {...messages.address} />
                        </span>
                      </p>
                      <p>
                        <img src={iconFeature7} alt="images" />
                        &ensp;
                        <span>
                          <a href="tel: 02437373366">024.3737.3366</a>
                        </span>
                      </p>
                      <p>
                        <img src={iconFeature3} alt="images" />
                        &ensp;
                        <span>
                          <a
                            className="!text-[#00BCFF]"
                            href="mailto: admin@myp.vn"
                          >
                            admin@myp.vn
                          </a>
                        </span>
                      </p>
                      <p>
                        <img src={iconFeature8} alt="images" />
                        &ensp;
                        <span>
                          <b>0108764036</b>&ensp; (
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
                <ChatNow />
              </VnkAdress>
            </Col>
            <Support lg={24} md={6} sm={8} xs={24}>
              <Card bordered={false}>
                <p className="mb-2">
                  <span className="sp-title">
                    <FormattedMessage {...messages.footerSupport} />
                  </span>
                </p>
                <p className="mb-1 dot-span">
                  <span>Hotline: 024.3737.3366</span>
                </p>
                <p
                  className="dot-span"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <span>Email: admin@myp.vn</span>
                </p>
              </Card>
            </Support>
          </Row>
        </Col>
      </Info>
      <Copyright>
        <img
          className="bg-footer"
          alt="example"
          src={require('../../assets/images/globe/bg-footer.jpg')}
        />
        <FontMd>
          <FormattedMessage {...messages.footerMsg1} />
        </FontMd>
        <FontLg>
          <FormattedMessage {...messages.footerCopyright} />
        </FontLg>
      </Copyright>
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
  .img-responsive {
    max-width: 100%;
  }
  .sp-title {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
  }
`;

const FooterTopRight = styled(Col)`
  padding-bottom: 50px;
  @media (max-width: 767px) {
    padding-bottom: 20px;
  }
`;

const AlignItemEnd = styled(Col)`
  display: flex !important;
  align-items: flex-end;
`;

const BackgroudQRCode = styled.div`
  background-image: url(${props => props.image});
  float: ${props => props.float || ''};
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
  background-attachment: scroll;
  background-origin: content-box;
  height: 186.438px;
  width: 188.684px;
  margin: auto;
  @media (max-width: 767px) {
    height: 120px;
    width: 122px;
  }
`;

const Support = styled(Col)`
  .ant-card-body {
    padding-top: 0;
    padding-bottom: 0;
    @media screen and (max-width: 767px) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
  .vnk-download-app {
    width: 153px;
    height: 45px;
  }
  .ant-card {
    background: none;
    color: #ffffff;
  }
`;

const VnkAdress = styled(Card)`
  position: absolute;
  background: none !important;
  border: none !important;
  color: #fff !important;
  .ant-card-body {
    padding-top: 0;
    padding-bottom: 0;
  }
  @media screen and (max-width: 767px) {
    height: auto;
    .ant-card-body {
      padding: 0;
    }
  }
  .ant-avatar {
    width: 150px;
    height: 150px;
    border-radius: initial;
  }

  .ant-card-meta-detail {
    .ant-card-meta-description {
      p {
        display: flex;
        align-items: center;
      }
      span {
        color: #fff;
        font-weight: 400;
        svg {
          font-size: 18px;
        }
        a {
          color: #fff;
        }
      }
    }
  }
`;

const FooterTopLeft = styled(Col)`
  padding-bottom: 50px;
  .app-mobile {
    position: absolute;
    width: 90%;
  }
  .vnk-headline {
    color: #fff;
    font-weight: 700;
    margin-bottom: 5px;
  }
  .vnk-paragraph {
    font-size: 26px;
    margin-bottom: 5px;
  }
  .relative {
    background-color: rgba(184, 33, 40, 0.69);
    position: relative;
    text-align: center;
    border-radius: 20px;
  }
  @media (max-width: 767px) {
    padding-bottom: 30px;
  }
`;

const FooterMypRight = styled(Col)`
  text-align: right;
  padding-right: 60px;
  margin-top: -9px;
  @media (max-width: 767px) {
    text-align: left;
    padding-right: 0px;
    margin-top: 0px;
  }
`;

const Chairman = styled(Col)`
  padding-top: 100px;
  .ant-card-meta-detail {
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    padding-top: 0px;
    margin: auto;
    .ant-card {
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }
`;

const Info = styled(Row)`
  background-image: url(${bgFooter2});
  background-size: cover;
  padding: 60px 100px 50px;
  @media (max-width: 1600px) {
    padding: 50px 20px;
  }
`;

const Profile = styled(Card)`
  background: none !important;
  box-shadow: none !important;
  .ant-card-body {
    padding: 15px 0 0;
  }
  .ant-card-meta-detail * {
    color: #fff;
  }
  .ant-card-meta-detail .ant-card-meta-title {
    font-size: 26px;
    font-weight: 700;
  }
  .ant-card-meta-detail .ant-card-meta-description {
    font-size: 16px;
  }
  .ant-card-cover {
    border-radius: 20px;
    overflow: hidden;
  }
`;

const FooterSupport = styled.p`
  font-size: 18px;
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

const FontMd = styled.p`
  span {
    font-size: 29px;
    line-height: 45px;
  }
  margin: 10px 0 70px;
  @media (max-width: 1600px) {
    span {
      font-size: 20px;
      line-height: 28px;
    }
    margin: 20px 0 50px;
  }
  @media (max-width: 767px) {
    padding: 0 10px;
    span {
      font-size: 16px;
      line-height: 22px;
    }
  }
`;

const FontLg = styled.p`
  font-size: 32px;
  line-height: 36px;
  font-weight: 700;
  @media (max-width: 1600px) {
    font-size: 24px;
    line-height: 28px;
  }
  @media (max-width: 767px) {
    padding: 0 10px;
    font-size: 16px;
    line-height: 22px;
  }
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
  text-align: center;
  align-items: center;
  border-top: 1px solid #fff;
  position: relative;
  overflow: hidden;
  height: 265px;
  border-top: 1px solid red;
  p {
    z-index: 1;
    max-width: 1634px;
    margin-left: auto;
    margin-right: auto;
  }
  .bg-footer {
    object-fit: cover;
    width: 100%;
    height: 265px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
  }
  .vnk-iso {
    width: 170px;
    height: 64px;
  }
  @media (max-width: 1600px) {
    height: 220px;
    .bg-footer {
      height: 220px;
    }
    p {
      max-width: 1280px;
    }
  }
`;

export default Footer;
