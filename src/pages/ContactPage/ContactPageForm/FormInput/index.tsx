import styles from './_TextInput.module.scss'
import { useState } from 'react'

export type TextInputProps = {
  label?: string
  inputName?: string
  className?: string
  required?: boolean
}

export function TextInput({ 
  label = '',
  inputName = '',
  className = '',
  required = false
}: TextInputProps) {

  const [value, setValue] = useState<string>('')
  
  const place = (name: string) => {
    return `${name}`;
  } 

  return (
    <div className={`${styles.textInputContainer} ${className}`}>
      <label className={styles.textInputLabel}>
        {label}
        <input
          name={inputName}
          type="text"
          value={value}
          placeholder={place(inputName)}
          className={styles.textInputField}
          required={required}
          onChange={e => setValue(e.target.value)}
        />
      </label>
    </div>
  )
}


export function Checkbox({ 
  inputName = '',
  required = false
}: TextInputProps) {

  const [value, setValue] = useState<string>('')
  


  return (
    <div className={`${styles.textcheckContainer}`} style={{alignItems: 'center'}}>
      <input
          name={inputName}
          type="checkbox"
          value={value}
          required={required}
          onChange={e => setValue(e.target.value)}
          style={{width: '1.2rem', height: '1.2rem'}}
        />
        <span>Ich akzeptiere <a style={{textDecoration: 'underline', cursor: 'pointer'}}>AGB</a>'s.</span>
    </div>
  )
}