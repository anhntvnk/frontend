import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.less';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  #app {
    background-color: #f0f2f5;
    // background-color: #dedddd;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  .ant-btn-round {
    display: flex;
    align-items: center;
  }
`;

export default GlobalStyle;
