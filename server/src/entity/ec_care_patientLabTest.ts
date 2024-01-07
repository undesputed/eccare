export default class ec_care_patientLabTest {
  id: number | null | undefined;
  lms_patient_id: number | null | undefined;
  lms_labTest_id: number | null | undefined;
  status: number | null | undefined;
  created_at: string | Date | null | undefined;
  updated_at: string | Date | null | undefined;

  constructor(patientlabTest: Partial<ec_care_patientLabTest>) {
    this.id = patientlabTest.id;
    this.lms_patient_id = patientlabTest.lms_patient_id;
    this.lms_labTest_id = patientlabTest.lms_labTest_id;
    this.status = patientlabTest.status;
    this.created_at = patientlabTest.created_at;
    this.updated_at = patientlabTest.updated_at;
  }
}
