import ec_care_labTest_field from "../entity/ec_care_labTestField";
import API from "./helper/api";

// Create
export function createLabTestField(
  newLabTestField: ec_care_labTest_field
): Promise<ec_care_labTest_field> {
  return API.post<ec_care_labTest_field>(`labTestField`, newLabTestField).then(
    (res) => res.data
  );
}

// Retrieve
export function getLabTestField(): Promise<ec_care_labTest_field[]> {
  return API.get<ec_care_labTest_field[]>(`labTestField`).then(
    (res) => res.data
  );
}
