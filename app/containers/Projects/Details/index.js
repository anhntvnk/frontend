/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * ProjectPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';
import { get as _get } from 'lodash';
import { Row, Col, Tabs, Button } from 'antd';
import {
  ScheduleTwoTone,
  HomeTwoTone,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { enquireScreen } from 'enquire-js';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import CenteredSectionWithBack from 'components/CenteredSectionWithBack';
import ProjectDetailsMobile from 'components/Projects/DetailsMobile';
import ProjectDetailsWeb from 'components/Projects/DetailsWeb';
import DynamicForm from 'components/Projects/DynamicForm';
import Contact from 'components/Projects/Contact';
import H2 from 'components/H2';
import styled from 'styled-components';
import { makeSelectProjects } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.less';
import { ROUTE } from '../../../constants';

const key = 'projectDetails';
const { TabPane } = Tabs;
const Details = styled.section`
  max-width: 1200px;
  display: block;
  margin: 50px auto;

  @media only screen and (max-width: 767.99px) {
    section {
      margin: auto;
    }
    .status-box {
      margin: 15px auto;
    }
    .project-name {
      order: 2;
      margin: 15px;
    }
    // padding: 20px 10px;
    margin: 20px auto;
  }
`;

const BoxDetail = styled.section`
  dispay: block;
  padding: 20px;
`;

let mobileScreen;
enquireScreen(b => {
  mobileScreen = b;
});

export function ProjectDetails({ history, data }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [isMobile, setIsMobile] = useState(mobileScreen);

  useEffect(() => {
    enquireScreen(b => {
      setIsMobile({
        isMobile: !!b,
      });
    });
  }, []);

  const changeStatus = project => {
    history.push(ROUTE.PROCEDURE, {
      data: project,
    });
  };

  return (
    <Details className="project-details">
      <Helmet>
        <title>Chi tiết dự án</title>
        <meta name="description" content="Chi tiết dự án" />
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
        <H2>Chi tiết Công Ty</H2>
      </CenteredSectionWithBack>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
        {!isMobile && (
          <Col lg={16} md={16} sm={24} xs={16}>
            <Row>
              <Col className="group-item" lg={24} md={24}>
                <BoxDetail>
                  <span className="description">Dự án:</span>
                  <p className="project-name">{_get(data, 'name', '')}</p>
                  <span className="description">
                    <span>Cập nhật mới:&nbsp;</span>
                    <span>
                      {moment(_get(data, 'last_modified', '')).format(
                        'DD/MM/YYYY',
                      )}
                    </span>
                  </span>
                </BoxDetail>
              </Col>
            </Row>
          </Col>
        )}

        <Col className="status-box" lg={8} md={8} sm={24}>
          <div className="status">
            <div className="change-status">
              <div className="calendar">
                <ScheduleTwoTone /> {moment().format('DD/MM/YYYY')}
              </div>
              <div className="calendar">
                <HomeTwoTone /> <b>Việt Nam</b>
              </div>
              <div className="calendar">
                <Button
                  className="btn-change-status"
                  type="primary"
                  size="large"
                  onClick={() => changeStatus(data)}
                >
                  Chuyển trạng thái
                </Button>
              </div>
            </div>
            <div className="status-icon">
              <span>SÀNG LỌC</span>
            </div>
          </div>
        </Col>
        <Col lg={24} className="menu-tab">
          <Tabs defaultActiveKey="1" type="card" size="small">
            {/* Tab Tổng Quan */}
            <TabPane tab="Tổng quan" key="1">
              {!isMobile ? (
                <ProjectDetailsWeb data={data} />
              ) : (
                <ProjectDetailsMobile data={data} />
              )}
            </TabPane>
            <TabPane tab="Người liên hệ" key="2">
              <Contact data={data} />
            </TabPane>
            <TabPane tab="Ghi chú" key="3">
              <DynamicForm data={data} />
            </TabPane>
            <TabPane tab="Giao việc" key="4">
              Giao việc
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </Details>
  );
}

ProjectDetails.propTypes = {
  history: PropTypes.object,
  data: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  projectDetails: makeSelectProjects(),
});

// export function mapDispatchToProps(dispatch) {
//   return {
//     onFetchProjectDetails: projectId => dispatch(loadProjectDetails(projectId)),
//   };
// }

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(withRouter(ProjectDetails));
