import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class Patient {
  id: number | null;
  fullName: string;
  birthday: string | null;
  age: number | null;
  gender: string | null;
  dateOfVisit: Date | string | null;
  email: string | null;
  phone: number | null;
  company: string | null;
  status: number | null;
  created_at: string | Date | null;
  updated_at: string | Date | null;

  constructor(patient: {
    id: number | null;
    fullName: string;
    birthday: string | null;
    age: number | null;
    gender: string | null;
    dateOfVisit: Date | string | null;
    email: string | null;
    phone: number | null;
    company: string | null;
    status: number | null;
    created_at: string | Date | null;
    updated_at: string | Date | null;
  }) {
    this.id = patient.id;
    this.fullName = patient.fullName;
    this.birthday = patient.birthday;
    this.age = patient.age;
    this.gender = patient.gender;
    this.dateOfVisit = patient.dateOfVisit;
    this.email = patient.email;
    this.phone = patient.phone;
    this.company = patient.company;
    this.status = patient.status;
    this.created_at = patient.created_at;
    this.updated_at = patient.updated_at;
  }

  static async create(newPatient: Patient): Promise<Patient | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_patient SET ?";

      sql.query(query, [newPatient], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Creating new Patient"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async select(): Promise<Patient[] | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_patient ORDER BY id DESC`,
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

  static async selectById(id: number): Promise<Patient | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_patient WHERE id = ${id} ORDER BY id DESC`,
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Retrieving Data"));
          } else {
            resolve(res.length ? res[0] : null);
          }
        }
      );
    });
  }
}
