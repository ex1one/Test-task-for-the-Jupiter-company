import React from 'react';
import Logo from '../../../public/img/Polygon.svg';
import styles from './header.module.scss';
import Button from '../Button/Button';

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
            <Button title="Contact" variant="other" type="submit" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
