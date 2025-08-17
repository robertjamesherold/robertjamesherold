import { parseTextWithLists } from '../../utils/TextParser';
import styles from './_RichText.module.scss';

export type RichTextProps = {
  text?: string;
  className?: string;
  imageMap?: Record<string, string>;
  item: string;
};

export function RichText({ text, className = '', imageMap = {}, }: RichTextProps) {
  if (!text) return null;

  const parsedContent = parseTextWithLists(text);
  const imageSrc = imageMap[item.src] || item.src;
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
          case 'image':
            // Schaue zuerst in imageMap, dann verwende direkte URL
          
            return (
              <figure key={index} className={styles.imageContainer}>
                <img 
                  src={imageSrc} 
                  alt={item.alt} 
                  className={styles.image}
                  loading="lazy"
                />
                {item.caption && (
                  <figcaption className={styles.imageCaption}>
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}