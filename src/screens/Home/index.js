import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.app}>
      <div className={styles.test} />
      <h1 className='title m-bottom-4'>{i18next.t('HOME:TITLE')}</h1>
    </div>
  );
}

export default Home;
