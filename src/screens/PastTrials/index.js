import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.scss';

function PastTrials() {
  return (
    <section className={styles.section}>
      <h1 className='medium-title m-bottom-4'>{i18next.t('PAST_TRIALS:TITLE')}</h1>
      <p className='base-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore neque quasi incidunt,
        nemo quidem exercitationem saepe reiciendis aliquam totam commodi quos et dolorum quia natus
        illum assumenda ad aut.
      </p>
    </section>
  );
}

export default PastTrials;
