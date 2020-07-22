import React from 'react';
import Header from './components/header';
import styles from './app.module.css';
import Aside from './components/aside';
import Origamies from './components/origamies';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origamies />
      </div>
    </div>

  );
}

export default App;
