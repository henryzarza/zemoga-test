import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.scss';

function HowItWorks() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.innerContent}>
          <div className={styles.card}>
            <h2 className='small-title fw-thin white-color m-bottom-8'>
              {i18next.t('HOW_IT_WORKS:TITLE')}
            </h2>
            <div className='text-center m-bottom-8'>
              <h5 className='medium-bold-title fw-thin white-color'>
                {i18next.t('HOME:SPEAK_OUT')}
              </h5>
              <h4 className='title fw-bold white-color'>{i18next.t('HOME:BE_COUNTED')}</h4>
            </div>
            <p className='big-bold-text fw-thin white-color m-bottom-2'>
              {i18next.t('HOW_IT_WORKS:MAIN_TEXT_1')}
            </p>
            <p className='big-bold-text fw-thin white-color'>
              {i18next.t('HOW_IT_WORKS:MAIN_TEXT_2')}
            </p>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <p className='base-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore neque quasi
          incidunt, nemo quidem exercitationem saepe reiciendis aliquam totam commodi quos et
          dolorum quia natus illum assumenda ad aut. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officiis, ducimus eligendi maxime temporibus aperiam, corporis magni
          labore maiores deserunt velit beatae animi laborum officia delectus nihil in optio impedit
          quos.
        </p>
      </section>
    </>
  );
}

export default HowItWorks;
