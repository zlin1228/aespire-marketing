import twMerge from 'twMerge';

import Button from 'molecules/Button';
import Image from 'molecules/Image';
import Rating from 'molecules/Rating';
import Section from 'molecules/Section';

import headingStyles, {
  buttonContainer,
  formContainer,
  headingContent,
  headingEyebrow,
  headingSubhead,
} from 'components/ConversionPanel/ConversionPanel.styles';
import ComponentForm from 'components/Form';
import { type HeadingProps } from 'components/Heading';

import getTheme from 'utils/getTheme';
import richTextParser from 'utils/richTextParser/richTextParser';

import type { ContentfulComponentConversionPanel } from 'graphqlTypes';
import type { ImageData } from 'molecules/Image';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser/richTextParser';

export type ConversionPanelProps = ContentfulComponentConversionPanel & SectionProps;

const ConversionPanel: FC<ConversionPanelProps> = ({
  id,
  background,
  conversionHeading,
  backgroundImage,
  assets,
  isContained,
  rating,
  sectionIdLink,
}) => {
  const theme = getTheme(background || 'white');
  const reference = backgroundImage || assets;

  const getContent = (props: HeadingProps) => {
    const { eyebrow, heading, headingSize, subheading, richText, buttons } = props;
    const H = conversionHeading?.headingAs || 'h2';

    return (
      <div
        className={`${twMerge(
          headingStyles({ alignment: reference ? 'start' : 'center', contained: isContained ? theme : undefined }),
        )} ${reference ? 'lg:max-w-[592px]' : undefined} w-full`}
      >
        {eyebrow && <p className={twMerge(headingEyebrow({ theme }))}>{eyebrow}</p>}
        {heading && (
          <H className={twMerge(headingContent({ theme, size: isContained ? 'md' : headingSize }))}>{heading}</H>
        )}
        {subheading && (
          <p className={twMerge(headingSubhead({ theme, size: isContained ? 'md' : 'lg' }))}>{subheading}</p>
        )}
        {richText && (
          <div className={twMerge(headingSubhead({ theme, size: isContained ? 'md' : 'lg' }))}>
            {richTextParser(richText as RichText, undefined, theme)}
          </div>
        )}
        {buttons && (
          <div className={twMerge(buttonContainer())}>
            {buttons.map(button => button && <Button {...button} key={button.internalName} />)}
          </div>
        )}
      </div>
    );
  };

  return (
    <Section id={sectionIdLink} background={background} contained={false}>
      <div className="relative z-[1] flex flex-col justify-between gap-8 lg:flex-row">
        <div className="mx-auto flex w-full flex-col gap-12">
          {conversionHeading && getContent(conversionHeading)}
          {rating && <Rating {...rating} alignment="Left Aligned" className="p-0" />}
        </div>
        {assets?.__typename === 'ContentfulItemMediaAsset' && (
          <Image
            image={assets?.image as ImageData}
            alt={assets?.title || ''}
            className="h-auto w-full max-w-full lg:max-w-[592px]"
          />
        )}
        {assets?.__typename === 'ContentfulComponentForm' && (
          <div className={twMerge(formContainer())}>
            <ComponentForm {...assets} sectionID={id} />
          </div>
        )}
      </div>
      {backgroundImage && (
        <div className="relative left-[calc(50%-50vw)] top-12 h-full w-screen md:top-16 lg:absolute lg:top-0">
          <Image
            image={backgroundImage?.image as ImageData}
            alt={backgroundImage?.title || ''}
            className="h-full w-[100vw] max-w-[100vw] object-cover object-center"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-[#111727] from-5% to-transparent to-20% lg:bg-gradient-to-r lg:from-[#0e131af2] lg:from-40% lg:to-70%" />
        </div>
      )}
    </Section>
  );
};

export default ConversionPanel;
