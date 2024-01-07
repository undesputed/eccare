import { BaseSelector } from "./BaseSelector";

export class ec_care_patientSelector extends BaseSelector {
  id: number | null;
  fullName: string;
  sex: number;
  age: number;
  dateOfVisit: Date | string | null;
  address: string;
  email: string;
  phone: string;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;
  lms_company_id: number | null;
  lms_referral_id: number | null;
  lms_hmo_id: number | null;

  constructor(patient: Partial<ec_care_patientSelector>) {
    super(patient);
    this.id = patient.id;
    this.fullName = patient.fullName;
    this.sex = patient.sex;
    this.age = patient.age;
    this.dateOfVisit = patient.dateOfVisit;
    this.address = patient.address;
    this.email = patient.email;
    this.phone = patient.phone;
    this.status = patient.status;
    this.created_at = patient.created_at;
    this.updated_at = patient.updated_at;
    this.lms_company_id = patient.lms_company_id;
    this.lms_referral_id = patient.lms_referral_id;
    this.lms_hmo_id = patient.lms_hmo_id;
  }
}
