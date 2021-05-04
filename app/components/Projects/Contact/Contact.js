import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Row, Col, Avatar, Button, Collapse } from 'antd';
import { get as _get } from 'lodash';
import styled from 'styled-components';
import messages from './messages';

import logo from '../../../assets/images/logo/my-project.png';

const { Panel } = Collapse;

function Contact({ data, setVisible }) {
  return (
    <>
      <Row gutter={16} className="pd-bottom">
        <Col lg={16}>
          <GutterRow style={{ minHeight: '220px' }}>
            <StyledHeader>
              <span>
                <b>
                  <FormattedMessage {...messages.myContactList} />
                </b>
              </span>
              {_get(data, 'is_follow') && (
                <Button
                  type="primary"
                  style={{ float: 'right', marginTop: '-6px' }}
                  onClick={() => {
                    setVisible(true);
                  }}
                >
                  +
                </Button>
              )}
            </StyledHeader>
            {_get(data, 'contacts') ? (
              _get(data, 'contacts').map(contact => (
                <Collapse accordion>
                  <Panel
                    header={
                      <StyledCollapse>
                        <Avatar src={logo} />
                        <StyledContact>
                          <span>
                            <b>{contact.full_name}</b>
                          </span>
                          <span>{_get(contact, 'type')}</span>
                        </StyledContact>
                      </StyledCollapse>
                    }
                    key="1"
                  >
                    <StyledContentMeta>
                      <StyledContent>
                        <span>
                          <b>
                            <FormattedMessage {...messages.myContactEmail} />
                          </b>{' '}
                          {contact.email}
                        </span>
                        <span>
                          <b>
                            <FormattedMessage {...messages.myContactPosition} />
                          </b>{' '}
                          {contact.position}
                        </span>
                      </StyledContent>
                      <StyledContent>
                        <span>
                          <b>
                            <FormattedMessage {...messages.myContactPhone} />
                          </b>{' '}
                          {contact.phone}
                        </span>
                        <span>
                          <b>
                            <FormattedMessage {...messages.myContactAddress} />
                          </b>
                          {contact.address}
                        </span>
                      </StyledContent>
                    </StyledContentMeta>
                  </Panel>
                </Collapse>
              ))
            ) : (
              <p>
                <FormattedMessage {...messages.myContactNoData} />
              </p>
            )}
          </GutterRow>
        </Col>
        <Col lg={8} style={{ justifyContent: 'center', display: 'flex' }}>
          <img
            src={_get(data, 'image') || logo}
            width={220}
            height={220}
            alt=""
            className="vnk-logo"
          />
        </Col>
      </Row>
    </>
  );
}

const StyledHeader = styled.div`
  margin-bottom: 15px;
  font-size: 16px;
  color: #b7252c;
`;

const GutterRow = styled.section`
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const StyledCollapse = styled.div`
  display: flex;
`;
const StyledContact = styled.div`
  display: grid;
  padding-left: 10px;
`;
const StyledContentMeta = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledContent = styled.div`
  display: grid;
`;

Contact.propTypes = {
  data: PropTypes.any,
  setVisible: PropTypes.func,
};

export default Contact;
