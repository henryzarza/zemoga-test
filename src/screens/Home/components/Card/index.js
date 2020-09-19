import React from 'react';
import i18next from 'i18next';
import { string, shape, number } from 'prop-types';

import { ReactComponent as IcThumb } from '@assets/thumb.svg';
import styles from './styles.module.scss';

function Card({ data }) {
  return (
    <div className={styles.card}>
      <img className={styles.personPhoto} src={data.img} alt={data.name} />
      <div className={styles.cardContent}>
        <h3 className={`highlight-title white-color ${styles.title}`}>
          <span className={styles.rated}>
            <IcThumb aria-label='thumb up' className={`${styles.thumb}`} />
          </span>
          {data.name}
        </h3>
        <small className='small-text fw-bold white-color m-bottom-3'>
          {i18next.t('HOME:IN', { time: data.time_remaining, category: data.category })}
        </small>
        <p className='base-text fw-thin white-color m-bottom-4'>{data.description}</p>
        <div className={styles.bottomContent}>
          <input className={styles.inputRadio} type='radio' name='vote-1' value='up' id='up' />
          <label htmlFor='up' aria-label='thumb up'>
            <IcThumb className={`${styles.thumb}`} />
          </label>
          <input className={styles.inputRadio} type='radio' name='vote-1' value='down' id='down' />
          <label htmlFor='down' aria-label='Thumb down'>
            <IcThumb className={`${styles.thumb} ${styles.down}`} />
          </label>
          <button type='button' className={`base-text white-color text-center ${styles.button}`}>
            {i18next.t('HOME:BUTTON_VOTE')}
          </button>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.upProgress}>
          <IcThumb aria-label='thumb up' className={`m-right-2 ${styles.thumb}`} />
          <h6 className='big-thin-text white-color'>64%</h6>
        </div>
        <div className={styles.downProgress}>
          <h6 className='big-thin-text white-color m-right-2'>36%</h6>
          <IcThumb aria-label='thumb down' className={`${styles.thumb} ${styles.down}`} />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: shape({
    id: number.isRequired,
    img: string.isRequired,
    name: string.isRequired,
    description: string.isRequired,
    category: string.isRequired,
    time_remaining: string.isRequired
  }).isRequired
};

export default Card;
