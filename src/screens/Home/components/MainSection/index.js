import React, { useEffect, useState } from 'react';
import i18next from 'i18next';

import Loading from '@components/Loading';
import { BACKEND_URL } from '@constants/routes';
import { ReactComponent as IcThumb } from '@assets/thumb.svg';
import { ReactComponent as IcWiki } from '@assets/wiki.svg';
import styles from './styles.module.scss';

function MainSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${BACKEND_URL}main-section`)
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return isLoading ? (
    <div className={styles.loaderContainer}>
      <Loading isFit />
    </div>
  ) : (
    <section className={styles.content} style={{ backgroundImage: `url(${data.img})` }}>
      <div className={styles.innerContent}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h4 className='base-text fw-thin white-color'>{i18next.t('HOME:WHAT_IS_OPINION')}</h4>
            <h2 className={`title white-color m-bottom-5 ${styles.name}`}>{data.name}?</h2>
            <p className='big-text fw-thin white-color m-bottom-3'>{data.description}</p>
            <span className={`m-bottom-5 ${styles.readMore}`}>
              <IcWiki className={styles.wikiIc} />
              <a
                href={data.url}
                rel='noopener'
                target='blank'
                className={`medium-text white-color m-left-1 ${styles.link}`}
              >
                {i18next.t('HOME:MORE_INFORMATION')}
              </a>
            </span>
            <h6 className='big-bold-text white-color'>{i18next.t('HOME:WHAT_IS_VERIDICT')}</h6>
          </div>
          <div className={styles.cardFooter}>
            <input className={styles.inputRadio} type='radio' name='vote' value='up' id='up' />
            <label htmlFor='up' aria-label='thumb up'>
              <IcThumb className={`${styles.thumb} ${styles.up}`} />
            </label>
            <input className={styles.inputRadio} type='radio' name='vote' value='down' id='down' />
            <label htmlFor='down' aria-label='Thumb down'>
              <IcThumb className={`${styles.thumb} ${styles.down}`} />
            </label>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <span className={`medium-text fw-normal white-color ${styles.footerInfo}`}>
          {i18next.t('HOME:CLOSING')}
        </span>
        <span className={`medium-text fw-normal ${styles.footerDays}`}>
          <strong className='m-right-1'>{data.days_remaining}</strong>
          {i18next.t('HOME:DAYS_REMAINING')}
        </span>
      </div>
    </section>
  );
}

export default MainSection;
