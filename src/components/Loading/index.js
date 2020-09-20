import React from 'react';
import { bool } from 'prop-types';
import clsx from 'clsx';

import styles from './styles.module.scss';

function Loading({ isFit }) {
  return (
    <div className={clsx(styles.container, { [styles.fit]: isFit })}>
      <div className={styles.loader} />
    </div>
  );
}

Loading.propTypes = {
  isFit: bool
};

export default Loading;
