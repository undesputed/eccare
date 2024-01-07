import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";
import Field from "./field.model";

export default class PatientLabTestField {
  id: number | null;
  lms_patient_labTest_id: number | string;
  lms_labTest_field_id: number | string;
  result: string | null;
  status: number | null;
  created_at: string | Date | null;
  updated_at: string | Date | null;

  constructor(patientlabTestField: {
    id: number | null;
    lms_patient_labTest_id: number | string;
    lms_labTest_field_id: number | string;
    result: string | null;
    status: number | null;
    created_at: string | Date | null;
    updated_at: string | Date | null;
  }) {
    this.id = patientlabTestField.id;
    this.lms_patient_labTest_id = patientlabTestField.lms_patient_labTest_id;
    this.lms_labTest_field_id = patientlabTestField.lms_labTest_field_id;
    this.result = patientlabTestField.result;
    this.status = patientlabTestField.status;
    this.created_at = patientlabTestField.created_at;
    this.updated_at = patientlabTestField.updated_at;
  }

  static async create(
    newPatientLabTestField: PatientLabTestField
  ): Promise<PatientLabTestField | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_patient_labTest_field SET ?";

      sql.query(query, [newPatientLabTestField], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(
            new DatabaseQueryError("Error Creating new Patient Lab Test Field")
          );
        } else {
          resolve(res);
        }
      });
    });
  }

  static async selectByPatientId(
    patientId: number,
    testId: number
  ): Promise<any[] | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `select 
        lms_patient_labTest_field.id as patientFieldId,
        lms_patient_labTest_field.*,
        lms_field.id as fieldId,
        lms_field.*,
        lms_patient_labTest.lms_labTest_id as labTestId 
        from lms_patient_labTest_field
        inner join lms_patient_labTest on lms_patient_labTest.id = lms_patient_labTest_field.lms_patient_labTest_id
        inner join lms_labTest_field on lms_labTest_field.id = lms_patient_labTest_field.lms_labTest_field_id
        inner join lms_field on lms_field.id = lms_labTest_field.lms_field_id
        inner join lms_patient on lms_patient.id = lms_patient_labTest.lms_patient_id
        where lms_patient.id = ${patientId} and lms_patient_labTest.lms_labTest_id = ${testId}
        order by lms_labTest_field.orderNum 
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

  static async update(id: number, result: string): Promise<any | null> {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE lms_patient_labTest_field SET result = ? where id = ?";

      sql.query(query, [result, id], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Updated Patient"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async deleteLabTestField(labTestId: number): Promise<any | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `DELETE FROM lms_patient_labTest_field
                WHERE lms_patient_labTest_id = ${labTestId}
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
