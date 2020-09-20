import React from 'react';
import { string, func, shape, bool, number, instanceOf } from 'prop-types';
import clsx from 'clsx';
import styles from './styles.module.scss';

function Input({
  id,
  label,
  type,
  register,
  validationSchema,
  errors,
  isDirty,
  onChange,
  placeholder
}) {
  return (
    <div className={styles.container}>
      {label && (
        <label className='small-text' htmlFor={id}>
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        name={id}
        autoComplete='off'
        className={clsx(`base-text ${styles.input}`, {
          [styles.filled]: isDirty,
          [styles.inputError]: errors
        })}
        ref={register(validationSchema)}
        onChange={onChange}
      />
      {errors && (
        <small className={`small-text fw-bold white-color ${styles.error}`}>{errors.message}</small>
      )}
    </div>
  );
}

Input.propTypes = {
  id: string.isRequired,
  label: string,
  placeholder: string,
  register: func.isRequired,
  type: string,
  validationSchema: shape({
    required: string,
    maxLength: shape({
      value: number,
      message: string
    }),
    minLength: shape({
      value: number,
      message: string
    }),
    pattern: shape({
      value: instanceOf(RegExp),
      message: string
    })
  }),
  errors: shape({
    message: string
  }),
  isDirty: bool,
  onChange: func
};

Input.defaultProps = {
  type: 'text',
  validationSchema: {}
};

export default Input;
