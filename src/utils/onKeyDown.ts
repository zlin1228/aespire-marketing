import type { KeyboardEvent } from 'react';

const onKeyDown = (
  event: KeyboardEvent<Element | HTMLElement | SVGSVGElement>,
  action: () => void,
  targetKey?: string | string[],
) => {
  targetKey = targetKey ?? ['Enter', ' '];

  if (event.key === targetKey || targetKey.includes(event.key)) {
    event.preventDefault();
    action();
  }
};

export default onKeyDown;
