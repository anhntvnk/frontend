import React from 'react';
import { Card, Row, Col } from 'antd';

import './styles.less';
import { HomeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import iso from '../../assets/images/vnk-iso.png';
import ios from '../../assets/images/ios.png';
import android from '../../assets/images/android.png';
import chPlay from '../../assets/images/ch-play.png';
import appStore from '../../assets/images/app-store.png';
import seminar from '../../assets/images/seminar.png';
import logo from '../../assets/images/logo/Logo.jpg';

function Footer() {
  return (
    <div className="vnk-footer">
      <div className="vnk-info">
        <Row className="info-wapper">
          <Col sm={8}>
            {/* <Card title="Card title">Card content</Card> */}
            <Card className="vnk-address">
              <Row>
                <Col sm={12}>
                  <a className="logo" href="/">
                    <img src={logo} alt="" className="vnk-logo" />
                  </a>
                </Col>
                <Col className="qrcode" sm={12}>
                  <div>
                    <p>IOS</p>
                    <a className="logo" href="/">
                      <img src={ios} alt="" className="vnk-qrcode" />
                    </a>
                  </div>
                  <div>
                    <p>Android</p>
                    <a className="logo" href="/">
                      <img src={android} alt="" className="vnk-qrcode" />
                    </a>
                  </div>
                </Col>
              </Row>
              <p className="vnk-contact">
                <HomeOutlined />
                &ensp;
                <span>Số 88 Láng Hạ, Đống Đa, Hà Nội</span>
              </p>
              <p className="vnk-contact">
                <PhoneOutlined />
                &ensp;
                <span>
                  <a href="tel: support@vnk.com.vn">0912808996</a>
                </span>
              </p>
              <p className="vnk-contact">
                <MailOutlined />
                &ensp;
                <span>
                  <a href="mailto: support@vnk.com.vn">support@vnk.com.vn</a>
                </span>
              </p>
            </Card>
          </Col>
          <Col className="vnk-support" sm={8}>
            {/* <Card title="Card title">Card content</Card> */}
            <Card bordered={false}>
              <p className="vnk-contact">
                <span className="sp-title">TẢI ỨNG DỤNG MY PROJECT</span>
              </p>
              <p className="vnk-contact">
                <a className="logo" href="/">
                  <img src={appStore} alt="" className="vnk-download-app" />
                </a>
              </p>
              <p className="vnk-contact">
                <a className="logo" href="/">
                  <img src={chPlay} alt="" className="vnk-download-app" />
                </a>
              </p>

              <p className="vnk-contact">
                <span className="sp-title">HỖ TRỢ KHÁCH HÀNG</span>
              </p>
              <p className="vnk-contact">
                <span>Hotline: 091 280 89 96</span>
              </p>
              <p className="vnk-contact">
                <MailOutlined />
                &ensp;
                <span>Email: cskh@vnk.com.vn</span>
              </p>
            </Card>
          </Col>
          <Col className="vnk-social" sm={8}>
            {/* <Card title="Card title">Card content</Card> */}
            <Card bordered={false}>
              <p className="vnk-contact">
                <span className="sp-title">LIÊN KẾT FANPAGE</span>
              </p>
              <p className="vnk-contact">
                <span className="sp-title">
                  <a href="myp.vn">myp.vn</a>
                </span>
              </p>
              <p className="vnk-contact">
                <span>Ninh Việt Tú</span>
              </p>
              <p className="vnk-contact">
                <a className="logo" href="/">
                  <img src={seminar} alt="" className="vnk-seminar" />
                </a>
              </p>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="vnk-copyright">
        <Row className="info-wapper">
          <Col span={12}>@Copyright by MYP - Một sản phẩm của VNK</Col>
          <Col span={12}>
            <a className="logo" href="/">
              <img src={iso} alt="VNK ISO" className="vnk-iso" />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
