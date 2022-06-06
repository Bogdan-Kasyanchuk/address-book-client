import {
  nameRegex,
  phoneRegex,
  emailRegex,
  passwordRegex,
} from 'helpers/regex';

import { LIMIT } from 'helpers/constants';

const validation = {
  name: {
    required: 'The name is a required field!',
    minLength: {
      value: LIMIT.NAME_MIN,
      message: 'The name must contain min 3 characters!',
    },
    pattern: {
      value: nameRegex,
      message: 'Enter the desired name format!',
    },
  },
  phone: {
    required: 'The phone is a required field!',
    minLength: {
      value: LIMIT.PHONE_MIN,
      message: 'The phone must contain min 10 characters!',
    },
    pattern: {
      value: phoneRegex,
      message: 'Enter the desired phone format!',
    },
  },
  email: {
    required: 'The email is a required field!',
    pattern: {
      value: emailRegex,
      message: 'Enter the desired email format!',
    },
  },
  password: {
    required: 'The password is a required field!',
    minLength: {
      value: LIMIT.PASSWORD_MIN,
      message: 'The password must contain min 8 characters!',
    },
    pattern: {
      value: passwordRegex,
      message: 'Enter the desired password format!',
    },
  },
};

export default validation;
