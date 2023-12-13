import { cleanup } from '@testing-library/react';

import Icon, { iconIds } from 'molecules/Icon';

import { testAxeViolations, testRenderByRole } from 'utils/testingUtils';

describe('Icon', () => {
  it('should render an <svg> for each icon', () => {
    for (const id of iconIds) {
      testRenderByRole(<Icon icon={id} size={20} />, 'img');
      cleanup();
    }
  });

  testAxeViolations(<Icon icon={iconIds[0]} size={20} />);
});
