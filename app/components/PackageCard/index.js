import React from 'react';
import { withRouter } from 'react-router-dom';
import { get as _get } from 'lodash';
import { Card, Row, Col, Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import packageIcon from '../../assets/images/settings/ic_box.png';
import messages from './messages';
import { isLoggedIn } from '../../../services/auth';
import ROUTE from '../../constants/routes';

function PackageCard({ openModal, userProfile, history }) {
  const addDot = value =>
    value ? value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.') : '';

  const listPackage = [
    {
      key: 'basic',
      title: <FormattedMessage {...messages.myProfileBascicPackage} />,
      price: 580000,
      level: 1,
    },
    {
      key: 'standard',
      title: <FormattedMessage {...messages.myProfileStandardPackage} />,
      price: 1897000,
      level: 2,
    },
    {
      key: 'enterprise',
      title: <FormattedMessage {...messages.myProfileEnterprisePackage} />,
      price: 6868000,
      level: 3,
    },
  ];

  return (
    <StyledPackageCard>
      <Row gutter={{ sm: 24, md: 24, lg: 16 }}>
        {listPackage.map(item => (
          <Col lg={8} xs={24} key={item.key} style={{ marginBottom: '20px' }}>
            <Card
              title={
                <div>
                  <StylePackageImg src={packageIcon} alt={item.title} />
                  {item.title}
                </div>
              }
              bordered={false}
            >
              <StyledCardContent
                isMyPackage={_get(userProfile, 'package') === item.key}
              >
                <StylePrice>{addDot(item.price)}</StylePrice>
                <StyleButtonPackage
                  onClick={() => {
                    if (!isLoggedIn()) {
                      history.push(ROUTE.LOGIN);
                    } else {
                      openModal(
                        item,
                        _get(userProfile, 'package') === item.key,
                      );
                    }
                  }}
                  type="primary"
                  shape="round"
                  size="small"
                >
                  {_get(userProfile, 'package') === item.key ? (
                    <FormattedMessage {...messages.myProfileRenewPackage} />
                  ) : (
                    <FormattedMessage {...messages.myProfileBuyPackage} />
                  )}
                </StyleButtonPackage>
              </StyledCardContent>
            </Card>
          </Col>
        ))}
      </Row>
    </StyledPackageCard>
  );
}

PackageCard.propTypes = {
  history: PropTypes.any,
  openModal: PropTypes.func,
  userProfile: PropTypes.any,
};

const StyledPackageCard = styled.div`
  padding: 30px;
  background: #d9d9d9;
  margin: auto;
`;

const StylePackageImg = styled.img`
  width: 32px;
  padding-right: 5px;
`;

const StyleButtonPackage = styled(Button)``;

const StyledCardContent = styled.div`
  display: flex;
  justify-content: space-between;

  .ant-btn {
    font-weight: 500;
    background-color: ${({ isMyPackage }) =>
      isMyPackage ? '#279d58' : '#FA860A'};
    border-color: ${({ isMyPackage }) => (isMyPackage ? '#279d58' : '#FA860A')};
  }

  .ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active {
    background-color: ${({ isMyPackage }) =>
      isMyPackage ? '#279d58' : '#FA860A'};
    border-color: ${({ isMyPackage }) => (isMyPackage ? '#279d58' : '#FA860A')};
  }
`;

const StylePrice = styled.span`
  color: #bb2121;
  font-weight: 600;
`;

export default withRouter(PackageCard);
