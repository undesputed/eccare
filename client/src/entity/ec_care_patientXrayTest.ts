export default class ec_care_patientXrayTest {
  id: number | null;
  lms_patient_id: string | number | null;
  lms_xrayTest_id: string | number | null;
  result: string | null;
  idNum: string | number | null;
  description: string | null;
  testDate: Date | string | null;
  status: number | null;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(patientXrayTest: Partial<ec_care_patientXrayTest>) {
    this.id = patientXrayTest.id;
    this.lms_patient_id = patientXrayTest.lms_patient_id;
    this.lms_xrayTest_id = patientXrayTest.lms_xrayTest_id;
    this.result = patientXrayTest.result;
    this.idNum = patientXrayTest.idNum;
    this.description = patientXrayTest.description;
    this.testDate = patientXrayTest.testDate;
    this.status = patientXrayTest.status;
    this.created_at = patientXrayTest.created_at;
    this.updated_at = patientXrayTest.updated_at;
  }
}
