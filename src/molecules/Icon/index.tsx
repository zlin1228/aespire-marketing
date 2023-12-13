import type { FC, SVGProps } from 'react';

export const iconIds = [
  'add-box',
  'access-time',
  'arrow-left',
  'arrow-forward',
  'arrow-back',
  'calendar-today',
  'checkbox-checked',
  'checkbox-unchecked',
  'check-green',
  'check-green-circle',
  'chevron-right',
  'chevron-left',
  'chevron-up',
  'chevron-down',
  'close-gray',
  'close-green-bg',
  'arrow-right',
  'edit',
  'help',
  'help-circle',
  'keyboard-double-arrow-up',
  'tooltip-caret',
  'form',
  'home',
  'facebook',
  'linkedin',
  'link-03',
  'login',
  'minus-circle',
  'plus-circle',
  'quotes',
  'twitter',
  'youtube',
  'x',
  'search',
  'star-full',
  'star-half',
  'star-empty',
  'assessment',
  'hamburger',
  'warning',
  'twitter-x',
  'check',
  'dollar',
  'edit-document',
  'build',
  'download',
  'find-in-page',
  'map',
  'news-feed',
  'video-library',
  'refresh',
] as const;
export type IconIds = (typeof iconIds)[number];

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconIds;
  size: number;
}

const Icon: FC<IconProps> = ({ icon, size = 24, ...props }) =>
  iconIds.includes(icon) ? (
    <svg width={size} height={size} role="img" aria-label={icon} {...props}>
      <use href={`/icons/sprites.svg#${icon}`} />
    </svg>
  ) : null;

export default Icon;
