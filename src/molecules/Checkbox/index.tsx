/* eslint-disable tailwindcss/no-arbitrary-value */
import { cva } from 'class-variance-authority';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Icon from 'molecules/Icon';

import onKeyDown from 'utils/onKeyDown';

import type { ComponentPropsWithoutRef, FC } from 'react';

export interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  label: string;
  name?: string;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  handleClick: (value: string) => void;
}

const inputStyles = cva(['flex', 'gap-2', 'flex-wrap', 'items-center', 'w-fit', 'cursor-pointer', 'p-2']);

const Checkbox: FC<InputProps> = ({ label, name, disabled, checked, handleClick, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);
  const CheckboxInput = 'div';

  const setActiveFunction = (value: string) => {
    setIsChecked(!isChecked);
    handleClick(value);
  };

  useEffect(() => {
    setIsChecked(checked || false);
  }, [checked]);

  return (
    <CheckboxInput
      className={twMerge(inputStyles())}
      onClick={() => setActiveFunction(label)}
      onKeyDown={e => onKeyDown(e, () => setActiveFunction(label))}
      tabIndex={0}
    >
      <div className="relative h-4 w-4">
        <Icon
          icon={isChecked ? 'checkbox-checked' : 'checkbox-unchecked'}
          size={16}
          aria-hidden={true}
          className="fill-transparent"
        />
      </div>
      <input className="hidden" type="checkbox" name={name} disabled={disabled} checked={isChecked} {...props} />
      {label && (
        <label htmlFor={name} className="cursor-pointer text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}
    </CheckboxInput>
  );
};

export default Checkbox;
