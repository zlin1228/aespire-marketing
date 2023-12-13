import { useState } from 'react';

import Section from 'molecules/Section';

import ConversionPanel from 'components/Calculators/ConversionPanel';
import Heading from 'components/Calculators/Heading';
import StepPanel from 'components/Calculators/StepPanel';

import type { ContentfulComponentSingleInstance } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

export interface CalculatorsProps extends ContentfulComponentSingleInstance, SectionProps {}

const Calculators: FC<CalculatorsProps> = () => {
  const [isLast, setIsLast] = useState(false);
  const [step, setStep] = useState(1);

  const moveStep = (value: number) => {
    setStep(value);
  };

  return (
    <Section background="gray100">
      <div className="flex w-full flex-col gap-8 sm:gap-12 lg:gap-16">
        <Heading
          eyebrow="LANSCAPING ROI CALCULATOR"
          heading={isLast ? 'Here are your results:' : 'Determine your potential return on investment.'}
          body={
            isLast
              ? 'The best landscaping companies in the industry use Aspire to manage every aspect of their business, gaining the insights they need to operate effectively.'
              : ''
          }
        />
        <StepPanel setIsLast={setIsLast} returnStep={value => setStep(value)} parentStep={step} />
        <ConversionPanel
          heading="Want to calculate the total impact Aspire could have?"
          body="These savings are just the tip of the iceberg. Schedule a free demo to dive deeper into your data and the total ROI you can expect with Aspire, including improvements to overhead."
          button={{
            label: 'Talk to a Representative',
            endIcon: 'arrow-right',
            hierarchy: 'secondary',
          }}
        />
        {!isLast && (
          <div className="flex w-full flex-col items-center gap-4 border-t border-gray-200 pt-8 sm:hidden">
            <button
              className="w-full bg-gray-900 p-3 text-md font-semibold text-white"
              onClick={() => moveStep(step + 1)}
            >
              Next
            </button>
            {step > 1 && (
              <button className="w-fit text-md font-semibold text-gray-900" onClick={() => moveStep(step - 1)}>
                Back
              </button>
            )}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Calculators;
