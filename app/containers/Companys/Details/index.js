/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * Company Details
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
import { Row, Col, Button } from 'antd';
import { ArrowLeftOutlined, FormOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { enquireScreen } from 'enquire-js';
import { FormattedMessage } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import CompanyDetailsMobile from 'components/Company/DetailsMobile';
import CenteredSectionWithBack from 'components/CenteredSectionWithBack';
import H2 from 'components/H2';
import styled from 'styled-components';
import { makeSelectProjects } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.less';
import logo from '../../../assets/images/logo/my-project.png';
import messages from '../../../components/SearchCompany/messages';
import { ROUTE } from '../../../constants';

const key = 'companyDetails';
const Details = styled.section`
  max-width: 800px;
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
  p {
    color: red;
  }
`;

let mobileScreen;
enquireScreen(b => {
  mobileScreen = b;
});

export function CompanyDetails({ history, data, currentPage, fillter }) {
  console.log(currentPage, 'currentPage');
  console.log(fillter, 'fillter');
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

  return (
    <Details className="company-details">
      <Helmet>
        <title>Chi tiết Công Ty</title>
        <meta name="description" content="Chi tiết Công Ty" />
      </Helmet>
      <CenteredSectionWithBack>
        <Button
          type="primary"
          shape="round"
          icon={<ArrowLeftOutlined />}
          onClick={() => history.push(ROUTE.COMPANY, { currentPage, fillter })}
        >
          <FormattedMessage {...messages.myCompanyDetailBtnBack} />
        </Button>
        <H2>
          <FormattedMessage {...messages.myCompanyDetailTitle} />
        </H2>
      </CenteredSectionWithBack>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 8 }}>
        <Col lg={24} md={24}>
          {_get(data, 'is_follow', '') && (
            <FormOutlined
              onClick={() =>
                history.push(ROUTE.COMPANY_ADDNEW, { isEdit: true, data })
              }
              style={{
                fontSize: '24px',
                color: '#b7252c',
                marginBottom: '10px',
                float: 'right',
              }}
            />
          )}
        </Col>
        {!isMobile && (
          <Col className="group-item" lg={24} md={24}>
            <BoxDetail>
              <span className="description">
                <FormattedMessage {...messages.myCompanySearchName} />:
              </span>
              <p className="company-name">{_get(data, 'name', '')}</p>
              <span className="description">
                <span>
                  <FormattedMessage {...messages.myCompanyDetailFoundation} />
                  &nbsp;
                </span>
                <span>{_get(data, 'date', '')}</span>
              </span>
            </BoxDetail>
          </Col>
        )}

        {!isMobile ? (
          <>
            <Col className="group-item" lg={16} md={24}>
              <BoxDetail>
                {data.contacts && data.contacts.length > 0 && (
                  <span>
                    <span className="description">
                      <FormattedMessage {...messages.myCompanyDetailContact} />
                      &nbsp;
                    </span>
                    {_get(data, 'contacts', '').map(ct => (
                      <>
                        <p className="contact-name">
                          {_get(ct, 'name', '')} ({_get(ct, 'position', '')})
                        </p>
                      </>
                    ))}
                  </span>
                )}
                <span>
                  <span className="description">
                    <FormattedMessage {...messages.myCompanyDetailDirector} />
                    &nbsp;
                  </span>
                  <p>{_get(data, 'manager', '')}</p>
                </span>
                <span>
                  <span className="description">
                    <FormattedMessage
                      {...messages.myCompanyDetailOfficeAddress}
                    />
                    &nbsp;
                  </span>
                  <p>
                    {_get(data, 'office_address', '')}{' '}
                    {_get(data, 'district', '')}
                  </p>
                </span>
                <span>
                  <span className="description">
                    <FormattedMessage {...messages.myCompanyDetailCity} />
                    &nbsp;
                  </span>
                  <p>{_get(data, 'city', '')}</p>
                </span>
              </BoxDetail>
            </Col>
            <Col lg={8} style={{ justifyContent: 'center', display: 'flex' }}>
              <img
                src={_get(data, 'image') || logo}
                width={220}
                height={220}
                alt=""
                className="vnk-logo"
              />
            </Col>
            <Col className="group-item" lg={24}>
              <BoxDetail>
                {_get(data, 'phone', '') && (
                  <span>
                    <span className="description">
                      <FormattedMessage {...messages.myCompanyDetailPhone} />
                      &nbsp;
                    </span>
                    <p>{_get(data, 'phone', '')}</p>
                  </span>
                )}
                {_get(data, 'email', '') && (
                  <span>
                    <span className="description">
                      <FormattedMessage {...messages.myCompanyDetailEmail} />
                      &nbsp;
                    </span>
                    <p>{_get(data, 'email', '')}</p>
                  </span>
                )}
                {_get(data, 'website', '') && (
                  <span>
                    <span className="description">
                      <FormattedMessage {...messages.myCompanyDetailWeb} />
                      &nbsp;
                    </span>
                    <p>{_get(data, 'website', '')}</p>
                  </span>
                )}
                <span>
                  <span className="description">
                    <FormattedMessage {...messages.myCompanyDetailUpdate} />
                    &nbsp;
                  </span>
                  <p>
                    {moment(_get(data, 'latest_update', '')).format(
                      'DD/MM/YYYY',
                    )}
                  </p>
                </span>
                {_get(data, 'note', '') && (
                  <span>
                    <span className="description">
                      <FormattedMessage {...messages.myCompanyDetailProj} />
                      &nbsp;
                    </span>
                    <p>{_get(data, 'note', '')}</p>
                  </span>
                )}
                {_get(data, 'description', '') && (
                  <span>
                    <span className="description">
                      <FormattedMessage {...messages.myCompanyDetailProj} />
                      &nbsp;
                    </span>
                    <p>{_get(data, 'description', '')}</p>
                  </span>
                )}
              </BoxDetail>
            </Col>
          </>
        ) : (
          <CompanyDetailsMobile data={data} />
        )}
      </Row>
    </Details>
  );
}

CompanyDetails.propTypes = {
  history: PropTypes.object,
  data: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  CompanyDetails: makeSelectProjects(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(withRouter(CompanyDetails));
