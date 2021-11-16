import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: "button" | "reset" | "submit";
  variant?: "primary" | "secondary" | "tertiary";
  isActive?: boolean;
}

const Button = ({
  type = "button",
  variant = "primary",
  isActive = false,
  ...props }: ButtonProps) => {
  const cn = classNames(styles.root, classNames, {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
    [styles.tertiary]: variant === "tertiary",
  });
  
  return <button type={type} {...props} className={cn} role="tab" />
};

export default Button;