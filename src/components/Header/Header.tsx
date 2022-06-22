import React from 'react';
import Logo from '../../../public/img/Polygon.svg';
import styles from './header.module.scss';

const Header = () => {
  const menu = ['About', 'Services', 'Pricing', 'Blog']; // Могут подгружаться с сервака
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.wrapperLogo}>
            <Logo className={styles.logo} />
            <h1>Agency</h1>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.menu}>
              {menu.map((item) => <li key={item.toString()} className={styles.itemMenu}>{item}</li>)}
            </ul>
          </nav>
          <div className={styles.contact}>
            <button type="submit">Contact</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
