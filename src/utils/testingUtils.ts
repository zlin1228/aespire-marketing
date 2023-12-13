import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import type { ByRoleMatcher, ByRoleOptions } from '@testing-library/react';
import type { ReactElement } from 'react';

export const testAxeViolations = (component: ReactElement) => {
  expect.extend(toHaveNoViolations);
  it('does not have axe violations', async () => {
    const { container } = render(component);
    expect(await axe(container)).toHaveNoViolations();
  });
};

export const testRenderByRole = (component: ReactElement, role: ByRoleMatcher, options?: ByRoleOptions) => {
  const renderResult = render(component);
  const toTest = renderResult.getByRole(role, options);
  expect(toTest).toBeInTheDocument();
};
