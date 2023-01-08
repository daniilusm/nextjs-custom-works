import { createGlobalStyle } from 'styled-components';
import localFont from '@next/font/local';

export const GTAmerica = localFont({
  src: [
    {
      path: './fonts/GTAmerica/GT-America-Expanded-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

const GTAmericaExpandedBoldWoff2 = require('./fonts/GTAmerica/GT-America-Expanded-Bold.woff2');
const GTAmericaExpandedBoldWoff = require('./fonts/GTAmerica/GT-America-Expanded-Bold.woff');
const GTAmericaExpandedLightWoff2 = require('./fonts/GTAmerica/GT-America-Expanded-Light.woff2');
const GTAmericaExpandedLightWoff = require('./fonts/GTAmerica/GT-America-Expanded-Light.woff');
const GTAmericaExtendedBoldWoff2 = require('./fonts/GTAmerica/GT-America-Extended-Bold.woff2');
const GTAmericaExtendedBoldWoff = require('./fonts/GTAmerica/GT-America-Extended-Bold.woff');
const GTAmericaStandardBoldWoff2 = require('./fonts/GTAmerica/GT-America-Standard-Bold.woff2');
const GTAmericaStandardBoldWoff = require('./fonts/GTAmerica/GT-America-Standard-Bold.woff');
const GTAmericaStandardMediumWoff2 = require('./fonts/GTAmerica/GT-America-Standard-Medium.woff2');
const GTAmericaStandardMediumWoff = require('./fonts/GTAmerica/GT-America-Standard-Medium.woff');
const GTAmericaStandardRegularWoff2 = require('./fonts/GTAmerica/GT-America-Standard-Regular.woff2');
const GTAmericaStandardRegularWoff = require('./fonts/GTAmerica/GT-America-Standard-Regular.woff');
const GTAmericaExpandedThinWoff2 = require('./fonts/GTAmerica/GT-America-Expanded-Thin.woff2');
const GTAmericaExpandedThinWoff = require('./fonts/GTAmerica/GT-America-Expanded-Thin.woff');
const GTAmericaExtendedThinWoff2 = require('./fonts/GTAmerica/GT-America-Extended-Thin.woff2');
const GTAmericaExtendedThinWoff = require('./fonts/GTAmerica/GT-America-Extended-Thin.woff');
const GTAmericaExtendedMediumWoff2 = require('./fonts/GTAmerica/GT-America-Extended-Medium.woff2');
const GTAmericaExtendedMediumWoff = require('./fonts/GTAmerica/GT-America-Extended-Medium.woff');
const GTAmericaExpandedMediumWoff2 = require('./fonts/GTAmerica/GT-America-Expanded-Medium.woff2');
const GTAmericaExpandedMediumWoff = require('./fonts/GTAmerica/GT-America-Expanded-Medium.woff');

export default createGlobalStyle`

@font-face {
  font-family: 'GTAmericaExpandedBold';
  src: url(${GTAmericaExpandedBoldWoff2}) format('woff2'), url(${GTAmericaExpandedBoldWoff}) format('woff');
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: 'GTAmericaExpandedLight';
  src: url(${GTAmericaExpandedLightWoff2}) format('woff2'), url(${GTAmericaExpandedLightWoff}) format('woff');
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: 'GTAmericaExtendedBold';
  src: url(${GTAmericaExtendedBoldWoff2}) format('woff2'), url(${GTAmericaExtendedBoldWoff}) format('woff');
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: 'GTAmericaStandardBold';
  src: url(${GTAmericaStandardBoldWoff2}) format('woff2'), url(${GTAmericaStandardBoldWoff}) format('woff');
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: 'GTAmericaStandardMedium';
  src: url(${GTAmericaStandardMediumWoff2}) format('woff2'), url(${GTAmericaStandardMediumWoff}) format('woff');
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'GTAmericaStandardRegular';
  src: url(${GTAmericaStandardRegularWoff2}) format('woff2'), url(${GTAmericaStandardRegularWoff}) format('woff');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'GTAmericaExpandedThin';
  src: url(${GTAmericaExpandedThinWoff2}) format('woff2'), url(${GTAmericaExpandedThinWoff}) format('woff');
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'GTAmericaExtendedThin';
  src: url(${GTAmericaExtendedThinWoff2}) format('woff2'), url(${GTAmericaExtendedThinWoff}) format('woff');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'GTAmericaExtendedMedium';
  src: url(${GTAmericaExtendedMediumWoff2}) format('woff2'), url(${GTAmericaExtendedMediumWoff}) format('woff');
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'GTAmericaExpandedMedium';
  src: url(${GTAmericaExpandedMediumWoff2}) format('woff2'), url(${GTAmericaExpandedMediumWoff}) format('woff');
  font-weight: 500;
  font-display: swap;
}
`;

export enum FONTS {
  GTAmericaExpandedBold = 'GTAmericaExpandedBold, sans-serif',
  GTAmericaExpandedLight = 'GTAmericaExpandedLight, sans-serif',
  GTAmericaExtendedBold = 'GTAmericaExtendedBold, sans-serif',
  GTAmericaStandardBold = 'GTAmericaStandardBold, sans-serif',
  GTAmericaStandardMedium = 'GTAmericaStandardMedium, sans-serif',
  GTAmericaStandardRegular = 'GTAmericaStandardRegular, sans-serif',
  GTAmericaExtendedThin = 'GTAmericaExtendedThin, sans-serif',
  GTAmericaExpandedThin = 'GTAmericaExpandedThin, sans-serif',
  GTAmericaExtendedMedium = 'GTAmericaExtendedMedium, sans-serif',
  GTAmericaExpandedMedium = 'GTAmericaExpandedMedium, sans-serif',
}
