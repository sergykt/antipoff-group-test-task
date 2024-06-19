import { ComponentProps, memo } from 'react';
import classNames from 'classnames';
import styles from './IconButton.module.scss';

type IconButtonProps = ComponentProps<'button'>;

export const IconButton = memo((props: IconButtonProps) => {
  const { id, className, onClick, type, children, disabled, ref } = props;

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      id={id}
      className={classNames(styles.iconButton, className)}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
    >
      {children}
    </button>
  );
});
