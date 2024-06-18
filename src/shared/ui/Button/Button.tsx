import { type ComponentProps, type FC, memo } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends ComponentProps<'button'> {
  color?: 'white';
}

export const Button: FC<ButtonProps> = memo((props) => {
  const { type, children, disabled, id, className, ref, color, onClick } = props;

  let buttonColor;

  switch (color) {
    case 'white':
      buttonColor = styles.white;
      break;
    default:
      break;
  }

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      id={id}
      ref={ref}
      className={classNames(styles.button, buttonColor, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
});
