/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * ProjectPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import moment from 'moment';
import { get as _get } from 'lodash';
import { Row, Col, Tabs, Button, message } from 'antd';
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
import { Contact, ContactModal } from 'components/Projects/Contact';
import H2 from 'components/H2';
import styled from 'styled-components';
import { makeSelectSuccessMsg, makeSelectProjects } from './selectors';
import { addProjectContact, loadProjectDetails } from './actions';
import reducer from './reducer';
import saga from './saga';
import './styles.less';
import { ENUMS, ROUTE } from '../../../constants';
import messages from './messages';

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

const StyledStatusIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 126px;
  padding: 5px;
  background: ${props => props['status-color']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  @media only screen and (max-width: 768px) {
    width: 90px;
    height: 90px;
  }

  span {
    font-size: 16px;
    line-height: 38px;
    color: #131313;
    font-weight: bold;
    text-align: center;
  }
`;

let mobileScreen;
enquireScreen(b => {
  mobileScreen = b;
});

export function ProjectDetails({
  history,
  data,
  currentPage,
  successResponse,
  addContactProject,
  fetchProject,
  projectByID,
  intl,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [isMobile, setIsMobile] = useState(mobileScreen);
  const [visible, setVisible] = useState(false);
  const [projectDetails, setProjectDetails] = useState([]);

  const { projectID, follow } = useParams();

  useEffect(() => {
    enquireScreen(b => {
      setIsMobile({
        isMobile: !!b,
      });
    });
  }, []);

  useEffect(() => {
    fetchProject({ projectID, follow });
    if (Object.keys(projectDetails).length > 0) {
      setProjectDetails(projectByID);
    }
  }, []);

  useEffect(() => {
    if (successResponse.location === 'ADD_CONTACT_PROJECT') {
      message.success(
        intl.formatMessage({
          ...messages.myProjAddContactSuccess,
        }),
      );

      history.replace({
        ...history.location,
        state: { data: projectDetails },
      });
    }

    if (successResponse.location === 'ADD_NOTE') {
      message.success(
        intl.formatMessage({
          ...messages.myProjAddNoteSuccess,
        }),
      );
      history.replace({
        ...history.location,
        state: { data: projectDetails },
      });
    }
  }, [successResponse, projectDetails]);

  const changeStatus = project => {
    history.push(ROUTE.PROCEDURE, {
      data: project,
    });
  };

  const onCreate = formValues => {
    const { contacts } = projectByID;

    const contact = {
      ...formValues,
      company_id: '',
      contact_index: contacts ? contacts.length : 0,
    };

    const newContacts = contacts ? contacts.concat(contact) : [contact];

    const project = { ...projectByID, contacts: newContacts };
    addContactProject({ project, location: 'ADD_CONTACT_PROJECT' });
    setProjectDetails(project);
    setVisible(false);
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
          onClick={() => history.push(ROUTE.PROJECT, { currentPage })}
        >
          <FormattedMessage {...messages.myProjDetailBtnBack} />
        </Button>
        <H2>
          <FormattedMessage {...messages.myProjDetailTitle} />
        </H2>
      </CenteredSectionWithBack>
      {Object.keys(projectByID).length > 0 && (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
          {!isMobile && (
            <Col lg={16} md={16} sm={24} xs={16}>
              <Row>
                <Col className="group-item" lg={24} md={24}>
                  <BoxDetail>
                    <span className="description">
                      <FormattedMessage {...messages.myProjDetailProj} />
                    </span>
                    <p className="project-name">
                      {_get(projectByID, 'name', '')}
                    </p>
                    <span className="description">
                      <span>
                        <FormattedMessage {...messages.myProjDetailUpdate} />
                        &nbsp;
                      </span>
                      <span>
                        {moment(_get(projectByID, 'last_modified', '')).format(
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
                  <HomeTwoTone />{' '}
                  <b>
                    <FormattedMessage {...messages.myProjDetailHome} />
                  </b>
                </div>
                <div className="calendar">
                  <Button
                    className="btn-change-status"
                    type="primary"
                    size="large"
                    disabled={!projectByID.is_follow}
                    onClick={() => changeStatus(projectByID)}
                  >
                    <FormattedMessage {...messages.myProjDetailStatus} />
                  </Button>
                </div>
              </div>
              <StyledStatusIcon
                status-color={
                  _get(ENUMS.STATE_LIST, `[${projectByID.status_code}]`).color
                }
              >
                <span>
                  {_get(ENUMS.STATE_LIST, `[${projectByID.status_code}]`).label}
                </span>
              </StyledStatusIcon>
            </div>
          </Col>
          <Col lg={24} className="menu-tab">
            <Tabs defaultActiveKey="1" type="card" size="small">
              {/* Tab Tổng Quan */}
              <TabPane
                tab={<FormattedMessage {...messages.myProjDetailOverview} />}
                key="1"
              >
                {!isMobile ? (
                  <ProjectDetailsWeb data={projectByID} />
                ) : (
                  <ProjectDetailsMobile data={projectByID} />
                )}
              </TabPane>
              <TabPane
                tab={<FormattedMessage {...messages.myProjDetailContact} />}
                key="2"
              >
                <Contact data={projectByID} setVisible={setVisible} />
              </TabPane>
              {projectByID.is_follow && (
                <TabPane
                  tab={<FormattedMessage {...messages.myProjDetailNote} />}
                  key="3"
                >
                  <DynamicForm
                    data={projectByID}
                    addContactProject={addContactProject}
                    setProjectDetails={setProjectDetails}
                  />
                </TabPane>
              )}
              {/* <TabPane
              tab={<FormattedMessage {...messages.myProjDetailAssign} />}
              key="4"
            >
              Đang cập nhật...
            </TabPane> */}
            </Tabs>
          </Col>
        </Row>
      )}
      <ContactModal
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </Details>
  );
}

ProjectDetails.propTypes = {
  successResponse: PropTypes.object,
  projectByID: PropTypes.object,
  history: PropTypes.object,
  data: PropTypes.object,
  currentPage: PropTypes.string,
  addContactProject: PropTypes.func,
  fetchProject: PropTypes.func,
  intl: intlShape.required,
};

const mapStateToProps = createStructuredSelector({
  successResponse: makeSelectSuccessMsg(),
  projectByID: makeSelectProjects(),
});

export function mapDispatchToProps(dispatch) {
  return {
    addContactProject: data => dispatch(addProjectContact(data)),
    fetchProject: data => dispatch(loadProjectDetails(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(injectIntl(ProjectDetails)));
