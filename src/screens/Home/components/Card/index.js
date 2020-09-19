import React, { useRef, useEffect, useState, useCallback } from 'react';
import i18next from 'i18next';
import { string, shape, number } from 'prop-types';
import clsx from 'clsx';

import { ReactComponent as IcThumb } from '@assets/thumb.svg';
import { THUMB_UP, THUMB_DOWN, updatePercentage } from './constants';
import styles from './styles.module.scss';

function Card({ data }) {
  const [voteInfo, setVoteInfo] = useState({});
  const [voteType, setVoteType] = useState();
  const [isAlreadyVoting, setIsAlreadyVoting] = useState(
    !!localStorage.getItem(`voteInfo-${data.id}`)
  );
  const cardFooterRef = useRef();

  useEffect(() => {
    setVoteInfo(updatePercentage(data, cardFooterRef.current));
  }, [data]);

  const handleSendVote = useCallback(() => {
    if (isAlreadyVoting) {
      setIsAlreadyVoting(false);
      return;
    }

    if (voteType) {
      const storageInfo = JSON.parse(localStorage.getItem(`voteInfo-${data.id}`)) || {};
      const store = {
        thumbUp: (storageInfo.thumbUp || 0) + (voteType === THUMB_UP ? 1 : 0),
        thumbDown: (storageInfo.thumbDown || 0) + (voteType === THUMB_DOWN ? 1 : 0)
      };
      localStorage.setItem(`voteInfo-${data.id}`, JSON.stringify(store));
      setIsAlreadyVoting(true);
      setVoteType(null);
      setVoteInfo(updatePercentage(data, cardFooterRef.current));
    }
  }, [data, isAlreadyVoting, voteType]);

  return (
    <div className={styles.card}>
      <img className={styles.personPhoto} src={data.img} alt={data.name} />
      <div className={styles.cardContent}>
        <h3 className={`highlight-title white-color ${styles.title}`}>
          {!!(voteInfo.thumbDown || voteInfo.thumbUp) && (
            <span
              className={clsx(styles.rated, {
                [styles.down]: voteInfo.thumbDown > voteInfo.thumbUp
              })}
            >
              <IcThumb
                aria-label='thumb'
                className={clsx(styles.thumb, {
                  [styles.down]: voteInfo.thumbDown > voteInfo.thumbUp
                })}
              />
            </span>
          )}
          {data.name}
        </h3>
        <small className='small-text fw-bold white-color m-bottom-3'>
          {i18next.t('HOME:IN', { time: data.time_remaining, category: data.category })}
        </small>
        <p className='base-text fw-thin white-color m-bottom-4'>
          {isAlreadyVoting ? i18next.t('HOME:THANKS') : data.description}
        </p>
        <div className={styles.bottomContent}>
          {!isAlreadyVoting && (
            <>
              <button
                type='button'
                className={clsx(styles.thumbButton, { [styles.active]: voteType === THUMB_UP })}
                aria-label='Thumb up'
                onClick={() => setVoteType(THUMB_UP)}
              >
                <IcThumb className={`${styles.thumb}`} />
              </button>
              <button
                type='button'
                className={clsx(`${styles.thumbButton} ${styles.down}`, {
                  [styles.active]: voteType === THUMB_DOWN
                })}
                aria-label='Thumb down'
                onClick={() => setVoteType(THUMB_DOWN)}
              >
                <IcThumb className={`${styles.thumb} ${styles.down}`} />
              </button>
            </>
          )}
          <button
            type='button'
            className={`base-text white-color text-center ${styles.button}`}
            onClick={handleSendVote}
          >
            {isAlreadyVoting ? i18next.t('HOME:BUTTON_VOTE_AGAIN') : i18next.t('HOME:BUTTON_VOTE')}
          </button>
        </div>
      </div>
      <div ref={cardFooterRef} className={styles.cardFooter}>
        <div className={styles.upProgress}>
          <IcThumb aria-label='Thumb up' className={`m-right-2 ${styles.thumb}`} />
          <h6 className='big-thin-text white-color'>{voteInfo.thumbUp || 0}%</h6>
        </div>
        <div className={styles.downProgress}>
          <h6 className='big-thin-text white-color m-right-2'>{voteInfo.thumbDown || 0}%</h6>
          <IcThumb aria-label='Thumb down' className={`${styles.thumb} ${styles.down}`} />
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
    time_remaining: string.isRequired,
    thumb_up: number.isRequired,
    thumb_down: number.isRequired
  }).isRequired
};

export default Card;
