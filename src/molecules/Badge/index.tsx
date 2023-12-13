import { type VariantProps } from 'class-variance-authority';
import twMerge from 'twMerge';

import { badgeVariants, containerStyles, iconSizes, iconStyles } from 'molecules/Badge/Badge.styles';
import Icon from 'molecules/Icon';

import type { IconIds } from 'molecules/Icon';
import type { FC } from 'react';

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  label?: string;
  startIcon?: IconIds | null;
  endIcon?: IconIds | null;
  iconColor?: VariantProps<typeof iconStyles>['color'];
  className?: string;
}

const Badge: FC<BadgeProps> = ({
  size = 'md',
  hierarchy = 'primary',
  label,
  startIcon,
  endIcon,
  iconColor,
  className,
  ...props
}) => {
  const iconClass = twMerge(iconStyles({ color: iconColor }));
  const iconSize = iconSizes[size || 'md'];
  let containerPadding: 'none' | 'left' | 'right' = 'none';
  if (startIcon) {
    containerPadding = 'left';
  } else if (endIcon) {
    containerPadding = 'right';
  }

  return (
    <div className={`${twMerge(containerStyles({ hierarchy, padding: containerPadding }))} ${className}`}>
      <div className={twMerge(badgeVariants({ hierarchy, size }))} {...props}>
        {label}
      </div>
      {endIcon && <Icon icon={endIcon} size={iconSize} className={iconClass} aria-hidden={true} />}
    </div>
  );
};
export default Badge;
