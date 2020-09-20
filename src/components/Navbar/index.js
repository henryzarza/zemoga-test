import React, { useState } from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import Login from '../../screens/Login';
import { ReactComponent as IcGlass } from '@assets/glass.svg';
import { NAVBAR_ROUTES, ROUTES } from '@constants/routes';
import styles from './styles.module.scss';

function Navbar() {
  const [isModalVisible, setIsModalVisible] = useState();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.innerContent}>
          <Link className={`small-title white-color m-right-2 ${styles.mainLink}`} to={ROUTES.HOME}>
            {i18next.t('HOME:NAV')}
          </Link>
          <div className={styles.links}>
            {NAVBAR_ROUTES.map((el) => (
              <Link
                key={el.route}
                className={`base-text fw-thin white-color m-right-10 ${styles.link}`}
                to={el.route}
              >
                {i18next.t(el.text)}
              </Link>
            ))}
            <button
              type='button'
              className={`base-text fw-thin white-color m-right-10 ${styles.link}`}
              onClick={() => setIsModalVisible(true)}
            >
              {i18next.t('HOME:NAV_LOGIN')}
            </button>
            <button type='button' className={styles.link} aria-label='Search'>
              <IcGlass className={styles.icon} />
            </button>
          </div>
        </div>
      </nav>
      {isModalVisible && (
        <Modal onClose={() => setIsModalVisible(false)} isVisible>
          <Login />
        </Modal>
      )}
    </>
  );
}

export default Navbar;
