import express from 'express';
import bodyParser from 'body-parser';

import logger from './logger';
import routes from 'routes';
import { PORT } from 'config';
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

Object.keys(routes).forEach(key => {
  app.use(`/${key}`, routes[key]);
});

const start = async() => {
  try {
    const server = app.listen(PORT, () => {
      logger.info(`Running on ${PORT}`);
    });

  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
};

export { app, start };