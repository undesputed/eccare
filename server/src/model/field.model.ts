import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class Field {
  id: number | null;
  name: string;
  unit: string | null;
  maleRefRange: number | null;
  femaleRefRange: string;
  refRange: string | null;
  desirableRefRange: string | null;
  borderlineRefRange: string | null;
  highRiskRefRange: string | null;
  other: string | null;
  status: number | null;
  created_at: string | Date | null;
  updated_at: string | Date | null;

  constructor(field: {
    id: number | null;
    name: string;
    unit: string | null;
    maleRefRange: number | null;
    femaleRefRange: string;
    refRange: string | null;
    desirableRefRange: string | null;
    borderlineRefRange: string | null;
    highRiskRefRange: string | null;
    other: string | null;
    status: number | null;
    created_at: string | Date | null;
    updated_at: string | Date | null;
  }) {
    this.id = field.id;
    this.name = field.name;
    this.unit = field.unit;
    this.maleRefRange = field.maleRefRange;
    this.femaleRefRange = field.femaleRefRange;
    this.refRange = field.refRange;
    this.desirableRefRange = field.desirableRefRange;
    this.borderlineRefRange = field.borderlineRefRange;
    this.highRiskRefRange = field.highRiskRefRange;
    this.other = field.other;
    this.status = field.status;
    this.created_at = field.created_at;
    this.updated_at = field.updated_at;
  }

  static async create(newField: Field): Promise<Field | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_field SET ?";

      sql.query(query, [newField], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Creating new Field"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async select(): Promise<Field | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_field`, (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error Retrieving Test"));
        } else {
          resolve(res);
        }
      });
    });
  }
}
