import React, { useEffect, useState } from 'react';
import styles from './gallery.module.scss';
import ItemGallery from '../ItemGallery/ItemGallery';
import Sort from '../Sort/Sort';

const Gallery = () => {
  const [gallery, setGallery] = useState<null | []>(null);
  useEffect(() => {
    // Подгрузка карточек
  }, []);
  return (
    <div className={styles.wrapperGallery}>
      <div className="container">
        <Sort />
        {gallery && gallery.map((item) => (
          <ItemGallery brand={item.brand} imageUrl={item.imageUrl} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
