import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();
const port: number = 3000;

// Parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the e-commerce product management app.');
});

export default app;
