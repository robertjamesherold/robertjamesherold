type ParsedElement =
  | { type: 'text'; content: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption: string };

export function parseTextWithLists(text: string | null | undefined): ParsedElement[] {
  if (!text) return [];

  const normalizedText = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const lines = normalizedText.split('\n');
  const result: ParsedElement[] = [];

  let currentParagraph = '';
  let currentList: string[] = [];
  let inList = false;

  const bulletRegex = /^[•\-\*]\s+(.+)/;
  const numberedRegex = /^\d+\.\s+(.+)/;
  const markdownImageRegex = /^!\[([^\]]*)\]\(([^)]+)\)$/;
  const customImageRegex = /^\[IMG:([^:]+):?([^:\]]*)\]$/;

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    const markdownMatch = trimmedLine.match(markdownImageRegex);
    const customMatch = trimmedLine.match(customImageRegex);

    if (markdownMatch || customMatch) {
      // Vorherigen Inhalt speichern
      if (inList && currentList.length > 0) {
        result.push({ type: 'list', items: [...currentList] });
        currentList = [];
        inList = false;
      } else if (currentParagraph) {
        result.push({ type: 'text', content: currentParagraph.trim() });
        currentParagraph = '';
      }

      const isMarkdown = !!markdownMatch;
      const src = isMarkdown ? markdownMatch![2] : customMatch![1];
      const altOrCaption = isMarkdown ? markdownMatch![1] : customMatch![2] || '';

      result.push({
        type: 'image',
        src,
        alt: altOrCaption,
        caption: altOrCaption,
      });
    }

    else if (bulletRegex.test(trimmedLine)) {
      if (!inList && currentParagraph) {
        result.push({ type: 'text', content: currentParagraph.trim() });
        currentParagraph = '';
      }

      const match = trimmedLine.match(bulletRegex);
      if (match) currentList.push(match[1]);
      inList = true;
    }

    else if (numberedRegex.test(trimmedLine)) {
      if (!inList && currentParagraph) {
        result.push({ type: 'text', content: currentParagraph.trim() });
        currentParagraph = '';
      }

      const match = trimmedLine.match(numberedRegex);
      if (match) currentList.push(match[1]);
      inList = true;
    }

    else if (trimmedLine) {
      if (inList && currentList.length > 0) {
        result.push({ type: 'list', items: [...currentList] });
        currentList = [];
        inList = false;
      }

      currentParagraph += (currentParagraph ? ' ' : '') + trimmedLine;
    }

    else {
      if (inList && currentList.length > 0) {
        result.push({ type: 'list', items: [...currentList] });
        currentList = [];
        inList = false;
      } else if (currentParagraph) {
        result.push({ type: 'text', content: currentParagraph.trim() });
        currentParagraph = '';
      }
    }
  });

  // Restliches Material am Ende hinzufügen
  if (inList && currentList.length > 0) {
    result.push({ type: 'list', items: currentList });
  } else if (currentParagraph) {
    result.push({ type: 'text', content: currentParagraph.trim() });
  }

  return result;
}