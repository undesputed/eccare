import mysql from "mysql2";
import { databaseConfig } from "./config/db.config";
import { app } from "./app";
import connection from "./db/db";

const start = async () => {
  try {
    await connection;
    console.log("Connected to MYSQL Database");
  } catch (err) {
    console.log(err);
  }

  app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`);
  });
};

start();
