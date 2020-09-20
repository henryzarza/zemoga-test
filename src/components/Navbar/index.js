import React, { useState } from 'react';
import i18next from 'i18next';
import { NavLink } from 'react-router-dom';

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
          <NavLink
            className={`small-title white-color m-right-2 ${styles.mainLink}`}
            to={ROUTES.HOME}
          >
            {i18next.t('HOME:NAV')}
          </NavLink>
          <div className={styles.links}>
            {NAVBAR_ROUTES.map((el) => (
              <NavLink
                key={el.route}
                className={`base-text fw-thin white-color m-right-10 ${styles.link}`}
                to={el.route}
                activeClassName='fw-bold'
              >
                {i18next.t(el.text)}
              </NavLink>
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
