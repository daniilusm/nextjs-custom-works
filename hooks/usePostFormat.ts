import { videoExtensions } from '@types';
import { useState, useEffect, useCallback } from 'react';

export type postFormats = 'square' | 'portrait' | 'landscape';

const usePostFormat = (images: any[]) => {
  const [imagesFormats, setImagesFormats] = useState<string[]>([]);
  const [currentFormat, setCurrentFormat] = useState<string>('');

  // getting the aspect ratio of an image by comparing height and width
  const getFormat = useCallback((image: HTMLImageElement): postFormats => {
    if (image.naturalWidth > image.naturalHeight) return 'landscape';
    if (image.naturalWidth < image.naturalHeight) return 'portrait';
    return 'square';
  }, []);

  // upload image by url
  const loadImage = async (url: string) => {
    const img = new Image();
    img.src = url;
    await img.decode();
    return img;
  };

  // load each image by url and immediately find out the image format
  // as a result, we get an array of formats
  const loadImages = useCallback(
    async (imgs: any[]) => {
      const formatsOfImages = await Promise.all(
        imgs.map(async (image) => {
          if (videoExtensions.includes(image.file_content_type!)) {
            return 'square';
          }
          const url = image.file_urls?.original!;
          const img = await loadImage(url);
          const formatImage = getFormat(img);
          return formatImage;
        })
      );
      setImagesFormats(formatsOfImages);
    },
    [getFormat]
  );

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

  useEffect(() => {
    if (images.length > 0) loadImages(images);
  }, [images, loadImages]);

  useEffect(() => {
    if (imagesFormats.length > 0) getCurrentFormat(imagesFormats);
  }, [imagesFormats, getCurrentFormat]);

  return currentFormat;
};

export default usePostFormat;
