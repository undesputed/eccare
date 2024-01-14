import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class LabTestPackage {
  id: number | null;
  lms_labTest_package_id: number | null;
  lms_labTest_id: number | null;
  status: number | null;
  created_at: string | Date | null;
  updated_at: string | Date | null;

  constructor(labTestPackage: {
    id: number | null;
    lms_labTest_package_id: number | null;
    lms_labTest_id: number | null;
    status: number | null;
    created_at: string | Date | null;
    updated_at: string | Date | null;
  }) {
    this.id = labTestPackage.id;
    this.lms_labTest_package_id = labTestPackage.lms_labTest_package_id;
    this.lms_labTest_id = labTestPackage.lms_labTest_id;
    this.status = labTestPackage.status;
    this.created_at = labTestPackage.created_at;
    this.updated_at = labTestPackage.updated_at;
  }

  static async create(
    newLabTestPackage: LabTestPackage
  ): Promise<LabTestPackage | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_labTest_package SET ?";

      sql.query(query, [newLabTestPackage], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Creating new Patient"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async select(): Promise<LabTestPackage[] | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_labTest_package`, (err, res: any) => {
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
