import React, { useState, useEffect } from 'react';
import i18next from 'i18next';

import Loading from '@components/Loading';
import { BACKEND_URL } from '@constants/routes';
import { ReactComponent as IcTimes } from '@assets/times.svg';
import MainSection from './components/MainSection';
import Card from './components/Card';
import styles from './styles.module.scss';

function Home() {
  const [isAdvertisementVisible, setIsAdvertisementVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${BACKEND_URL}people`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <MainSection />
      <section className={styles.voteSection}>
        {isAdvertisementVisible && (
          <div className={`m-bottom-5 ${styles.message}`}>
            <div className={styles.highlight}>
              <h6 className='big-text fw-thin'>{i18next.t('HOME:SPEAK_OUT')}</h6>
              <h4 className='medium-bold-title'>{i18next.t('HOME:BE_COUNTED')}</h4>
            </div>
            <p className={`base-text fw-thin m-left-3 m-right-4 ${styles.msgParagragh}`}>
              {i18next.t('HOME:MESSAGE_DESCRIPTION')}
            </p>
            <IcTimes className={styles.timeIcon} onClick={() => setIsAdvertisementVisible(false)} />
          </div>
        )}
        <h2 className='medium-title m-bottom-5'>{i18next.t('HOME:VOTE_TITLE')}</h2>
        {isLoading ? (
          <Loading isFit />
        ) : (
          <div className={styles.cardContainer}>
            {data && data.map((el) => <Card key={el.id} data={el} />)}
          </div>
        )}
        <div className={`m-top-10 m-bottom-1 ${styles.banner}`}>
          <h6 className='big-thin-text m-right-1'>{i18next.t('HOME:ADD_NAME')}</h6>
          <button type='button' className={`big-bold-text fw-normal ${styles.button}`}>
            {i18next.t('HOME:SUBMIT_NAME')}
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
