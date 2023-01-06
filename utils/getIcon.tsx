import React from 'react';
import { PdfDocIcon, ImageDocIcon, DefaultDocIcon } from 'src/styles/icons';
import { MarginProps } from 'styled-system';

const imageExtensions = [
  '.jpg',
  '.jpeg',
  '.png',
  'image/jpeg',
  'image/png',
  '.video',
];
const pdfExtentions = ['.pdf', 'application/pdf'];
/* if we get video icon use this
const videoExtentions = ['.video']
*/

type Props = {
  extention: string;
} & MarginProps;

const getIcon = ({ extention, ...rest }: Props) => {
  if (pdfExtentions.includes(extention.toLowerCase())) {
    return <PdfDocIcon minWidth={18} minHeight={24} {...rest} />;
  }
  if (imageExtensions.includes(extention.toLowerCase())) {
    return <ImageDocIcon minWidth={24} minHeight={18} {...rest} />;
  }
  return <DefaultDocIcon minWidth={18} minHeight={24} {...rest} />;
};

export default getIcon;
