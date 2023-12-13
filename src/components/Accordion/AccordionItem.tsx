import { useEffect, useRef, useState } from 'react';
import twMerge from 'twMerge';

import Icon from 'molecules/Icon';

import { accordionItem, accordionItemBody, accordionItemTitle } from 'components/Accordion/Accordion.styles';

import richTextParser from 'utils/richTextParser/richTextParser';

import type { ContentfulItemAccordion } from 'graphqlTypes';
import type { IconIds } from 'molecules/Icon';
import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser/richTextParser';

interface AccordionItemProps extends ContentfulItemAccordion {
  theme: 'light' | 'dark';
  isOpen: boolean;
}

const AccordionItem: FC<AccordionItemProps> = ({ theme = 'light', question, answer, isOpen }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const contentHeight =
      (isOpen && contentRef.current && (contentRef.current as HTMLDivElement).getBoundingClientRect().height) || 0;
    setHeight(contentHeight);
  }, [isOpen]);

  return (
    <div className="flex cursor-pointer flex-row gap-4 px-2 py-8 md:gap-6 md:p-8">
      <div>
        <Icon
          icon={(isOpen ? 'minus-circle' : 'plus-circle') as IconIds}
          className={`${isOpen ? 'fill-green-500' : 'fill-gray-400'}`}
          size={24}
          aria-hidden={true}
        />
      </div>
      <div className="flex flex-col gap-1">
        {question && <p className={twMerge(accordionItemTitle({ theme }))}>{question}</p>}
        {answer && (
          <div
            className={twMerge(accordionItem({ isOpen }))}
            style={{
              height: `${height}px`,
            }}
          >
            <div ref={contentRef} className={twMerge(accordionItemBody({ theme }))}>
              {richTextParser(answer as RichText)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
