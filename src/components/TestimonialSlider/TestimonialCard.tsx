import twMerge from 'twMerge';

import Avatar from 'molecules/Avatar';
import Icon from 'molecules/Icon';

import {
  getBackground,
  testimonialCard,
  testimonialCardContent,
  testimonialCardContentContainer,
  testimonialCardDate,
  testimonialCardQuote,
  testimonialCardRow,
  testimonialCardWrapper,
} from 'components/TestimonialSlider/TestimonialSlider.styles';

import getStarRating from 'utils/getStarRating';

import type { ContentfulCardTestimonial } from 'graphqlTypes';
import type { ImageData } from 'molecules/Image';
import type { FC } from 'react';

export type TestimonialCardProps = Omit<ContentfulCardTestimonial, 'children'>;

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial, date, starRating, avatar, backgroundOptions }) => {
  const stars = getStarRating(starRating || 5);

  const background = backgroundOptions === 'Dark Green Texture' ? 'Dark' : 'Light';
  const theme = background === 'Dark' ? 'dark' : 'light';

  const quote = testimonial && testimonial.replaceAll(/["“”]/g, '');
  const { name, title, company, thumbnail } = avatar ?? {};

  return (
    <div className={twMerge(testimonialCardWrapper())}>
      <div
        className={twMerge(testimonialCard())}
        style={{ backgroundImage: `url(${getBackground(background || 'dark')})` }}
      >
        <div className={twMerge(testimonialCardRow({ type: 'content' }))}>
          <div className={twMerge(testimonialCardRow({ type: 'top' }))}>
            {stars && (
              <div className={twMerge(testimonialCardRow({ type: 'stars' }))}>
                {stars.map(
                  (star, index) =>
                    star && (
                      <Icon key={`star-${index}`} className={twMerge(['fill-yellow-400'])} icon={star} size={24} />
                    ),
                )}
              </div>
            )}
            {date && <p className={twMerge(testimonialCardDate({ theme }))}>{date}</p>}
          </div>
          {quote && (
            <div className={twMerge(testimonialCardContentContainer())}>
              <Icon className={twMerge(testimonialCardQuote({ type: 'before', theme }))} icon="quotes" size={12} />
              <p className={twMerge(testimonialCardContent({ theme }))}>
                {quote}
                <Icon className={twMerge(testimonialCardQuote({ type: 'after', theme }))} icon="quotes" size={12} />
              </p>
            </div>
          )}
        </div>
        <div className={twMerge(testimonialCardRow({ type: 'author' }))}>
          {avatar && (
            <Avatar
              name={name}
              role={title}
              company={company}
              image={{
                image: thumbnail as ImageData,
                alt: name as string,
              }}
              theme={background}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
