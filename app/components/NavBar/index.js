import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Button, Popover, Row, Col } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import './styles.less';
import logo from '../../assets/images/logo/Logo.jpg';

const Header = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: none;
  box-shadow: none;
`;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class NavBar extends React.Component {
  state = {
    current: '1',
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  render() {
    const { data } = this.props;

    const { current } = this.state;
    return (
      <Header className="clearfix">
        <Popover
          className="nav-phone-icon"
          placement="bottomRight"
          content={content}
          trigger="click"
        >
          <UnorderedListOutlined />
        </Popover>
        <Row className="vnk-header">
          <Col className="vnk-logo">
            <h1>
              <a className="logo" href="/">
                <img src={logo} alt="" className="vnk-img" />
                My Project
              </a>
            </h1>
          </Col>
          <Col className="vnk-menu">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              theme="light"
            >
              {data.map(item => {
                if (item.isLogin) {
                  return;
                }

                if (item.isLogin === false) {
                  return;
                }

                // eslint-disable-next-line consistent-return
                return (
                  <Menu.Item
                    className={item.className ? item.className : ''}
                    key={item.key}
                  >
                    {item.title}
                  </Menu.Item>
                );
              })}
            </Menu>
            {/* <MenuList current={current} handleClick={this.handleClick} /> */}
          </Col>
        </Row>
      </Header>
    );
  }
}

NavBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default NavBar;
