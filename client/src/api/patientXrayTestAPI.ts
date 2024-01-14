import ec_care_patientXrayTest from "../entity/ec_care_patientXrayTest";
import API from "./helper/api";

// Retrieve
export function getAllPatientXrayTest(): Promise<ec_care_patientXrayTest[]> {
  return API.get<ec_care_patientXrayTest[]>(`patientXrayTest`).then(
    (res) => res.data
  );
}

export function getAllPatientXrayTestByPatient(
  patientId: number
): Promise<ec_care_patientXrayTest[]> {
  return API.get<ec_care_patientXrayTest[]>(
    `patientXrayTest/${patientId}`
  ).then((res) => res.data);
}

// Create
export function createPatientXrayTest(
  newPatientXrayTest: ec_care_patientXrayTest
): Promise<ec_care_patientXrayTest> {
  return API.post<ec_care_patientXrayTest>(
    `patientXrayTest`,
    newPatientXrayTest
  ).then((res) => res.data);
}

// Update
export function updatePatientXrayTest(
  newPatientXrayTest: ec_care_patientXrayTest[]
): Promise<any> {
  return API.put<any>(`patientXrayTest`, newPatientXrayTest).then(
    (res) => res.data
  );
}

// Delete
export function deletePatientXrayTest(id: number): Promise<any> {
  return API.delete<any>(`patientXrayTest/${id}`).then((res) => res.data);
}
