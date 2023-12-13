import { Link } from 'gatsby';

import getTheme from 'utils/getTheme';
import parseUrl from 'utils/parseUrl';

describe('parseUrl', () => {
  it('should return as internal', () => {
    expect(parseUrl('https://www.youraspire.com/test')).toStrictEqual({
      Component: Link,
      rel: '',
      target: '',
      href: 'https://www.youraspire.com/test',
      to: '/test',
    });
  });

  it('should return as external', () => {
    expect(parseUrl('https://www.webstacks.com/test')).toStrictEqual({
      Component: 'a',
      rel: 'noreferrer noopener',
      target: '_blank',
      href: 'https://www.webstacks.com/test',
      to: 'https://www.webstacks.com/test',
    });
  });

  it("should return as 'div'", () => {
    expect(parseUrl('')).toStrictEqual({ Component: 'div', to: '' });
  });
});

describe('getTheme', () => {
  it('should return as dark', () => {
    expect(getTheme('primary800')).toStrictEqual('dark');
  });

  it('should return as light', () => {
    expect(getTheme('primary25')).toStrictEqual('light');
  });
});
