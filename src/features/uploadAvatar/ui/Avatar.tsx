import { ComponentProps, memo, useState } from 'react';
import classNames from 'classnames';
import styles from './Avatar.module.scss';

type AvatarProps = ComponentProps<'img'>;

export const Avatar = memo((props: AvatarProps) => {
  const { src, alt, loading, width, height, className } = props;

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleLoadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const imageUrl = URL.createObjectURL(file);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Ошибка при создании изображения:', error);
      }
    }
  };

  return (
    <div className={classNames(styles.imgWrapper, className)}>
      <img
        src={imageSrc ?? src}
        alt={alt}
        className={styles.img}
        loading={loading}
        width={width}
        height={height}
      />
      <input
        type='file'
        className={styles.inputFile}
        title='Загрузить аватар'
        accept='image/*'
        onChange={handleLoadImg}
      />
    </div>
  );
});
