import React from 'react';
import styles from './Input.module.css';

export default function Input({
  label,
  type,
  name,
  value,
  setValue,
  error,
  onChange,
  onBlur,
}) {
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
          onChange={(event) => onChange(event)}
          onBlur={onBlur}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </>
  );
}
