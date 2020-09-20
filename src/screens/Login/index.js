import React from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Input from '@components/Input';
import { VALIDATION_SCHEMA, FIELD_NAMES } from './constants';
import { ROUTES } from '@constants/routes';
import styles from './styles.module.scss';

function Login() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.table(data);
    alert('Look at the console');
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <h2 className='small-title fw-thin white-color m-bottom-4' id='modal-title'>
        {i18next.t('LOGIN:TITLE')}
      </h2>
      <Input
        id={FIELD_NAMES.EMAIL}
        placeholder={i18next.t('LOGIN:EMAIL')}
        register={register}
        validationSchema={VALIDATION_SCHEMA.EMAIL}
        errors={errors.email}
      />
      <Input
        id={FIELD_NAMES.PASSWORD}
        placeholder={i18next.t('LOGIN:PASSWORD')}
        type='password'
        register={register}
        validationSchema={VALIDATION_SCHEMA.PASSWORD}
        errors={errors.password}
      />
      <div className={`m-bottom-8 ${styles.buttonsContainer}`}>
        <button
          type='submit'
          className={`big-bold-text fw-normal white-color m-right-1 ${styles.button}`}
        >
          {i18next.t('LOGIN:SIGN_IN')}
        </button>
        <button type='button' className={`base-text fw-thin white-color ${styles.link}`}>
          {i18next.t('LOGIN:FORGOT_PASSWORD')}
        </button>
      </div>
      <div className={`big-bold-text fw-thin ${styles.info}`}>
        {i18next.t('LOGIN:DONT_HAVE_ACCOUNT')}
        <Link className={`big-bold-text fw-thin m-left-1 ${styles.link}`} to={ROUTES.SIGN_UP}>
          {i18next.t('LOGIN:JOIN_US')}
        </Link>
      </div>
    </form>
  );
}

export default Login;
