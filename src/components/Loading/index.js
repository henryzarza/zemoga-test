import React from 'react';

import styles from './styles.module.scss';

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  );
}

export default Loading;
