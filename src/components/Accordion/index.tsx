import { useState } from 'react';
import twMerge from 'twMerge';

import Button from 'molecules/Button';
import Section from 'molecules/Section';

import headingStyles, {
  buttonContainer,
  headingContent,
  headingEyebrow,
  headingSubhead,
} from 'components/Accordion/Accordion.styles';
import AccordionItem from 'components/Accordion/AccordionItem';
import { type HeadingProps } from 'components/Heading';

import getTheme from 'utils/getTheme';
import onKeyDown from 'utils/onKeyDown';

import type { ContentfulComponentAccordion } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

export type AccordionProps = ContentfulComponentAccordion & SectionProps;

const Accordion: FC<AccordionProps> = ({ background, accordionHeading, accordions, sectionIdLink }) => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const theme = getTheme(background || 'white');
  const ItemWrapper = 'div';

  const handleQuestion = (questionIndex: number) => {
    if (openQuestion === questionIndex) {
      return setOpenQuestion(null);
    }
    setOpenQuestion(questionIndex);
  };

  const getContent = (props: HeadingProps) => {
    const { eyebrow, heading, subheading, buttons } = props;
    const H = accordionHeading?.headingAs || 'h2';

    return (
      <div className={twMerge(headingStyles())}>
        {eyebrow && <p className={twMerge(headingEyebrow({ theme }))}>{eyebrow}</p>}
        {heading && <H className={twMerge(headingContent({ theme }))}>{heading}</H>}
        {subheading && <p className={twMerge(headingSubhead({ theme }))}>{subheading}</p>}
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
      <div className="flex w-full flex-col gap-12">
        {accordionHeading && getContent(accordionHeading)}
        <div className="mx-auto flex w-full max-w-[864px] flex-col">
          {accordions?.map(
            (item, idx) =>
              item && (
                <ItemWrapper
                  key={item?.id}
                  tabIndex={0}
                  onClick={() => handleQuestion(idx)}
                  onKeyDown={e => onKeyDown(e, () => handleQuestion(idx))}
                >
                  <AccordionItem {...item} theme={theme} isOpen={idx === openQuestion} />
                </ItemWrapper>
              ),
          )}
        </div>
      </div>
    </Section>
  );
};

export default Accordion;
