import styles from './App.module.css';
import Button from './components/Button';
import Nav from './Nav';
import TabList from './TabList';

function App() {
  return (
    <>
      <Nav></Nav>
      <div className={styles.headerConatiner}>
        <TabList></TabList>
      </div>
      <Button
        style={{
          border: '1px solid rgba(27,31,36,0.15) ',
          backgroundColor: '#218bff',
          color: '#fff',
          fontSize: '14px',
        }}
      ></Button>
    </>
  );
}

export default App;
