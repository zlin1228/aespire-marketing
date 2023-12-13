import { twMerge } from 'tailwind-merge';

import { buttonStyles } from 'components/Slidebox/styles/SlideboxButton.styles';

import type { ContentfulComponentSlideboxCard } from 'graphqlTypes';
import type { Dispatch, FC, SetStateAction } from 'react';
import type { SwiperRef } from 'swiper/react';
import type getTheme from 'utils/getTheme';

interface SlideboxButtonProps {
  theme: ReturnType<typeof getTheme>;
  slide: ContentfulComponentSlideboxCard;
  index: number;
  slideIndex: number;
  setSlideIndex: Dispatch<SetStateAction<number>>;
  controlsRef: React.RefObject<SwiperRef | null>;
  slidesRef: React.RefObject<SwiperRef | null>;
}

const SlideboxButton: FC<SlideboxButtonProps> = ({
  theme,
  slide,
  index,
  slideIndex,
  setSlideIndex,
  controlsRef,
  slidesRef,
}) => (
  <button
    type="button"
    className={twMerge(buttonStyles({ [slideIndex === index ? 'active' : 'inactive']: theme }))}
    onClick={() => {
      controlsRef?.current?.swiper?.slideTo(index);
      slidesRef?.current?.swiper?.slideTo(index);
      setSlideIndex(index);
    }}
  >
    {slide?.eyebrow}
  </button>
);

export default SlideboxButton;
