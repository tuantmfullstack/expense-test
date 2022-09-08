import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import expenseRouter from './routes/expenseRoute.js';

const app = express();

dotenv.config({ path: './.env' });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(express.json());
app.use(cors());
app.use('/api/v1/expenses', expenseRouter);

export default app;
