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

  static async bulkCreate(newPatients: Patient[]): Promise<any | null> {
    return new Promise((resolve, reject) => {
      const values = newPatients.map((patient) => [
        patient.fullName,
        patient.birthday,
        patient.age,
        patient.gender,
        patient.dateOfVisit,
        patient.email,
        patient.phone,
        patient.company,
        patient.status,
        patient.created_at,
        patient.updated_at,
      ]);
      const query = `INSERT INTO lms_patient (fullName, birthday, age, gender, dateOfVisit, email, phone, company, status, created_at, updated_at) VALUES ? `;

      sql.query(query, [values], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Created all this Patient"));
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

  static async update(updatedPatient: Patient): Promise<Patient | null> {
    return new Promise((resolve, reject) => {
      const query = "UPDATE lms_patient SET ? where id = ?";
      const { id, ...updatedValues } = updatedPatient;

      sql.query(query, [updatedValues, updatedPatient.id], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Updated Patient"));
        } else {
          resolve(res.affectedRows > 0 ? updatedPatient : null);
        }
      });
    });
  }

  static async updateStatus(patientId: number): Promise<Patient | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `UPDATE lms_patient SET status = 1 WHERE id = ?`,
        [patientId],
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Updated Patient"));
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  static async delete(patient_id: number | string): Promise<any | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `DELETE FROM lms_patient
                WHERE id = ${patient_id}
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
