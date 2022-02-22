import { Address } from '@modules/address/infra/typeorm/entities/Address';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('clients')
export class Client {
  @PrimaryColumn()
  id: string;

  @JoinColumn()
  @OneToMany(() => Address, address => address.client)
  address: Address[];

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  corporate_name: string;

  @Column()
  contact: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}
