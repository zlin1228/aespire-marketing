import twMerge from 'twMerge';

import sectionStyles, { sectionWrapper } from 'molecules/Section/Section.styles';

import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, ElementType, FC } from 'react';

export type backgroundType = VariantProps<typeof sectionStyles>['background'];

export interface SectionProps
  extends ComponentPropsWithoutRef<ElementType>,
    VariantProps<typeof sectionStyles>,
    VariantProps<typeof sectionWrapper> {
  sectionAs?: ElementType;
}

const Section: FC<SectionProps> = ({
  padding = 'large',
  background = 'white',
  contained = true,
  fullWidth = false,
  sectionAs = 'section',
  containerClass,
  children,
  ...props
}) => {
  const SectionComponent = sectionAs;

  return (
    <SectionComponent className={twMerge(sectionStyles({ background }))} {...props}>
      <div className={`${twMerge(sectionWrapper({ padding, contained, fullWidth }))} ${containerClass || ''}`}>
        {children}
      </div>
    </SectionComponent>
  );
};

export default Section;
