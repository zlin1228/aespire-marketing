import { cva } from 'class-variance-authority';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { twMerge } from 'tailwind-merge';

import type { ImageDataLike } from 'gatsby-plugin-image';
import type { FC } from 'react';

export type StaticImage = {
  file: {
    url: string;
  };
};

export type Url = string | null | undefined;

export type ImageData = ImageDataLike | StaticImage;

const imageStyles = cva([]);

const isStaticImage = (image: ImageData): image is StaticImage => (image as StaticImage).file?.url !== undefined;

const imageResolver = (image: ImageData) => {
  const gatsbyImageData = image && 'gatsbyImageData' in image && image.gatsbyImageData ? getImage(image) : undefined;

  return {
    as: gatsbyImageData ? GatsbyImage : ('img' as const),
    src: isStaticImage(image) ? image.file.url : undefined,
  };
};

export interface ImageProps {
  className?: string;
  image: ImageData;
  alt: string;
  loading?: 'eager' | 'lazy' | null;
}

const Image: FC<ImageProps> = ({ className, image, alt, loading, ...props }) => {
  if (!image) {
    return null;
  }

  return (
    <img
      {...imageResolver(image)}
      title={alt}
      alt={alt}
      loading={loading || 'lazy'}
      className={twMerge(imageStyles(), className)}
      {...props}
    />
  );
};

export default Image;
