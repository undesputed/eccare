import ec_care_labTest from "../entity/ec_care_labTest";
import API from "./helper/api";

// Create
export function createLabTest(
  newLabTest: ec_care_labTest
): Promise<ec_care_labTest> {
  return API.post<ec_care_labTest>(`labTest`, newLabTest).then(
    (res) => res.data
  );
}

// Retrieve
export function getLabTest(): Promise<ec_care_labTest[]> {
  return API.get<ec_care_labTest[]>(`labTest`).then((res) => res.data);
}

export function getLabTestNotByPatient(
  patientId: number
): Promise<ec_care_labTest[]> {
  return API.get<ec_care_labTest[]>(`labTest/${patientId}`).then(
    (res) => res.data
  );
}
