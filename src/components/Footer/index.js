import React from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { ReactComponent as IcFacebook } from '@assets/facebook.svg';
import { ReactComponent as IcTwitter } from '@assets/twitter.svg';

import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={`small-text m-right-4 ${styles.link}`} to={ROUTES.HOME}>
        {i18next.t('FOOTER:TERMS')}
      </Link>
      <Link className={`small-text m-right-4 ${styles.link}`} to={ROUTES.HOME}>
        {i18next.t('FOOTER:PRIVACY')}
      </Link>
      <Link className={`small-text m-right-2 ${styles.link}`} to={ROUTES.HOME}>
        {i18next.t('FOOTER:CONTACT')}
      </Link>
      <div className={styles.socialMedia}>
        <span className='small-text m-right-4'>{i18next.t('FOOTER:FOLLOW_US')}</span>
        <a
          href='https://www.facebook.com/'
          rel='noopener'
          className={`m-right-3 ${styles.link}`}
          aria-label='Facebook'
        >
          <IcFacebook className={styles.icon} />
        </a>
        <a href='https://twitter.com/' rel='noopener' className={styles.link} aria-label='Twitter'>
          <IcTwitter className={styles.icon} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
