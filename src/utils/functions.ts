/**
 * Set and delete query parameters in the address bar via a key
 * @param key A string representing the query string key
 * @param value An optional string representing the query string value. A falsy value will delete the param
 */
export const setSearchParam = (key: string, value?: string) => {
  const { search, pathname } = window.location;
  const queryParams = new URLSearchParams(search);

  if (!value) {
    queryParams.delete(key);
  } else {
    queryParams.set(key, value);
  }

  queryParams.sort();
  const newSearch = queryParams.toString();
  const newUrl = `${pathname}${newSearch ? '?' : ''}${newSearch}`;
  window.history.replaceState(null, '', newUrl);
};
