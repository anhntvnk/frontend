import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Menu } from 'antd';
import { enquireScreen } from 'enquire-js';

import PhoneNav from './PhoneNav';
import logo from '../../assets/images/logo/logo-update.png';

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    enquireScreen(b => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  getMenuToRender = () => {
    const menuMode = this.state.isMobile ? 'inline' : 'horizontal';
    // const module = location.pathname.replace(/(^\/|\/$)/g, '').split('/')[0]; // .slice(0, -1).join('/');
    // const activeMenuItem = (module.match('index') && 'home') || module;
    return (
      <Menu mode={menuMode} selectedKeys={[]} id="nav" key="nav">
        <Menu.Item key="home">
          <Link to="/">home</Link>
        </Menu.Item>
        <Menu.Item key="docs">
          <Link to="/">home</Link>
        </Menu.Item>
        {/*
        <Menu.Item key="docs/instructions">
          <Link to={getLocalizedPathname('/docs/instructions/use-witch-ant-design-pro', isZhCN)}>
            <FormattedMessage id="app.header.menu.docs" />
          </Link>
        </Menu.Item> */}
        {!this.state.isMobile && (
          <Menu.Item key="edit">
            <a href="/">edit</a>
          </Menu.Item>
        )}
      </Menu>
    );
  };

  render() {
    const menu = this.getMenuToRender();
    return (
      <div id="header" className="header page-wrapper">
        {this.state.isMobile && <PhoneNav>{menu}</PhoneNav>}
        <Row className="page">
          <Col md={6} sm={24}>
            <Link className="logo" to="/">
              <img alt="logo" src={logo} />
              <span>MY PROJECT</span>
            </Link>
          </Col>
          {!this.state.isMobile && (
            <Col md={18} sm={0}>
              <div className="menu">
                {menu}
                <a
                  href="https://github.com/ant-design/ant-design-landing"
                  alt="git"
                  target="_blank"
                  className="gitbtn"
                >
                  Github
                </a>
              </div>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default Header;
