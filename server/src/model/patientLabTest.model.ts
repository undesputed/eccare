import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";
import LabTest from "./labTest.model";

export default class PatientLabTest {
  id: number | null;
  lms_patient_id: number;
  lms_labTest_id: number;
  status: number | null;
  created_at: string | Date | null;
  updated_at: string | Date | null;

  constructor(patientlabTest: {
    id: number | null;
    lms_patient_id: number;
    lms_labTest_id: number;
    status: number | null;
    created_at: string | Date | null;
    updated_at: string | Date | null;
  }) {
    this.id = patientlabTest.id;
    this.lms_patient_id = patientlabTest.lms_patient_id;
    this.lms_labTest_id = patientlabTest.lms_labTest_id;
    this.status = patientlabTest.status;
    this.created_at = patientlabTest.created_at;
    this.updated_at = patientlabTest.updated_at;
  }

  static async create(
    newPatientLabTest: PatientLabTest
  ): Promise<PatientLabTest | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_patient_labTest SET ?";

      sql.query(query, [newPatientLabTest], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Creating new Patient Lab Test"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async selectByPatientId(patientId: number): Promise<LabTest[] | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `select 
        lms_labTest.*
        from lms_patient_labTest
        left join lms_patient on lms_patient.id = lms_patient_labTest.lms_patient_id
        left join lms_labTest on lms_labtest.id = lms_patient_labTest.lms_labTest_id
        where lms_patient.id = ${patientId}
       `,
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

  static async selectByPatientLabTest(
    patientId: number,
    labTestId: number
  ): Promise<PatientLabTest | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `select id from lms_patient_labTest where lms_patient_id = ${patientId} and lms_labTest_id = ${labTestId}`,
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Retrieving Data"));
          } else {
            resolve(res[0]);
          }
        }
      );
    });
  }

  static async deleteLabTestField(
    patientId: number,
    labTestId: number
  ): Promise<any | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `DELETE FROM lms_patient_labTest
                WHERE lms_labTest_id = ${labTestId} and lms_patient_id = ${patientId}
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

  static async deleteLabTestByPatient(patientId: number): Promise<any | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `DELETE FROM lms_patient_labTest
                WHERE lms_patient_id = ${patientId}
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
