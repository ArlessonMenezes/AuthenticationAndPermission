import 'express-async-errors';
import 'reflect-metadata';

import express from 'express';

import { AppDataSource } from '../database/data-source';
import { customError } from '../errors/custom.error';
import { routes } from '../routes';

const app = express();

AppDataSource.initialize()
  .then(() => console.log("Application connected in database"))
  .catch(err => console.log("Failed connected in database" + err))

app.use(express.json());

app.use(routes);

app.use(customError);

app.listen(process.env.PORT_SERVER);