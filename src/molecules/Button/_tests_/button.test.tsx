import Button from 'molecules/Button';
import { iconIds } from 'molecules/Icon';

import { testAxeViolations, testRenderByRole } from 'utils/testingUtils';

describe('Button molecule', () => {
  it('should render as a button', () => {
    testRenderByRole(<Button id="a">test</Button>, 'button');
  });

  it('should render as an anchor', () => {
    testRenderByRole(
      <Button id="b" href="https://www.webstacks.com">
        test
      </Button>,
      'link',
    );
  });

  it('should render a start icon', () => {
    testRenderByRole(
      <Button id="c" startIcon={iconIds[0]}>
        test
      </Button>,
      'img',
      { hidden: true },
    );
  });

  it('should render an end icon', () => {
    testRenderByRole(
      <Button id="d" endIcon={iconIds[0]}>
        test
      </Button>,
      'img',
      { hidden: true },
    );
  });

  testAxeViolations(<Button id="e">test</Button>);
});
