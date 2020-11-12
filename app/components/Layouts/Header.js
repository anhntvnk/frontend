import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Menu, Button } from 'antd';
import { enquireScreen } from 'enquire-js';
import dataMenu from '../../constants/menu';
import PhoneNav from './PhoneNav';
import logo from '../../assets/images/logo/logo-update.png';
import Banner from './Banner';
import { isLoggedIn, removeUserSession } from '../../../services/auth';

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
    const { location } = this.props;

    const menuMode = this.state.isMobile ? 'inline' : 'horizontal';
    const module = location.pathname.replace(/(^\/|\/$)/g, '').split('/')[0]; // .slice(0, -1).join('/');
    const activeMenuItem = (module.match('index') && 'home') || module;

    return (
      <Menu mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
        {dataMenu.map(item => {
          if (item.isLogin === false) {
            return;
          }

          // eslint-disable-next-line consistent-return
          return (
            <Menu.Item
              className={item.className ? item.className : ''}
              key={item.key}
            >
              <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
          );
        })}
        {/* <Menu.Item key="home">
          <Link to={ROUTE.HOMEPAGE}>Trang Chủ</Link>
        </Menu.Item>
        <Menu.Item key="companys">
          <Link to={ROUTE.COMPANY}>Công Ty</Link>
        </Menu.Item>
        <Menu.Item key="projects">
          <Link to={ROUTE.PROJECT}>Dự Án</Link>
        </Menu.Item> */}
      </Menu>
    );
  };

  logoutAccount = history => {
    removeUserSession();
    history.push('/');
  };

  render() {
    const { location, history } = this.props;
    const menu = this.getMenuToRender();
    const module = location.pathname.replace(/(^\/|\/$)/g, '').split('/')[0];
    return (
      <>
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
                  {!isLoggedIn() ? (
                    <Link className="btn-login" to="/login">
                      Đăng Nhập
                    </Link>
                  ) : (
                    <Button
                      onClick={() => this.logoutAccount(history)}
                      className="btn-logout"
                    >
                      Đăng xuất
                    </Button>
                  )}
                </div>
              </Col>
            )}
          </Row>
        </div>
        {!module && <Banner isMobile={isMobile} />}
      </>
    );
  }
}

export default withRouter(Header);
