// src/app.ts
import express from 'express';
import config from 'config';
import log from './utils/logger';
import connectDB from './utils/connectDB';
import routes from './routes';

const PORT = config.get<number>('PORT');
const app = express();


app.listen(PORT, () => {
  log.info(`App is Running at http://localhost:${PORT}`);
});
