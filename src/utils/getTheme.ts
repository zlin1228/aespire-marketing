import { objectEntries } from 'utils/typeUtils';

import colors from 'theme/colors/colors';

export type themeType = 'light' | 'dark';

interface BackgroundImageMap {
  [key: string]: themeType;
  textureDark: themeType;
  textureLight: themeType;
  textureGreen: themeType;
}

const backgroundImageMap: BackgroundImageMap = {
  textureDark: 'dark',
  textureLight: 'light',
  textureGreen: 'dark',
} as const;

const getTheme = (background: string): themeType => {
  if (['black'].includes(background)) {
    return 'dark';
  }

  const backgroundImageTheme = backgroundImageMap[background];
  if (backgroundImageTheme) {
    return backgroundImageTheme;
  }

  const colorArray = objectEntries(colors);
  const darkColors = ['900', '800', '700', '600', '500'];
  const darkBackgrounds = colorArray
    .flatMap(([colorName, colorValue], index) => {
      if (index === 0 || typeof colorValue === 'string') {
        return;
      }
      const colorCardsArray = objectEntries(colorValue);

      return colorCardsArray.flatMap(([subColorName]) => `${colorName}${subColorName}`);
    })
    .filter(color => color && darkColors.filter(darkColor => color.includes(darkColor)).length);

  return darkBackgrounds.includes(background) ? 'dark' : 'light';
};
export default getTheme;
