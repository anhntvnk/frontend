/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import { Row, Col } from 'antd';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { makeSelectUserProfille } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import bgHomeFeature from '../../assets/images/home/home-feature.jpg';
import imageFeature1 from '../../assets/images/home/home-feature-image1.png';
import imageFeature2 from '../../assets/images/home/home-feature-image2.jpg';
import iconFeature1 from '../../assets/images/globe/icon-feature1.png';
import iconFeature2 from '../../assets/images/globe/icon-feature2.png';
import iconFeature3 from '../../assets/images/globe/icon-feature3.png';
import iconFeature4 from '../../assets/images/globe/icon-feature4.png';
import iconFeature5 from '../../assets/images/globe/icon-feature5.png';
import './styles.less';
import { loadUserProfile } from './actions';
import HomeChart from './HomeChart';
import ProjectTable from './ProjectTable';
import TopProjectsTable from './TopProjectsTable';
import NewProjectsTable from './NewProjectsTable';
import HomeChartLine from './HomeChartLine.js';
import CountryMap from './CountryMap.js';
import HomeCount from './HomeCount.js';

const key = 'home';
// eslint-disable-next-line react/prop-types
export function HomePage({ userProfile, onLoadUserProfile, intl }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // const [visible, setVisible] = React.useState(false);
  // const [orderPackage, setOrderPackage] = React.useState({});
  // const [edit, setEdit] = React.useState(false);
  // const [alert, setAlert] = React.useState(false);

  useEffect(() => {
    onLoadUserProfile();
  }, []);

  const openModal = (item, isEdit) => {
    // setVisible(true);
    // setOrderPackage(item);
    // setEdit(isEdit);
  };

  return (
    <div>
      <Helmet>
        <title>
          {intl.formatMessage({
            ...messages.mypIntroduceHome,
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            ...messages.mypIntroduceHome,
          })}
        />
      </Helmet>
      <HomeCount />
      <div className="bg-[#1b1d21] p-[20px] pt-[0px]">
        <div className="lg:grid lg:grid-cols-3 gap-[20px]">
          <div className="lg:col-span-2 bg-[#212529] p-[20px] rounded-[4px]">
            <HomeChartLine />
          </div>
          <div className="lg:col-span-1 bg-[#212529] rounded-[4px]">
            <CountryMap />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-[20px] mt-[20px] mb-[30px]">
          <div className="grid col-span-1 bg-[#212529] rounded-[4px] overflow-x-auto">
            <NewProjectsTable />
          </div>
          <div className="grid col-span-1 bg-[#212529] rounded-[4px] overflow-x-auto">
            <TopProjectsTable />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-[20px]">
          <div className="grid col-span-1 bg-[#212529] rounded-[4px]">
            <HomeChart />
          </div>
          <div className="grid lg:col-span-2 bg-[#212529] rounded-[4px]">
            <ProjectTable />
          </div>
        </div>
      </div>
      <div className="vnk-homepage">
        <HomeFeature>
          <div className="grid xl:grid-cols-2 bg-cover px-[10px] py-0 md:py-[50px] gap-[20px] lg:gap-[50px]">
            <div className="col-span-1 xl:text-right">
              <h2 className="uppercase font-bold text-[28px] lg:text-[36px] text-[#fff] mb-5">
                <FormattedMessage {...messages.myFunction} />
              </h2>
              <img
                src={imageFeature1}
                className="mr-[10px] md:mr-[20px] 2xl:max-w-full xl:max-w-[360px] max-w-[63%]"
                alt="images"
              />
              <img
                src={imageFeature2}
                alt="images"
                className="2xl:max-w-full xl:max-w-[200px] max-w-[calc(37%-10px)]"
              />
            </div>
            <div className="col-span-1 xl:max-w-[680px] bg-[#8A232CB0] rounded-xl text-[#ccc] [&_b]:text-[#fff] gap-x-3 p-5 gap-y-2 grid md:grid-cols-2 text-[16px] xl:text-[20px] [&_p]:!m-0 [&_img]:w-[40px] [&_span]:pt-[8px]">
              <div className="grid grid-cols-[40px_1fr] gap-x-[13px]">
                <span>
                  <img src={iconFeature1} alt="images" />
                </span>
                <div>
                  <b>
                    <FormattedMessage {...messages.myFunctionSubTitle1} />
                  </b>
                  <br />
                  <FormattedMessage {...messages.myFunctionMsg1} />
                </div>
              </div>
              <div className="grid grid-cols-[40px_1fr] gap-x-[13px]">
                <span>
                  <img src={iconFeature2} alt="images" />
                </span>
                <div>
                  <b>
                    <FormattedMessage {...messages.myFunctionSubTitle2} />
                  </b>
                  <br />
                  <FormattedMessage {...messages.myFunctionMsg2} />
                </div>
              </div>
              <div className="grid grid-cols-[40px_1fr] gap-x-[13px]">
                <span>
                  <img src={iconFeature3} alt="images" />
                </span>
                <div>
                  <b>
                    <FormattedMessage {...messages.myFunctionSubTitle3} />
                  </b>
                  <br />
                  <FormattedMessage {...messages.myFunctionMsg3} />
                </div>
              </div>
              <div className="grid grid-cols-[40px_1fr] gap-x-[13px]">
                <span>
                  <img src={iconFeature4} alt="images" />
                </span>
                <div>
                  <b>
                    <FormattedMessage {...messages.myFunctionSubTitle4} />
                  </b>
                  <br />
                  <FormattedMessage {...messages.myFunctionMsg4} />
                </div>
              </div>
              <div className="grid grid-cols-[40px_1fr] gap-x-[13px]">
                <span>
                  <img src={iconFeature2} alt="images" />
                </span>
                <div>
                  <b>
                    <FormattedMessage {...messages.myFunctionSubTitle5} />
                  </b>
                  <br />
                  <FormattedMessage {...messages.myFunctionMsg5} />
                </div>
              </div>
              <div className="grid grid-cols-[40px_1fr] gap-x-[13px]">
                <span>
                  <img src={iconFeature2} alt="images" />
                </span>
                <div>
                  <b>
                    <FormattedMessage {...messages.myFunctionSubTitle6} />
                  </b>
                  <br />
                  <FormattedMessage {...messages.myFunctionMsg6} />
                </div>
              </div>
              <div className="grid grid-cols-[40px_1fr] gap-x-[13px]">
                <span>
                  <img src={iconFeature5} alt="images" />
                </span>
                <div>
                  <b>
                    <FormattedMessage {...messages.myFunctionSubTitle7} />
                  </b>
                  <br />
                  <FormattedMessage {...messages.myFunctionMsg7} />
                </div>
              </div>
              <div className="grid grid-cols-[40px_1fr] gap-x-[13px]">
                <span>
                  <img src={iconFeature4} alt="images" />
                </span>
                <div>
                  <b>
                    <FormattedMessage {...messages.myFunctionSubTitle8} />
                  </b>
                  <br />
                  <FormattedMessage {...messages.myFunctionMsg8} />
                </div>
              </div>
            </div>
          </div>
        </HomeFeature>
      </div>
    </div>
  );
}

const HomeFeature = styled.section`
  background-image: url(${bgHomeFeature});
  background-size: cover;
  padding: 50px 10px;
`;

const Blog = styled(Col)`
  font-size: 16px;
  margin-bottom: 50px;
  margin-top: 50px;
  a {
    margin: auto;
    display: grid;
    padding: 0 50px;
    width: 300px;
  }

  p {
    margin-top: 20px;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

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

HomePage.prototype = {
  intl: intlShape.isRequired,
  userProfile: PropTypes.any,
  onLoadUserProfile: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userProfile: makeSelectUserProfille(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadUserProfile: () => dispatch(loadUserProfile()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(injectIntl(HomePage));
