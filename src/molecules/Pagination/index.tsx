import twMerge from 'twMerge';

import Button from 'molecules/Button';
import paginationContainer, { paginationDot } from 'molecules/Pagination/Pagination.styles';

import { contentfulProps } from 'utils/emptyTypes';
import parseUrl from 'utils/parseUrl';

import type { FC } from 'react';

interface PaginationProps {
  isSimplePagination: boolean;
  baseUrl: string | null;
  numItems: number;
  curItem: number;
}

const Pagination: FC<PaginationProps> = ({ isSimplePagination, baseUrl, numItems, curItem, ...props }) => {
  const pages = [...Array(numItems).keys()].map(i => i + 1);

  const prev = Math.min(curItem - 1, 1);
  const next = Math.max(curItem + 1, numItems);

  return (
    <div className={twMerge(paginationContainer())} {...props}>
      {isSimplePagination ? (
        <>
          <Button
            size="md"
            hierarchy="tertiary"
            startIcon="arrow-left"
            href={{
              href: baseUrl ? `${baseUrl}/${prev}` : undefined,
              ...contentfulProps,
            }}
            disabled={curItem === 1}
          />
          <Button
            size="md"
            hierarchy="tertiary"
            startIcon="arrow-right"
            href={{
              href: baseUrl ? `${baseUrl}/${next}` : undefined,
              ...contentfulProps,
            }}
            disabled={curItem === numItems}
          />
        </>
      ) : (
        <>
          {pages.map(item => {
            const isActive = item === curItem;
            const { Component: as, ...urlProps } = parseUrl(`${baseUrl}/${item}` || '');
            const Component = as === 'div' ? 'button' : 'a';

            return (
              <Component
                className={twMerge(paginationDot({ active: isActive }))}
                disabled={isActive}
                key={item}
                {...urlProps}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Pagination;
