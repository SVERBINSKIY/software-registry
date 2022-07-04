import React, { FC } from 'react';

import './index.scss';

interface ButtonProps {
  variant: 'contained' | 'outlined';
  size: 'small' | 'medium' | 'large';
  children: string;
}

const Button: FC<ButtonProps> = ({ variant, size, children }) => (
  <button
    className={`button ${variant} ${size}`}
  >
    {children}
  </button>
);

export default Button;
