import ec_care_field from "../entity/ec_care_field";
import ec_care_patientLabTestField from "../entity/ec_care_patientLabTestField";
import API from "./helper/api";

// Create
export function createPatientLabTestField(
  newPatientLabTestField: ec_care_patientLabTestField
): Promise<ec_care_patientLabTestField> {
  return API.post<ec_care_patientLabTestField>(
    `patientLabTestField`,
    newPatientLabTestField
  ).then((res) => res.data);
}

// Retrieve
export function getLabTestFieldByPatient(
  patientId: number,
  testId: number
): Promise<any[]> {
  return API.get<ec_care_field[]>(
    `patientLabTestField/${patientId}/${testId}`
  ).then((res) => res.data);
}

// Update
export function updateResult(result: any[]): Promise<any> {
  console.log(result);
  return API.put<any>(`patientLabTestField`, result).then((res) => res.data);
}

// Delete
export function deletePatientLabTestFIeld(
  lms_patient_labTest_id: number | string
): Promise<any> {
  return API.delete<any>(`patientLabTestField/${lms_patient_labTest_id}`).then(
    (res) => res.data
  );
}

export function deleteLabTestFieldByPatient(
  lms_patient_id: number | string
): Promise<any> {
  return API.delete<any>(`deletePatientLabTestField/${lms_patient_id}`).then(
    (res) => res.data
  );
}
