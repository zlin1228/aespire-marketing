import { Link } from 'gatsby';

export const DOMAIN = 'youraspire.com';

const parseUrl = (href: string) => {
  if (!href) {
    return {
      Component: 'div',
      to: '',
    } as const;
  }

  try {
    const url = new URL(href);
    const isInternal = url.hostname === `www.${DOMAIN}` || url.hostname === DOMAIN;

    return {
      Component: isInternal ? Link : 'a',
      rel: isInternal ? '' : 'noreferrer noopener',
      target: isInternal ? '' : '_blank',
      href: isInternal ? url.href.split(url.host)[1] : href,
    };
  } catch (error) {
    return {
      as: 'div',
    } as const;
  }
};

export default parseUrl;
