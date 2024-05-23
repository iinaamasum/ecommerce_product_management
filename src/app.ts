import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();
const port: number = 3000;

let a;

// Parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;