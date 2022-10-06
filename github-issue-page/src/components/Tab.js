import styles from './Tab.module.css';
import clsx from 'clsx';

export default function Tab({ tabTitle, count, onClick, selected }) {
  return (
    <li onClick={onClick} className={clsx(styles.tab, { [styles.selected]: selected })}>
      <div className={styles.tabItems}>
        <span>{tabTitle}</span>
        {count && <span className={styles.count}>{count}</span>}
      </div>
    </li>
  );
}
