import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import twMerge from 'twMerge';

import Button from 'molecules/Button';
import Image from 'molecules/Image';

import {
  buttonStyles,
  containerStyles,
  headingStyles,
  imageStyles,
  logoStyles,
  subheadStyles,
  textContainerStyles,
} from 'components/CaseStudySlider/styles/CaseStudyCard.styles';

import type { ContentfulComponentCaseStudyCard } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { ImageData } from 'molecules/Image';
import type { FC } from 'react';

const QuoteCard: FC<ContentfulComponentCaseStudyCard> = ({ callToAction, heading, image, logo, subheading }) => (
  <div className={twMerge(containerStyles())}>
    <div className="relative flex h-full">
      <div className={twMerge(logoStyles())}>
        <Image image={logo as ImageData} alt={heading as string} className="h-full w-full" />
      </div>
      <Image image={image as ImageData} alt={heading as string} className={twMerge(imageStyles())} />
    </div>
    <div className={twMerge(textContainerStyles())}>
      <div className="flex flex-col gap-4">
        {heading && <p className={twMerge(headingStyles())}>{heading}</p>}
        {subheading?.raw && (
          <p className={twMerge(subheadStyles())}>{documentToReactComponents(JSON.parse(subheading.raw))}</p>
        )}
      </div>
      <div>
        {callToAction && (
          <Button
            {...(callToAction as ButtonProps)}
            hierarchy="linkDark"
            iconColor="black"
            noPadding
            className={twMerge(buttonStyles())}
          />
        )}
      </div>
    </div>
  </div>
);

export default QuoteCard;
