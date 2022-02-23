import MokeTest from '@config/MokeTest';
import { ClientsRepositoryInMemory } from '@modules/clients/repositories/in-memory/ClientsRepositoryInMemory';

import { CreateClientUseCase } from './CreateClientUseCase';

describe('Use Case Client', () => {
  let clientsRepositoryInMemory: ClientsRepositoryInMemory;
  let createClientUseCase: CreateClientUseCase;

  beforeEach(() => {
    clientsRepositoryInMemory = new ClientsRepositoryInMemory();
    createClientUseCase = new CreateClientUseCase(clientsRepositoryInMemory);
  });

  it('should be able create a new client', async () => {
    const client = await createClientUseCase.execute(MokeTest.CreateClient);

    expect(client).toHaveProperty('id');
    expect(client.cnpj).toBe(MokeTest.CreateClient.cnpj);
  });
});
