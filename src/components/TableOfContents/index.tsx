import { type FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Dropdown from 'molecules/Dropdown';

import { buttonStyles, listItemStyles } from 'components/TableOfContents/styles/TableOfContents.styles';
import { extractTableItems, handleScroll } from 'components/TableOfContents/utils/helpers';

import type { CommonNode } from '@contentful/rich-text-react-renderer';
import type { Block } from '@contentful/rich-text-types';
import type { RichText } from 'utils/richTextParser/richTextParser';

interface TableOfContentsProps {
  richText: RichText;
}

const TableOfContents: FC<TableOfContentsProps> = ({ richText }) => {
  const [activeItem, setActiveItem] = useState<string>('');

  if (!richText || !richText.raw) {
    return null;
  }

  const headings = JSON.parse(richText.raw as string).content.filter(
    (node: CommonNode) => node.nodeType === 'heading-2',
  ) as Block[];

  const tableItems = extractTableItems(headings);

  if (tableItems.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 xl:hidden">
        <p className="text-sm font-semibold text-gray-700">Table of Contents</p>
        <Dropdown
          label="Jump to"
          type="input"
          items={tableItems}
          onChange={idx => {
            handleScroll(tableItems[idx].id, setActiveItem);
          }}
        />
      </div>
      <div className="hidden xl:flex xl:flex-col xl:gap-4">
        <p className="text-xl font-semibold text-moss-900">Table of Contents</p>
        <ul>
          {tableItems.map(({ id, label }) => {
            if (!label || !id || id === '-') {
              return null;
            }

            return (
              <li key={label} className={twMerge(listItemStyles({ state: activeItem === id ? 'active' : 'inactive' }))}>
                <button
                  onClick={() => handleScroll(id, setActiveItem)}
                  className={twMerge(buttonStyles({ state: activeItem === id ? 'active' : 'inactive' }))}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;
