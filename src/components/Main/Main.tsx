import React, { FC } from 'react';
import styles from './main.module.scss';

interface IMainProps {
  title: string;
  description: string
}

const Main: FC <IMainProps> = ({ title, description }) => (
  <div className={styles.main}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.Description}>{description}</p>
  </div>
);

export default Main;
