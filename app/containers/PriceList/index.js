import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';
import { Row, Col, Table } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import PackageCard from 'components/PackageCard';
import { FormattedMessage } from 'react-intl';
import './styles.less';
import styled from 'styled-components';
import messages from './messages';
const { Column, ColumnGroup } = Table;

export default function PriceList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (item, isEdit) => {
    // setVisible(true);
    // setOrderPackage(item);
    // setEdit(isEdit);
  };

  const data = [
    {
      function: <FormattedMessage {...messages.PriceListAddTask} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddInfo} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddContact} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddNote} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddFollow} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: (
        <FormattedMessage {...messages.PriceListAddCompanyInformation} />
      ),
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddManager} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddAddress} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddWebsite} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddPhone} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddEmail} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddUpdatesNotes} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListSalepipeline} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddbetweenstates} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddpersonalKPIs} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddskillspromotions} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddtrackingprojects} />,
      basic: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: (
        <FormattedMessage {...messages.PriceListAddprojectsfromsystem} />
      ),
      basic: '',
      standard: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddsalegroup} />,
      basic: '',
      standard: '',
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddInternalgroup} />,
      basic: '',
      standard: '',
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddteammember} />,
      basic: '',
      standard: '',
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: <FormattedMessage {...messages.PriceListAddeffectiveness} />,
      basic: '',
      standard: '',
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
    {
      function: (
        <FormattedMessage {...messages.PriceListAddRevenueconfirmation} />
      ),
      basic: '',
      standard: '',
      enterprise: (
        <CheckOutlined
          style={{ fontSize: '24px', color: 'rgb(82, 196, 26)' }}
        />
      ),
    },
  ];

  return (
    <StylePriceList>
      <Helmet>
        <title>Thông tin chứng từ Website</title>
        <meta name="description" content="Thông tin chứng từ Website" />
      </Helmet>
      <StyleContent>
        <StyledTitle>
          <FormattedMessage {...messages.PriceListTitle} />
        </StyledTitle>
        <StylePackageCard>
          <Col lg={24}>
            <PackageCard openModal={openModal} userProfile={[]} />
          </Col>
        </StylePackageCard>
        <Row>
          <StyleCol lg={24}>
            <Table
              style={{ marginBottom: '100px' }}
              dataSource={data}
              bordered
              pagination={false}
            >
              <Column title="Function" dataIndex="function" key="function" />
              <ColumnGroup title="Package">
                <Column title="Basic" dataIndex="basic" key="basic" />
                <Column title="Standard" dataIndex="standard" key="standard" />
                <Column
                  title="Enterprise"
                  dataIndex="enterprise"
                  key="enterprise"
                />
              </ColumnGroup>
            </Table>
          </StyleCol>
        </Row>
      </StyleContent>
    </StylePriceList>
  );
}

const StylePackageCard = styled(Row)`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;
const StylePriceList = styled.div``;
const StyledTitle = styled(H1)`
  text-align: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 767.99px) {
    margin-bottom: 20px;
  }
`;
const StyleContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 0;
  @media screen and (max-width: 767px) {
    width: auto;
  }
`;
const StyleCol = styled(Col)`
  padding: 0 100px;

  @media screen and (max-width: 767px) {
    padding: unset;
  }
`;
