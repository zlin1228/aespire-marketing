import { twMerge } from 'tailwind-merge';

import { containerStyles, headingStyles, subheadStyles } from 'components/StatisticsPanel/styles/StatisticsItem.styles';

import type { ContentfulComponentStatisticsCard } from 'graphqlTypes';
import type { FC } from 'react';

interface StatisticsItemProps extends ContentfulComponentStatisticsCard {
  theme: 'light' | 'dark';
  alignment: 'Left' | 'Centered';
  isReference?: boolean;
}

const StatisticsItem: FC<StatisticsItemProps> = ({
  alignment,
  theme,
  description,
  eyebrow,
  statistics,
  isReference,
}) => (
  <div className={twMerge(containerStyles({ alignment }))}>
    {eyebrow && (
      <p className={`${twMerge(subheadStyles({ theme }))} ${isReference ? '!text-sm' : undefined}`}>{eyebrow}</p>
    )}
    {statistics && <p className={twMerge(headingStyles({ theme }))}>{statistics}</p>}
    {description && (
      <p className={`${twMerge(subheadStyles({ theme }))} ${isReference ? '!text-sm' : undefined}`}>{description}</p>
    )}
  </div>
);

export default StatisticsItem;
