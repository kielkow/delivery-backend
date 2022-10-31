import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";

import AppError from './AppError';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({ message: error.message });
    }

    return response.status(500).json({ message: error.message || error });
});

app.listen(3000, () => console.log('server is running'));
