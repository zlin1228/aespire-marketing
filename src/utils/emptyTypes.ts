const getRandomString = () => Math.random().toString(36).slice(2, 12);

export const contentfulProps = {
  contentful_id: getRandomString(),
  id: getRandomString(),
  children: null as unknown as [],
  internal: { contentDigest: '', owner: '', type: '' },
  node_locale: 'en-US',
};

export const assetProps = {
  ...contentfulProps,
  filename: '',
  mimeType: '',
  publicUrl: '',
  description: '',
};
