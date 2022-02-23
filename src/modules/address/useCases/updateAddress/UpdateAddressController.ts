import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAddressUseCase } from './UpdateAddressUseCase';

export class UpdateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
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

    const updateAddressUseCase = container.resolve(UpdateAddressUseCase);
    const address = await updateAddressUseCase.execute({
      id,
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
