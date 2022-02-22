import { ICreateAddress } from '../dto/ICreateAddress';
import { Address } from '../infra/typeorm/entities/Address';

export interface IAddressRepository {
  create(data: ICreateAddress): Promise<Address>;
  listAll(): Promise<Address[]>;
  findById(id: string): Promise<Address>;
}
