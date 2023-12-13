import { twMerge } from 'tailwind-merge';

import Button from 'molecules/Button';

import { containerStyles, gridStyles, headingWrapperStyles } from 'components/CardDeck/styles/CardDeck.styles';
import { setGridValue } from 'components/CardDeck/utils/helpers';
import Card from 'components/Cards/Card';
import PricingCard from 'components/Cards/PricingCard';
import ResourceCard from 'components/Cards/ResourceCard';
import Heading from 'components/Heading';
import Trustbar from 'components/Trustbar';

import getTheme from 'utils/getTheme';

import type { CardDeckProps } from '..';
import type { HeadingProps } from 'components/Heading';
import type { TrustbarProps } from 'components/Trustbar';
import type { ButtonProps } from 'molecules/Button';
import type { FC } from 'react';

const CardDeck: FC<CardDeckProps> = ({
  background,
  bottomButton,
  cards,
  cardDeckHeading,
  showTrustbar,
  trustbar,
  variant,
}) => {
  const theme = getTheme(background || 'light');
  const headingAlignment = variant === 'Offset' ? 'start' : 'center';
  const numOfCards = cards?.length || 0;

  return (
    <div className={twMerge(containerStyles({ layout: variant as 'Centered' | 'Offset' | 'Contained' }))}>
      <div className={twMerge(headingWrapperStyles())}>
        <Heading
          padding="none"
          background="none"
          theme={theme}
          fullWidth
          {...(cardDeckHeading as HeadingProps)}
          alignment={headingAlignment}
        />
        {showTrustbar && <Trustbar padding="none" fullWidth {...(trustbar as TrustbarProps)} />}
      </div>
      <div className="flex w-full flex-col items-center gap-8 sm:gap-10">
        <div
          className={twMerge(
            gridStyles({ layout: variant as 'Centered' | 'Offset' | 'Contained', grid: setGridValue(numOfCards) }),
          )}
        >
          {cards?.map(card => {
            switch (card?.__typename) {
              case 'ContentfulComponentCard':
                return <Card key={card?.id} centerText={variant === 'Contained'} {...card} />;
              case 'ContentfulTemplateBlogPost':
              case 'ContentfulTemplateCaseStudy':
              case 'ContentfulTemplateNewsPost':
              case 'ContentfulTemplateResourceCenter':
                return <ResourceCard key={card?.id} {...card} />;
              case 'ContentfulComponentPricingCard':
                return <PricingCard key={card?.id} {...card} />;
              default:
                return null;
            }
          })}
        </div>
        {bottomButton && (
          <div className="flex w-full flex-col gap-3 md:max-h-fit md:w-fit md:flex-row">
            <Button {...(bottomButton as ButtonProps)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDeck;
