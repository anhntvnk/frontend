import React from 'react';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';
import H3 from 'components/H3';
import { Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl';
import './styles.less';
import styled from 'styled-components';
import messages from './messages';
import certificate from '../../assets/images/company/certificate.jpg';
import termsBusiness from '../../assets/images/company/terms_of_business.jpg';

export default function Certification() {
  return (
    <StyleCertification>
      <Helmet>
        <title>Thông tin chứng từ Website</title>
        <meta name="description" content="Thông tin chứng từ Website" />
      </Helmet>
      <StyleContent>
        <StyledTitle>MY PROJECT</StyledTitle>
        <Row>
          <StyleCol lg={12}>
            <H3>
              <FormattedMessage {...messages.authorTitle} />
            </H3>
            <img src={certificate} alt="Giấy Chứng nhận quyền tác giả" />
          </StyleCol>
          <StyleCol lg={12}>
            <H3>
              <FormattedMessage {...messages.businessTitle} />
            </H3>
            <img src={termsBusiness} alt="Điều khoản kinh doanh" />
          </StyleCol>
        </Row>
      </StyleContent>
    </StyleCertification>
  );
}

const StyleCertification = styled.div``;
const StyledTitle = styled(H1)`
  text-align: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 767.99px) {
    margin-bottom: 20px;
  }
`;
const StyleContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 0;
  @media screen and (max-width: 767px) {
    width: auto;
  }
`;
const StyleCol = styled(Col)`
  text-align: center;
  img {
    width: 500px;

    @media only screen and (max-width: 767.99px) {
      width: 80%;
      padding-bottom: 40px;
    }
  }
  h3 {
    color: red;
    font-weight: 700;
  }
`;
