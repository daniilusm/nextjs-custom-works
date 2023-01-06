import { ColorsStrings } from 'styles/colors';

export const imageExtensions = [
  '.jpg',
  '.jpeg',
  '.png',
  'image/jpeg',
  'image/png',
];

export const videoExtensions = [
  '.video',
  'video/mp4',
  'video/quicktime',
  'video/mov',
];

export const mediaExtensions = [...imageExtensions, ...videoExtensions];

export const extensionsForDownload = ['.doc', '.docx', '.mov', '.mp4', '.xlsx'];

export enum Event {
  addMarkerToFavorites = 'addMarkerToFavorites',
  removeMarkerFromFavorites = 'removeMarkerFromFavorites',
  refreshPropertiesList = 'refreshPropertiesList',
  drawBubble = 'drawBubble',
  drawStackedBubbles = 'drawStackedBubbles',
  mapIdle = 'mapIdle',
  mapLoaded = 'mapLoaded',
  target = 'target',
}

export enum FontTypes {
  affogatoBold = 'AffogatoBold',
  affogatoMedium = 'AffogatoMedium',
  interMedium = 'InterMedium',
  bwGradualLight = 'BwGradualLight',
  bwGradualRegular = 'BwGradualRegular',
  bwGradualBold = 'BwGradualBold',
  bwGradualExtraBold = 'BwGradualExtraBold',
  liberGrotesqueBlack = 'LiberGrotesqueBlack',
  liberGrotesqueBold = 'LiberGrotesqueBold',
  liberGrotesqueExtraBold = 'LiberGrotesqueExtraBold',
  liberGrotesqueSemiBold = 'LiberGrotesqueSemiBold',
  liberGrotesqueRegular = 'LiberGrotesqueRegular',
  liberGrotesqueLight = 'LiberGrotesqueLight',
  liberGrotesqueNews = 'LiberGrotesqueNews',
  gTAmericaExpandedBold = 'GTAmericaExpandedBold',
  gTAmericaExpandedLight = 'GTAmericaExpandedLight',
  gTAmericaExtendedBold = 'GTAmericaExtendedBold',
  gTAmericaStandardBold = 'GTAmericaStandardBold',
  gTAmericaStandardMedium = 'GTAmericaStandardMedium',
  gTAmericaExtendedMedium = 'GTAmericaExtendedMedium',
  gTAmericaExpandedMedium = 'GTAmericaExpandedMedium',
  gTAmericaStandardRegular = 'GTAmericaStandardRegular',
  gTAmericaExpandedThin = 'GTAmericaExpandedThin',
  gTAmericaExtendedThin = 'GTAmericaExtendedThin',
}

export type FontTypesStrings = keyof typeof FontTypes;

export type TextProps = {
  fontType?: FontTypesStrings;
  fontSize?: number | string;
  color?: ColorsStrings;
  lineHeight?: number | string;
  align?: 'left' | 'center' | 'right' | 'inherit';
  whiteSpace?: 'none' | 'nowrap';
  textTransform?: 'none' | 'lowercase' | 'uppercase' | 'capitalize';
  textDecoration?: string;
  letterSpacing?: number | string;
  textOverflow?: 'ellipsis' | 'unset';
  overflow?: 'visible' | 'hidden' | 'auto' | 'unset';
};
