import ec_care_field from "../entity/ec_care_field";
import API from "./helper/api";

// Retrieve
export function retrieveAllField(): Promise<ec_care_field[]> {
  return API.get<ec_care_field[]>(`field`).then((res) => res.data);
}

// Create
export function createField(newField: ec_care_field): Promise<ec_care_field> {
  return API.post<ec_care_field>(`field`, newField).then((res) => res.data);
}
