import { twMerge } from 'tailwind-merge';

import Section from 'molecules/Section';

import Heading from 'components/Heading';
import StatisticsItem from 'components/StatisticsPanel/components/StatisticsItem';
import {
  getGridValue,
  gridAlignment,
  gridStyles,
  sectionBackground,
  theme,
  wrapperBackground,
  wrapperLayout,
  wrapperStyles,
} from 'components/StatisticsPanel/styles/Statistics.styled';

import type { HeadingProps } from 'components/Heading';
import type { ContentfulComponentStatisticsPanel } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

export interface StatisticsPanelProps extends Omit<ContentfulComponentStatisticsPanel, 'heading'>, SectionProps {
  headingComponent?: HeadingProps;
}

const StatisticsPanel: FC<StatisticsPanelProps> = ({
  alignment,
  background,
  headingComponent,
  padding,
  sectionIdLink,
  statisticsCards,
  layout,
  variant,
}) => (
  <Section
    id={sectionIdLink}
    background={sectionBackground({ layout, background })}
    padding={padding}
    contained={false}
  >
    <div
      className={twMerge(wrapperStyles({ layout: wrapperLayout({ layout }) }))}
      style={{ backgroundImage: `url(${wrapperBackground({ layout, variant })})` }}
    >
      {headingComponent && <Heading {...headingComponent} padding="none" background="transparent" />}
      {statisticsCards && statisticsCards.length > 0 && (
        <div
          className={twMerge(
            gridStyles({ grid: getGridValue(statisticsCards.length), alignment: gridAlignment({ alignment }) }),
          )}
        >
          {statisticsCards.map(
            stat =>
              stat && (
                <StatisticsItem
                  key={stat?.id}
                  theme={theme({ layout, variant, background })}
                  alignment={gridAlignment({ alignment })}
                  {...stat}
                />
              ),
          )}
        </div>
      )}
    </div>
  </Section>
);

export default StatisticsPanel;
