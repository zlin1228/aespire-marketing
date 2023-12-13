import { useState } from 'react';
import twMerge from 'twMerge';

import buttonVariants, { iconSizes, iconVariants, underlineVariants } from 'molecules/Button/Button.styles';
import Icon, { type IconIds } from 'molecules/Icon';

import Modal from 'components/Modal';

import parseUrl from 'utils/parseUrl';

import type { VariantProps } from 'class-variance-authority';
import type { ContentfulComponentButton, ContentfulComponentModal } from 'graphqlTypes';
import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

type NativeButtonProps = ComponentPropsWithoutRef<'button'> & ComponentPropsWithoutRef<'a'>;

export interface ButtonProps
  extends Omit<NativeButtonProps, 'href' | 'id'>,
    VariantProps<typeof buttonVariants>,
    Partial<Pick<ContentfulComponentButton, 'href' | 'id' | 'internalName'>> {
  children?: ReactNode;
  startIcon?: IconIds | null;
  endIcon?: IconIds | null;
  iconColor?: VariantProps<typeof iconVariants>['color'];
  label?: string | null;
  modal?: ContentfulComponentModal;
  isFullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  label,
  size = 'md',
  hierarchy = 'primary',
  href,
  startIcon,
  endIcon,
  iconColor,
  noPadding,
  modal,
  isFullWidth,
  ...props
}) => {
  const hasModal = !!modal;
  const [isOpen, setIsOpen] = useState(false);
  const { Component: as, ...urlProps } = parseUrl(href?.href || 'https://youraspire.com');
  const Component = as === 'div' || hasModal ? 'button' : 'a';
  const iconClass = twMerge(iconVariants({ color: iconColor, hierarchy }));
  const iconSize = iconSizes[size || 'md'];
  const iconOnly = !children && !label && (!!startIcon || !!endIcon);

  const handleClick = (e: React.MouseEvent) => {
    if (hasModal) {
      setIsOpen(true);

      return;
    }

    if (Component === 'a' && href?.href?.includes('#')) {
      e.preventDefault();
      const targetId = href.href.split('#')[1];
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scroll({
          top: targetElement.offsetTop - 120,
          behavior: 'smooth',
        });
      }
    }
  };

  const hasUnderline =
    hierarchy && ['primary', 'primaryDark', 'secondary', 'secondaryDark', 'tertiary'].includes(hierarchy);

  return (
    <Component
      className={twMerge(buttonVariants({ hierarchy, size: size || 'md', iconOnly, noPadding, isFullWidth }))}
      onClick={e => handleClick(e)}
      {...urlProps}
      {...props}
    >
      {startIcon && <Icon icon={startIcon} size={iconSize} className={iconClass} aria-hidden={true} />}
      {children}
      {label}
      {hasModal && <Modal isOpen={isOpen} setIsOpen={setIsOpen} {...modal} />}
      {endIcon && <Icon icon={endIcon} size={iconSize} className={iconClass} aria-hidden={true} />}
      {hasUnderline && <div className={twMerge(underlineVariants({ hierarchy }))} />}
    </Component>
  );
};

export default Button;
