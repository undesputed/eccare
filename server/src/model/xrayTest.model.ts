import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class XrayTest {
  id: number | null;
  name: string | null;
  description: string | null;
  price: number | null;
  type: string | null;
  status: number | null;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(xrayTest: {
    id: number | null;
    name: string | null;
    description: string | null;
    price: number | null;
    type: string | null;
    status: number | null;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = xrayTest.id;
    this.name = xrayTest.name;
    this.description = xrayTest.description;
    this.price = xrayTest.price;
    this.type = xrayTest.type;
    this.status = xrayTest.status;
    this.created_at = xrayTest.created_at;
    this.updated_at = xrayTest.updated_at;
  }

  static async create(newXrayTest: XrayTest): Promise<XrayTest | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_xrayTest SET ?";

      sql.query(query, [newXrayTest], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Creating new Patient"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async select(): Promise<XrayTest[] | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_xrayTest`, (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Retrieving Data"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async selectByPatient(patientId: number): Promise<XrayTest[] | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `
        select lms_xrayTest.* from lms_xrayTest
        inner join lms_patient_xrayTest on lms_patient_xrayTest.lms_xrayTest_id = lms_xrayTest.id
        where lms_patient_xrayTest.lms_patient_id = ${patientId}`,
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Retrieving Data"));
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  static async selectNotByPatient(
    patientId: number | string
  ): Promise<XrayTest[] | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_xrayTest WHERE id NOT IN 
        (select lms_xrayTest_id from lms_patient_xrayTest where lms_patient_id = ${patientId})`,
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
