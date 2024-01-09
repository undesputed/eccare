export class ec_care_patient {
  id: number | null | undefined;
  fullName: string | null | undefined;
  birthday: string | null | undefined;
  age: number | null | undefined;
  gender: string | null | undefined;
  dateOfVisit: Date | string | null | undefined;
  email: string | null | undefined;
  phone: number | null | undefined;
  company: string | null | undefined;
  status: number | null | undefined;

  constructor(patient: Partial<ec_care_patient>) {
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
  }
}
