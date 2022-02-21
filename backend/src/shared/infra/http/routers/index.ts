import { Router } from 'express';

import { routerClient } from './clients.routes';

export const routes = Router();

routes.use('/clients', routerClient);
