import React from 'react';
import styles from './Button.module.css';

export default function Button({ style }) {
  return (
    <button className={styles.color} style={style}>
      버튼 컴포넌트
    </button>
  );
}
