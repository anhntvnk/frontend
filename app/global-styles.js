import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.less';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Ubuntu';
  }

  body.fontLoaded {
    font-family: 'Ubuntu';
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Ubuntu';
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
