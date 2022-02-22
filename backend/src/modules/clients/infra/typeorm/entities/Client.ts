import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('clients')
export class Client {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  corporateName: string;

  @Column()
  contact: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}
