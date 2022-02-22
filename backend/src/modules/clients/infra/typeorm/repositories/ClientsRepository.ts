import { getRepository, Repository } from 'typeorm';

import { ICreateClient } from '../../../dto/ICreateClient';
import { IClientsRepository } from '../../../repositories/IClientsRepository';
import { Client } from '../entities/Client';

export class ClientsRepository implements IClientsRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }
  async findByCnpj(cnpj: string): Promise<Client> {
    const client = await this.repository.findOne({ cnpj });
    return client;
  }

  async create(data: ICreateClient): Promise<Client> {
    const client = this.repository.create(data);
    await this.repository.save(client);

    return client;
  }
  async findById(id: string): Promise<Client> {
    const client = await this.repository.findOne({ id });
    return client;
  }
  async listAll(): Promise<Client[]> {
    const clientList = await this.repository.find();
    return clientList;
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}
