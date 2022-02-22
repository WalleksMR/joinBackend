import { ICreateAddress } from '@modules/address/dto/ICreateAddress';
import { IAddressRepository } from '@modules/address/repositories/IAddressRepository';
import { getRepository, Repository } from 'typeorm';

import { Address } from '../entities/Address';

export class AddressRepository implements IAddressRepository {
  private repository: Repository<Address>;

  constructor() {
    this.repository = getRepository(Address);
  }

  async create(data: ICreateAddress): Promise<Address> {
    const address = this.repository.create(data);
    await this.repository.save(address);

    return address;
  }

  async listAll(): Promise<Address[]> {
    const allAddress = await this.repository.find();
    return allAddress;
  }

  async findById(id: string): Promise<Address> {
    const addressById = await this.repository.findOne({ id });
    return addressById;
  }
}
