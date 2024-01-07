import mysql from "mysql2";
import { databaseConfig } from "../config/db.config";

const connection = mysql.createPool({
  host: databaseConfig.HOST,
  user: databaseConfig.USER,
  password: databaseConfig.PASSWORD,
  database: databaseConfig.DB,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;
