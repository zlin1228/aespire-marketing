import Section from 'molecules/Section';

import CardDeck from 'components/CardDeck/variants/CardDeck';
import Carousel from 'components/CardDeck/variants/Carousel';

import type { ContentfulComponentCardDeck } from 'graphqlTypes';
import type { SectionProps } from 'molecules/Section';
import type { FC } from 'react';

export interface CardDeckProps
  extends Omit<
      ContentfulComponentCardDeck,
      'variant' | 'children' | 'contentful_id' | 'id' | 'internal' | 'node_locale'
    >,
    SectionProps {
  variant?: 'Centered' | 'Offset' | 'Contained' | 'Carousel';
}

const CardDeckComponent: FC<CardDeckProps> = ({ variant, ...props }) => (
  <Section
    id={props?.sectionIdLink}
    background={props?.background}
    padding={props?.padding}
    contained={variant === 'Carousel' ? false : props?.contained}
    fullWidth
  >
    {variant === 'Carousel' ? <Carousel variant={variant} {...props} /> : <CardDeck variant={variant} {...props} />}
  </Section>
);

export default CardDeckComponent;
