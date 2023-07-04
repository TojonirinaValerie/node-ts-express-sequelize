import { Sequelize } from 'sequelize';
import User from './models/user.model';

const dbName: string = process.env.DB_NAME || '';
const dbUsername: string = process.env.DB_USERNAME || '';
const dbPassword: string = process.env.DB_PASSWORD || '';
const dbHost: string = process.env.DB_HOST || '';

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
