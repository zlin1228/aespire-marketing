import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

import 'swiper/css';

import Section from 'molecules/Section';

import SlideboxButton from 'components/Slidebox/components/SlideboxButton';
import SlideboxCard from 'components/Slidebox/components/SlideboxCard';
import 'components/Slidebox/styles/Slidebox.css';

import getTheme from 'utils/getTheme';

import type { ContentfulComponentSlidebox } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';
import type { SwiperRef } from 'swiper/react';

export type SlideboxProps = ContentfulComponentSlidebox & SectionProps;

const Slidebox: FC<SlideboxProps> = ({ background, contained, padding, sectionIdLink, slides }) => {
  const theme = getTheme(background || 'white');
  const controlsRef = useRef<SwiperRef | null>(null);
  const slidesRef = useRef<SwiperRef | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Section
      id={sectionIdLink}
      background={background}
      padding={padding}
      contained={contained}
      fullWidth={true}
      containerClass="px-0 md:px-0 xl:px-0 overflow-hidden"
    >
      <div className="flex flex-col gap-8">
        <div className="slidebox-swiper mx-auto sm:max-w-[614px] md:max-w-[704px] lg:hidden">
          <Swiper
            ref={controlsRef}
            slidesPerView="auto"
            slidesPerGroup={1}
            spaceBetween={32}
            onSlideChange={e => setSlideIndex(e.activeIndex)}
          >
            {slides?.map(
              (slide, index) =>
                slide && (
                  <SwiperSlide key={uuidv4()}>
                    <SlideboxButton
                      index={index}
                      slide={slide}
                      slideIndex={slideIndex}
                      setSlideIndex={setSlideIndex}
                      theme={theme}
                      controlsRef={controlsRef}
                      slidesRef={slidesRef}
                    />
                  </SwiperSlide>
                ),
            )}
          </Swiper>
        </div>
        <div className="mx-auto flex w-full max-w-sm flex-col gap-8 md:max-w-md md:px-8 lg:max-w-lg xl:max-w-xl">
          <div className="hidden grid-cols-6 lg:grid">
            {slides?.map(
              (slide, index) =>
                slide && (
                  <SlideboxButton
                    index={index}
                    key={uuidv4()}
                    slide={slide}
                    slideIndex={slideIndex}
                    setSlideIndex={setSlideIndex}
                    theme={theme}
                    controlsRef={controlsRef}
                    slidesRef={slidesRef}
                  />
                ),
            )}
          </div>
          <Swiper ref={slidesRef} onSlideChange={e => setSlideIndex(e.activeIndex)}>
            {slides?.map(
              slide =>
                slide && (
                  <SwiperSlide key={slide?.id}>
                    <SlideboxCard theme={theme} activeSlide={slideIndex === slides.indexOf(slide)} {...slide} />
                  </SwiperSlide>
                ),
            )}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default Slidebox;
