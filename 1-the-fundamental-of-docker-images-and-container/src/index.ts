import type { Config } from './@types/interfaces';
import createServer from './server';

const config: Config = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  host: process.env.HOST || 'localhost',
};

createServer(config);
