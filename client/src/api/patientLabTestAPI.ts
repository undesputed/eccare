import ec_care_labTest from "../entity/ec_care_labTest";
import ec_care_patientLabTest from "../entity/ec_care_patientLabTest";
import API from "./helper/api";

// Create
export function createPatientLabTest(
  newPatientLabTest: ec_care_patientLabTest
): Promise<ec_care_patientLabTest> {
  return API.post<ec_care_patientLabTest>(
    `patientLabTest`,
    newPatientLabTest
  ).then((res) => res.data);
}

// Retrieve
export function getLabTestByPatient(id: number): Promise<ec_care_labTest[]> {
  return API.get<ec_care_labTest[]>(`patientLabTest/${id}`).then(
    (res) => res.data
  );
}

export function getLabTestByPatientAndTest(
  patientId: number,
  labTestId: number
): Promise<any> {
  return API.get<ec_care_labTest[]>(
    `patientLabTest/${patientId}/${labTestId}`
  ).then((res) => res.data);
}

// Delete
export function deletePatientLabTest(
  lms_patient_id: number,
  lms_labTest_id: number
): Promise<any> {
  return API.delete<any>(
    `patientLabTestField/${lms_patient_id}/${lms_labTest_id}`
  ).then((res) => res.data);
}
