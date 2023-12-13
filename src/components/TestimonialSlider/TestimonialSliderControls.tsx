import { useSwiper } from 'swiper/react';
import twMerge from 'twMerge';

import Icon from 'molecules/Icon';

import {
  testimonialButtonIconStyles,
  testimonialButtonStyles,
  testimonialDotStyles,
} from 'components/TestimonialSlider/TestimonialSlider.styles';

import type { ContentfulComponentQuoteSlider, ContentfulComponentTestimonialSlider } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

export type TestimonialSliderProps = ContentfulComponentQuoteSlider & SectionProps;

interface TestimonialSliderControlsProps {
  activeSlideIndex: number;
  cards: ContentfulComponentTestimonialSlider['cards'];
}

const TestimonialSliderControls: FC<TestimonialSliderControlsProps> = ({ activeSlideIndex, cards }) => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-between pt-8 sm:pt-12 xl:pt-16">
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Previous Slide"
          className={twMerge(testimonialButtonStyles())}
          onClick={() => swiper.slidePrev()}
        >
          <Icon icon="arrow-back" size={20} className={twMerge(testimonialButtonIconStyles({ icon: 'prev' }))} />
        </button>
        <button
          type="button"
          aria-label="Next Slide"
          className={twMerge(testimonialButtonStyles())}
          onClick={() => swiper.slideNext()}
        >
          <Icon icon="arrow-forward" size={20} className={twMerge(testimonialButtonIconStyles({ icon: 'next' }))} />
        </button>
      </div>
      <div className="flex items-center gap-0">
        {cards?.map((card, index) => (
          <button
            key={card?.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className="group flex items-center justify-center p-2 last:pr-0"
            onClick={() => swiper.slideTo(index)}
          >
            <div className={twMerge(testimonialDotStyles({ states: index === activeSlideIndex ? 'active' : null }))} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSliderControls;
