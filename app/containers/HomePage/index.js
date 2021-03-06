/* eslint-disable global-require */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import H1 from 'components/H1';
import H3 from 'components/H3';
import { Row, Col } from 'antd';
import {
  CaretRightFilled,
  FileTextFilled,
  DribbbleSquareOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import CenteredSection from './CenteredSection';
import homeApp from '../../assets/images/home-app.jpg';
import info from '../../assets/images/feature/info.png';
import next from '../../assets/images/feature/next.png';
import scale from '../../assets/images/feature/scale.png';
import statchart from '../../assets/images/feature/statschart.png';
import successReport from '../../assets/images/feature/success-report.png';
import teacherIcon from '../../assets/images/feature/teacher-icon.png';
import kpi from '../../assets/images/feature/kpi.jpg';
import './styles.less';

export function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Trang Chủ</title>
        <meta name="description" content="Trang Chủ" />
      </Helmet>
      <div className="vnk-homepage">
        <CenteredSection>
          <H1 className="vnk-headline">
            KHÔNG CHỈ LÀ CẬP NHẬT THÔNG TIN DỰ ÁN
          </H1>

          <hr className="vnk-line" />
        </CenteredSection>

        <Row className="page1">
          <Col sm={24} lg={12}>
            <CenteredSection>
              <img
                // width={280}
                height={450}
                src={homeApp}
                alt="App My Project"
              />
            </CenteredSection>
          </Col>
          <Col sm={24} lg={12}>
            <H3 className="box-title">
              Các dự án đang theo dõi được lưu vào Trang chủ
            </H3>
            <p className="vnk-paragraph">
              Tất cả các thông tin dự án bạn đang quan tâm bao gồm cả trạng
              thái, tiến trình ra sao sẽ được truy cập một cách đơn giản trên
              Trang chủ
            </p>
            <p className="vnk-paragraph">
              <CaretRightFilled />
              Việc thêm dự án mới rất thuận tiện vì được ưu tiên.
            </p>
            <p className="vnk-paragraph">
              <CaretRightFilled />
              Thêm các công ty mới cũng thuận tiện không kém.
            </p>
            <p className="vnk-paragraph">
              <CaretRightFilled />
              Tiến trình làm việc của dự án được nêu bật
            </p>
            <p className="vnk-paragraph">
              <CaretRightFilled />
              Bổ sung dễ dàng nhiệm vụ làm việc
            </p>
            <p className="vnk-paragraph">
              <CaretRightFilled />
              Thanh tìm kiếm giúp bạn tiết kiệm thời gian.
            </p>
          </Col>
        </Row>

        <div className="page2">
          <Row className="content">
            <Col sm={24} lg={12} className="myp-software">
              <H1 className="vnk-headline title ">Phần Mềm My Project</H1>
              <p className="vnk-paragraph ">
                Tiết kiệm thời gian và gia tăng số lượng dự án cho bạn!
              </p>
              <p className="vnk-paragraph ">"Save Time More Project"</p>
              <p className="vnk-paragraph ">
                Tải App My Project trên kho ứng dụng
              </p>
              <Row className="app-mobile">
                <Col sm={24} lg={12}>
                  <a
                    target="_black"
                    href="https://itunes.apple.com/us/app/my-project/id1442049236?mt=8"
                  >
                    <img
                      src={require('../../assets/images/app-store.png')}
                      alt="App-store App My Project"
                    />
                  </a>
                </Col>
                <Col sm={24} lg={12}>
                  <a
                    target="_black"
                    href="https://play.google.com/store/apps/details?id=vn.com.vnk.myp&hl=vi"
                  >
                    <img
                      src={require('../../assets/images/ch-play.png')}
                      alt="App-store App My Project"
                    />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm={24} lg={12} className="ipApp">
              <div className="app-bg" />
              {/* <img
                className="ipApp"
                width={550}
                height={600}
                src={ipApp}
                alt="App My Project"
              /> */}
            </Col>
          </Row>
        </div>

        <Container className="myp-feature">
          <Col sm={12} lg={10}>
            <CenteredSection>
              <img
                // width={280}
                height={450}
                style={{ marginTop: '10px' }}
                src={kpi}
                alt="App My Project"
              />
            </CenteredSection>
          </Col>
          <Col sm={12} lg={14}>
            <Row>
              <Col className="highlights">
                <H1 className="vnk-headline">Tính năng nổi bật</H1>
                <hr className="vnk-line hr-feature" />
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={12} className="flex">
                <img width={78} height={78} src={next} alt="progess" />
                <div className="pd-r">
                  <H3 className="feature-title">1. Quy trình</H3>
                  <span className="vnk-paragraph feature">
                    Nó sẽ giúp bạn có được một quy trình bán hàng dự án hiệu
                    quả!
                  </span>
                </div>
              </Col>
              <Col sm={24} lg={12} className="flex">
                <img width={78} height={78} src={statchart} alt="statchart" />
                <div className="pd-r">
                  <H3 className="feature-title">5. Đo KPI</H3>
                  <span className="vnk-paragraph feature">
                    Nó sẽ giúp bạn biết được hôm nay mình có được thu nhập bao
                    nhiêu.
                  </span>
                </div>
              </Col>
              <Col sm={24} lg={12} className="flex">
                <img width={78} height={78} src={scale} alt="statchart" />
                <div className="pd-r">
                  <H3 className="feature-title">2. Đo Lường</H3>
                  <span className="vnk-paragraph feature">
                    Nó sẽ giúp bạn biết được hôm nay mình có được thu nhập bao
                    nhiêu.
                  </span>
                </div>
              </Col>
              <Col sm={24} lg={12} className="flex">
                <img width={78} height={78} src={teacherIcon} alt="statchart" />
                <div className="pd-r">
                  <H3 className="feature-title">6. Giao việc</H3>
                  <span className="vnk-paragraph feature">
                    Nó sẽ giúp bạn giao việc được cho đội nhóm của mình.
                  </span>
                </div>
              </Col>
              <Col sm={24} lg={12} className="flex">
                <FileTextFilled />
                <div className="pd-r">
                  <H3 className="feature-title">3. Công việc</H3>
                  <span className="vnk-paragraph feature">
                    Nó sẽ giúp bạn quản lý được các công việc bản thân phải làm.
                  </span>
                </div>
              </Col>
              <Col sm={24} lg={12} className="flex">
                <DribbbleSquareOutlined />
                <div className="pd-r">
                  <H3 className="feature-title">7. Quảng Bá</H3>
                  <span className="vnk-paragraph feature">
                    Nó sẽ giúp bạn quảng bá được thông tin công ty của các bạn.
                  </span>
                </div>
              </Col>
              <Col sm={24} lg={12} className="flex">
                <img width={78} height={78} src={info} alt="statchart" />
                <div className="pd-r">
                  <H3 className="feature-title">5. Thông tin</H3>
                  <span className="vnk-paragraph feature">
                    Nó sẽ giúp bạn có được thông tin các dự án mà không phải tốn
                    công sức.
                  </span>
                </div>
              </Col>
              <Col sm={24} lg={12} className="flex">
                <img
                  width={78}
                  height={78}
                  src={successReport}
                  alt="statchart"
                />
                <div className="pd-r">
                  <H3 className="feature-title">8. Doanh số</H3>
                  <span className="vnk-paragraph feature">
                    Nó sẽ giúp bạn dự đoán và gia tăng thu nhập khi sử dụng.
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Container>

        <Container>
          <Col xs={24} md={12} lg={24} className="highlights">
            <HeadLine>GIAO DIỆN TIẾNG VIỆT THÂN THIỆN</HeadLine>
            <hr className="vnk-line hr-feature" />
          </Col>
          <Col lg={6} xs={24}>
            <BackgroudImg
              image={require('../../assets/images/home/register.jpg')}
            />
          </Col>
          <Col lg={6} xs={24}>
            <BackgroudImg
              image={require('../../assets/images/home/home-page.jpg')}
            />
          </Col>
          <Col lg={6} xs={24}>
            <BackgroudImg image={require('../../assets/images/home/kpi.jpg')} />
          </Col>
          <Col lg={6} xs={24}>
            <BackgroudImg
              image={require('../../assets/images/home/report.jpg')}
            />
          </Col>
        </Container>

        <Row>
          <Col lg={24} className="highlights">
            <HeadLine>TRẢI NGHIỆM ỨNG DỤNG</HeadLine>
            <hr className="vnk-line hr-feature" />
            <LadiParagraph>
              Hãy click hoặc quét mã QR xuống các biểu tượng dưới đây để tải ứng
              dụng My Project về điện thoại của bạn!
            </LadiParagraph>
          </Col>
          <Col lg={12}>
            <BackgroudQRCode
              float="right"
              image={require('../../assets/images/home/appstore-qrcode.jpg')}
            />
          </Col>
          <Col lg={12}>
            <BackgroudQRCode
              image={require('../../assets/images/home/android-qrcode.png')}
            />
          </Col>
          <Col lg={12}>
            <ImgDownload float="right">
              <a
                target="_black"
                href="https://itunes.apple.com/us/app/my-project/id1442049236?mt=8"
              >
                <img
                  src={require('../../assets/images/app-store.png')}
                  alt="App-store App My Project"
                />
              </a>
            </ImgDownload>
          </Col>
          <Col lg={12}>
            <ImgDownload>
              <a
                target="_black"
                href="https://play.google.com/store/apps/details?id=vn.com.vnk.myp&hl=vi"
              >
                <img
                  src={require('../../assets/images/ch-play.png')}
                  alt="Chplay App My Project"
                />
              </a>
            </ImgDownload>
          </Col>

          <MessengerCustomerChat
            pageId="718183361653935"
            appId="814098585836431"
          />
        </Row>
      </div>
    </div>
  );
}

const Container = styled(Row)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 0;
  @media screen and (max-width: 767px) {
    width: auto;
  }
`;

const ImgDownload = styled.div`
  float: ${props => props.float || ''};
  margin: 0px 30px 30px 30px;
  @media screen and (max-width: 767px) {
    margin: 0px 30px 30px 90px;
  }
`;

const HeadLine = styled(H1)`
  font-family: 'Open Sans', sans-serif;
  color: rgb(33, 33, 33);
  font-size: 24px;
  letter-spacing: 2px;
  line-height: 1.2;
  text-align: center;
`;

const LadiParagraph = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: rgb(89, 89, 89);
  font-size: 18px;
  margin: 30px auto;
  line-height: 1.6;
  width: 470px;
  @media screen and (max-width: 767px) {
    width: 370px;
    font-size: 15px;
    text-align: center;
  }
`;

const BackgroudImg = styled.div`
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 1);
  background-size: cover;
  background-attachment: scroll;
  background-origin: content-box;
  background-image: url(${props => props.image});
  background-position: center top;
  background-repeat: no-repeat;
  border-style: dashed;
  border-color: rgb(0, 0, 0);
  border-width: 0px;
  border-radius: 10px;
  height: 539px;
  width: 305px;
  margin: 30px 0px;
  @media screen and (max-width: 767px) {
    height: 460px;
    margin: 15px auto;
  }
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
  margin: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

// HomePage.propTypes = {
//   onSubmitForm: PropTypes.func,
//   username: PropTypes.string,
// };

// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
//     onSubmitForm: evt => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//   };
// }

const withConnect = connect(
  null,
  null,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
