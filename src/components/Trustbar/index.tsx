import { twMerge } from 'tailwind-merge';

import Section from 'molecules/Section';

import { eyebrowStyles } from 'components/Trustbar/styles/Trustbar.styles';
import TrustbarAwards from 'components/Trustbar/variants/TrustbarAwards';
import TrustbarCarousel from 'components/Trustbar/variants/TrustbarCarousel';
import TrustbarStatic from 'components/Trustbar/variants/TrustbarStatic';

import getTheme from 'utils/getTheme';

import type { ContentfulComponentTrustbar } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

export interface TrustbarProps extends Omit<ContentfulComponentTrustbar, 'variant'>, SectionProps {
  variant?: 'Awards' | 'Carousel' | 'Static';
}

export interface TrustbarVariantProps {
  logos: TrustbarProps['logos'];
  theme: ReturnType<typeof getTheme>;
  fullWidth?: boolean;
}

const Trustbar: FC<TrustbarProps> = ({ background, contained, eyebrow, logos, padding, variant, sectionIdLink }) => {
  const theme = getTheme(background || 'white');

  const renderVariantComponent = () => {
    switch (variant) {
      case 'Awards':
        return <TrustbarAwards logos={logos} theme={theme} />;
      case 'Carousel':
        return <TrustbarCarousel logos={logos} theme={theme} />;
      case 'Static':
        return <TrustbarStatic logos={logos} theme={theme} />;
      default:
        return null;
    }
  };

  return (
    <Section id={sectionIdLink} background={background} padding={padding} contained={contained}>
      <div className="flex flex-col gap-14">
        {eyebrow && <p className={twMerge(eyebrowStyles({ theme }))}>{eyebrow}</p>}
        {variant && renderVariantComponent()}
      </div>
    </Section>
  );
};

export default Trustbar;
