import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class Package {
  id: number | null;
  packageName: string;
  description: string | null;
  price: string | null;
  status: number | null;
  created_at: string | Date | null;
  updated_at: string | Date | null;

  constructor(pckg: {
    id: number | null;
    packageName: string;
    description: string | null;
    price: string | null;
    status: number | null;
    created_at: string | Date | null;
    updated_at: string | Date | null;
  }) {
    this.id = pckg.id;
    this.packageName = pckg.packageName;
    this.description = pckg.description;
    this.price = pckg.price;
    this.status = pckg.status;
    this.created_at = pckg.created_at;
    this.updated_at = pckg.updated_at;
  }

  static async create(newPatient: Package): Promise<Package | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_package SET ?";

      sql.query(query, [newPatient], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Creating new Patient"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async select(): Promise<Package[] | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_package`, (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Retrieving Data"));
        } else {
          resolve(res);
        }
      });
    });
  }
}
