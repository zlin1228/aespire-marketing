import { useMedia } from 'react-use';
import { twMerge } from 'tailwind-merge';

import Button from 'molecules/Button';
import Icon from 'molecules/Icon';
import Image from 'molecules/Image';

import { cardStyles } from 'components/Cards/styles/Card.styles';

import screens from 'theme/spacing/screens';

import type { ContentfulComponentPricingCard } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { StaticImage } from 'molecules/Image';
import type { FC } from 'react';

interface CardProps extends ContentfulComponentPricingCard {
  centerText?: boolean;
}

const PricingCard: FC<CardProps> = ({ cardColor, eyebrowIcon, eyebrow, heading, subhead, button, features, keys }) => {
  const isTablet = useMedia(`(max-width: ${screens.xl})`, false);

  return (
    <div className="card-component flex w-full flex-col border border-gray-300">
      <div
        className={`flex w-full flex-col gap-6 p-6 sm:p-8 ${twMerge(
          cardStyles({
            backgroundColor: cardColor as 'Green 600' | 'Green 800' | 'Black',
            layout: 'Stacked',
          }),
        )}`}
      >
        {eyebrow && (
          <div className="mb-4 flex w-full gap-4">
            {eyebrowIcon && eyebrowIcon?.file && (
              <Image image={eyebrowIcon as StaticImage} alt={eyebrow || 'Icon'} className="min-h-4" />
            )}
            <p className="text-md text-white">{eyebrow}</p>
          </div>
        )}
        {heading && (
          <p className="text-display-xs-mobile font-bold text-white sm:text-display-xs-tablet lg:text-display-xs">
            {heading}
          </p>
        )}
        {subhead && <p className="text-sm font-bold text-white">{subhead.subhead}</p>}
      </div>
      <div className="flex w-full flex-col gap-6 border-b border-gray-300 bg-white p-6 sm:gap-8 sm:p-8">
        {button && <Button {...(button as ButtonProps)} />}
        {features && (
          <div className="flex w-full flex-col gap-6 text-md">
            {features.map(child => (
              <div key={child?.id} className="flex gap-3 text-md font-semibold text-gray-700">
                <Icon
                  className="mt-[2px] min-h-[20px] min-w-[20px]"
                  icon="check-green-circle"
                  size={20}
                  aria-hidden={true}
                />
                {child?.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {keys && (
        <div className="flex w-full flex-col gap-4 bg-white p-6 sm:p-8">
          <p className="text-sm font-bold text-gray-900">Key Features:</p>
          <div className="flex w-full flex-wrap gap-4">
            {keys.map(key => (
              <p
                key={key?.label}
                className={`w-full text-sm text-gray-700 sm:w-[calc(50%-8px)] lg:w-full ${
                  isTablet && key?.label === '—' ? 'hidden' : 'block'
                }`}
              >
                {key?.label}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
