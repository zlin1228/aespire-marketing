/* eslint-disable tailwindcss/no-arbitrary-value */
import { cva } from 'class-variance-authority';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from 'molecules/Button';
import Icon from 'molecules/Icon';

import type { ButtonProps } from 'molecules/Button';
import type { IconIds } from 'molecules/Icon';
import type { ChangeEvent, ChangeEventHandler, ComponentPropsWithoutRef, FC } from 'react';

export interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  label?: string;
  defaultValue?: string;
  helperText?: string | false;
  error?: boolean;
  icon?: IconIds;
  endIcon?: IconIds;
  button?: ButtonProps;
  type?: 'number' | 'text';
  isPercentage?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
}

const inputStyles = cva(
  ['bg-white', 'text-gray-900', 'w-full', 'py-2.5', 'px-3', 'border', 'border-gray-300', 'shadow-xs'],
  {
    variants: {
      hasIcon: {
        true: ['pl-10'],
      },
      hasButton: {
        true: ['pr-28'],
      },
      disabled: {
        true: ['text-gray-500', 'cursor-not-allowed'],
      },
    },
  },
);

const helper = cva(['text-gray-600', 'text-sm', 'font-light'], {
  variants: {
    error: {
      true: ['text-error-500'],
    },
  },
});

const iconStyles = cva(['absolute', 'top-3', 'text-gray-900'], {
  variants: {
    hasButton: {
      true: ['top-5'],
    },
    direction: {
      left: ['left-3'],
      right: ['right-3'],
    },
  },
});

const buttonStyles = cva(['absolute', 'right-3', 'top-2']);

const TextField: FC<InputProps> = ({
  label,
  defaultValue,
  helperText,
  error,
  icon,
  endIcon,
  name,
  button,
  className,
  disabled,
  onChange,
  type = 'text',
  isPercentage,
  ...props
}) => {
  const hasIcon = !!icon;
  const hasButton = !!button;
  const [value, setValue] = useState<string>(defaultValue || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (isPercentage && parseFloat(target.value) > 100) {
      setValue('100');
    } else {
      setValue(target.value);
    }
    onChange && onChange(e);
  };

  useEffect(() => {
    setValue(defaultValue || '');
  }, [defaultValue]);

  return (
    <div className={twMerge('grid gap-1.5', className)}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          className={twMerge(inputStyles({ hasIcon, hasButton, disabled }))}
          name={name}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          {...props}
        />
        {icon && <Icon icon={icon} size={20} className={iconStyles({ hasButton, direction: 'left' })} />}
        {button && <Button className={buttonStyles()} {...button} size="sm" disabled={disabled} />}
        {endIcon && !button && (
          <Icon icon={endIcon} size={20} className={iconStyles({ hasButton, direction: 'right' })} />
        )}
      </div>
      {helperText && <p className={twMerge(helper({ error }))}>{helperText}</p>}
    </div>
  );
};

export default TextField;
