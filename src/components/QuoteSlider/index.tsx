'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import Section from 'molecules/Section';

import QuoteCard from 'components/QuoteSlider/components/QuoteCard';
import QuoteSliderControls from 'components/QuoteSlider/components/QuoteSliderControls';
import { containerStyles } from 'components/QuoteSlider/styles/QuoteSlider.styles';

import type { ContentfulComponentQuoteSlider } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

export type QuoteSliderProps = ContentfulComponentQuoteSlider & SectionProps;

const QuoteSlider: FC<QuoteSliderProps> = ({ background, padding, contained, quoteCards, sectionIdLink }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Section id={sectionIdLink} background={background} padding={padding} contained={contained}>
      <div className={containerStyles({ cursor: quoteCards && quoteCards.length > 1 ? 'grab' : 'auto' })}>
        <Swiper onSlideChange={e => setActiveSlideIndex(e.activeIndex)}>
          {quoteCards?.map(
            card =>
              card && (
                <SwiperSlide key={card?.id}>
                  <QuoteCard {...card} />
                </SwiperSlide>
              ),
          )}
          {quoteCards && quoteCards?.length > 1 && (
            <QuoteSliderControls activeSlideIndex={activeSlideIndex} quoteCards={quoteCards} />
          )}
        </Swiper>
      </div>
    </Section>
  );
};

export default QuoteSlider;
