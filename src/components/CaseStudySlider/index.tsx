'use client';

import { useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import Section from 'molecules/Section';

import CaseStudyCard from 'components/CaseStudySlider/components/CaseStudyCard';
import CaseStudySliderControls from 'components/CaseStudySlider/components/CaseStudySliderControls';
import { containerStyles } from 'components/CaseStudySlider/styles/CaseStudySlider.styles';
import Heading from 'components/Heading';

import type { ContentfulComponentCaseStudySlider } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

export type CaseStudySliderProps = ContentfulComponentCaseStudySlider & SectionProps;

const CaseStudySlider: FC<CaseStudySliderProps> = ({
  background,
  padding,
  contained,
  caseStudyCards,
  sectionIdLink,
  ...props
}) => {
  const { eyebrow, heading } = props;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Section id={sectionIdLink} background={background} padding={padding} contained={contained}>
      {(eyebrow || heading) && (
        <Heading
          eyebrow={eyebrow || ''}
          heading={heading || ''}
          headingSize="md"
          background={background}
          padding="small"
        />
      )}
      <div className={containerStyles({ cursor: caseStudyCards && caseStudyCards.length > 1 ? 'grab' : 'auto' })}>
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          onSlideChange={e => setActiveSlideIndex(e.activeIndex)}
        >
          {caseStudyCards?.map(
            card =>
              card && (
                <SwiperSlide key={card?.id}>
                  <CaseStudyCard {...card} />
                </SwiperSlide>
              ),
          )}
          {caseStudyCards && caseStudyCards?.length > 1 && (
            <CaseStudySliderControls activeSlideIndex={activeSlideIndex} caseStudyCards={caseStudyCards} />
          )}
        </Swiper>
      </div>
    </Section>
  );
};

export default CaseStudySlider;
