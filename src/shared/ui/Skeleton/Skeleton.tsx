import { type CSSProperties, memo } from 'react';
import classNames from 'classnames';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: number;
  width?: number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, border } = props;

  const style: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={classNames(styles.skeleton, className)} style={style} />;
});
