import { twMerge } from 'tailwind-merge';

import Icon from 'molecules/Icon';
import buttonStyles from 'molecules/ScrollToTop/styles/ScrollToTop.styles';
import scrollToTop from 'molecules/ScrollToTop/utils/helpers';

import type { IconIds } from 'molecules/Icon';
import type { FC } from 'react';

interface ScrollToTopProps {
  contentRef: React.RefObject<HTMLDivElement>;
  offset?: number;
  icon?: IconIds;
}

const ScrollToTop: FC<ScrollToTopProps> = ({ icon = 'keyboard-double-arrow-up', contentRef, offset }) => (
  <button
    className={twMerge(buttonStyles())}
    aria-label="scroll to top"
    onClick={() => scrollToTop(contentRef, offset)}
  >
    <Icon icon={icon} size={20} />
  </button>
);

export default ScrollToTop;
