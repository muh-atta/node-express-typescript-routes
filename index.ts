import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes';


dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use('/api', blogRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at following URL http://localhost:${port}`);
});
