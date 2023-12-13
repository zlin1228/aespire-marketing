import twMerge from 'twMerge';

import Icon from 'molecules/Icon';
import Image from 'molecules/Image';
import ratingStyles, {
  ratingContainer,
  ratingContent,
  ratingImageStyles,
  ratingRow,
} from 'molecules/Rating/Rating.styles';

import getStarRating from 'utils/getStarRating';
import getTheme from 'utils/getTheme';

import type { VariantProps } from 'class-variance-authority';
import type { alignmentType } from 'components/Hero';
import type { ContentfulItemRating } from 'graphqlTypes';
import type { ImageData } from 'molecules/Image';
import type { FC } from 'react';

interface RatingProps extends Omit<ContentfulItemRating, 'children'> {
  alignment?: alignmentType;
}

const Rating: FC<RatingProps> = ({
  starRating,
  content,
  images,
  background = 'blue50',
  alignment = 'Left Aligned',
}) => {
  const stars = getStarRating(starRating || 5);
  const theme = background === 'transparent dark' ? 'light' : getTheme(background || 'blue50');

  return (
    <div className={twMerge(ratingContainer({ alignment }))}>
      <div
        className={twMerge(ratingStyles({ background: background as VariantProps<typeof ratingStyles>['background'] }))}
      >
        <div className={twMerge(ratingRow({ type: 'content' }))}>
          <div className={twMerge(ratingRow({ type: 'star' }))}>
            {stars.map(
              (star, index) =>
                star && <Icon key={`star-${index}`} className={twMerge(['fill-yellow-400'])} icon={star} size={24} />,
            )}
          </div>
          {content && <p className={twMerge(ratingContent({ theme }))}>{content}</p>}
        </div>
        <div className={twMerge(ratingRow({ type: 'images' }))}>
          {images &&
            images.map(image => (
              <Image
                key={image?.title}
                image={image?.image as ImageData}
                alt={image?.title || ''}
                className={twMerge(ratingImageStyles())}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
