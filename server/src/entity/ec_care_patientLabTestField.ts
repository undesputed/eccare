export default class ec_care_patientLabTestField {
  id: number | null | undefined;
  lms_patient_labTest_id: number | null | undefined;
  lms_labTest_field_id: number | null | undefined;
  result: string | null | undefined;
  status: number | null | undefined;
  created_at: string | Date | null | undefined;
  updated_at: string | Date | null | undefined;

  constructor(patientlabTestField: Partial<ec_care_patientLabTestField>) {
    this.id = patientlabTestField.id;
    this.lms_patient_labTest_id = patientlabTestField.lms_patient_labTest_id;
    this.lms_labTest_field_id = patientlabTestField.lms_labTest_field_id;
    this.result = patientlabTestField.result;
    this.status = patientlabTestField.status;
    this.created_at = patientlabTestField.created_at;
    this.updated_at = patientlabTestField.updated_at;
  }
}
