import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './App.module.css';
import Nav from './Nav';
import TabList from './TabList';

const title = ['input 박스에 숫자 외 입력', 'game over시 게임 정답 보여주기'];

function App() {
  const [onChangeInput, setOnChangeInput] = useState('is:issue is:open');
  const [headerInput, setHeaderInput] = useState('Search or jump to..');
  return (
    <>
      <Nav>
        <svg
          style={{ margin: '10px', paddingLeft: '15px' }}
          height="32"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          width="32"
          data-view-component="true"
          class="octicon octicon-mark-github v-align-middle"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>

        <input
          onChange={(e) => {
            setOnChangeInput(e.target.value);
          }}
          style={{
            padding: '5px 10px',
            background: '#1c2128',
            border: '1px solid rgba(205, 217, 229, 0.1)',
            borderBottomRightRadius: '5px',
            borderTopRightRadius: '5px',
            color: 'rgb(173, 186, 199)',
            marginRight: '20px',
          }}
          value={headerInput}
        />

        <ul
          className="navbar"
          style={{
            color: '#cdd9e5',
            display: 'flex',
            fontWeight: 'bold',
            gap: '10px',
            fontSize: '14px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          <li>Pull requests</li>
          <li>Issues</li>
          <li>Marketplace</li>
          <li>Explore</li>
        </ul>
      </Nav>

      <Header style={styles.header}>
        <Title style={styles.title}>ReturnReason</Title>
        <div style={{ marginLeft: 'auto', display: 'flex', marginRight: '32px' }}>
          <Button style={styles.button}>Pin</Button>
          <Button style={styles.button}>Watch</Button>
          <Button style={styles.button}>Fork</Button>
          <Button style={styles.button}>Star</Button>
        </div>
      </Header>

      <TabContainer className={styles.headerConatiner} style={styles.tabContainer}>
        <TabList></TabList>
      </TabContainer>

      <div style={{ width: '90%', margin: '0 auto', marginBottom: '23px', marginTop: '25px' }}>
        <Button style={clsx(styles.button, styles.rightNoBorder)}>Filters</Button>
        <input
          onChange={(e) => {
            setOnChangeInput(e.target.value);
          }}
          style={{
            padding: '5px 10px',
            background: '#1c2128',
            border: '1px solid rgba(205, 217, 229, 0.1)',
            borderBottomRightRadius: '5px',
            borderTopRightRadius: '5px',
            color: 'rgb(173, 186, 199)',
            marginRight: '20px',
            paddingRight: '40%',
          }}
          value={onChangeInput}
        />

        {/* 이 부분은 다른 버튼 컴포넌트 넣어야함 */}
        <>
          <Button style={styles.button}>Labels</Button>
          <Button style={styles.button}>Milestones</Button>
        </>

        <Button style={clsx(styles.button, styles.green)}>New issue</Button>
      </div>

      <div>
        <ul style={{ width: '90%', margin: '0 auto', marginTop: '15px' }}>
          {title.map((title, idx) => {
            return (
              <li
                className="listItems"
                style={{ color: '#cdd9e5', border: '1px solid #eee', padding: '10px' }}
                key={idx}
              >
                {title}
                <div>
                  <span style={{ fontSize: '12px', color: '#768390' }}>
                    #6 opened on 17 Jul by ReturnReason
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

const Header = ({ children, style }) => {
  return <div className={style}>{children}</div>;
};

const Title = ({ children, style }) => {
  return <h2 className={style}>{children}</h2>;
};

const TabContainer = ({ children }) => {
  return <div>{children}</div>;
};

const Button = ({ children, style }) => {
  return <button className={style}>{children}</button>;
};

export default App;
