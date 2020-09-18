import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.app}>
      <h1 className='title m-bottom-4'>{i18next.t('HOME:TITLE')}</h1>
      <header className={styles.appHeader}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
