import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAddressUseCase } from './CreateAddressUsecase';

export class CreateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { client_id } = request.params;

    const {
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      zip_code,
      latitude,
      longitude,
    } = request.body;

    const createAddressRepository = container.resolve(CreateAddressUseCase);

    const address = await createAddressRepository.execute({
      client_id,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      zip_code,
      latitude,
      longitude,
    });

    return response.status(201).json(address);
  }
}
