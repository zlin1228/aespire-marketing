import { graphql } from 'gatsby';

// Generic
export const assetQuery = graphql`
  fragment contentfulAsset on ContentfulAsset {
    __typename
    id
    contentful_id
    gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
    title
    description
    file {
      url
      fileName
      contentType
    }
  }
`;

export const buttonQuery = graphql`
  fragment contentfulComponentButton on ContentfulComponentButton {
    __typename
    contentful_id
    id
    internalName
    hierarchy
    size
    href {
      href
    }
    label
    startIcon
    endIcon
    iconColor
    modal {
      ...contentfulComponentModal
    }
  }
`;

export const linkQuery = graphql`
  fragment contentfulItemLink on ContentfulItemLink {
    __typename
    id
    contentful_id
    internalName
    link
    label
    description
    badge
    icon {
      ...contentfulAsset
    }
  }
`;

export const menuQuery = graphql`
  fragment contentfulItemMenu on ContentfulItemMenu {
    __typename
    id
    contentful_id
    internalName
    label
    description
    link
    links {
      ... on ContentfulItemLink {
        ...contentfulItemLink
      }
      ... on ContentfulItemMenu {
        __typename
        id
        contentful_id
        internalName
        label
        description
        link
        links {
          ... on ContentfulItemLink {
            ...contentfulItemLink
          }
          ... on ContentfulItemMenu {
            __typename
            id
            contentful_id
            internalName
            label
            description
            link
            links {
              ... on ContentfulItemLink {
                ...contentfulItemLink
              }
            }
            menuButton {
              ...contentfulComponentButton
            }
          }
        }
        menuButton {
          ...contentfulComponentButton
        }
      }
    }
    menuButton {
      ...contentfulComponentButton
    }
  }
`;

export const metaSeoQuery = graphql`
  fragment contentfulMetaSeo on ContentfulMetaSeo {
    id
    contentful_id
    __typename
    internalName
    pageTitle
    pageDescription
    openGraphImage {
      ...contentfulAsset
    }
    indexable
  }
`;

// Entities
export const entityPersonQuery = graphql`
  fragment contentfulEntityPerson on ContentfulEntityPerson {
    id
    contentful_id
    __typename
    fullName
    email
    headshot {
      ...contentfulAsset
    }
    bio {
      raw
    }
    website
  }
`;

// Items
export const itemMediaAssetQuery = graphql`
  fragment contentfulItemMediaAsset on ContentfulItemMediaAsset {
    __typename
    id
    contentful_id
    internalName
    title
    youtubeEmbedLink
    image {
      ...contentfulAsset
    }
  }
`;

export const ratingQuery = graphql`
  fragment contentfulItemRating on ContentfulItemRating {
    internalName
    starRating
    content
    images {
      ...contentfulItemMediaAsset
    }
    background
  }
`;

export const quoteAuthorQuery = graphql`
  fragment contentfulItemQuoteAuthor on ContentfulItemQuoteAuthor {
    __typename
    contentful_id
    id
    name
    thumbnail {
      ...contentfulAsset
    }
    title
    company
  }
`;

export const quoteCardsQuery = graphql`
  fragment contentfulCardQuote on ContentfulCardQuote {
    __typename
    contentful_id
    id
    internalName
    theme
    quote {
      raw
    }
    author {
      ...contentfulItemQuoteAuthor
    }
    tabletDisplayImage
    mobileDisplayImage
    image {
      ...contentfulAsset
    }
  }
`;

export const testimonialCardsQuery = graphql`
  fragment contentfulCardTestimonial on ContentfulCardTestimonial {
    internalName
    starRating
    date
    testimonial
    backgroundOptions
    avatar {
      ...contentfulItemQuoteAuthor
    }
  }
`;

export const accordionItemQuery = graphql`
  fragment contentfulItemAccordion on ContentfulItemAccordion {
    internalName
    question
    answer {
      raw
    }
  }
`;

export const elementCellQuery = graphql`
  fragment contentfulElementCell on ContentfulElementCell {
    __typename
    contentful_id
    id
    name
    icon
  }
`;

export const itemComparisonTableRowQuery = graphql`
  fragment contentfulItemComparisonTableRow on ContentfulItemComparisonTableRow {
    __typename
    contentful_id
    id
    internalName
    title
    tooltip {
      tooltip
    }
    cell {
      ...contentfulElementCell
    }
  }
`;

export const itemSwitchbackSwitcherQuery = graphql`
  fragment contentfulItemSwitchbackSwitcher on ContentfulItemSwitchbackSwitcher {
    __typename
    contentful_id
    id
    internalName
    icon {
      ...contentfulAsset
    }
    label
    featuredImage {
      ...contentfulAsset
    }
    description {
      raw
      references {
        ...contentfulComponentButton
      }
    }
  }
`;

// Components
export const componentCardQuery = graphql`
  fragment contentfulComponentCard on ContentfulComponentCard {
    id
    contentful_id
    __typename
    internalName
    layout
    backgroundColor
    padding
    icon {
      ...contentfulAsset
    }
    image {
      ...contentfulAsset
    }
    heading
    headingSize
    subhead {
      raw
    }
    showAddOnBadge
    button {
      ...contentfulComponentButton
    }
  }
`;

export const componentCardDeckQuery = graphql`
  fragment contentfulComponentCardDeck on ContentfulComponentCardDeck {
    id
    contentful_id
    __typename
    internalName
    variant
    cardDeckHeading: heading {
      ...contentfulComponentHeading
    }
    showTrustbar
    trustbar {
      ...contentfulComponentTrustbar
    }
    cards {
      ... on ContentfulComponentCard {
        ...contentfulComponentCard
      }
      ... on ContentfulTemplateBlogPost {
        ...contentfulTemplateBlogPost
      }
      ... on ContentfulTemplateCaseStudy {
        ...contentfulTemplateCaseStudy
      }
      ... on ContentfulTemplateNewsPost {
        ...contentfulTemplateNewsPost
      }
      ... on ContentfulTemplateResourceCenter {
        ...contentfulTemplateResourceCenter
      }
      ... on ContentfulComponentPricingCard {
        ...contentfulComponentPricingCard
      }
    }
    bottomButton {
      ...contentfulComponentButton
    }
  }
`;

export const componentModalQuery = graphql`
  fragment contentfulComponentModal on ContentfulComponentModal {
    __typename
    contentful_id
    id
    internalName
    embedLink
    formId
    heading
    subhead
    cta {
      __typename
      contentful_id
      id
      internalName
      hierarchy
      size
      href {
        href
      }
      label
      startIcon
      endIcon
      iconColor
    }
  }
`;

export const componentStatisticsCardQuery = graphql`
  fragment contentfulComponentStatisticsCard on ContentfulComponentStatisticsCard {
    __typename
    contentful_id
    id
    internalName
    eyebrow
    statistics
    description
  }
`;

export const componentHeroQuery = graphql`
  fragment contentfulComponentHero on ContentfulComponentHero {
    __typename
    id
    contentful_id
    internalName
    hasBreadcrumbs
    breadcrumbsOverride {
      ...contentfulItemLink
    }
    alignment
    eyebrow
    heading
    content {
      raw
    }
    rating {
      ...contentfulItemRating
    }
    buttons {
      ...contentfulComponentButton
    }
    isFullHeightImage
    reference {
      ...contentfulItemMediaAsset
      ...contentfulComponentForm
    }
    backgroundImage {
      ...contentfulItemMediaAsset
    }
    featuredResources {
      ... on ContentfulTemplateBlogPost {
        ...contentfulTemplateBlogPost
      }
      ... on ContentfulTemplateCaseStudy {
        ...contentfulTemplateCaseStudy
      }
      ... on ContentfulTemplateNewsPost {
        ...contentfulTemplateNewsPost
      }
      ... on ContentfulTemplateResourceCenter {
        ...contentfulTemplateResourceCenter
      }
    }
    cardDeck {
      ...contentfulComponentCardDeck
    }
  }
`;

export const componentTestimonialSliderQuery = graphql`
  fragment contentfulComponentTestimonialSlider on ContentfulComponentTestimonialSlider {
    __typename
    contentful_id
    id
    internalName
    testimonialHeading: heading {
      ...contentfulComponentHeading
    }
    cards {
      ...contentfulCardTestimonial
    }
  }
`;

export const componentAccordionQuery = graphql`
  fragment contentfulComponentAccordion on ContentfulComponentAccordion {
    __typename
    id
    contentful_id
    internalName
    accordionHeading: heading {
      ...contentfulComponentHeading
    }
    accordions {
      ...contentfulItemAccordion
    }
  }
`;

export const componentCaseStudyCard = graphql`
  fragment contentfulComponentCaseStudyCard on ContentfulComponentCaseStudyCard {
    __typename
    contentful_id
    id
    internalName
    heading
    subheading {
      raw
    }
    callToAction {
      ...contentfulComponentButton
    }
    logo {
      ...contentfulAsset
    }
    image {
      ...contentfulAsset
    }
  }
`;

export const componentCaseStudySliderQuery = graphql`
  fragment contentfulComponentCaseStudySlider on ContentfulComponentCaseStudySlider {
    __typename
    contentful_id
    id
    eyebrow
    heading
    caseStudyCards {
      ...contentfulComponentCaseStudyCard
    }
  }
`;

export const componentHeadingQuery = graphql`
  fragment contentfulComponentHeading on ContentfulComponentHeading {
    __typename
    contentful_id
    id
    alignment
    eyebrow
    heading
    headingAs
    headingSize
    subheading
    richText {
      raw
    }
    buttons {
      ...contentfulComponentButton
    }
  }
`;

export const componentAnnouncementBarQuery = graphql`
  fragment contentfulComponentAnnouncementBar on ContentfulComponentAnnouncementBar {
    __typename
    contentful_id
    id
    internalName
    background
    icon
    heading
    subhead {
      raw
    }
    ctas {
      ...contentfulComponentButton
    }
  }
`;

export const componentHeaderQuery = graphql`
  fragment contentfulComponentHeader on ContentfulComponentHeader {
    __typename
    contentful_id
    id
    internalName
    logo {
      ...contentfulAsset
    }
    menus {
      ...contentfulItemMenu
    }
    ctas {
      ...contentfulComponentButton
    }
    announcementBar {
      ...contentfulComponentAnnouncementBar
    }
  }
`;

export const componentFooterQuery = graphql`
  fragment contentfulComponentFooter on ContentfulComponentFooter {
    __typename
    contentful_id
    id
    internalName
    isSimpleFooter
    logo {
      ...contentfulAsset
    }
    menus {
      ...contentfulItemMenu
    }
    contactMenu {
      ...contentfulItemMenu
    }
    socialsMenu {
      ...contentfulItemMenu
    }
    disclaimerMenu {
      ...contentfulItemMenu
    }
  }
`;

export const componentStatisticsPanelQuery = graphql`
  fragment contentfulComponentStatisticsPanel on ContentfulComponentStatisticsPanel {
    __typename
    contentful_id
    id
    internalName
    variant
    layout
    alignment
    headingComponent: heading {
      ...contentfulComponentHeading
    }
    statisticsCards {
      ...contentfulComponentStatisticsCard
    }
  }
`;

export const componentSlideboxCardQuery = graphql`
  fragment contentfulComponentSlideboxCard on ContentfulComponentSlideboxCard {
    __typename
    contentful_id
    id
    internalName
    eyebrow
    heading
    subheading {
      raw
    }
    button {
      ...contentfulComponentButton
    }
    media {
      ...contentfulItemMediaAsset
    }
  }
`;

export const componentSlideboxQuery = graphql`
  fragment contentfulComponentSlidebox on ContentfulComponentSlidebox {
    __typename
    contentful_id
    id
    internalName
    slides {
      ...contentfulComponentSlideboxCard
    }
  }
`;

export const componentTrustbarQuery = graphql`
  fragment contentfulComponentTrustbar on ContentfulComponentTrustbar {
    __typename
    contentful_id
    id
    internalName
    variant
    eyebrow
    logos {
      ...contentfulAsset
    }
  }
`;

export const componentQuoteSliderQuery = graphql`
  fragment contentfulComponentQuoteSlider on ContentfulComponentQuoteSlider {
    __typename
    contentful_id
    id
    internalName
    quoteCards {
      ...contentfulCardQuote
    }
  }
`;

export const componentComparisonTableQuery = graphql`
  fragment contentfulComponentComparisonTable on ContentfulComponentComparisonTable {
    __typename
    contentful_id
    id
    internalName
    eyebrow
    heading
    headingSize
    subhead {
      raw
    }
    rowAssets {
      ...contentfulAsset
    }
    rows {
      ...contentfulItemComparisonTableRow
    }
  }
`;

export const componentFormQuery = graphql`
  fragment contentfulComponentForm on ContentfulComponentForm {
    __typename
    id
    contentful_id
    internalName
    heading
    subhead {
      raw
    }
    formId
    chiliPiperRouter
  }
`;

export const componentConversionPanelQuery = graphql`
  fragment contentfulComponentConversionPanel on ContentfulComponentConversionPanel {
    __typename
    id
    contentful_id
    internalName
    isContained
    conversionHeading: heading {
      ...contentfulComponentHeading
    }
    assets {
      ...contentfulItemMediaAsset
      ...contentfulComponentForm
    }
    backgroundImage {
      ...contentfulItemMediaAsset
    }
    rating {
      ...contentfulItemRating
    }
  }
`;

export const componentSwitchbackQuery = graphql`
  fragment contentfulComponentSwitchback on ContentfulComponentSwitchback {
    __typename
    contentful_id
    id
    internalName
    reverse
    eyebrowIcon {
      ...contentfulAsset
    }
    eyebrow
    heading
    headingAs
    headingSize
    subhead {
      raw
    }
    buttons {
      ...contentfulComponentButton
    }
    statistics {
      ...contentfulComponentStatisticsPanel
    }
    switchers {
      ...contentfulItemSwitchbackSwitcher
    }
    reference {
      ...contentfulAsset
    }
    youtubeEmbedLink
  }
`;

export const itemListQuery = graphql`
  fragment contentfulItemList on ContentfulItemList {
    __typename
    contentful_id
    id
    internalName
    icon
    iconImageSize
    iconImage {
      ...contentfulAsset
    }
    label
  }
`;

export const itemOffsetSwitcherQuery = graphql`
  fragment contentfulItemOffsetSwitcher on ContentfulItemOffsetSwitcher {
    __typename
    contentful_id
    id
    label
    icon {
      ...contentfulAsset
    }
    title
    description {
      raw
      references {
        ...contentfulComponentButton
      }
    }
    featuredImage {
      ...contentfulAsset
    }
    offsetBottomLists {
      ...contentfulItemList
    }
  }
`;

export const componentOffsetSwitcherQuery = graphql`
  fragment contentfulComponentOffsetSwitcher on ContentfulComponentOffsetSwitcher {
    __typename
    contentful_id
    id
    internalName
    offsetSwitcherHeading: heading {
      ...contentfulComponentHeading
    }
    references {
      ...contentfulItemOffsetSwitcher
    }
  }
`;

export const componentPricingCardQuery = graphql`
  fragment contentfulComponentPricingCard on ContentfulComponentPricingCard {
    __typename
    contentful_id
    id
    internalName
    cardColor
    eyebrowIcon {
      ...contentfulAsset
    }
    eyebrow
    heading
    subhead {
      subhead
    }
    button {
      ...contentfulComponentButton
    }
    features {
      ...contentfulItemList
    }
    keys {
      ...contentfulItemList
    }
  }
`;

export const componentSingleInstanceQuery = graphql`
  fragment contentfulComponentSingleInstance on ContentfulComponentSingleInstance {
    __typename
    contentful_id
    id
    internalName
    type
  }
`;

export const componentProductFeatureQuery = graphql`
  fragment contentfulComponentProductFeature on ContentfulComponentProductFeature {
    __typename
    contentful_id
    id
    internalName
    heading
    subhead {
      raw
    }
    image {
      ...contentfulAsset
    }
    youtubeEmbedLink
    list {
      ...contentfulItemList
    }
  }
`;

// Layout
export const layoutSectionQuery = graphql`
  fragment contentfulLayoutSection on ContentfulLayoutSection {
    __typename
    id
    contentful_id
    internalName
    sectionIdLink
    background
    padding
    contained
    component {
      ...contentfulComponentAccordion
      ...contentfulComponentCardDeck
      ...contentfulComponentCaseStudySlider
      ...contentfulComponentComparisonTable
      ...contentfulComponentConversionPanel
      ...contentfulComponentFooter
      ...contentfulComponentHeader
      ...contentfulComponentHeading
      ...contentfulComponentHero
      ...contentfulComponentOffsetSwitcher
      ...contentfulComponentProductFeature
      ...contentfulComponentQuoteSlider
      ...contentfulComponentSlidebox
      ...contentfulComponentStatisticsPanel
      ...contentfulComponentSwitchback
      ...contentfulComponentTestimonialSlider
      ...contentfulComponentTrustbar
      ...contentfulComponentSwitchback
      ...contentfulComponentOffsetSwitcher
      ...contentfulComponentSingleInstance
    }
  }
`;

// Taxonomies
export const taxonomyTagQuery = graphql`
  fragment contentfulTaxonomyTag on ContentfulTaxonomyTag {
    id
    contentful_id
    __typename
    name
  }
`;

// Templates
export const templatePageQuery = graphql`
  fragment contentfulTemplatePage on ContentfulTemplatePage {
    __typename
    id
    contentful_id
    internalName
    slug
    seo {
      ...contentfulMetaSeo
    }
    header {
      ...contentfulLayoutSection
    }
    sections {
      ...contentfulLayoutSection
    }
    footer {
      ...contentfulLayoutSection
    }
  }
`;

export const templateBlogPostQuery = graphql`
  fragment contentfulTemplateBlogPost on ContentfulTemplateBlogPost {
    id
    contentful_id
    __typename
    internalName
    slug
    seo {
      ...contentfulMetaSeo
    }
    title
    author {
      ...contentfulEntityPerson
    }
    featuredImage {
      ...contentfulAsset
    }
    publishDate(formatString: "LL")
    tags {
      ...contentfulTaxonomyTag
    }
    summary {
      raw
    }
    body {
      raw
    }
  }
`;

export const templateCaseStudyQuery = graphql`
  fragment contentfulTemplateCaseStudy on ContentfulTemplateCaseStudy {
    id
    contentful_id
    __typename
    internalName
    slug
    seo {
      ...contentfulMetaSeo
    }
    title
    author {
      ...contentfulEntityPerson
    }
    featuredImage {
      ...contentfulAsset
    }
    publishDate(formatString: "LL")
    tags {
      ...contentfulTaxonomyTag
    }
    summary {
      raw
    }
    body {
      raw
    }
  }
`;

export const templateNewsPostQuery = graphql`
  fragment contentfulTemplateNewsPost on ContentfulTemplateNewsPost {
    id
    contentful_id
    __typename
    internalName
    slug
    seo {
      ...contentfulMetaSeo
    }
    title
    author {
      ...contentfulEntityPerson
    }
    featuredImage {
      ...contentfulAsset
    }
    publishDate(formatString: "LL")
    tags {
      ...contentfulTaxonomyTag
    }
    summary {
      raw
    }
    body {
      raw
    }
  }
`;

export const templateResourceCenterQuery = graphql`
  fragment contentfulTemplateResourceCenter on ContentfulTemplateResourceCenter {
    id
    contentful_id
    __typename
    internalName
    type
    category
    slug
    seo {
      ...contentfulMetaSeo
    }
    title
    author {
      ...contentfulEntityPerson
    }
    featuredImage {
      ...contentfulAsset
    }
    publishDate(formatString: "LL")
    tags {
      ...contentfulTaxonomyTag
    }
    summary {
      raw
    }
    body {
      raw
    }
  }
`;
