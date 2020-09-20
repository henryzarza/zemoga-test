import { ERROR_MESSAGES } from '@constants/errorMessages';
import { VALIDATION_SCHEMA as LOGIN_SCHEMA } from '../Login/constants';

export const FIELD_NAMES = {
  NAME: 'name',
  EMAIL: 'email',
  USER_NAME: 'username',
  PASSWORD: 'password',
  PASSWORD_REPEAT: 'passwordRepeat'
};

export const VALIDATION_SCHEMA = {
  ...LOGIN_SCHEMA,
  PASSWORD_REPEAT: {
    required: ERROR_MESSAGES.required
  },
  USER_NAME: {
    required: ERROR_MESSAGES.required,
    maxLength: {
      value: 45,
      message: `${ERROR_MESSAGES.maxLength} 45`
    },
    minLength: {
      value: 3,
      message: `${ERROR_MESSAGES.minLength} 3`
    }
  },
  NAME: {
    required: ERROR_MESSAGES.required,
    maxLength: {
      value: 75,
      message: `${ERROR_MESSAGES.maxLength} 75`
    },
    minLength: {
      value: 3,
      message: `${ERROR_MESSAGES.minLength} 3`
    }
  }
};
