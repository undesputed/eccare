import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class PatientXrayTest {
  id: number | null;
  lms_patient_id: string | number | null;
  lms_xrayTest_id: string | number | null;
  result: string | null;
  idNum: string | number | null;
  description: string | null;
  testDate: Date | string | null;
  status: number | null;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(patientXrayTest: {
    id: number | null;
    lms_patient_id: string | number | null;
    lms_xrayTest_id: string | number | null;
    result: string | null;
    idNum: string | number | null;
    description: string | null;
    testDate: Date | string | null;
    status: number | null;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = patientXrayTest.id;
    this.lms_patient_id = patientXrayTest.lms_patient_id;
    this.lms_xrayTest_id = patientXrayTest.lms_xrayTest_id;
    this.result = patientXrayTest.result;
    this.idNum = patientXrayTest.idNum;
    this.description = patientXrayTest.description;
    this.testDate = patientXrayTest.testDate;
    this.status = patientXrayTest.status;
    this.created_at = patientXrayTest.created_at;
    this.updated_at = patientXrayTest.updated_at;
  }

  static async create(
    newPatientXrayTest: PatientXrayTest
  ): Promise<PatientXrayTest | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_patient_xrayTest SET ?";
      sql.query(query, [newPatientXrayTest], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Creating new Patient"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async select(): Promise<PatientXrayTest[] | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_patient_xrayTest`, (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Retrieving Data"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async selectByPatient(
    patientId: number
  ): Promise<PatientXrayTest[] | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_patient_xrayTest WHERE lms_patient_id = ${patientId}`,
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

  static async update(
    updatedPatientXrayTest: PatientXrayTest
  ): Promise<PatientXrayTest | null> {
    return new Promise((resolve, reject) => {
      const query = "UPDATE lms_patient_xrayTest SET ? where id = ?";
      const { id, ...updatedValues } = updatedPatientXrayTest;

      sql.query(
        query,
        [updatedValues, updatedPatientXrayTest.id],
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Updated Patient"));
          } else {
            resolve(res.affectedRows > 0 ? updatedPatientXrayTest : null);
          }
        }
      );
    });
  }

  static async delete(id: number): Promise<any | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `DELETE FROM lms_patient_xrayTest
                WHERE id = ${id}
                `,
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Deleting Test Result"));
          } else {
            resolve(res);
          }
        }
      );
    });
  }
}
