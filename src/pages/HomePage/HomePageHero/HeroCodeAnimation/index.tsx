import { useState } from 'react'
import styles from './_CodeAnimation.module.scss'


export function CodeAnimation() {
  const [elementVisible, setElementVisible] = useState<boolean>(false)

  const createElement = () => {
    setElementVisible(true)
  }

const bracketLeft = '{';
const bracketRight = '}';
const smallerThan = '>';


  return (
  <div className={styles.codeBlock}>
    <div className={styles.codeAnimation}>
      <div className={styles.codeLines}>
      <div className={styles.codeLine}>
          <span className={styles.codePink}>const</span>
          <span className={styles.codeNone}>a</span>
          <span className={styles.codeWhite}>Hello = () ={smallerThan} </span>
          <span className={styles.codeNone}>a</span>{bracketLeft}
      </div>
        <div className={styles.codeLine}>
          <span className={styles.codeNone}>tab</span>
          <span className={styles.codePink}>const</span>
          <span className={styles.codeNone}>a</span>
          <span className={styles.codeGreen}>title</span>{' = '}
          <span className={styles.codeLila}>document</span>.
          <span className={styles.codeBlue}>createElement(</span>

          <span className={styles.codeRed}>'h1'</span>
          <span className={styles.codeWhite}>);</span>
          </div>
          <div className={styles.codeLine}>
          <span className={styles.codeNone}>tab</span>

          <span className={styles.codeGreen}>title</span>.
          <span className={styles.codeBlue}>textContent</span>{' '}
          <span className={styles.codeWhite}>=</span>{' '}
          <span className={styles.codeRed}>'Hello World'</span>;
        </div>
        <div className={styles.codeLine}>
          <span className={styles.codeNone}>tab</span>
          <span className={styles.codePink}>return</span>{' '}
          <span className={styles.codeGreen}>title</span>;
   
        </div>
        <div className={styles.codeLine}>
          <span className={styles.codeWhite}>{bracketRight}</span>
        </div>
      <button onClick={createElement} className={styles.runButton}>
        <span className={styles.buttonText}>Run Code</span>{' '}
        <span className={styles.buttonIcon}>&#62;</span>
      </button>
     
      {elementVisible && (
        <div className={styles.generatedElement}>
          <h1>Hello World</h1>
        </div> )} 
      </div>
    </div>
  </div>  
  )
}



