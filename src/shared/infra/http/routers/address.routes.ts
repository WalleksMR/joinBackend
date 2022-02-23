import { CreateAddressController } from '@modules/address/useCases/createAddress/CreateAddressController';
import { UpdateAddressController } from '@modules/address/useCases/updateAddress/UpdateAddressController';
import { Router } from 'express';

export const addressRoutes = Router();

const createAddressController = new CreateAddressController();
const updateAddressController = new UpdateAddressController();

addressRoutes.post('/:client_id', createAddressController.handle);
addressRoutes.patch('/update/:id', updateAddressController.handle);
