import { parseTextWithLists } from '../../utils/TextParser';
import styles from './_RichText.module.scss';

// Definiere die Typen für die geparsten Inhalte
type TextItem = {
  type: 'text';
  content: string;
};

type ListItem = {
  type: 'list';
  items: string[];
};

type ImageItem = {
  type: 'image';
  src: string;
  alt?: string;
  caption?: string;
};

type ParsedItem = TextItem | ListItem | ImageItem;

export type RichTextProps = {
  text?: string;
  className?: string;
  imageMap?: Record<string, string>;
};

export function RichText({ text, className = '', imageMap = {} }: RichTextProps) {
  if (!text) return null;

  // Annahme: parseTextWithLists gibt ein Array von ParsedItem zurück
  const parsedContent: ParsedItem[] = parseTextWithLists(text);

  return (
    <div className={`${styles.richText} ${className}`}>
      {parsedContent.map((item, index) => {
        switch (item.type) {
          case 'text':
            return (
              <p key={index} className={styles.paragraph}>
                {item.content}
              </p>
            );
          case 'list':
            return (
              <ul key={index} className={styles.list}>
                {item.items.map((listItem, listIndex) => (
                  <li key={listIndex} className={styles.listItem}>
                    {listItem}
                  </li>
                ))}
              </ul>
            );
          case 'image': {
            // Type Assertion für TypeScript
            const imageItem = item as ImageItem;
            // Schaue zuerst in imageMap, dann verwende direkte URL
            const imageSrc = imageMap[imageItem.src] || imageItem.src;
            
            return (
              <figure key={index} className={styles.imageContainer}>
                <img 
                  src={imageSrc} 
                  alt={imageItem.alt || ''} 
                  className={styles.image}
                  loading="lazy"
                />
                {imageItem.caption && (
                  <figcaption className={styles.imageCaption}>
                    {imageItem.caption}
                  </figcaption>
                )}
              </figure>
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}