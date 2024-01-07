export interface DatabaseConfig {
  HOST: string | undefined;
  USER: string | undefined;
  PASSWORD: string | undefined;
  DB: string | undefined;
  PORT: number | string | undefined;
}

export const databaseConfig: DatabaseConfig = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  PORT: process.env.DB_PORT,
  // HOST: 'ec2-13-229-122-211.ap-southeast-1.compute.amazonaws.com',
  // USER: 'root',
  // PASSWORD: 'root',
  // DB: 'ec_care',
  // PORT: 3306,
};
