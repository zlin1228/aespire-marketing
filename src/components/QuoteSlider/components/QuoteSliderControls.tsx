import { useSwiper } from 'swiper/react';
import twMerge from 'twMerge';

import Icon from 'molecules/Icon';

import { buttonIconStyles, buttonStyles, dotStyles } from 'components/QuoteSlider/styles/QuoteSliderControls.styles';

import type { ContentfulComponentQuoteSlider } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

export type QuoteSliderProps = ContentfulComponentQuoteSlider & SectionProps;

interface QuoteSliderControlsProps {
  activeSlideIndex: number;
  quoteCards: ContentfulComponentQuoteSlider['quoteCards'];
}

const QuoteSliderControls: FC<QuoteSliderControlsProps> = ({ activeSlideIndex, quoteCards }) => {
  const swiper = useSwiper();

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
        {quoteCards?.map((card, index) => (
          <button
            key={card?.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className="group flex items-center justify-center p-2 last:pr-0"
            onClick={() => swiper.slideTo(index)}
          >
            <div className={twMerge(dotStyles({ states: index === activeSlideIndex ? 'active' : null }))} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuoteSliderControls;
