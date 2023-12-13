import type { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';

type ContentNode = {
  data: Record<string, any>;
  content: ContentNode[];
  marks?: any[];
  value?: string;
  nodeType: string;
};

type RichTextContent = {
  data: Record<string, any>;
  content: ContentNode[];
  nodeType: string;
};

const countWords = (node: ContentNode): number => {
  let wordCount = 0;

  if (node.value) {
    wordCount += node.value.split(/\s+/).length;
  }

  if (node.content) {
    for (const childNode of node.content) {
      wordCount += countWords(childNode);
    }
  }

  return wordCount;
};

const calculateReadTime = (
  richTextData: RenderRichTextData<ContentfulRichTextGatsbyReference>,
  wordsPerMinute = 250,
): number => {
  if (!richTextData || !richTextData.raw) {
    return 0;
  }

  const richText: RichTextContent = JSON.parse(richTextData.raw);
  const totalWords = countWords(richText);

  return Math.ceil(totalWords / wordsPerMinute);
};

export default calculateReadTime;
