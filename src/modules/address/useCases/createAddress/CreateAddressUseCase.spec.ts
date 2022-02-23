import MokeTest from '@config/MokeTest';
import { AddressRepositoryInMemory } from '@modules/address/repositories/in-memory/AddressRepositoryInMemory';
import { ClientsRepositoryInMemory } from '@modules/clients/repositories/in-memory/ClientsRepositoryInMemory';

import { CreateAddressUseCase } from './CreateAddressUsecase';

describe('Create Address Use Case', () => {
  let createAddressUseCase: CreateAddressUseCase;
  let clientsRepositoryInMemory: ClientsRepositoryInMemory;
  let addressRepositoryInMemory: AddressRepositoryInMemory;

  beforeEach(() => {
    clientsRepositoryInMemory = new ClientsRepositoryInMemory();
    addressRepositoryInMemory = new AddressRepositoryInMemory();
    createAddressUseCase = new CreateAddressUseCase(
      addressRepositoryInMemory,
      clientsRepositoryInMemory,
    );
  });

  it('should be able create a new address', async () => {
    const client = await clientsRepositoryInMemory.create(
      MokeTest.CreateClient,
    );
    const address = await createAddressUseCase.execute({
      client_id: client.id,
      street: MokeTest.CreateAddress.street,
      number: MokeTest.CreateAddress.number,
      complement: MokeTest.CreateAddress.complement,
      neighborhood: MokeTest.CreateAddress.neighborhood,
      city: MokeTest.CreateAddress.city,
      state: MokeTest.CreateAddress.state,
      zip_code: MokeTest.CreateAddress.zip_code,
      latitude: MokeTest.CreateAddress.latitude,
      longitude: MokeTest.CreateAddress.longitude,
    });

    expect(address).toHaveProperty('id');
  });
});
