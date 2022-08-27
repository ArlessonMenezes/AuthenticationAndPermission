import 'dotenv/config';
import 'reflect-metadata';

import { DataSource } from 'typeorm';
import { Address } from '../modules/address/model/address.entity';

import { User } from '../modules/user/model/user.entity';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  entities: [User, Address],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
});

export { AppDataSource };