import DataMask from '@config/DataMask';
import { ICreateClient } from '@modules/clients/dto/ICreateClient';
import { Client } from '@modules/clients/infra/typeorm/entities/Client';
import { IClientsRepository } from '@modules/clients/repositories/IClientsRepository';
import { inject, injectable } from 'tsyringe';
import * as Yup from 'yup';

import GetValidationErrors from '@shared/errors/GetValidationErrors';

@injectable()
export class UpdateClientUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}
  async execute(data: ICreateClient): Promise<Client> {
    try {
      const schema = Yup.object({
        name: Yup.string().required().min(6),
        cnpj: Yup.number().required(),
        corporate_name: Yup.string().required(),
        contact: Yup.string().required(),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      GetValidationErrors(error as Yup.ValidationError);
    }

    DataMask.maskCnpj(data.cnpj);
    DataMask.maskContact(data.contact);

    const client = await this.clientsRepository.create(data);
    return client;
  }
}
