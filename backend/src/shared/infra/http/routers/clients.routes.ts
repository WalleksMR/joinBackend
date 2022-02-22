import { CreateClientController } from '@modules/clients/useCases/createClient/CreateClientController';
import { ListClientController } from '@modules/clients/useCases/listClient/ListClientController';
import { Router } from 'express';

export const routerClient = Router();

const createClientController = new CreateClientController();
const listClientController = new ListClientController();

routerClient.post('/', createClientController.handle);
routerClient.get('/', listClientController.handle);
