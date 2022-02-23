import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cnpj, corporate_name, contact } = request.body;

    const createClientUseCase = container.resolve(CreateClientUseCase);
    const client = await createClientUseCase.execute({
      name,
      cnpj,
      corporate_name,
      contact,
    });

    return response.status(201).json(client);
  }
}
