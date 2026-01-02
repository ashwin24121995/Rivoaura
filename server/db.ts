import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from '../drizzle/schema.js';

let connection: mysql.Connection | null = null;

export async function getDb() {
  if (!connection) {
    connection = await mysql.createConnection({
      uri: process.env.DATABASE_URL!,
    });
  }
  return drizzle(connection, { schema, mode: 'default' });
}
