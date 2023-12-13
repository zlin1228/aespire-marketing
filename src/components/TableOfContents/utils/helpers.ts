import type { Block, Inline, Text } from '@contentful/rich-text-types';
import type { Dispatch, SetStateAction } from 'react';

export const handleScroll = (id: string, setActiveItem: Dispatch<SetStateAction<string>>) => {
  setActiveItem(id);

  const element = document.getElementById(id);
  const offset = 124;
  const bodyRect = document.body.getBoundingClientRect().top;

  if (!element) {
    return;
  }

  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export const extractTableItems = (headings: Block[]): { label: string; id: string }[] => {
  const extractedItems: { label: string; id: string }[] = [];

  const extractContent = (content: Array<Block | Inline | Text>) => {
    for (const item of content) {
      if (item.nodeType === 'text') {
        const label = item.value;
        const id = label.toLowerCase().replace(/\s+/g, '-');
        extractedItems.push({ label, id });
      } else if ('content' in item) {
        extractContent(item.content);
      }
    }
  };

  extractContent(headings);

  return extractedItems;
};
