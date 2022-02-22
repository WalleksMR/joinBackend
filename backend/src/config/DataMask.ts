import { AppError } from '@shared/errors/AppError';

class DataMask {
  maskCnpj(cnpj: string): boolean {
    const newCnpj = Number(cnpj);

    if (newCnpj) {
      const caracter = cnpj.split('');
      if (caracter.length < 14 || caracter.length > 14) {
        throw new AppError(
          'CNPJ invalid, please check your CNPJ and try again',
        );
      }
      return true;
    }

    throw new AppError('CNPJ invalid, please check your CNPJ and try again');
  }

  maskContact(contact: string): boolean {
    const newContact = Number(contact);

    if (newContact) {
      const caracter = contact.split('');
      if (caracter.length < 6) {
        throw new AppError(
          'Contact invalid, please check your Contact and try again',
        );
      }
      return true;
    }

    throw new AppError(
      'Contact invalid, please check your Contact and try again',
    );
  }
}

export default new DataMask();
