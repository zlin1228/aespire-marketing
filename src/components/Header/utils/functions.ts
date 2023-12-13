import type { HeaderMenuProps } from 'components/Header/components/HeaderMenu';
import type { Dispatch, SetStateAction } from 'react';

export const handleMouseOver = (index: number, setActiveDropdownIndex: Dispatch<SetStateAction<number | null>>) => {
  setActiveDropdownIndex(index);
};

export const getMenuType = (links: HeaderMenuProps['links']): 'menu' | 'links' => {
  for (const link of links || []) {
    if (link?.__typename === 'ContentfulItemMenu') {
      return 'menu';
    }
  }

  return 'links';
};

export const getLayout = (links: HeaderMenuProps['links'], __typename?: string): 'sideBySide' | 'stacked' => {
  if (__typename === 'ContentfulItemMenu') {
    return 'sideBySide';
  }

  if (links && links?.length > 5) {
    return 'sideBySide';
  }

  return 'stacked';
};
