import { Script } from 'gatsby';
import { useEffect } from 'react';
import twMerge from 'twMerge';

import formStyles, { headingContent, headingSubhead } from 'components/Form/Form.styles';

import richTextParser from 'utils/richTextParser/richTextParser';

import type { ContentfulComponentForm } from 'graphqlTypes';
import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser/richTextParser';

export interface FormProps
  extends Omit<ContentfulComponentForm, 'children' | 'contentful_id' | 'id' | 'internal' | 'node_locale'> {
  sectionID?: string;
  isSubscribe?: boolean;
  isInline?: boolean;
}

declare global {
  interface Window {
    hbspt: Record<string, any>;
  }
}

const ComponentForm: FC<FormProps> = ({
  heading,
  subhead,
  formId,
  sectionID,
  isSubscribe,
  isInline,
  chiliPiperRouter,
}) => {
  const hubspotPortalId = process.env.HUBSPOT_PORTAL_ID || '3381425';
  const idForm = `hubspotForm-${sectionID}-${hubspotPortalId}-${formId}${isInline ? '-inline' : ''}`;

  useEffect(() => {
    const loadForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: hubspotPortalId,
          formId,
          target: `#${idForm}`,
          onFormSubmit: () => {
            const formElement = document.getElementById(idForm);
            if (formElement) {
              const submitButton = formElement.querySelector('.hs-button');
              if (submitButton) {
                (submitButton as HTMLButtonElement).disabled = true;
                submitButton.classList.add('disabled-hubspot-button');
              }
            }
          },
          translations: {
            en: {
              required: 'This field is required.',
              missingSelect: 'Please select an option',
            },
          },
        });
      }
    };

    // Existing code to check if HubSpot script is already loaded
    if (window.hbspt) {
      loadForm();
    } else {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/v2.js';
      script.onload = loadForm; // Call loadForm on script load
      document.body.appendChild(script);
    }
  }, [hubspotPortalId, formId, idForm]); // Dependencies array

  return (
    <>
      <div className={twMerge(formStyles())}>
        {heading && <h2 className={twMerge(headingContent())}>{heading}</h2>}
        {subhead && <p className={twMerge(headingSubhead())}>{richTextParser(subhead as RichText)}</p>}
        {formId && (
          <div
            className={`hubspot-form-container w-full ${isSubscribe ? 'subscribe-form' : ''} ${
              isInline ? 'inline-form' : ''
            }`}
            id={idForm}
          />
        )}
      </div>
      {chiliPiperRouter && (
        <Script>
          {`
                function q(a) {
                  return function () {
                    ChiliPiper[a].q = (ChiliPiper[a].q || []).concat([arguments]);
                  };
                }
                window.ChiliPiper =
                  window.ChiliPiper ||
                  "submit scheduling showCalendar submit widget bookMeeting"
                    .split(" ")
                    .reduce(function (a, b) {
                      a[b] = q(b);
                      return a;
                    }, {});
                ChiliPiper.scheduling("www-youraspire", "${chiliPiperRouter}", {
                  title: "Thanks! What time works best for a quick call?",
                });
            `}
        </Script>
      )}
    </>
  );
};

export default ComponentForm;
