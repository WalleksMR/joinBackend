import { Router } from 'express';

import { addressRoutes } from './address.routes';
import { routerClient } from './clients.routes';

export const routes = Router();

routes.use('/clients', routerClient);
routes.use('/address', addressRoutes);
