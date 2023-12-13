import { extendTailwindMerge } from 'tailwind-merge';

import { fontSize } from 'theme/typography/typography';

const isFontSize = (classPart: string) => Object.hasOwn(fontSize, classPart);

// Prevent twMerge from overwriting font sizes with colors
// see @https://github.com/dcastil/tailwind-merge/blob/v1.13.2/docs/configuration.md
const customTwMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: [isFontSize] }],
  },
});

export default customTwMerge;
