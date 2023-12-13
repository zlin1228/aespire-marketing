import { DOMAIN } from 'utils/parseUrl';

const getBreadcrumbLinks = (url: string) => {
  const defaultLinks = [`https://${DOMAIN}/`];
  if (!url) {
    return defaultLinks;
  }
  const matches = new URL(url).pathname.match(/[^/]+/g);
  const links = matches && matches.map(match => `https://${DOMAIN}/${match}`);

  return links || defaultLinks;
};

export default getBreadcrumbLinks;
