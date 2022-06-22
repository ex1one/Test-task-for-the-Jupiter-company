import React, { useState } from 'react';
import Logo from '../../../public/img/Polygon.svg';
import styles from './header.module.scss';
import Button from '../Button/Button';
import Menu from '../Menu/Menu';

const Header = () => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.hamburger}>
            <span onClick={handleClick} className={styles.line} />
          </div>
          <div className={styles.desktop}>
            <div className={styles.wrapperLogo}>
              <Logo className={styles.logo} />
              <h1>Agency</h1>
            </div>
            <Menu open={open} setOpen={setOpen} />
            <div className={styles.contact}>
              <Button title="Contact" variant="other" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
