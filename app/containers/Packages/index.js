/*
 * PackagePage
 *
 * List all the packages
 */
import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { Helmet } from 'react-helmet';
import CenteredSection from 'components/CenteredSection';
import CarouselSlide from 'components/Carousel';
import H1 from 'components/H1';
import './styles.less';
import packageStandard from '../../assets/images/package-standard.png';
import packageEnterprise from '../../assets/images/package-enterprise.png';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Packages</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      {/* <CenteredSection>
        <H1 className="welcome-back">Bảng Giá</H1>
      </CenteredSection> */}

      <div className="list-packages">
        <Row gutter={16}>
          <Col md={8} sm={24}>
            <Card
              title={
                <div className="package-header">
                  <p className="package-title">Gói Basic</p>
                  <div className="package-price">
                    <span>2,000,000 / Năm</span>
                  </div>
                </div>
              }
              cover={<img alt="Package Basic" src={packageStandard} />}
            >
              <Button className="btn-buy" type="primary">
                Chọn Mua
              </Button>
            </Card>
          </Col>
          <Col md={8} sm={24}>
            <Card
              title={
                <div className="package-header">
                  <p className="package-title">Gói Standard</p>
                  <div className="package-price">
                    <span>2,000,000 / Năm</span>
                  </div>
                </div>
              }
              cover={<img alt="Package Standard" src={packageStandard} />}
            >
              <Button className="btn-buy" type="primary">
                Chọn Mua
              </Button>
            </Card>
          </Col>
          <Col md={8} sm={24}>
            <Card
              title={
                <div className="package-header">
                  <p className="package-title">Gói Enterprise</p>
                  <div className="package-price">
                    <span>2,000,000 / Năm</span>
                  </div>
                </div>
              }
              cover={<img alt="Package Basic" src={packageEnterprise} />}
            >
              <Button className="btn-buy" type="primary">
                Chọn Mua
              </Button>
            </Card>
          </Col>
        </Row>

        <CarouselSlide />
      </div>
    </div>
  );
}
