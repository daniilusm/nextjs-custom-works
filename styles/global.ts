import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  background-color: ${Colors.nero};
}
`;
