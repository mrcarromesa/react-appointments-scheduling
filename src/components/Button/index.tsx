/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'common' | 'success' | 'danger' | 'neutral' | 'dark';
}

const Button = ({ variant = 'common', className, ...props }: IButtonProps) => (
  <button
    className={classNames(styles.customButton, styles[variant], className)}
    {...props}
  />
);

export default Button;
