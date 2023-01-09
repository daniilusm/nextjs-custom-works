import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: ${roboto.style.fontFamily};
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
