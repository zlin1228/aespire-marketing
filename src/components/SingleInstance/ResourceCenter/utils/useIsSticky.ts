import { useEffect, useState } from 'react';

import type { RefObject } from 'react';

const handleSticky = (ref: RefObject<HTMLElement>, setIsSticky: (value: boolean) => void): void => {
  if (!ref || !ref.current) {
    return;
  }

  const DESKTOP_HEADER_HEIGHT = 148;
  const MOBILE_HEADER_HEIGHT = 72;
  const elementTopPosition = ref.current.getBoundingClientRect()?.top;

  if (window.innerWidth >= 992) {
    if (elementTopPosition === DESKTOP_HEADER_HEIGHT || elementTopPosition === MOBILE_HEADER_HEIGHT) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  if (window.innerWidth < 992) {
    if (elementTopPosition === DESKTOP_HEADER_HEIGHT || elementTopPosition === MOBILE_HEADER_HEIGHT) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }
};

const useIsSticky = (ref: RefObject<HTMLElement>): boolean => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => handleSticky(ref, setIsSticky);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [ref]);

  return isSticky;
};

export default useIsSticky;
