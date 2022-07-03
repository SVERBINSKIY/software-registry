import React, {ChangeEvent, FC} from 'react';

import './index.scss';

interface IInput {
  type: 'text' | 'email' | 'password';
  size: 'small' | 'medium' | 'large' | 'extra';
  label?: string;
  value: string | number;
  name: string;
  placeholder?: string;
  error: string;
  touched: boolean;
  onChange: (e: ChangeEvent) => void;
  onBlur: (e: ChangeEvent) => void;
}


const Input: FC<IInput> = ({
  type, size, label, value, name, placeholder, error, touched, onChange, onBlur,
}) => (
  <>
    {
      label && (
        <span className={`label ${error ? 'label__error' : ''}`}>
          {label}
        </span>
      )
    }
    <input
      className={`control input-${size} ${error ? 'control__error' : ''}`}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
    {
      error && touched && (
        <div className="error">{error}</div>
      )
    }
  </>
);

export default Input;
