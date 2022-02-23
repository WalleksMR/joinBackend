import { ICreateAddress } from '@modules/address/dto/ICreateAddress';
import { Address } from '@modules/address/infra/typeorm/entities/Address';

import { IAddressRepository } from '../IAddressRepository';

export class AddressRepositoryInMemory implements IAddressRepository {
  private address: Address[] = [];
  async create(data: ICreateAddress): Promise<Address> {
    if (data.id) {
      const address = this.address.find(address => address.id === data.id);
      Object.assign(address, data);
      return address;
    }
    const address = new Address();
    Object.assign(address, data);
    return address;
  }
  async listAll(): Promise<Address[]> {
    return this.address;
  }
  async findById(id: string): Promise<Address> {
    const address = this.address.find(address => address.id === id);
    return address;
  }
}
