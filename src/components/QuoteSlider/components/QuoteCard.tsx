/* eslint-disable tailwindcss/no-arbitrary-value */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useMediaQuery } from '@react-hookz/web/esm/useMediaQuery';
import twMerge from 'twMerge';

import Avatar from 'molecules/Avatar';
import Icon from 'molecules/Icon';
import Image from 'molecules/Image';

import GreenBackground from 'components/QuoteSlider/assets/quote-slider-green-background.webp';
import WhiteBackground from 'components/QuoteSlider/assets/quote-slider-light-background.webp';
import {
  containerMobileStyles,
  containerStyles,
  headingStyles,
  iconStyles,
  wrapperStyles,
} from 'components/QuoteSlider/styles/QuoteCard.styles';
import { shouldRenderImage } from 'components/QuoteSlider/utils/helpers';

import screens from 'theme/spacing/screens';

import type { ContentfulCardQuote } from 'graphqlTypes';
import type { ImageData } from 'molecules/Image';
import type { FC } from 'react';

const QuoteCard: FC<ContentfulCardQuote> = ({
  author,
  image,
  quote,
  mobileDisplayImage,
  tabletDisplayImage,
  theme,
}) => {
  const isMobile = useMediaQuery(`(max-width: ${screens.sm})`) || false;
  const isTablet = useMediaQuery(`(max-width: ${screens.md})`) || false;
  const isDesktop = useMediaQuery(`(min-width: ${screens.xl})`) || true;
  const renderImage = shouldRenderImage({
    isMobile,
    isTablet,
    isDesktop,
    mobileDisplayImage,
    tabletDisplayImage,
  });
  const contained = !renderImage;
  const headingClassName = twMerge(headingStyles({ theme: theme === 'Light' ? 'Light' : 'Dark' }));
  const { name, title, company, thumbnail } = author ?? {};

  return (
    <div
      className={twMerge(
        isMobile
          ? containerMobileStyles({ contained, hasImage: renderImage })
          : containerStyles({ contained, hasImage: renderImage }),
      )}
      style={{ backgroundImage: `url(${theme === 'Dark' ? GreenBackground : WhiteBackground})` }}
    >
      <div className={twMerge(wrapperStyles({ contained }))}>
        <Icon icon="quotes" size={43} className={twMerge(iconStyles({ theme: theme === 'Dark' ? 'Light' : 'Dark' }))} />
        {quote?.raw && <h2 className={headingClassName}>{documentToReactComponents(JSON.parse(quote.raw))}</h2>}
        {author && (
          <Avatar
            name={name}
            role={title}
            company={company}
            image={{
              image: thumbnail as ImageData,
              alt: name as string,
            }}
            theme={theme as string}
          />
        )}
      </div>
      {renderImage && (
        <div className="flex min-h-[160px]">
          <Image image={image as ImageData} alt={name as string} className="h-full object-cover" />
        </div>
      )}
    </div>
  );
};

export default QuoteCard;
