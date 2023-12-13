import { useMediaQuery } from '@react-hookz/web';
import twMerge from 'twMerge';

import Image from 'molecules/Image';
import Section from 'molecules/Section';

import FooterAccordion from 'components/Footer/components/FooterAccordion';
import FooterColumns from 'components/Footer/components/FooterColumns';
import FooterDisclaimer from 'components/Footer/components/FooterDisclaimer';
import FooterGroup from 'components/Footer/components/FooterGroup';
import {
  footerContainerStyles,
  footerFormContainer,
  footerHeader,
  simpleFooterStyles,
} from 'components/Footer/styles/Footer.styles';
import ComponentForm from 'components/Form';

import { contentfulProps } from 'utils/emptyTypes';

import screens from 'theme/spacing/screens';

import 'components/Footer/styles/Footer.css';

import type { ContentfulComponentFooter } from 'graphqlTypes';
import type { StaticImage } from 'molecules/Image';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

export interface FooterProps extends Omit<ContentfulComponentFooter, 'children'>, SectionProps {}

const Footer: FC<FooterProps> = ({
  isSimpleFooter,
  logo,
  menus,
  contactMenu,
  socialsMenu,
  disclaimerMenu,
  background = 'white',
  padding = 'large',
  contained = true,
  ...props
}) => {
  const isTablet = useMediaQuery(`(max-width: ${screens.md})`);

  if (isSimpleFooter || !menus?.length) {
    return (
      <Section background={background} padding={padding} contained={contained}>
        <div className={twMerge(simpleFooterStyles())} {...props}>
          {logo?.file?.url && <Image image={logo as StaticImage} alt={logo?.title || ''} className="h-auto w-32" />}
        </div>
      </Section>
    );
  }

  return (
    <Section background="blue900" padding={padding} contained={contained}>
      <div className={twMerge(footerContainerStyles())} {...props}>
        <div className={twMerge(footerHeader())}>
          {logo?.file?.url && <Image image={logo as StaticImage} alt={logo?.title || ''} className="h-auto w-32" />}
          <div className={twMerge(footerFormContainer())}>
            <p>Subscribe to Aspire news & insights</p>
            <ComponentForm formId="4071ec80-df56-48e2-ac0e-f1fa7e60b2c8" isSubscribe isInline {...contentfulProps} />
          </div>
        </div>
        {!isTablet && <FooterColumns menus={menus} contactMenu={contactMenu} socialsMenu={socialsMenu} />}
        {isTablet && (
          <div className="flex flex-col gap-10">
            <FooterAccordion menus={menus} />
            <FooterGroup label="Contact" links={contactMenu?.links} layout="standard" {...contentfulProps} />
            <FooterGroup label="Social" links={socialsMenu?.links} layout="social" {...contentfulProps} />
          </div>
        )}
        <FooterDisclaimer disclaimerMenu={disclaimerMenu} />
      </div>
    </Section>
  );
};

export default Footer;
