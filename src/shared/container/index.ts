import { AddressRepository } from '@modules/address/infra/typeorm/repositories/AddressRepository';
import { IAddressRepository } from '@modules/address/repositories/IAddressRepository';
import { container } from 'tsyringe';

import { ClientsRepository } from '../../modules/clients/infra/typeorm/repositories/ClientsRepository';
import { IClientsRepository } from '../../modules/clients/repositories/IClientsRepository';

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository,
);

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
);
