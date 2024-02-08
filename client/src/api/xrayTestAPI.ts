import ec_care_xrayTest from "../entity/ec_care_xrayTest";
import API from "./helper/api";

// Retrieve
export function getAllXrayTest(): Promise<ec_care_xrayTest[]> {
  return API.get<ec_care_xrayTest[]>(`xrayTest`).then((res) => res.data);
}

export function getAllXrayTestByPatient(
  patientId: number
): Promise<ec_care_xrayTest[]> {
  return API.get<ec_care_xrayTest[]>(`xrayTest/${patientId}`).then(
    (res) => res.data
  );
}

export function getAllXrayTestNotByPatient(
  patientId: number
): Promise<ec_care_xrayTest[]> {
  return API.get<ec_care_xrayTest[]>(`xrayTest/notByPatient/${patientId}`).then(
    (res) => res.data
  );
}

// Create
export function createXrayTest(
  xrayTest: ec_care_xrayTest
): Promise<ec_care_xrayTest> {
  return API.post<ec_care_xrayTest>(`xrayTest`, xrayTest).then(
    (res) => res.data
  );
}
