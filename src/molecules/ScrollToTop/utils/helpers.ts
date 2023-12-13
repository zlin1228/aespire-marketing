const scrollToTop = (ref: React.RefObject<HTMLDivElement>, offset = 100) => {
  const getElementTop = (element: HTMLElement): number => {
    let elTop = element.offsetTop;
    let currentElement: HTMLElement | null = element.offsetParent as HTMLElement;

    while (currentElement !== null) {
      elTop += currentElement.offsetTop;
      currentElement = currentElement.offsetParent as HTMLElement;
    }

    return elTop;
  };

  if (ref.current) {
    const totalOffset = getElementTop(ref.current);
    window.scrollTo({ top: totalOffset - offset, behavior: 'smooth' });
  }
};

export default scrollToTop;
