import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.blue001};
    font-size: ${({ theme }) => `${theme.fontSize.base}px`};
    font-stretch: normal;
    font-style: normal;
    color: ${({ theme }) => theme.colors.gray100};
    line-height: normal;
    box-sizing: border-box;
    user-select: none;
    -webkit-user-drag: none;
  }

  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
