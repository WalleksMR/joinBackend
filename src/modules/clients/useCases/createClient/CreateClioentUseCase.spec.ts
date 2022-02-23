import MokeTest from '@config/MokeTest';
import { ClientsRepositoryInMemory } from '@modules/clients/repositories/in-memory/ClientsRepositoryInMemory';

import { AppError } from '@shared/errors/AppError';

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

  it('should not be able create a new client if cnpj already exists', () => {
    expect(async () => {
      await createClientUseCase.execute(MokeTest.CreateClient);
      await createClientUseCase.execute(MokeTest.CreateClient);
    }).rejects.toBeInstanceOf(AppError);
  });
});
