'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import twMerge from 'twMerge';

import 'swiper/css';

import 'components/TestimonialSlider/styles/TestimonialSlider.css';

import Section from 'molecules/Section';

import ComponentHeading from 'components/Heading';
import TestimonialCard from 'components/TestimonialSlider/TestimonialCard';
import testimonialSliderStyles from 'components/TestimonialSlider/TestimonialSlider.styles';
import TestimonialSliderControls from 'components/TestimonialSlider/TestimonialSliderControls';

import type { HeadingProps } from '@storybook/blocks';
import type { TestimonialCardProps } from 'components/TestimonialSlider/TestimonialCard';
import type { ContentfulComponentTestimonialSlider } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

export type TestimonialSliderProps = Omit<ContentfulComponentTestimonialSlider, 'children'> & SectionProps;

const TestimonialSlider: FC<TestimonialSliderProps> = ({
  background,
  padding,
  contained,
  testimonialHeading,
  cards,
  sectionIdLink,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Section
      id={sectionIdLink}
      background={background}
      padding={padding}
      contained={contained}
      containerClass="flex flex-col gap-8 sm:gap-12 md:gap-16 overflow-hidden"
    >
      {testimonialHeading && (
        <ComponentHeading
          background={background || 'white'}
          alignment="start"
          padding="none"
          {...(testimonialHeading as HeadingProps)}
        />
      )}
      <div
        className={twMerge(
          testimonialSliderStyles({ cursor: cards && cards.length > 3 ? 'grab' : 'auto' }),
          'testimonial-slider',
        )}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={32}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            568: {
              slidesPerView: 'auto',
              spaceBetween: 32,
            },
            1440: {
              slidesPerView: 'auto',
              spaceBetween: 32,
            },
          }}
          onSlideChange={e => setActiveSlideIndex(e.activeIndex)}
        >
          {cards &&
            cards.map(
              testimonial =>
                testimonial && (
                  <SwiperSlide key={testimonial?.id}>
                    <TestimonialCard key={testimonial.internalName} {...(testimonial as TestimonialCardProps)} />
                  </SwiperSlide>
                ),
            )}
          {cards && cards?.length > 3 && (
            <TestimonialSliderControls activeSlideIndex={activeSlideIndex} cards={cards} />
          )}
        </Swiper>
      </div>
    </Section>
  );
};

export default TestimonialSlider;
