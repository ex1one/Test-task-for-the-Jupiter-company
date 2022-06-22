import React from 'react';
import styles from './sort.module.scss';

const Sort = () => {
  const sortArray = ['Show all', 'Design', 'Branding', 'Illustration', 'Motion'];

  const changeClick = () => {
    console.log('Кликнули');
  };

  return (
    <div className={styles.wrapperSort}>
      {sortArray.map((sort) => <li className={styles.sortItem} onClick={changeClick} key={sort.toString()}>{sort}</li>)}
    </div>
  );
};

export default Sort;
