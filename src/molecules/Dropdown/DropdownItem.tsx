import twMerge from 'twMerge';

import { dropdownItemStyles } from 'molecules/Dropdown/Dropdown.styles';
import Icon from 'molecules/Icon';

import type { IconIds } from 'molecules/Icon';
import type { FC, MouseEventHandler } from 'react';

export interface DropdownItemProps {
  startIcon?: IconIds | null;
  label?: string | null;
  onClick?: MouseEventHandler;
  hasBorder?: boolean;
  isActive?: boolean;
}

const DropdownItem: FC<DropdownItemProps> = ({ startIcon, label, onClick, isActive }) => (
  <button onClick={onClick} className={twMerge(dropdownItemStyles({ isActive }))}>
    {startIcon && <Icon icon={startIcon} size={20} aria-hidden={true} />}
    {label}
  </button>
);

export default DropdownItem;
