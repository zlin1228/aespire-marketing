import twMerge from 'twMerge';

import Button from 'molecules/Button';
import Section from 'molecules/Section';

import headingStyles, {
  buttonContainer,
  headingContent,
  headingEyebrow,
  headingSubhead,
} from 'components/Heading/Heading.styles';

import getTheme from 'utils/getTheme';
import richTextParser from 'utils/richTextParser/richTextParser';

import type { VariantProps } from 'class-variance-authority';
import type { ButtonProps } from 'molecules/Button';
import type { SectionProps } from 'molecules/Section';
import type { ElementType, FC } from 'react';
import type { RichText } from 'utils/richTextParser/richTextParser';

export interface HeadingProps extends VariantProps<typeof headingStyles>, SectionProps {
  theme?: ReturnType<typeof getTheme>;
  eyebrow?: string;
  heading?: string;
  headingAs?: ElementType;
  headingSize?: VariantProps<typeof headingContent>['size'];
  subheading?: string;
  richText?: string;
  buttons?: ButtonProps[];
}

const Heading: FC<HeadingProps> = ({
  theme,
  eyebrow,
  heading,
  headingAs,
  headingSize,
  subheading,
  richText,
  buttons,
  alignment = 'center',
  background = 'white',
  padding = 'large',
  contained = true,
  fullWidth = false,
  sectionIdLink,
}) => {
  const headingTheme = theme || getTheme(background || 'white');
  const H = headingAs || 'h2';

  return (
    <Section id={sectionIdLink} background={background} padding={padding} contained={contained} fullWidth={fullWidth}>
      <div className={twMerge(headingStyles({ alignment }))}>
        {eyebrow && <p className={twMerge(headingEyebrow({ theme: headingTheme }))}>{eyebrow}</p>}
        {heading && (
          <H className={twMerge(headingContent({ theme: headingTheme, size: headingSize || 'lg' }))}>{heading}</H>
        )}
        {subheading && <p className={twMerge(headingSubhead({ theme: headingTheme }))}>{subheading}</p>}
        {richText && (
          <div className={twMerge(headingSubhead({ theme: headingTheme }))}>
            {richTextParser(richText as RichText, undefined, headingTheme)}
          </div>
        )}
        {buttons && (
          <div className={twMerge(buttonContainer())}>
            {buttons.map(button => button && <Button {...button} key={button.internalName} />)}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Heading;
