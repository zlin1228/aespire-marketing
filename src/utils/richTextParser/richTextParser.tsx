import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Children, isValidElement } from 'react';
import twMerge from 'twMerge';

import Button from 'molecules/Button';
import Icon from 'molecules/Icon';

import richTextContent, {
  headingStyles,
  linkStyles,
  listCheckStyles,
  listItemStyles,
  listStyles,
} from 'utils/richTextParser/richTextStyles';

import type { CommonNode } from '@contentful/rich-text-react-renderer';
import type { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';
import type { ReactElement, ReactNode } from 'react';
import type { themeType } from 'utils/getTheme';

const extractStringContent = (children: ReactNode): string => {
  let result = '';
  Children.forEach(children, child => {
    if (typeof child === 'string') {
      result += child;
    } else if (isValidElement(child) && child.props.children) {
      result += extractStringContent(child.props.children);
    }
  });

  return result;
};

const richTextParser = (
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>,
  wordCount?: number,
  theme?: themeType,
) => {
  if (!content) {
    return null;
  }

  const OL = 'ol';
  const UL = 'ul';
  const Li = 'li';
  let currentWords = 0;

  theme = theme || 'light';

  const options = {
    renderText: (text: ReactNode) => {
      if (wordCount && typeof text === 'string') {
        const words = text.split(' ');
        const remainingWords = wordCount - currentWords;

        if (remainingWords <= 0) {
          return '';
        }

        currentWords += words.length;

        if (currentWords > wordCount) {
          const truncatedWords = words.slice(0, remainingWords);

          return truncatedWords.join(' ') + '...';
        }
      }

      return text;
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: CommonNode, children: ReactNode) => {
        // eslint-disable-next-line react/destructuring-assignment
        if (Array.isArray(children) && children.length < 2 && (children.length === 0 || !children[0])) {
          return null;
        }

        return <p className={twMerge(richTextContent({ theme }))}>{children}</p>;
      },
      [BLOCKS.HEADING_1]: (node: CommonNode, children: ReactNode) => (
        <h1 className={twMerge(headingStyles({ type: 'h1' }))}>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: CommonNode, children: ReactNode) => {
        const text = extractStringContent(children);
        const id = text.toLowerCase().replace(/\s+/g, '-');

        return (
          <h2 id={id} className={twMerge(headingStyles({ type: 'h2' }))}>
            {children}
          </h2>
        );
      },
      [BLOCKS.HEADING_3]: (node: CommonNode, children: ReactNode) => (
        <h3 className={twMerge(headingStyles({ type: 'h3' }))}>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: CommonNode, children: ReactNode) => (
        <h4 className={twMerge(headingStyles({ type: 'h4' }))}>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node: CommonNode, children: ReactNode) => (
        <h5 className={twMerge(headingStyles({ type: 'h5' }))}>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node: CommonNode, children: ReactNode) => (
        <h6 className={twMerge(headingStyles({ type: 'h6' }))}>{children}</h6>
      ),
      [BLOCKS.OL_LIST]: (node: CommonNode, children: ReactNode) => (
        <OL className={twMerge(listStyles())}>
          {Children.map(children, child => (
            <Li className={twMerge(listItemStyles())}>
              <Icon className={twMerge(listCheckStyles())} icon="check-green-circle" size={20} aria-hidden={true} />
              {child}
            </Li>
          ))}
        </OL>
      ),
      [BLOCKS.UL_LIST]: (node: CommonNode, children: ReactNode) => (
        <UL className={twMerge(listStyles())}>
          {Children.map(children, child => (
            <Li className={twMerge(listItemStyles())}>
              <Icon className={twMerge(listCheckStyles())} icon="check-green-circle" size={20} aria-hidden={true} />
              {child}
            </Li>
          ))}
        </UL>
      ),
      [INLINES.HYPERLINK]: (node: CommonNode, children: ReactNode) => {
        const { data } = node;

        return (
          <a href={data?.uri} className={twMerge(linkStyles())}>
            {children}
          </a>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: CommonNode) => {
        const {
          data: { target },
        } = node;
        if (!target) {
          return null;
        }
        switch (target.__typename) {
          case 'ContentfulComponentButton':
            return <Button {...target} />;
          default:
            return null;
        }
      },
    },
  };

  return renderRichText(content, options) as ReactElement[];
};

export type RichText = RenderRichTextData<ContentfulRichTextGatsbyReference>;

export default richTextParser;
