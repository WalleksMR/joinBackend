import { ICreateAddress } from '@modules/address/dto/ICreateAddress';
import { Address } from '@modules/address/infra/typeorm/entities/Address';
import { IAddressRepository } from '@modules/address/repositories/IAddressRepository';
import { IClientsRepository } from '@modules/clients/repositories/IClientsRepository';
import { inject, injectable } from 'tsyringe';
import * as Yup from 'yup';

import { AppError } from '@shared/errors/AppError';
import GetValidationErrors from '@shared/errors/GetValidationErrors';

@injectable()
export class CreateAddressUseCase {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository,
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}
  async execute(data: ICreateAddress): Promise<Address> {
    const clientExist = await this.clientsRepository.findById(data.client_id);

    if (!clientExist) {
      throw new AppError('Client does not exists');
    }

    try {
      const schema = Yup.object({
        street: Yup.string().required(),
        number: Yup.number().required(),
        complement: Yup.string().required(),
        neighborhood: Yup.string().required(),
        city: Yup.string().required(),
        state: Yup.string().required(),
        zip_code: Yup.string().required(),
        latitude: Yup.string().required(),
        longitude: Yup.string().required(),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      GetValidationErrors(error as Yup.ValidationError);
    }

    const address = await this.addressRepository.create(data);

    return address;
  }
}
