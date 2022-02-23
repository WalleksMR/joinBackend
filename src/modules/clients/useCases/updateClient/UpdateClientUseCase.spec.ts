import MokeTest from '@config/MokeTest';
import { ClientsRepositoryInMemory } from '@modules/clients/repositories/in-memory/ClientsRepositoryInMemory';

import { AppError } from '@shared/errors/AppError';

import { UpdateClientUseCase } from './UpdateClientUseCase';

describe('Use Case Client', () => {
  let clientsRepositoryInMemory: ClientsRepositoryInMemory;
  let updateClientUseCase: UpdateClientUseCase;

  beforeEach(() => {
    clientsRepositoryInMemory = new ClientsRepositoryInMemory();
    updateClientUseCase = new UpdateClientUseCase(clientsRepositoryInMemory);
  });

  it('should be able update a client', async () => {
    const client = await clientsRepositoryInMemory.create(
      MokeTest.CreateClient,
    );
    const clientUpdate = await updateClientUseCase.execute({
      id: client.id,
      name: MokeTest.UpdateClient.name,
      cnpj: MokeTest.UpdateClient.cnpj,
      corporate_name: MokeTest.UpdateClient.corporate_name,
      contact: MokeTest.UpdateClient.contact,
    });

    expect(clientUpdate.id).toBe(client.id);
    expect(clientUpdate.cnpj).toBe(client.cnpj);
  });

  it('should not be able update a client if anywhere input be undefined', () => {
    expect(async () => {
      const client = await clientsRepositoryInMemory.create(
        MokeTest.CreateClient,
      );
      await updateClientUseCase.execute({
        id: client.id,
        name: '',
        cnpj: '',
        corporate_name: '',
        contact: '',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
