import { useEffect, useState } from 'react';
import twMerge from 'twMerge';

import dropdownStyles, { dropdownChevron, popupContainerStyles } from 'molecules/Dropdown/Dropdown.styles';
import DropdownItem from 'molecules/Dropdown/DropdownItem';
import Icon from 'molecules/Icon';

import type { VariantProps } from 'class-variance-authority';
import type { DropdownItemProps } from 'molecules/Dropdown/DropdownItem';
import type { IconIds } from 'molecules/Icon';
import type { FC } from 'react';

interface DropdownProps extends VariantProps<typeof dropdownStyles> {
  startIcon?: IconIds | null;
  label: string;
  items?: DropdownItemProps[];
  onChange: (idx: number) => void;
  returnDefault?: boolean;
  defaultValue?: number;
}

const Dropdown: FC<DropdownProps> = ({
  type,
  startIcon,
  label,
  items,
  onChange,
  returnDefault,
  defaultValue = -1,
  ...props
}) => {
  const [activeItem, setActiveItem] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const labelContent =
    items && (type === 'input' || type === 'filter') && activeItem !== -1 ? items[activeItem].label : label;

  const setActiveFunction = (index: number) => {
    setActiveItem(index);
    onChange(index);
  };

  useEffect(() => {
    returnDefault && setActiveItem(-1);
  }, [returnDefault]);

  useEffect(() => {
    setActiveItem(defaultValue);
  }, [defaultValue]);

  return (
    <button
      className={twMerge(dropdownStyles({ type }))}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      {...props}
    >
      {startIcon && <Icon icon={startIcon} size={20} aria-hidden={true} />}
      {labelContent}
      <Icon icon="chevron-down" size={20} className={twMerge(dropdownChevron({ isOpen, type }))} aria-hidden={true} />
      <div className={twMerge(popupContainerStyles({ isOpen }))}>
        {items &&
          items.map((item, index) => (
            <DropdownItem
              key={item?.label || index}
              isActive={activeItem === index}
              onClick={() => {
                setActiveFunction(index);
              }}
              {...item}
            />
          ))}
      </div>
    </button>
  );
};

export default Dropdown;
