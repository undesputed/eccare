export default class ec_care_med_cert {
  id: number | null;
  fullName: string | null;
  age: number | null;
  gender: string | null;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(medCert: Partial<ec_care_med_cert>) {
    this.id = medCert.id;
    this.fullName = medCert.fullName;
    this.age = medCert.age;
    this.gender = medCert.gender;
    this.status = medCert.status;
    this.created_at = medCert.created_at;
    this.updated_at = medCert.updated_at;
  }
}
