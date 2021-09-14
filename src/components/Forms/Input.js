import React from 'react';
import styles from './Input.module.css';

export default function Input({ label, type, name, value, setValue }) {
  return (
    <>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        <input
          id={name}
          className={styles.input}
          type={type}
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <p className={styles.error}>Error</p>
      </div>
    </>
  );
}
