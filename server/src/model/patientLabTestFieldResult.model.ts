import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class PatientLabTestFieldResult {
  id: number | null;
  lms_patient_labTest_field_id: number;
  result: string;
  status: number | null;
  created_at: string | Date | null;
  updated_at: string | Date | null;

  constructor(patientlabTestFieldResult: {
    id: number | null;
    lms_patient_labTest_field_id: number;
    result: string;
    status: number | null;
    created_at: string | Date | null;
    updated_at: string | Date | null;
  }) {
    this.id = patientlabTestFieldResult.id;
    this.lms_patient_labTest_field_id =
      patientlabTestFieldResult.lms_patient_labTest_field_id;
    this.result = patientlabTestFieldResult.result;
    this.status = patientlabTestFieldResult.status;
    this.created_at = patientlabTestFieldResult.created_at;
    this.updated_at = patientlabTestFieldResult.updated_at;
  }

  static async create(
    newPatientLabTestFieldResult: PatientLabTestFieldResult
  ): Promise<PatientLabTestFieldResult | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_patient_labTest_field_result SET ?";

      sql.query(query, [newPatientLabTestFieldResult], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(
            new DatabaseQueryError(
              "Error Creating new Patient Lab Test Field Results"
            )
          );
        } else {
          resolve(res);
        }
      });
    });
  }
}
