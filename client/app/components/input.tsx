import clsx from 'clsx'
import React, { ChangeEvent } from 'react'
import { styles } from '../styles/login-styles'
import { Formik } from 'formik';

interface InputProps {
  type: string;
  name?: string;
  value?: string;
  onChange: (e: ChangeEvent<any>) => void;
  id?: string;
  placeholder?: string;

  label: string;
  htmlFor?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  id,
  placeholder,
  label,
  htmlFor,
  className
}) => {
  
  return (
    <>
      <label
        className={`${styles.label}`} 
        htmlFor={htmlFor}
      >
        {label}
      </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          id={id}
          placeholder={placeholder}
          className={className}
        />
    </>
  )
}

export default Input