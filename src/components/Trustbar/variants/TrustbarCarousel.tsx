'use client';

import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';

import Image from 'molecules/Image';

import {
  containerStyles,
  imageStyles,
  overlayLeftStyles,
  overlayRightStyles,
  wrapperStyles,
} from 'components/Trustbar/styles/TrustbarCarousel.styles';

import type { TrustbarVariantProps } from '..';
import type { StaticImage } from 'molecules/Image';
import type { FC } from 'react';

const TrustbarCarousel: FC<TrustbarVariantProps> = ({ logos, theme }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(0);
  const allLogos = Array.from({ length: 3 }).flatMap(() => logos);

  useEffect(() => {
    const animateWrapper = () => {
      const totalWidth = wrapperRef.current ? wrapperRef.current.offsetWidth : 0;

      setPosition(prevPosition => {
        if (prevPosition <= -totalWidth / 2) {
          return 0;
        }

        return prevPosition - 2;
      });
    };

    const animationInterval = setInterval(animateWrapper, 40);

    return () => clearInterval(animationInterval);
  }, [logos]);

  return (
    <div className={twMerge(containerStyles())}>
      <div className={twMerge(overlayLeftStyles({ theme }))} />
      <div className={twMerge(wrapperStyles())} ref={wrapperRef} style={{ transform: `translateX(${position}px)` }}>
        {allLogos.map(logo => (
          <div key={uuidv4()}>
            <Image image={logo as StaticImage} alt={logo?.title || 'Logo'} className={twMerge(imageStyles())} />
          </div>
        ))}
      </div>
      <div className={twMerge(overlayRightStyles({ theme }))} />
    </div>
  );
};

export default TrustbarCarousel;
