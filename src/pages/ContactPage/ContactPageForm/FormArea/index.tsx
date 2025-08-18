import  { useState } from 'react'
import styles from './_TextArea.module.scss'

export type TextAreaProps = {
  label?: string
  inputName?: string
  className?: string
}

export function TextArea({ 
  label = '',
  inputName = '',
  className = ''
}: TextAreaProps) {

  const [value, setValue] = useState<string>('')

  const place = (name: string): string => {
    return `${name} eingeben`
  }

  return (
    <div className={`${styles.textAreaContainer} ${className}`}>
      <label className={styles.textAreaLabel}>
        {label}
        <textarea
          name={inputName}
          value={value}
          placeholder={place(inputName)}
          className={styles.textAreaField}
          required = {true}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </div>
  )
}