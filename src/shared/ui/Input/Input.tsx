import { type ComponentProps } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

interface InputProps extends ComponentProps<'input'> {
  label: string;
  helperText?: string;
  error?: boolean;
}

export const Input = (props: InputProps) => {
  const {
    className,
    id,
    name,
    label,
    type,
    placeholder,
    value,
    required,
    disabled,
    onChange,
    onBlur,
    error,
    helperText,
    autoComplete,
  } = props;

  return (
    <div className={classNames(styles.wrapper, className)}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
      />
      {error && <p className={styles.error}>{helperText}</p>}
    </div>
  );
};
