import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class MedCert {
  id: number | null;
  fullName: string | null;
  age: number | null;
  gender: string | null;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(medCert: {
    id: number | null;
    fullName: string | null;
    age: number | null;
    gender: string | null;
    status: number;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = medCert.id;
    this.fullName = medCert.fullName;
    this.age = medCert.age;
    this.gender = medCert.gender;
    this.status = medCert.status;
    this.created_at = medCert.created_at;
    this.updated_at = medCert.updated_at;
  }

  static async select(): Promise<MedCert[] | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_med_cert`, (err, res: any) => {
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
