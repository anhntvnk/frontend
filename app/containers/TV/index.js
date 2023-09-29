import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';
import { Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl';
import './styles.less';
import styled from 'styled-components';
import messages from './messages';

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
    />
  );
}

const iframeString =
  '<p class="header-tv"><strong>ĐẶT LỊCH TƯ VẤN GIẢI PHÁP&nbsp;</strong></br><strong>APP MY PROJECT QUA ZOOM</strong></p><iframe id="form_ultramailer" style="width:100%; height: 100%;" src="https://salekit.io/form/822e0e08?iframe=true" frameborder="0"></iframe>';

export default function TV() {
  return (
    <StyleTV>
      <Helmet>
        <title>ĐẶT LỊCH TƯ VẤN GIẢI PHÁP APP MY PROJECT QUA ZOOM</title>
        <meta
          name="description"
          content="ĐẶT LỊCH TƯ VẤN GIẢI PHÁP APP MY PROJECT QUA ZOOM"
        />
      </Helmet>
      <StyleContent>
        <Iframe iframe={iframeString} />
      </StyleContent>
    </StyleTV>
  );
}

const StyleTV = styled.div``;
const StyleHeader = styled.p`
  border-radius: 6px;
  border: 1px solid #dadce0;
  background: #fff;
  padding: 24px;
  margin-top: 10px;
`;
const StyleContent = styled.div`
  margin-top: 50px;
`;
