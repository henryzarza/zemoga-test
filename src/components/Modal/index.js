import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { func } from 'prop-types';

import { ReactComponent as IcTimes } from '@assets/times.svg';
import { ESC_KEY_CODE } from './constants';
import styles from './styles.module.scss';

function Modal({ onClose, children }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.which === ESC_KEY_CODE) onClose(null);
    },
    [onClose]
  );

  useEffect(() => {
    const bodyRef = document.querySelector('body');
    bodyRef.addEventListener('keydown', handleKeyDown);

    return () => bodyRef.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return createPortal(
    <div
      className={styles.content}
      tabIndex='0'
      role='dialog'
      aria-labelledby='modal-title'
      aria-modal='true'
    >
      <div className={styles.innerContent}>
        <button
          type='button'
          className={styles.closeBtn}
          onClick={() => onClose(null)}
          aria-label='close'
        >
          <IcTimes />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

Modal.propTypes = {
  onClose: func.isRequired
};

export default Modal;
