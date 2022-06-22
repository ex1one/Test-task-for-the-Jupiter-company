import React, { Dispatch, FC, SetStateAction } from 'react';
import menu from '../../const/menu';
import styles from './menu.module.scss';

interface IMenuProps {
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Menu: FC <IMenuProps> = ({ setOpen }) => {
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.menuContent}>
        <ul>
          {menu.map((item) => <li key={item.toString()} className={styles.itemMenu}>{item.title}</li>)}
        </ul>
        <div className={styles.close} onClick={handleClick} />
      </div>
    </nav>
  );
};

export default Menu;
