import { ValidationError } from 'yup';

import { AppError } from './AppError';

interface IError {
  [key: string]: string;
}

export default function GetValidationErrors(err: ValidationError): IError {
  const validationErrors: IError = {};

  err.inner.forEach(error => {
    validationErrors[error.path as string] = error.message;
    throw new AppError(error.message);
  });

  return validationErrors;
}
