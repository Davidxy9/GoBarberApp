import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database/index';

const app = express();

app.use(express.json());
app.use(routes);

/* eslint-disable no-console */
app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
