import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Popover, Row, Col } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import './styles.less';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/Logo.jpg';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    // const { keyPath } = e.item.props;
    this.setState({ current: e.key });
  };

  render() {
    const { data } = this.props;

    const { current } = this.state;
    return (
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
              // if (item.isLogin) {
              //   return;
              // }
              if (item.isLogin === false) {
                return;
              }

              // eslint-disable-next-line consistent-return
              return (
                <Menu.Item
                  className={item.className ? item.className : ''}
                  key={item.key}
                  // keyPath={item.path}
                >
                  {item.title}
                  <Link to="/" />
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
        {/* <Col sm={8}>
          <Popover
            className="nav-phone-icon"
            placement="bottomRight"
            content={content}
            trigger="click"
          >
            <UnorderedListOutlined />
          </Popover>
        </Col> */}
      </Row>
    );
  }
}

NavBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default NavBar;
