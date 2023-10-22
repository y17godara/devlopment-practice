// src/app.ts
import express from 'express';
import config from 'config';
import connectDB from './utils/connectDB';
import log from './utils/logger';

const PORT = config.get<number>('PORT');

const app = express();

app.listen(PORT, () => {
  log.info(`App is Running at http://localhost:${PORT}`);
});
