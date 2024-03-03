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
`;

export default GlobalStyle;
