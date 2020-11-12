/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H1 from 'components/H1';
import H3 from 'components/H3';
import { Row, Col } from 'antd';
import {
  CaretRightFilled,
  FileTextFilled,
  DribbbleSquareOutlined,
} from '@ant-design/icons';
import CenteredSection from './CenteredSection';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import homeApp from '../../assets/images/home-app.jpg';
import appStore from '../../assets/images/app-store.png';
import chPlay from '../../assets/images/ch-play.png';
import info from '../../assets/images/feature/info.png';
import next from '../../assets/images/feature/next.png';
import scale from '../../assets/images/feature/scale.png';
import statchart from '../../assets/images/feature/statschart.png';
import successReport from '../../assets/images/feature/success-report.png';
import teacherIcon from '../../assets/images/feature/teacher-icon.png';
import kpi from '../../assets/images/feature/kpi.jpg';
import './styles.less';

const key = 'home';

export function HomePage({ username, onSubmitForm }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

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
                  <img src={appStore} alt="App-store App My Project" />
                </Col>
                <Col sm={24} lg={12}>
                  <img src={chPlay} alt="CH-play App My Project" />
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

        <Row className="page3 pd-tb myp-feature">
          <Col sm={24} lg={10}>
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
          <Col sm={24} lg={14}>
            <Row>
              <Col className="highlights">
                <H1 className="vnk-headline">Tính năng nổi bật</H1>
                <hr className="vnk-line hr-feature" />
              </Col>
            </Row>
            <Row>
              <Col sm={24} lg={12} className="flex">
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
        </Row>

        <Row className="interface">
          <Col sm={24} lg={10} />
        </Row>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
