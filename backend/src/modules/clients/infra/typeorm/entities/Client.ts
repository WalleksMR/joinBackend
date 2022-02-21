import { v4 as uuidV4 } from 'uuid';

export class Client {
  id: string;

  name: string;

  cnpj: string;

  corporateName: string;

  contact: number;

  createdAt: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}
