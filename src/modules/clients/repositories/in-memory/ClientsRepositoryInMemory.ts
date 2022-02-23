import { ICreateClient } from '../../dto/ICreateClient';
import { Client } from '../../infra/typeorm/entities/Client';
import { IClientsRepository } from '../IClientsRepository';

export class ClientsRepositoryInMemory implements IClientsRepository {
  private clients: Client[] = [];

  async create({
    id,
    name,
    cnpj,
    corporate_name,
    contact,
  }: ICreateClient): Promise<Client> {
    if (id) {
      const client = this.clients.find(client => client.id === id);
      Object.assign(client, {
        name,
        cnpj,
        corporate_name,
        contact,
      });
      this.clients.push(client);
      return client;
    }
    const client = new Client();
    Object.assign(client, {
      name,
      cnpj,
      corporate_name,
      contact,
    });
    this.clients.push(client);

    return client;
  }
  async listAll(): Promise<Client[]> {
    return this.clients;
  }
  async delete(id: string): Promise<void> {
    const newClient = this.clients;
    const clientIndex = this.clients.findIndex(client => client.id === id);

    newClient.splice(clientIndex, 1);
  }

  async findById(id: string): Promise<Client> {
    return this.clients.find(client => client.id === id);
  }
  async findByCnpj(cnpj: string): Promise<Client> {
    return this.clients.find(client => client.cnpj === cnpj);
  }
}
