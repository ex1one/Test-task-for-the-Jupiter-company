import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import styles from './button.module.scss';

interface IMyButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
  variant: 'white' | 'other';
  type: 'submit' | 'reset' | 'button';
}

const Button: FC <IMyButtonProps> = ({
  title, variant, type, ...props
}) => (
  <button
    className={variant === 'white'
      ? [styles.button, styles.white].join(' ')
      : [styles.button, styles.other].join(' ')}
    type={type}
    {...props}
  >
    {title}
  </button>
);

export default Button;
