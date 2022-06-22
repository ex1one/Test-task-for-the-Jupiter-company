import React from 'react';
import styles from './gallery.module.scss';
import Sort from '../Sort/Sort';

const Gallery = () => (
  <section className={styles.gallery}>
    <Sort />
  </section>
);

export default Gallery;
