import Accordion from 'components/Accordion';
import CardDeck from 'components/CardDeck';
import CaseStudySlider from 'components/CaseStudySlider';
import ComparisonTable from 'components/ComparisonTable';
import ConversionPanel from 'components/ConversionPanel';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Hero from 'components/Hero';
import OffsetSwitcher from 'components/OffsetSwitcher';
import ProductFeatures from 'components/ProductFeatures';
import QuoteSlider from 'components/QuoteSlider';
import SingleInstance from 'components/SingleInstance';
import Slidebox from 'components/Slidebox';
import StatisticsPanel from 'components/StatisticsPanel';
import Switchback from 'components/Switchback';
import TestimonialSlider from 'components/TestimonialSlider';
import Trustbar from 'components/Trustbar';

import type { AccordionProps } from 'components/Accordion';
import type { CardDeckProps } from 'components/CardDeck';
import type { CaseStudySliderProps } from 'components/CaseStudySlider';
import type { ComparisonTableProps } from 'components/ComparisonTable';
import type { ConversionPanelProps } from 'components/ConversionPanel';
import type { FooterProps } from 'components/Footer';
import type { HeaderProps } from 'components/Header';
import type { HeadingProps } from 'components/Heading';
import type { HeroProps } from 'components/Hero';
import type { OffsetSwitcherProps } from 'components/OffsetSwitcher';
import type { ProductFeaturesProps } from 'components/ProductFeatures';
import type { QuoteSliderProps } from 'components/QuoteSlider';
import type { SingleInstanceTypes } from 'components/SingleInstance';
import type { SlideboxProps } from 'components/Slidebox';
import type { StatisticsPanelProps } from 'components/StatisticsPanel';
import type { SwitchbackProps } from 'components/Switchback';
import type { TestimonialSliderProps } from 'components/TestimonialSlider';
import type { TrustbarProps } from 'components/Trustbar';
import type { ContentfulLayoutSection } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';

const componentGenerator = (section: ContentfulLayoutSection, component: ContentfulLayoutSection['component']) => {
  switch (component?.__typename) {
    case 'ContentfulComponentAccordion':
      return <Accordion {...(component as AccordionProps)} {...(section as SectionProps)} key={component?.id} />;
    case 'ContentfulComponentCardDeck':
      return <CardDeck {...(component as CardDeckProps)} {...(section as SectionProps)} key={component?.id} />;
    case 'ContentfulComponentCaseStudySlider':
      return (
        <CaseStudySlider {...(component as CaseStudySliderProps)} {...(section as SectionProps)} key={component?.id} />
      );
    case 'ContentfulComponentComparisonTable':
      return (
        <ComparisonTable {...(component as ComparisonTableProps)} {...(section as SectionProps)} key={component?.id} />
      );
    case 'ContentfulComponentConversionPanel':
      return (
        <ConversionPanel {...(component as ConversionPanelProps)} {...(section as SectionProps)} key={component?.id} />
      );
    case 'ContentfulComponentFooter':
      return <Footer {...(component as FooterProps)} {...(section as SectionProps)} key={component?.id} />;
    case 'ContentfulComponentHeader':
      return <Header {...(component as HeaderProps)} key={component?.id} />;
    case 'ContentfulComponentHeading':
      return <Heading {...(component as HeadingProps)} {...(section as SectionProps)} key={component?.id} />;
    case 'ContentfulComponentHero':
      return <Hero {...(component as HeroProps)} {...(section as SectionProps)} key={component?.id} />;
    case 'ContentfulComponentOffsetSwitcher':
      return (
        <OffsetSwitcher {...(component as OffsetSwitcherProps)} {...(section as SectionProps)} key={component?.id} />
      );
    case 'ContentfulComponentProductFeature':
      return (
        <ProductFeatures {...(component as ProductFeaturesProps)} {...(section as SectionProps)} key={component?.id} />
      );
    case 'ContentfulComponentQuoteSlider':
      return <QuoteSlider {...(component as QuoteSliderProps)} {...(section as SectionProps)} key={component?.id} />;
    case 'ContentfulComponentSlidebox':
      return <Slidebox {...(component as SlideboxProps)} {...(section as SectionProps)} key={component?.id} />;
    case 'ContentfulComponentStatisticsPanel':
      return (
        <StatisticsPanel {...(component as StatisticsPanelProps)} {...(section as SectionProps)} key={component?.id} />
      );
    case 'ContentfulComponentSwitchback':
      return <Switchback {...(component as SwitchbackProps)} {...(section as SectionProps)} key={component?.id} />;
    case 'ContentfulComponentTestimonialSlider':
      return (
        <TestimonialSlider
          {...(component as TestimonialSliderProps)}
          {...(section as SectionProps)}
          key={component?.id}
        />
      );
    case 'ContentfulComponentTrustbar':
      return <Trustbar {...(component as TrustbarProps)} {...(section as SectionProps)} key={component?.id} />;
    case 'ContentfulComponentSingleInstance':
      return (
        <SingleInstance {...(component as SingleInstanceTypes)} {...(section as SectionProps)} key={component?.id} />
      );
  }
};

export default componentGenerator;
