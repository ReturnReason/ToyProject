import styles from './TabList.module.css';
import Tab from './components/Tab';
import { useState } from 'react';

const tabItems = [
  'Code',
  'Issues',
  'Pull requests',
  'Discussions',
  'Actions',
  'Projects',
  'Wiki',
  'Security',
  'Insights',
  'Settings',
];

export default function TabList() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <ul className={styles.tabList}>
      {tabItems.map((tab, idx) => {
        return (
          <Tab
            onClick={() => {
              setSelectedTab(idx);
            }}
            selected={selectedTab === idx}
            count="1"
            tabTitle={tab}
            key={`${idx}번째 ${tab}`}
          ></Tab>
        );
      })}
    </ul>
  );
}
