import { cva } from 'class-variance-authority';

import GreenBackground from 'components/StatisticsPanel/assets/stats-green-background.png';
import LightBackground from 'components/StatisticsPanel/assets/stats-light-background.png';

import getTheme from 'utils/getTheme';

import type { ContentfulComponentStatisticsPanel } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';

const backgroundMap: Record<string, string> = {
  Dark: GreenBackground,
  Light: LightBackground,
};

const themeMap: Record<string, 'light' | 'dark'> = {
  Dark: 'dark',
  Light: 'light',
};

export const gridStyles = cva(['w-full', 'h-full', 'grid', 'grid-cols-2', 'xl:grid-cols-4', 'gap-8'], {
  variants: {
    grid: {
      1: ['xl:grid-cols-1'],
      2: ['xl:grid-cols-2'],
      3: ['xl:grid-cols-3'],
    },
    alignment: {
      Left: [],
      Centered: ['flex', 'flex-col', 'md:grid'],
    },
  },
});

export const wrapperStyles = cva(['w-full', 'h-full', 'flex', 'flex-col', 'gap-16'], {
  variants: {
    layout: {
      Unfilled: [],
      Container: ['py-8', 'md:py-10', 'px-4', 'xl:px-8', 'md:px-8'],
    },
  },
});

interface DesignParameters {
  layout?: ContentfulComponentStatisticsPanel['layout'];
  variant?: ContentfulComponentStatisticsPanel['variant'];
  background?: SectionProps['background'];
  alignment?: ContentfulComponentStatisticsPanel['alignment'];
}

export const theme = ({ layout, variant, background }: DesignParameters) =>
  layout === 'Container' ? themeMap[variant ?? ''] || getTheme(background || 'white') : getTheme(background || 'white');

export const sectionBackground = ({ layout, background }: DesignParameters) =>
  layout === 'Container' ? 'white' : background;

export const wrapperLayout = ({ layout }: DesignParameters) => (layout === 'Container' ? 'Container' : 'Unfilled');

export const wrapperBackground = ({ layout, variant }: DesignParameters) =>
  layout === 'Container' ? backgroundMap[variant || 'Dark'] : '';

export const gridAlignment = ({ alignment }: DesignParameters) => (alignment === 'Centered' ? 'Centered' : 'Left');

export const getGridValue = (length: number): 1 | 2 | 3 | null =>
  length >= 1 && length <= 3 ? (length as 1 | 2 | 3) : null;
