import { useWindowSize } from '@react-hookz/web';
import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import twMerge from 'twMerge';

import Icon from 'molecules/Icon';

import { buttonIconStyles, buttonStyles, dotStyles } from 'components/CardDeck/styles/CarouselControls.styles';
import { getNumberOfDots, swiperSettings } from 'components/CardDeck/utils/helpers';

import type { ContentfulComponentCardDeck } from 'graphqlTypes';
import type { FC } from 'react';

interface CarouselControlsProps {
  activeSlideIndex: number;
  cards: ContentfulComponentCardDeck['cards'];
}

const CarouselControls: FC<CarouselControlsProps> = ({ activeSlideIndex, cards }) => {
  const swiper = useSwiper();
  const { width } = useWindowSize();

  const totalSlides = cards?.length ?? 0;

  const [currentConfig, setCurrentConfig] = useState<{
    slidesPerView: number | string;
    slidesPerGroup: number;
  }>({
    slidesPerView: swiperSettings.slidesPerView,
    slidesPerGroup: swiperSettings.slidesPerGroup,
  });

  useEffect(() => {
    if (width >= 1200) {
      setCurrentConfig({
        slidesPerView: swiperSettings.breakpoints[1200].slidesPerView,
        slidesPerGroup: swiperSettings.breakpoints[1200].slidesPerGroup,
      });
    } else if (width >= 568) {
      setCurrentConfig({
        slidesPerView: swiperSettings.breakpoints[568].slidesPerView,
        slidesPerGroup: swiperSettings.breakpoints[568].slidesPerGroup,
      });
    } else {
      setCurrentConfig({
        slidesPerView: swiperSettings.slidesPerView,
        slidesPerGroup: swiperSettings.slidesPerGroup,
      });
    }
  }, [width]);

  const dotsCount = getNumberOfDots(currentConfig.slidesPerGroup, currentConfig.slidesPerView, totalSlides);

  if (!cards || cards.length === 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-between pt-8 sm:pt-12 xl:pt-16">
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Previous Slide"
          className={twMerge(buttonStyles())}
          onClick={() => swiper.slidePrev()}
        >
          <Icon icon="arrow-back" size={20} className={twMerge(buttonIconStyles({ icon: 'prev' }))} />
        </button>
        <button
          type="button"
          aria-label="Next Slide"
          className={twMerge(buttonStyles())}
          onClick={() => swiper.slideNext()}
        >
          <Icon icon="arrow-forward" size={20} className={twMerge(buttonIconStyles({ icon: 'next' }))} />
        </button>
      </div>
      <div className="flex items-center gap-0">
        {Array.from({ length: dotsCount }).map((_, index) => {
          const isViewingLastSlides = activeSlideIndex >= totalSlides - currentConfig.slidesPerGroup;
          const activeGroupTest = Math.floor(activeSlideIndex / currentConfig.slidesPerGroup);

          let dotState = null;

          if (index === dotsCount - 1 && isViewingLastSlides) {
            dotState = 'active';
          } else if (!isViewingLastSlides && index === activeGroupTest) {
            dotState = 'active';
          }

          return (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              type="button"
              aria-label={`Go to slide group ${index + 1}`}
              className="group flex items-center justify-center p-2 last:pr-0"
              onClick={() => {
                swiper.slideTo(index * currentConfig.slidesPerGroup);
              }}
            >
              <div className={twMerge(dotStyles({ states: dotState as 'active' | null }))} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default CarouselControls;
