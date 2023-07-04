import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import route from './routes/index.route';
import sequelize from './db.config';
import swaggerUi from 'swagger-ui-express';

// ------------------- App configs ---------------------------
const app: Express = express();

app.use(bodyParser.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, x-acces-token',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next();
});

// -----------------------------------------------------------

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// ---------------------- Routes -----------------------------

app.get('/api', (req: Request, res: Response, next: NextFunction) => {
  res.json({
    succes: true,
    message: "Bienvenue sur l'application",
  });
});
app.use('/api/auth', route.auth);
app.use('/api/user', route.user);

// -----------------------------------------------------------

const PORT = process.env.port || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
