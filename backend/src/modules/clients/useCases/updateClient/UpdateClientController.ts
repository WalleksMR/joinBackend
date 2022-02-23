import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateClientUseCase } from './UpdateClientUseCase';

export class UpdateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, cnpj, corporate_name, contact } = request.body;
    const updateClientUseCase = container.resolve(UpdateClientUseCase);
    const client = await updateClientUseCase.execute({
      id,
      name,
      cnpj,
      corporate_name,
      contact,
    });
    return response.status(201).json(client);
  }
}
