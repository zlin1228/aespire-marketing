import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { twMerge } from 'tailwind-merge';

import 'swiper/css';
import 'components/CardDeck/styles/Carousel.css';

import Button from 'molecules/Button';

import CarouselControls from 'components/CardDeck/components/CarouselControls';
import { containerStyles, headingWrapperStyles } from 'components/CardDeck/styles/CardDeck.styles';
import Card from 'components/Cards/Card';
import ResourceCard from 'components/Cards/ResourceCard';
import Heading from 'components/Heading';
import Trustbar from 'components/Trustbar';

import type { CardDeckProps } from '..';
import type { HeadingProps } from 'components/Heading';
import type { TrustbarProps } from 'components/Trustbar';
import type { ButtonProps } from 'molecules/Button';
import type { FC } from 'react';

const Carousel: FC<CardDeckProps> = ({
  background,
  bottomButton,
  cards,
  cardDeckHeading,
  showTrustbar,
  trustbar,
  variant,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className={twMerge(containerStyles())}>
      <div className={twMerge(headingWrapperStyles())}>
        <Heading padding="none" background={background} contained={false} {...(cardDeckHeading as HeadingProps)} />
        {showTrustbar && <Trustbar padding="none" fullWidth {...(trustbar as TrustbarProps)} />}
      </div>
      <div className="card-deck-carousel">
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={32}
          breakpoints={{
            568: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 32,
            },
            1200: {
              slidesPerView: 'auto',
              slidesPerGroup: 3,
              spaceBetween: 32,
            },
          }}
          onSlideChange={e => setActiveSlideIndex(e.activeIndex)}
        >
          {cards?.map(card => {
            switch (card?.__typename) {
              case 'ContentfulComponentCard':
                return (
                  <SwiperSlide key={card?.id}>
                    <Card centerText={variant === 'Contained'} {...card} />
                  </SwiperSlide>
                );
              case 'ContentfulTemplateBlogPost':
              case 'ContentfulTemplateCaseStudy':
              case 'ContentfulTemplateNewsPost':
              case 'ContentfulTemplateResourceCenter':
                return (
                  <SwiperSlide key={card?.id}>
                    <ResourceCard {...card} />
                  </SwiperSlide>
                );
              default:
                return null;
            }
          })}
          <CarouselControls activeSlideIndex={activeSlideIndex} cards={cards} />
        </Swiper>
        {bottomButton && <Button {...(bottomButton as ButtonProps)} />}
      </div>
    </div>
  );
};

export default Carousel;
