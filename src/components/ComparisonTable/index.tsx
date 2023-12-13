import { useMedia } from 'react-use';
import twMerge from 'twMerge';

import Icon from 'molecules/Icon';
import Image from 'molecules/Image';
import Section from 'molecules/Section';
import Tooltip from 'molecules/Tooltip';

import containStyles, {
  assetItemStyles,
  assetTitle,
  headingContent,
  headingEyebrow,
  headingStyles,
  headingSubhead,
  rowItemTitle,
} from 'components/ComparisonTable/ComparisonTable.styles';

import getTheme from 'utils/getTheme';
import richTextParser from 'utils/richTextParser/richTextParser';

import screens from 'theme/spacing/screens';

import type { VariantProps } from 'class-variance-authority';
import type { ContentfulComponentComparisonTable } from 'graphqlTypes';
import type { ImageData } from 'molecules/Image';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser/richTextParser';

export interface ComparisonTableProps
  extends ContentfulComponentComparisonTable,
    VariantProps<typeof headingStyles>,
    SectionProps {
  headingSize?: VariantProps<typeof headingContent>['size'];
}

const ComparisonTable: FC<ComparisonTableProps> = ({
  eyebrow,
  heading,
  headingSize,
  subhead,
  background = 'white',
  padding = 'large',
  rowAssets,
  rows,
  sectionIdLink,
}) => {
  const theme = getTheme(background || 'white');
  const isMobile = useMedia(`(max-width: ${screens.sm})`, false);

  return (
    <Section
      id={sectionIdLink}
      background={background}
      padding={padding}
      contained={false}
      style={{ contain: 'paint' }}
    >
      <div className={twMerge(containStyles())}>
        <div className={twMerge(headingStyles())}>
          {eyebrow && <p className={twMerge(headingEyebrow({ theme }))}>{eyebrow}</p>}
          {heading && <h2 className={twMerge(headingContent({ theme, size: headingSize }))}>{heading}</h2>}
          {subhead && <div className={twMerge(headingSubhead({ theme }))}>{richTextParser(subhead as RichText)}</div>}
        </div>
        {rowAssets && (
          <div className="flex w-full flex-row justify-end md:w-[50%]">
            {rowAssets.map(asset => (
              <div key={asset?.title} className={twMerge(assetItemStyles())}>
                <Image image={asset as ImageData} alt={asset?.title || ''} className="h-[40px] w-[40px] object-cover" />
                <p className={twMerge(assetTitle({ theme }))}>{asset?.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {rows && (
        <div className="mt-6 flex flex-col border border-gray-200 md:mt-8 lg:mt-12">
          {rows.map((row, idx) => (
            <div
              key={row?.id}
              className={`flex flex-col items-center md:flex-row ${idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
            >
              <div className={twMerge(rowItemTitle({ theme }))}>
                {row?.title}
                {row?.tooltip?.tooltip && (
                  <div className="ml-2 flex items-center">
                    <Tooltip hasCaret heading="" subheading={row?.tooltip?.tooltip} direction="top" />
                  </div>
                )}
              </div>
              {row?.cell && (
                <div className="flex w-full md:w-[50%]">
                  {row.cell?.map(cell => (
                    <div key={cell?.name} className="flex w-[50%] justify-center border-gray-200 p-4 md:border-l">
                      <Icon
                        icon={cell?.icon === 'Check' ? 'check-green' : 'close-gray'}
                        size={isMobile ? 32 : 40}
                        aria-hidden={true}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default ComparisonTable;
