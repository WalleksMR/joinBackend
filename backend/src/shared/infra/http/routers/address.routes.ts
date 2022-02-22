import { CreateAddressController } from '@modules/address/useCases/createAddress/CreateAddressController';
import { Router } from 'express';

export const addressRoutes = Router();

const createAddressController = new CreateAddressController();

addressRoutes.post('/:client_id', createAddressController.handle);
