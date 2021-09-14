import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dog } from '../../Assets/dogs.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
          <Dog></Dog>
        </Link>
        <Link to="/login" className={styles.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}
