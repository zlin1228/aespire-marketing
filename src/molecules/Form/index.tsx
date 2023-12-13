import twMerge from 'twMerge';

import formContainer, { formBar, formContent, formIcon, formIconContainer } from 'molecules/Form/Form.styles';
import MockForm from 'molecules/Form/MockForm';
import Icon from 'molecules/Icon';

import HubSpotForm from 'components/Form';

import type { IconIds } from 'molecules/Icon';
import type { FC } from 'react';

interface FormProps {
  formId: string;
  iconId?: IconIds | null;
  heading?: string | null;
  subheading?: string | null;
}

const Form: FC<FormProps> = ({ formId, iconId, heading, subheading, ...props }) => {
  const isMockForm = formId === '0';

  return (
    <div className={twMerge(formContainer())} {...props}>
      {iconId && (
        <div className={formIconContainer()}>
          <Icon icon={iconId} size={32} className={twMerge(formIcon())} aria-hidden={true} />
        </div>
      )}
      {heading && <h2 className={twMerge(formContent({ type: 'heading' }))}>{heading}</h2>}
      {subheading && <p className={twMerge(formContent({ type: 'subheading' }))}>{subheading}</p>}
      {isMockForm && <MockForm />}
      {formId && <HubSpotForm formId={formId} />}
      <div className={twMerge(formBar())} />
    </div>
  );
};

export default Form;
