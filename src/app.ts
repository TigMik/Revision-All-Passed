import express, { Express } from 'express';
import routesRead from './routes/routesRead';
import routesWrite from './routes/routesWrite';
import routesPost from './routes/routesPost';
import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3001;

export const getApp = (): Express => {
    const app = express();
    app.use(express.json());

    app.use('/readFile', routesRead);
    app.use('/writeFile', routesWrite); 
    app.use('/posts', routesPost);

    return app;
};







