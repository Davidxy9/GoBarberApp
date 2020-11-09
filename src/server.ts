import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import uploadConfig from './config/upload';
import './database/index';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    // eslint-disable-next-line no-console
    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internacional server error',
    });
  },
);

/* eslint-disable no-console */
app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
