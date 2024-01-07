import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class LabTestField {
  id: number | null;
  lms_labTest_id: number;
  lms_field_id: number;
  orderNum: number | null;
  status: number | null;
  created_at: string | Date | null;
  updated_at: string | Date | null;

  constructor(labTestField: {
    id: number | null;
    lms_labTest_id: number;
    lms_field_id: number;
    orderNum: number | null;
    status: number | null;
    created_at: string | Date | null;
    updated_at: string | Date | null;
  }) {
    this.id = labTestField.id;
    this.lms_labTest_id = labTestField.lms_labTest_id;
    this.lms_field_id = labTestField.lms_field_id;
    this.orderNum = labTestField.orderNum;
    this.status = labTestField.status;
    this.created_at = labTestField.created_at;
    this.updated_at = labTestField.updated_at;
  }

  static async create(
    newLabTestField: LabTestField
  ): Promise<LabTestField | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_labTest_field SET ?";

      sql.query(query, [newLabTestField], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Creating new Lab Test"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async select(): Promise<LabTestField[] | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * from lms_labTest_field`, (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error Retrieving Lab test"));
        } else {
          resolve(res);
        }
      });
    });
  }
}
