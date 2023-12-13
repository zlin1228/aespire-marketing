import { useSwiper } from 'swiper/react';
import twMerge from 'twMerge';

import Icon from 'molecules/Icon';

import {
  buttonIconStyles,
  buttonStyles,
  dotStyles,
} from 'components/CaseStudySlider/styles/CaseStudySliderControls.styles';

import type { ContentfulComponentCaseStudySlider } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

export type QuoteSliderProps = ContentfulComponentCaseStudySlider & SectionProps;

interface QuoteSliderControlsProps {
  activeSlideIndex: number;
  caseStudyCards: ContentfulComponentCaseStudySlider['caseStudyCards'];
}

const QuoteSliderControls: FC<QuoteSliderControlsProps> = ({ activeSlideIndex, caseStudyCards }) => {
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
        {caseStudyCards?.map((card, index) => (
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
