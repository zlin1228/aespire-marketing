import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { twMerge } from 'tailwind-merge';

import Button from 'molecules/Button';
import Image from 'molecules/Image';

import {
  containerStyles,
  headingStyles,
  subheadingStyles,
  textWrapperStyles,
} from 'components/Slidebox/styles/SlideboxCard.styles';

import type { ContentfulComponentSlideboxCard } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { StaticImage } from 'molecules/Image';
import type { FC } from 'react';
import type getTheme from 'utils/getTheme';

interface SlideboxCardProps extends ContentfulComponentSlideboxCard {
  theme: ReturnType<typeof getTheme>;
  activeSlide: boolean;
}

const SlideboxCard: FC<SlideboxCardProps> = ({ button, heading, media, subheading, theme, activeSlide }) => (
  <div className={twMerge(containerStyles({ theme }))}>
    {media?.image && (
      <div className="h-full w-full">
        <Image
          image={media.image as StaticImage}
          alt={media?.title || 'Slidebox Image'}
          className="h-full w-full object-cover"
        />
      </div>
    )}
    <div className={twMerge(textWrapperStyles())}>
      {(heading || subheading) && (
        <div className="flex flex-col gap-4">
          {heading && <p className={twMerge(headingStyles({ theme }))}>{heading}</p>}
          {subheading?.raw && (
            <h2 className={twMerge(subheadingStyles({ theme }))}>
              {documentToReactComponents(JSON.parse(subheading.raw))}
            </h2>
          )}
        </div>
      )}
      {button && (
        <Button
          {...(button as ButtonProps)}
          hierarchy={theme === 'light' ? 'link' : 'linkDark'}
          iconColor={theme === 'light' ? 'black' : 'white'}
          noPadding
          tabIndex={activeSlide ? 0 : -1}
        />
      )}
    </div>
  </div>
);

export default SlideboxCard;
