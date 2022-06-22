import React from 'react';
import menu from '../../const/menu';
import styles from './menu.module.scss';

const Menu = () => (
  <nav className={styles.nav}>
    <ul>
      {menu.map((item) => <li key={item.toString()} className={styles.itemMenu}>{item.title}</li>)}
    </ul>
  </nav>
);

export default Menu;
