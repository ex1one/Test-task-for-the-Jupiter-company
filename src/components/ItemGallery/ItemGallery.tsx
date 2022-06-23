import React, { FC } from 'react';
import styles from './itemGallery.module.scss';

interface IItemGalleryProps {
  brand: number;
  imageUrl: string;
  title: string;
}

const ItemGallery: FC <IItemGalleryProps> = ({ brand, title, imageUrl }) => (
  <div className={styles.itemGallery}>
    <img src={imageUrl} alt="image" />
    <div className={styles.info}>
      <div className={styles.brand} />
      <h2>{title}</h2>
    </div>
  </div>
);

export default ItemGallery;
