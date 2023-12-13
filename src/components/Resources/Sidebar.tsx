import twMerge from 'twMerge';

import Checkbox from 'molecules/Checkbox';
import Dropdown from 'molecules/Dropdown';
import Icon from 'molecules/Icon';
import TextField from 'molecules/TextField';

import SubscribeForm from 'components/Resources/SubscribeForm';
import sidebarStyles, { sidebarStickyStyles } from 'components/Resources/styles/Sidebar.styles';
import { getIndustryItems } from 'components/Resources/utils/getFilterLists';

import onKeyDown from 'utils/onKeyDown';

import type { DropdownItemProps } from 'molecules/Dropdown/DropdownItem';
import type { FC } from 'react';

export type SidebarProps = {
  categoryListItems?: DropdownItemProps[];
  handleTagFiltersChange: (value: string) => void;
  handleInputChange: (value: string) => void;
  dropdownFilterValue: (value: number) => void;
  clearFilterCategories: () => void;
  categories: string[];
  query: string;
};

const Sidebar: FC<SidebarProps> = ({
  categoryListItems,
  handleTagFiltersChange,
  handleInputChange,
  dropdownFilterValue,
  clearFilterCategories,
  categories,
  query,
}) => {
  const industryListItems = getIndustryItems();

  const ClearFilter = 'div';

  return (
    <div className={twMerge(sidebarStyles())}>
      <div className={twMerge(sidebarStickyStyles())}>
        <p className="text-xl font-semibold text-black">Categories</p>
        <TextField
          placeholder="Search"
          icon="search"
          defaultValue={query}
          onChange={e => handleInputChange(e.target.value)}
        />
        {industryListItems && (
          <Dropdown label="Select Industry" items={industryListItems} type="filter" onChange={dropdownFilterValue} />
        )}
        {categoryListItems && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-1">
            {categoryListItems?.map(category => (
              <Checkbox
                key={category?.label}
                label={category?.label || ''}
                handleClick={handleTagFiltersChange}
                checked={categories.includes(category?.label || '')}
              />
            ))}
          </div>
        )}
        {categoryListItems && (
          <ClearFilter
            className="flex cursor-pointer items-center gap-2 p-2 text-sm font-semibold text-green-500"
            onClick={() => clearFilterCategories()}
            onKeyDown={e => onKeyDown(e, () => clearFilterCategories())}
          >
            <Icon icon="close-green-bg" size={20} aria-hidden={true} className="fill-transparent" />
            Clear all filters
          </ClearFilter>
        )}
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Sidebar;
