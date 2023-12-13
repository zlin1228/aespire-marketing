let zPercent = 3;
const booleanValuesArr = ['No', 'No', 'No', 'No'];

export const calculateProjectedSavings = (directCosts: string) => {
  const value = parseInt(directCosts, 10);
  const projectedSavings = Math.round(zPercent * 0.01 * value).toLocaleString();

  if (isNaN(value) || directCosts === '0') {
    return '$0';
  } else {
    return `$${projectedSavings}`;
  }
};

export const calculateHoursReduced = (calculatedLabor: number, averageWage: number) => {
  const xHours = calculatedLabor / averageWage;
  const yEmployees = xHours / 2080;
  const hoursOfSavings = xHours * (zPercent * 0.01);
  const hoursReduced = hoursOfSavings / yEmployees / 52;

  if (isNaN(hoursReduced) || hoursReduced === 0) {
    return 0;
  } else {
    return parseFloat(hoursReduced.toFixed(2));
  }
};

export const updatePercentCalculations = (directCost: number, labor: number, materials: number, subs: number) => {
  const laborPercent = labor * 0.01;
  const materialsPercent = materials * 0.01;
  const subsPercent = subs * 0.01;

  if (isNaN(directCost) || directCost === 0) {
    return [0, 0, 0];
  }

  const calculatedLabor = parseFloat((directCost * laborPercent).toFixed(0));
  const calculatedMaterials = parseFloat((directCost * materialsPercent).toFixed(0));
  const calculatedSubs = parseFloat((directCost * subsPercent).toFixed(0));

  return [calculatedLabor, calculatedMaterials, calculatedSubs];
};

export const calculateRoi = (totalIncomeValue: number, directCostValue: number, indirectExpenseValue: number) => {
  const wasteReduction = zPercent * 0.01;
  const totalIncome = parseInt(totalIncomeValue.toString(), 10);
  const directCosts = parseInt(directCostValue.toString(), 10);
  const indirectExpenses = parseInt(indirectExpenseValue.toString(), 10);

  const netIncome = totalIncome - (directCosts + indirectExpenses);
  const projectedRoiValue = parseFloat(((wasteReduction * directCosts + netIncome) / netIncome).toString()).toFixed(2);

  if (
    isNaN(totalIncome) ||
    isNaN(directCosts) ||
    isNaN(indirectExpenses) ||
    totalIncome === 0 ||
    directCosts === 0 ||
    indirectExpenses === 0
  ) {
    return '0.00';
  } else {
    return projectedRoiValue;
  }
};

export const updateDependentField = (
  directCost: number,
  labor: number,
  materialsPercent: number,
  subsPercent: number,
  type: boolean,
) => {
  const remainderPercent = Math.round((100 - labor) * 2) / 2;
  updatePercentCalculations(directCost, labor, materialsPercent, subsPercent);

  if (type) {
    if (isNaN(materialsPercent)) {
      return {
        materialsInput: 0,
        subsInput: remainderPercent,
      };
    } else if (materialsPercent > remainderPercent) {
      return {
        materialsInput: remainderPercent,
        subsInput: 0,
      };
    } else {
      const leftOverPercent = remainderPercent - materialsPercent;

      return {
        materialsInput: materialsPercent,
        subsInput: leftOverPercent,
      };
    }
  } else if (isNaN(subsPercent)) {
    return {
      materialsInput: remainderPercent,
      subsInput: 0,
    };
  } else if (subsPercent > remainderPercent) {
    return {
      materialsInput: 0,
      subsInput: remainderPercent,
    };
  } else {
    const leftOverPercent = remainderPercent - subsPercent;

    return {
      materialsInput: leftOverPercent,
      subsInput: subsPercent,
    };
  }
};

export const updateLaborField = (directCost: number, labor: number, materialsPercent: number, subsPercent: number) => {
  const remainderPercent = Math.round((100 - labor) * 2) / 2;
  const splitDifference = remainderPercent / 2;

  if (labor >= 100) {
    updatePercentCalculations(directCost, labor, materialsPercent, subsPercent);

    return {
      labor: 100,
      materialsInput: 0,
      subsInput: 0,
    };
  }
  updatePercentCalculations(directCost, labor, materialsPercent, subsPercent);

  return {
    labor,
    materialsInput: Math.round(splitDifference * 2) / 2,
    subsInput: Math.round(splitDifference * 2) / 2,
  };
};

export const booleanDropDownsFunction = (
  value: string,
  index: number,
  totalIncomeValue: number,
  directCostValue: number,
  indirectExpenseValue: number,
) => {
  booleanValuesArr[index] = value;
  const subtractFromZ = booleanValuesArr.filter(x => x === 'Yes').length * 0.5;
  zPercent = 3 - subtractFromZ;

  calculateRoi(totalIncomeValue, directCostValue, indirectExpenseValue);
  calculateProjectedSavings(directCostValue as unknown as string);
};
