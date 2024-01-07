import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class LabTest {
  id: number | null;
  name: string;
  description: string | null;
  type: string | null;
  price: string;
  status: number | null;
  created_at: string | Date | null;
  updated_at: string | Date | null;

  constructor(labTest: {
    id: number | null;
    name: string;
    description: string | null;
    type: string | null;
    price: string;
    status: number | null;
    created_at: string | Date | null;
    updated_at: string | Date | null;
  }) {
    this.id = labTest.id;
    this.name = labTest.name;
    this.description = labTest.description;
    this.type = labTest.type;
    this.price = labTest.price;
    this.status = labTest.status;
    this.created_at = labTest.created_at;
    this.updated_at = labTest.updated_at;
  }

  static async create(newLabTest: LabTest): Promise<LabTest | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_labTest SET ?";

      sql.query(query, [newLabTest], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Creating new Lab Test"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async select(): Promise<LabTest | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_labTest`, (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error Retrieving Lab test"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async selectNotByPatient(
    patientId: number | string
  ): Promise<LabTest | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_labTest WHERE id NOT IN 
        (select lms_labTest_id from lms_patient_labTest where lms_patient_id = ${patientId})`,
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Retrieving Lab Test"));
          } else {
            resolve(res);
          }
        }
      );
    });
  }
}
