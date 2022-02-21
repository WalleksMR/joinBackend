import 'reflect-metadata';
import express from 'express';

import { routes } from './routers';

const port = 3232;

const app = express();
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`🚀 server run in port ${port}`);
});
