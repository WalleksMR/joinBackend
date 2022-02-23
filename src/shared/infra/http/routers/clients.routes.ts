import { CreateClientController } from '@modules/clients/useCases/createClient/CreateClientController';
import { ListClientController } from '@modules/clients/useCases/listClient/ListClientController';
import { UpdateClientController } from '@modules/clients/useCases/updateClient/UpdateClientController';
import { Router } from 'express';

export const routerClient = Router();

const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const updateClientController = new UpdateClientController();

routerClient.post('/', createClientController.handle);
routerClient.get('/', listClientController.handle);
routerClient.patch('/:id', updateClientController.handle);
