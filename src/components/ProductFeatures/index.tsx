import { twMerge } from 'tailwind-merge';

import Image from 'molecules/Image';
import Section from 'molecules/Section';

import {
  headingStyles,
  listItemImageStyles,
  listItemStyles,
  listItemTextStyles,
  listStyles,
  mediaStyles,
  subheadStyles,
} from 'components/ProductFeatures/styles/index.styles';

import getTheme from 'utils/getTheme';
import getVideoId from 'utils/getVideoId';
import richTextParser from 'utils/richTextParser/richTextParser';

import type { ContentfulComponentProductFeature } from 'graphqlTypes';
import type { StaticImage } from 'molecules/Image';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

export type ProductFeaturesProps = ContentfulComponentProductFeature & SectionProps;

const ProductFeatures: FC<ProductFeaturesProps> = ({
  background,
  contained,
  heading,
  image,
  list,
  padding,
  sectionIdLink,
  subhead,
  youtubeEmbedLink,
}) => {
  const theme = getTheme(background || 'white');

  return (
    <Section id={sectionIdLink} background={background} contained={contained} padding={padding}>
      <div className="flex flex-col gap-8 md:gap-14">
        {heading && <h2 className={twMerge(headingStyles({ theme }))}>{heading}</h2>}
        {image && (
          <div className={twMerge(mediaStyles())}>
            <Image image={image as StaticImage} alt="Sample Image" className="h-full w-full" />
          </div>
        )}
        {youtubeEmbedLink && (
          <iframe
            src={`https://www.youtube.com/embed/${getVideoId(youtubeEmbedLink)}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            aria-label="embed video"
            className={twMerge(mediaStyles())}
          />
        )}
        {subhead && <p className={twMerge(subheadStyles({ theme }))}>{richTextParser(subhead, 20, theme)}</p>}
        {list?.length && (
          <ul className={twMerge(listStyles({ theme }))}>
            {list?.map(item => (
              <li
                key={item?.id}
                className={twMerge(listItemStyles({ size: (item?.iconImageSize || 'sm') as 'sm' | 'lg' }))}
              >
                {item?.iconImage && (
                  <Image
                    image={item.iconImage as StaticImage}
                    alt={item?.label || 'Icon'}
                    className={twMerge(listItemImageStyles({ size: (item?.iconImageSize || 'sm') as 'sm' | 'lg' }))}
                  />
                )}
                <p className={twMerge(listItemTextStyles({ theme }))}>{item?.label}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
};

export default ProductFeatures;
