import { twMerge } from 'tailwind-merge';

import Badge from 'molecules/Badge';
import Button from 'molecules/Button';
import Image from 'molecules/Image';

import {
  cardStyles,
  headingStyles,
  innerBodyStyles,
  outerBodyStyles,
  subheadStyles,
  textStyles,
} from 'components/Cards/styles/Card.styles';

import richTextParser from 'utils/richTextParser/richTextParser';

import type { ContentfulComponentCard } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { StaticImage } from 'molecules/Image';
import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser/richTextParser';

interface CardProps extends ContentfulComponentCard {
  centerText?: boolean;
}

const Card: FC<CardProps> = ({
  backgroundColor,
  button,
  centerText,
  heading,
  headingSize,
  icon,
  image,
  layout,
  padding,
  showAddOnBadge,
  subhead,
}) => {
  const alignment = centerText ? 'center' : 'start';

  return (
    <div
      className={`card-component ${twMerge(
        cardStyles({
          backgroundColor: backgroundColor as 'White' | 'Yellow 25',
          layout: layout as 'Stacked' | 'SideBySide',
        }),
      )}`}
    >
      {button && <Button href={button.href} className="absolute inset-0 z-10" />}
      {image && image?.file && (
        <div className="card-component-image h-full  w-full xl:h-auto">
          <Image
            image={image as StaticImage}
            alt={heading || 'Icon'}
            className="aspect-video h-full min-h-full w-full object-cover sm:min-h-[314px] xl:h-auto xl:min-h-full"
          />
        </div>
      )}
      <div className={twMerge(outerBodyStyles({ padding: padding as 'none' | 'sm' | 'lg', alignment }))}>
        {icon && icon?.file && (
          <div className="flex h-14 max-h-[50px] min-h-[50px] min-w-[50px] items-center justify-center">
            <Image
              image={icon as StaticImage}
              alt={heading || 'Icon'}
              className="h-full max-w-[120px] object-contain"
            />
          </div>
        )}
        <div className={twMerge(innerBodyStyles({ alignment }))}>
          {(heading || subhead) && (
            <div className={twMerge(textStyles({ padding: padding as 'none' | 'sm' | 'lg', alignment }))}>
              {showAddOnBadge && <Badge label="Add-on" size="sm" hierarchy="yellow" startIcon="add-box" />}
              {heading && <p className={twMerge(headingStyles({ size: headingSize as 'sm' | 'lg' }))}>{heading}</p>}
              {subhead && (
                <div className={twMerge(subheadStyles({ alignment }))}>{richTextParser(subhead as RichText)}</div>
              )}
            </div>
          )}
          {button && <Button {...(button as ButtonProps)} />}
        </div>
      </div>
    </div>
  );
};

export default Card;
