import { ICreateClient } from '../dto/ICreateClient';
import { Client } from '../infra/typeorm/entities/Client';

export interface IClientsRepository {
  create(data: ICreateClient): Promise<Client>;
  findById(id: string): Promise<Client>;
  findByCnpj(cnpj: string): Promise<Client>;
  listAll(): Promise<Client[]>;
  delete(id: string): Promise<void>;
}
