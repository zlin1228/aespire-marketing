import { useEffect, useState } from 'react';

import StepEight from 'components/Calculators/steps/StepEight';
import StepFive from 'components/Calculators/steps/StepFive';
import StepFour from 'components/Calculators/steps/StepFour';
import StepLast from 'components/Calculators/steps/StepLast';
import StepNine from 'components/Calculators/steps/StepNine';
import StepOne from 'components/Calculators/steps/StepOne';
import StepSeven from 'components/Calculators/steps/StepSeven';
import StepSix from 'components/Calculators/steps/StepSix';
import StepTen from 'components/Calculators/steps/StepTen';
import StepThree from 'components/Calculators/steps/StepThree';
import StepTwo from 'components/Calculators/steps/StepTwo';
import {
  booleanDropDownsFunction,
  calculateHoursReduced,
  calculateProjectedSavings,
  calculateRoi,
  updateDependentField,
  updateLaborField,
  updatePercentCalculations,
} from 'components/Calculators/utils/calculation';

import type { Dispatch, FC, SetStateAction } from 'react';

export type StepPanelProps = {
  eyebrow?: string;
  heading?: string;
  setIsLast: Dispatch<SetStateAction<boolean>>;
  returnStep: (value: number) => void;
  parentStep: number;
};

const StepPanel: FC<StepPanelProps> = ({ setIsLast, returnStep, parentStep }) => {
  const [step, setStep] = useState(1);
  const [incomeValue, setIncomeValue] = useState(0);
  const [averageRate, setAverageRate] = useState(0);
  const [detailedDataRate, setDetailedDataRate] = useState<string | null>(null);
  const [purchaseOrder, setPurchaseOrder] = useState<string | null>(null);
  const [workTicket, setWorkTicket] = useState<string | null>(null);
  const [accurateEstimate, setAccurateEstimate] = useState<string | null>(null);
  const [directCost, setDirectCost] = useState(0);
  const [indirectExpense, setIndirectExpense] = useState(0);
  const [labor, setLabor] = useState(0);
  const [materialsPercent, setMaterialsPercent] = useState(0);
  const [subsPercent, setSubsPercent] = useState(0);

  const [projectedSavings, setProjectedSavings] = useState('$0');
  const [projectedRoiInput, setProjectedRoiInput] = useState('0.00');
  const [calculatedLabor, setCalculatedLabor] = useState(0);
  const [averageWage, setAverageWage] = useState(0);
  const [subs, setSubs] = useState(0);
  const [hoursReduced, setHoursReduced] = useState(0);

  const handleIncomeValue = (value: string) => {
    setIncomeValue(value as unknown as number);
    setProjectedRoiInput(calculateRoi(value as unknown as number, directCost, indirectExpense));
  };

  const handleAverageRate = (value: string) => {
    setAverageRate(value as unknown as number);
    setHoursReduced(calculateHoursReduced(calculatedLabor, value as unknown as number));
  };

  const handleDetailedDataValue = (value: number) => {
    setDetailedDataRate(value === 0 ? 'Yes' : 'No');
    booleanDropDownsFunction(value === 0 ? 'Yes' : 'No', 0, incomeValue, directCost, indirectExpense);
  };

  const handlePurchaseOrder = (value: number) => {
    setPurchaseOrder(value === 0 ? 'Yes' : 'No');
    booleanDropDownsFunction(value === 0 ? 'Yes' : 'No', 1, incomeValue, directCost, indirectExpense);
  };

  const handleWorkTicket = (value: number) => {
    setWorkTicket(value === 0 ? 'Yes' : 'No');
    booleanDropDownsFunction(value === 0 ? 'Yes' : 'No', 2, incomeValue, directCost, indirectExpense);
  };

  const handleAccurateEstimate = (value: number) => {
    setAccurateEstimate(value === 0 ? 'Yes' : 'No');
    booleanDropDownsFunction(value === 0 ? 'Yes' : 'No', 3, incomeValue, directCost, indirectExpense);
  };

  const handleDirectCost = (value: string) => {
    setDirectCost(value as unknown as number);
    setProjectedSavings(calculateProjectedSavings(value));
    setHoursReduced(calculateHoursReduced(calculatedLabor, averageRate));
    setProjectedRoiInput(calculateRoi(incomeValue, value as unknown as number, indirectExpense));
    const percentageArray = updatePercentCalculations(value as unknown as number, labor, materialsPercent, subsPercent);
    setCalculatedLabor(percentageArray[0]);
    setAverageWage(percentageArray[1]);
    setSubs(percentageArray[2]);
  };

  const handleIndirectExpense = (value: string) => {
    setIndirectExpense(value as unknown as number);
    setProjectedRoiInput(calculateRoi(incomeValue, directCost, value as unknown as number));
  };

  const handleLabor = (value: string) => {
    setLabor(value as unknown as number);
    setHoursReduced(calculateHoursReduced(calculatedLabor, averageRate));
    const { materialsInput, subsInput } = updateLaborField(
      directCost,
      value as unknown as number,
      materialsPercent,
      subsPercent,
    );
    setMaterialsPercent(materialsInput as number);
    setSubsPercent(subsInput as number);
    const percentageArray = updatePercentCalculations(
      directCost,
      value as unknown as number,
      materialsInput,
      subsInput,
    );
    setCalculatedLabor(percentageArray[0]);
    setAverageWage(percentageArray[1]);
    setSubs(percentageArray[2]);
  };

  const handleMaterialsPercent = (value: string) => {
    setMaterialsPercent(value as unknown as number);
    const { materialsInput, subsInput } = updateDependentField(
      directCost,
      labor,
      value as unknown as number,
      subsPercent,
      true,
    );
    setMaterialsPercent(materialsInput as number);
    setSubsPercent(subsInput as number);
    const percentageArray = updatePercentCalculations(directCost, labor, materialsInput, subsInput);
    setCalculatedLabor(percentageArray[0]);
    setAverageWage(percentageArray[1]);
    setSubs(percentageArray[2]);
  };

  const handleSubsPercent = (value: string) => {
    setSubsPercent(value as unknown as number);
    const { materialsInput, subsInput } = updateDependentField(
      directCost,
      labor,
      materialsPercent,
      value as unknown as number,
      false,
    );
    setMaterialsPercent(materialsInput as number);
    setSubsPercent(subsInput as number);
    const percentageArray = updatePercentCalculations(directCost, labor, materialsInput, subsInput);
    setCalculatedLabor(percentageArray[0]);
    setAverageWage(percentageArray[1]);
    setSubs(percentageArray[2]);
  };

  const moveNextStep = (value: number) => {
    if (incomeValue && value === 2) {
      setStep(value);
    }
    if (averageRate && value === 3) {
      setStep(value);
    }
    if (detailedDataRate && value === 4) {
      setStep(value);
    }
    if (purchaseOrder && value === 5) {
      setStep(value);
    }
    if (workTicket && value === 6) {
      setStep(value);
    }
    if (accurateEstimate && value === 7) {
      setStep(value);
    }
    if (directCost && value === 8) {
      setStep(value);
    }
    if (value === 9) {
      setStep(value);
    }
    if (indirectExpense && value === 11) {
      setStep(value);
    }
  };

  const movePrevStep = (value: number) => {
    setStep(value === 10 ? 11 : value);
  };

  const dropdownValue = (value: string) => {
    switch (value) {
      case 'Yes':
        return 0;
      case 'No':
        return 1;
      default:
        return -1;
    }
  };

  useEffect(() => {
    step === 11 && setIsLast(true);
    returnStep(step);
  }, [step]);

  useEffect(() => {
    movePrevStep(parentStep);
  }, [parentStep]);

  return (
    <div className="flex w-full flex-col items-center text-center">
      {step === 1 && (
        <StepOne
          eyebrow="Step One"
          heading="What is your total income?"
          body="Grab your end of year report and enter the total of all your sales for the year."
          disclaimer="All values presented here are projections based on past customer data. Actual results may vary."
          handleIncomeValue={handleIncomeValue}
          moveNextStep={moveNextStep}
          incomeValue={incomeValue ? incomeValue.toString() : undefined}
        />
      )}
      {step === 2 && (
        <StepTwo
          eyebrow="Step Two"
          heading="What is your average wage rate with burden?"
          body="Include your average hourly wage rate with burden (overhead costs) applied."
          disclaimer="All values presented here are projections based on past customer data. Actual results may vary."
          handleAverageRate={handleAverageRate}
          moveNextStep={moveNextStep}
          movePrevStep={movePrevStep}
          averageRate={averageRate ? averageRate.toString() : undefined}
        />
      )}
      {step === 3 && (
        <StepThree
          eyebrow="Step Three"
          heading="Do you have detailed data about your actual job costs?"
          disclaimer="All values presented here are projections based on past customer data. Actual results may vary."
          handleDetailedDataValue={handleDetailedDataValue}
          moveNextStep={moveNextStep}
          movePrevStep={movePrevStep}
          detailedDataRate={dropdownValue(detailedDataRate || '')}
        />
      )}
      {step === 4 && (
        <StepFour
          eyebrow="Step four"
          heading="Are you currently using a purchase order system to track purchases?"
          disclaimer="All values presented here are projections based on past customer data. Actual results may vary."
          handlePurchaseOrder={handlePurchaseOrder}
          moveNextStep={moveNextStep}
          movePrevStep={movePrevStep}
          purchaseOrder={dropdownValue(purchaseOrder || '')}
        />
      )}
      {step === 5 && (
        <StepFive
          eyebrow="Step Five"
          heading="Are you currently tracking work tickets in order to provide your teams with budgeted hours on a daily basis?"
          disclaimer="All values presented here are projections based on past customer data. Actual results may vary."
          handleWorkTicket={handleWorkTicket}
          moveNextStep={moveNextStep}
          movePrevStep={movePrevStep}
          workTicket={dropdownValue(workTicket || '')}
        />
      )}
      {step === 6 && (
        <StepSix
          eyebrow="Step Six"
          heading="Do you have accurate estimates that give you the number of hours per job?"
          disclaimer="All values presented here are projections based on past customer data. Actual results may vary."
          handleAccurateEstimate={handleAccurateEstimate}
          moveNextStep={moveNextStep}
          movePrevStep={movePrevStep}
          accurateEstimate={dropdownValue(accurateEstimate || '')}
        />
      )}
      {step === 7 && (
        <StepSeven
          eyebrow="Step Seven"
          heading="What are your total direct costs?"
          disclaimer="All values presented here are projections based on past customer data. Actual results may vary."
          handleDirectCost={handleDirectCost}
          moveNextStep={moveNextStep}
          movePrevStep={movePrevStep}
          directCost={directCost ? directCost.toString() : undefined}
        />
      )}
      {step === 8 && (
        <StepEight
          eyebrow="Step Eight"
          subheadOne="What percentage of your direct costs come from labor?"
          subheadTwo="What percentage of your direct costs come from materials?"
          subheadThree="What percentage of your direct costs come from subs?"
          disclaimer="All values presented here are projections based on past customer data. Actual results may vary."
          moveNextStep={moveNextStep}
          movePrevStep={movePrevStep}
          handleLabor={handleLabor}
          handleMaterialsPercent={handleMaterialsPercent}
          handleSubsPercent={handleSubsPercent}
          calculatedLabor={calculatedLabor}
          averageWage={averageWage}
          subs={subs}
          labor={labor}
          materialsPercent={materialsPercent}
          subsPercent={subsPercent}
        />
      )}
      {step === 9 && (
        <StepNine
          eyebrow="Step Nine"
          heading="What are your total indirect expenses?"
          body="Include an approximate dollar value for how much you spend on equipment, admin costs, software, and management salaries."
          disclaimer="All values presented here are projections based on past customer data. Actual results may vary."
          handleIndirectExpense={handleIndirectExpense}
          moveNextStep={moveNextStep}
          movePrevStep={movePrevStep}
          indirectExpense={indirectExpense ? indirectExpense.toString() : undefined}
        />
      )}
      {step === 10 && (
        <StepTen
          eyebrow="Step Ten"
          heading="Assessment complete!"
          body="View your results."
          disclaimer="All values presented here are projections based on past customer data. Actual results may vary."
          moveNextStep={moveNextStep}
          movePrevStep={movePrevStep}
        />
      )}
      {step === 11 && (
        <StepLast
          heading="Projected Savings"
          disclaimer="Disclaimer: The value provided by this calculator is intended to assist in seeking financial guidance and is not intended to replace financial advice.  Valuations vary based on business conditions, geography and economic conditions among other reasons.  Aspire makes no warranty or representation as to the results of this calculation."
          projectedSavings={projectedSavings}
          projectedRoiInput={projectedRoiInput}
          hoursReduced={hoursReduced}
        />
      )}
    </div>
  );
};

export default StepPanel;
