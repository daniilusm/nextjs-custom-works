import { useState, useEffect, useCallback } from 'react';
import { videoExtensions } from '@types';

export type postFormats = 'square' | 'portrait' | 'landscape';

type imagesSize = {
  height: number | null;
  width: number | null;
};

const usePostFormat = (images: any[]) => {
  const [imagesFormats, setImagesFormats] = useState<string[]>([]);
  const [currentFormat, setCurrentFormat] = useState<string>('');

  // getting the aspect ratio of an image by comparing height and width
  const getFormat = useCallback((image: imagesSize): postFormats => {
    if (image.height && image.width) {
      if (image.width > image.height) return 'landscape';
      if (image.width < image.height) return 'portrait';
    }
    return 'square';
  }, []);

  const getCurrentFormat = useCallback((formats: string[]) => {
    // counting all image formats
    const formatsCount: { [key: string]: number } = formats.reduce(
      (acc: { [key: string]: number }, type: string) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      },
      {}
    );
    // array of image formats
    const arrayOfFormats: string[] = Object.keys(formatsCount);
    // if there are several formats, use a 'square'
    const finalFormat =
      arrayOfFormats.length > 1 ? 'square' : arrayOfFormats[0];
    setCurrentFormat(finalFormat);
  }, []);

  const getImagesFormat = useCallback(
    (imgs: any[]) => {
      const formatsOfImages = imgs.map((img) => {
        if (videoExtensions.includes(img.file_content_type!)) {
          return 'square';
        }
        const formatImage = getFormat(img.original_image_meta);
        return formatImage;
      });
      setImagesFormats(formatsOfImages);
    },
    [getFormat]
  );

  useEffect(() => {
    if (images.length > 0) getImagesFormat(images);
  }, [images, getImagesFormat]);

  useEffect(() => {
    if (imagesFormats.length > 0) getCurrentFormat(imagesFormats);
  }, [imagesFormats, getCurrentFormat]);

  return currentFormat;
};

export default usePostFormat;
