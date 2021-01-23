/* eslint-disable no-console */
import React, { Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';
import moment from 'moment';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Menu, Popover, Badge, List, Spin } from 'antd';
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
const limit = 100;
const { SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile,
      username: '',
      loading: false,
      hasMore: true,
      notifications: [],
      visiblePopover: {},
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

  componentWillReceiveProps() {
    this.setState({
      visiblePopover: {},
    });
  }

  mappingNotify = notifications =>
    notifications.map(notify => ({
      title: _get(notify, 'data.title'),
      notification: _get(notify, 'data.notification'),
      date: moment(_get(notify, 'created')).fromNow(),
    }));

  fetchNotify = (callback, skip = 0) => {
    const filter = `filter[where][to]=${getUserId()}&filter[limit]=${limit}&filter[skip]=${skip}&filter[order]=created%20DESC`;
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
        console.log(response);
        callback(response);
      })
      .catch(e => console.log(e));
  };

  handleInfiniteOnLoad = page => {
    const { notifications } = this.state;
    this.setState({
      loading: true,
    });

    this.fetchNotify(res => {
      const data = notifications.concat(this.mappingNotify(_get(res, 'data')));
      this.setState({
        notifications: data,
        loading: false,
      });
    }, limit * page + 1);
  };

  getMenuToRender = history => {
    // eslint-disable-next-line react/prop-types
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
            <Menu.Item key="kpi-settings">
              <Link to={ROUTE.KPI_SETTINGS}>Tự đánh giá KPIs</Link>
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

  getProjectDetail = (history, projectID) => {
    axios
      .create({
        baseURL: API.BASE_URL,
        timeout: 5000,
        validateStatus(status) {
          return (status >= 200 && status < 300) || status === 403; // default
        },
        headers: { 'Content-Type': 'application/json' },
      })
      .get(`${API.BASE_URL}/project/${projectID}?access_token=${getToken()}`)
      .then(response => {
        if (response) {
          this.setState({
            visiblePopover: { visible: false },
          });
          history.push({
            pathname: ROUTE.PROJECT_DETAILS,
            state: {
              data: _get(response, 'data'),
            },
          });
        }
      })
      .catch(e => console.log(e));
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
                        {...this.state.visiblePopover}
                        content={
                          <Notification>
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
                                  <List.Item
                                    className="notificationItem"
                                    onClick={() =>
                                      this.getProjectDetail(
                                        history,
                                        _get(item, 'notification.idDetect'),
                                      )
                                    }
                                  >
                                    <List.Item.Meta
                                      avatar={
                                        <Avatar
                                          size={14}
                                          // eslint-disable-next-line global-require
                                          src={require('../../assets/images/tabs/tab-notify-active.png')}
                                        />
                                      }
                                      title={
                                        <TitleNotify>
                                          <span>{_get(item, 'title', '')}</span>
                                          <span className="notifyTime">
                                            {_get(item, 'date', '')}
                                          </span>
                                        </TitleNotify>
                                      }
                                      description={
                                        <DescriptionNotify
                                          isUpdate={
                                            // eslint-disable-next-line prettier/prettier
                                            _get(item, 'notification.id') ===
                                            'project_status_need_update'
                                          }
                                        >
                                          {_get(item, 'notification.body')}
                                        </DescriptionNotify>
                                      }
                                    />
                                    <RightOutlined
                                      style={{ fontSize: 10, color: '#ccc' }}
                                    />
                                  </List.Item>
                                )}
                              >
                                {this.state.loading && this.state.hasMore && (
                                  <Loading>
                                    <Spin />
                                  </Loading>
                                )}
                              </List>
                            </InfiniteScroll>
                          </Notification>
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
                          <Menu.Item key="kpi-settings">
                            <Link to={ROUTE.KPI_SETTINGS}>
                              Tự đánh giá KPIs
                            </Link>
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

const Notification = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  height: 300px;
  width: 320px;

  .notificationItem {
    transition: all 0.3s;
    padding: 12px 8px;
    cursor: pointer;
  }
  .clearButton {
    text-align: center;
    height: 48px;
    line-height: 48px;
    cursor: pointer;
  }
`;

const TitleNotify = styled.div`
  .notifyTime {
    float: right;
    color: rgba(0, 0, 0, 0.45);
    font-size: 12px;
  }
`;

const Loading = styled.div`
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
`;

const DescriptionNotify = styled.div`
  color: ${props => (props.isUpdate ? '#d0021b' : '#4fba6f')};
`;

Header.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(Header);
