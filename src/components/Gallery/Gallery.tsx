import React, { useEffect } from 'react';
import styles from './gallery.module.scss';
import ItemGallery from '../ItemGallery/ItemGallery';
import Sort from '../Sort/Sort';
import useTypedSelector from '../../hooks/useTypedSelector';
import selectors from '../../store/selectors/selectors';
import fetchGallery from '../../api/gallery';

const Gallery = () => {
  const { gallery, error } = useTypedSelector(selectors.gallery);
  useEffect(() => {
    fetchGallery;
  }, []);
  return (
    <div className={styles.wrapperGallery}>
      <div className="container">
        <Sort />
        {gallery && gallery.map((item) => (
          <ItemGallery brand={item.albumId} imageUrl={item.url} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
