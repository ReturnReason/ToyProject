import React from 'react';
import styles from './Nav.module.css';

export default function Header({ children }) {
  return (
    <nav className={styles.header} style={{ display: 'flex', alignItems: 'center' }}>
      {children}
    </nav>
  );
}
