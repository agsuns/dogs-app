import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dog } from '../../Assets/dogs.svg';
import styles from './Header.module.css';
import { UserContext } from '../../UserContext';

export default function Header() {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
          <Dog></Dog>
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.username}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
