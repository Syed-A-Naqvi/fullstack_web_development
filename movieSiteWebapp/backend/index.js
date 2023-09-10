import { Client } from 'pg';
import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

const dbConfig = {
    username : process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
}

const client = new Client(dbConfig);

