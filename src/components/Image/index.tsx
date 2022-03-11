import * as React from 'react';

import styles from './index.module.scss';

type Size = 'small' | 'medium' | 'large';
type Side = 'left' | 'right';

type ImageProps = {
  src: string;
  alt: string;
  size?: Size;
  side?: Side;
};

const Image: React.FC<ImageProps> = ({ src, alt, size = 'large', side }) => {
  return <img className={`${styles.image} ${styles[size]} ${side ? styles[side] : ''}`} src={src} alt={alt} />;
}

export default Image;