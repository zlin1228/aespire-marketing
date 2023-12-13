import { cva } from 'class-variance-authority';
import twMerge from 'twMerge';

import { objectEntries } from 'utils/typeUtils';

import colors from 'theme/colors/colors';

import type { VariantProps } from 'class-variance-authority';
import type { FC } from 'react';

const sectionWrapper = cva(['flex', 'flex-col', 'gap-8']);
const colorHeading = cva(['text-display-md', 'text-black']);
const colorRow = cva(['flex', 'flex-wrap', 'gap-8']);
const colorCard = cva(['flex', 'flex-col', 'rounded-md', 'shadow-lg', 'overflow-hidden', 'w-[8rem]']);
const colorSwatch = cva(['h-20', 'rounded-t-md']);
const colorTitle = cva(['text-lg', 'font-semibold', 'text-gray-900']);
const colorHex = cva(['text-md', 'font-normal', 'text-gray-600']);
const ColorCards: FC<VariantProps<typeof sectionWrapper>> = () => {
  const colorArray = objectEntries(colors);

  return (
    <div className={twMerge(sectionWrapper())}>
      {colorArray.map(([colorName, colorValue], index) => {
        if (index === 0) {
          return;
        }
        const isSingleValue = typeof colorValue === 'string';
        const colorCardsArray = isSingleValue ? objectEntries({ [colorName]: colorValue }) : objectEntries(colorValue);

        return (
          <div className={twMerge(['flex', 'flex-col', 'gap-4'])} key={`${colorName}-${colorValue}`}>
            <h2 className={twMerge(colorHeading())}>{String(colorName)}</h2>
            <div className={twMerge(colorRow())}>
              {colorCardsArray.map(([subColorName, subColorValue]) => (
                <div className={twMerge(colorCard())} key={`${String(subColorName)}-${subColorValue}`}>
                  <div
                    // would never do this in production, only to generate every card with string interpolation
                    style={{ backgroundColor: subColorValue as string }}
                    className={twMerge(colorSwatch())}
                  />
                  <div className={twMerge(['p-4', 'bg-white'])}>
                    <p className={twMerge(colorTitle())}>{String(subColorName)}</p>
                    <p className={twMerge(colorHex())}>{String(subColorValue)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorCards;
