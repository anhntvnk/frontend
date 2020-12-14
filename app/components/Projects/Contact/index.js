import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, List, Avatar } from 'antd';
import _ from 'lodash';
import styled from 'styled-components';

import logo from '../../../assets/images/logo/my-project.png';

const GutterRow = styled.section`
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

function Contact({ data }) {
  return (
    <Row gutter={16} className="pd-bottom">
      <Col lg={16}>
        <GutterRow style={{ minHeight: '220px' }}>
          <List
            itemLayout="horizontal"
            dataSource={_.get(data, 'contacts')}
            header="Danh sách thành viên trong dự án:"
            renderItem={contact => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={logo} />}
                  title={contact.full_name}
                  description={_.get(contact, 'type')}
                />
              </List.Item>
            )}
          />
        </GutterRow>
      </Col>
      <Col lg={8} style={{ justifyContent: 'center', display: 'flex' }}>
        <img
          src={_.get(data, 'image') || logo}
          width={220}
          alt=""
          className="vnk-logo"
        />
      </Col>
    </Row>
  );
}

Contact.propTypes = {
  data: PropTypes.any,
};

export default Contact;
