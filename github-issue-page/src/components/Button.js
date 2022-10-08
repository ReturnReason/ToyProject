import React from 'react';
import styles from './Button.module.css';

export default function Button({ style }) {
  return (
    <button className={styles.color} style={style}>
      New issue
    </button>
  );
}
