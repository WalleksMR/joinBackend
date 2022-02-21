import { Router } from 'express';

export const routerClient = Router();

routerClient.get('/', (req, res) => {
  return res.send();
});
