import React, { useCallback } from 'react';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';

import Input from '@components/Input';
import { ERROR_MESSAGES } from '@constants/errorMessages';
import { VALIDATION_SCHEMA, FIELD_NAMES } from './constants';
import styles from './styles.module.scss';

function SignIn() {
  const { register, handleSubmit, errors, formState, getValues, setError } = useForm();
  const { dirtyFields } = formState;

  const handleChangePasswordRepeat = useCallback(
    (e) => {
      const { password } = getValues();
      const value = e.target.value;
      if (value === password) return;
      setError('passwordRepeat', 'notMatch', ERROR_MESSAGES.passwordRepeat);
    },
    [getValues, setError]
  );

  const onSubmit = (data) => {
    console.table(data);
    alert('Look at the console');
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.innerContent}>
        <h2 className='small-title fw-thin m-bottom-4'>{i18next.t('SIGN_UP:TITLE')}</h2>
        <Input
          id={FIELD_NAMES.NAME}
          label={i18next.t('SIGN_UP:NAME')}
          register={register}
          validationSchema={VALIDATION_SCHEMA.NAME}
          errors={errors.name}
          isDirty={dirtyFields.hasOwnProperty(FIELD_NAMES.NAME)}
        />
        <Input
          id={FIELD_NAMES.USER_NAME}
          label={i18next.t('SIGN_UP:USER_NAME')}
          register={register}
          validationSchema={VALIDATION_SCHEMA.USER_NAME}
          errors={errors.username}
          isDirty={dirtyFields.hasOwnProperty(FIELD_NAMES.USER_NAME)}
        />
        <Input
          id={FIELD_NAMES.EMAIL}
          label={i18next.t('SIGN_UP:EMAIL')}
          register={register}
          validationSchema={VALIDATION_SCHEMA.EMAIL}
          errors={errors.email}
          isDirty={dirtyFields.hasOwnProperty(FIELD_NAMES.EMAIL)}
        />
        <Input
          id={FIELD_NAMES.PASSWORD}
          label={i18next.t('SIGN_UP:PASSWORD')}
          type='password'
          register={register}
          validationSchema={VALIDATION_SCHEMA.PASSWORD}
          errors={errors.password}
          isDirty={dirtyFields.hasOwnProperty(FIELD_NAMES.PASSWORD)}
        />
        <Input
          id={FIELD_NAMES.PASSWORD_REPEAT}
          label={i18next.t('SIGN_UP:PASSWORD_REPEAT')}
          type='password'
          register={register}
          validationSchema={VALIDATION_SCHEMA.PASSWORD_REPEAT}
          errors={errors.passwordRepeat}
          isDirty={dirtyFields.hasOwnProperty(FIELD_NAMES.PASSWORD_REPEAT)}
          onChange={handleChangePasswordRepeat}
        />
        <button
          type='submit'
          className={`big-bold-text fw-normal white-color m-right-1 ${styles.button}`}
        >
          {i18next.t('SIGN_UP:SIGN_IN')}
        </button>
      </div>
    </form>
  );
}

export default SignIn;
