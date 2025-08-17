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
  const place = (inputName) => {
    return `${inputName} eingeben`;
  } 

  return (
     <div className={`${styles.textInputContainer} ${className}`}>
       <label className={styles.textInputLabel}>{label}
         <input
          name={inputName}
           type="text"
           value={value}
           placeholder={place(inputName)}
           className={styles.textInputField}
           required = {required}
           onChange={e => setValue(e.target.value)} // Placeholder for change handler
         />
         </label>
       </div>
  )
}