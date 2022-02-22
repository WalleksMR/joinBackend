import { Client } from '@modules/clients/infra/typeorm/entities/Client';
import { IClientsRepository } from '@modules/clients/repositories/IClientsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListClientUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}
  async execute(): Promise<Client[]> {
    const listClients = await this.clientsRepository.listAll();
    return listClients;
  }
}
