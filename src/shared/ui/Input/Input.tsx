import { useCallback, useState, type ComponentProps } from 'react';
import { BiHide } from 'react-icons/bi';
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

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = useCallback(
    () => setShowPassword((prev) => !prev),
    [setShowPassword],
  );

  return (
    <div className={classNames(styles.wrapper, className)}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          id={id}
          type={type === 'password' && showPassword ? 'text' : type}
          placeholder={placeholder}
          value={value}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
        />
        {type === 'password' && (
          <button type='button' className={styles.showPassword} onClick={togglePasswordVisibility}>
            <BiHide />
          </button>
        )}
      </div>
      {error && <p className={styles.error}>{helperText}</p>}
    </div>
  );
};
