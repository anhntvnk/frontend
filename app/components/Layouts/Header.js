import React, { Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Menu, Popover, Badge, List } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { BellOutlined, RightOutlined } from '@ant-design/icons';
import { enquireScreen } from 'enquire-js';
import Avatar from 'react-avatar';
import ROUTE from '../../constants/routes';
import dataMenu from '../../constants/menu';
import PhoneNav from './PhoneNav';
import logo from '../../assets/images/logo/logo.png';
import Banner from './Banner';
import {
  isLoggedIn,
  removeUserSession,
  getUserId,
  getToken,
} from '../../../services/auth';
import './Header.less';
import API from '../../constants/apis';

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

const { SubMenu } = Menu;

class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isMobile,
      username: '',
      data: [],
      loading: false,
      hasMore: true,
      notifications: [],
    };
  }

  componentDidMount() {
    enquireScreen(b => {
      this.setState({
        isMobile: !!b,
      });
    });

    if (!this.state.username && isLoggedIn()) {
      axios
        .create({
          baseURL: API.BASE_URL,
          timeout: 5000,
          validateStatus(status) {
            return (status >= 200 && status < 300) || status === 403; // default
          },
          headers: { 'Content-Type': 'application/json' },
        })
        .get(`${API.BASE_URL}/user/${getUserId()}?access_token=${getToken()}`)
        .then(response => {
          const {
            // eslint-disable-next-line camelcase
            data: { full_name },
          } = response;
          this.setState({ username: full_name });
        })
        .catch(e => console.log(e));

      this.fetchNotify(res => {
        this.setState({ notifications: this.mappingNotify(_get(res, 'data')) });
      });
    }
  }

  mappingNotify = notifications =>
    notifications.map(notify => ({
      title: _get(notify, 'data.title'),
      notification: _get(notify, 'notification'),
      date: moment(_get(notify, 'created')).fromNow(),
    }));

  fetchNotify = callback => {
    const filter = `filter[where][to]=${getUserId()}&filter[limit]=100`;
    axios
      .create({
        baseURL: API.BASE_URL,
        timeout: 5000,
        validateStatus(status) {
          return (status >= 200 && status < 300) || status === 403; // default
        },
        headers: { 'Content-Type': 'application/json' },
      })
      .get(`${API.BASE_URL}/notify?access_token=${getToken()}&&${filter}`)
      .then(response => {
        callback(response);
      })
      .catch(e => console.log(e));
  };

  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    // if (data.length > 14) {
    //   this.setState({
    //     hasMore: false,
    //     loading: false,
    //   });
    //   return;
    // }
    this.fetchNotify(res => {
      this.setState({
        notifications: this.mappingNotify(_get(res, 'data')),
        loading: false,
      });
    });
  };

  getMenuToRender = history => {
    // eslint-disable-next-line react/prop-types
    const { location } = this.props;
    console.log(this.state.notifications);

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
            <Menu.Item className={item.className || ''} key={item.key}>
              <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
          );
        })}
        {this.state.isMobile && isLoggedIn() && (
          <>
            <Menu.Item key="persional-infomation">
              <Link to={ROUTE.USER}>Thông tin cá nhân</Link>
            </Menu.Item>
            <Menu.Item key="change-password">
              <Link to={ROUTE.CHANGE_PASSWORD}>Đổi mật khẩu</Link>
            </Menu.Item>
            <Menu.Item
              key="SignOut"
              onClick={() => this.logoutAccount(history)}
            >
              Đăng Xuất
            </Menu.Item>
          </>
        )}
      </Menu>
    );
  };

  logoutAccount = history => {
    removeUserSession();
    history.push('/');
  };

  render() {
    // eslint-disable-next-line react/prop-typesnotifications
    const { location, history } = this.props;
    const menu = this.getMenuToRender(history);
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
                    <>
                      <Popover
                        placement="bottomRight"
                        trigger="click"
                        key="notifications"
                        overlayClassName="notificationPopover"
                        content={
                          <div className="notification">
                            <InfiniteScroll
                              initialLoad={false}
                              pageStart={0}
                              loadMore={this.handleInfiniteOnLoad}
                              hasMore={
                                !this.state.loading && this.state.hasMore
                              }
                              useWindow={false}
                            >
                              <List
                                itemLayout="horizontal"
                                dataSource={this.state.notifications}
                                locale={{
                                  emptyText: (
                                    <>You have viewed all notifications.</>
                                  ),
                                }}
                                renderItem={item => (
                                  <List.Item className="notificationItem">
                                    <List.Item.Meta
                                      title={item.title}
                                      description={item.date}
                                    />
                                    <RightOutlined
                                      style={{ fontSize: 10, color: '#ccc' }}
                                    />
                                  </List.Item>
                                )}
                              />
                            </InfiniteScroll>
                          </div>
                        }
                      >
                        <Badge
                          count={this.state.notifications.length}
                          dot
                          offset={[-10, 10]}
                          className="iconButton"
                        >
                          <BellOutlined className="iconFont" />
                        </Badge>
                      </Popover>
                      <Menu key="user" mode="horizontal">
                        <SubMenu
                          title={
                            <Fragment>
                              <Avatar
                                name="Thúy Nga"
                                size="35px"
                                round
                                color="#357edd"
                              />
                              <span
                                style={{ color: '#fff', paddingLeft: '5px' }}
                              >
                                {this.state.username}
                              </span>
                            </Fragment>
                          }
                        >
                          <Menu.Item key="persional-infomation">
                            <Link to={ROUTE.USER}>Thông tin cá nhân</Link>
                          </Menu.Item>
                          <Menu.Item key="change-password">
                            <Link to={ROUTE.CHANGE_PASSWORD}>Đổi mật khẩu</Link>
                          </Menu.Item>
                          <Menu.Item
                            key="SignOut"
                            onClick={() => this.logoutAccount(history)}
                          >
                            Đăng Xuất
                          </Menu.Item>
                        </SubMenu>
                      </Menu>
                    </>
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
