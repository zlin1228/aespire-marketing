type DisplayImageFlags = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  mobileDisplayImage?: boolean | null;
  tabletDisplayImage?: boolean | null;
};

export const shouldRenderImage = ({
  isMobile,
  isTablet,
  isDesktop,
  mobileDisplayImage,
  tabletDisplayImage,
}: DisplayImageFlags): boolean => {
  if (isMobile) {
    return !!mobileDisplayImage;
  }
  if (isTablet) {
    return !!tabletDisplayImage;
  }
  if (isDesktop) {
    return true;
  }

  return false;
};
