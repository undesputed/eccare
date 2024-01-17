import ec_care_med_cert from "../entity/ec_care_med_cert";
import API from "./helper/api";

// Retrieve
export function getAllMedCert(): Promise<ec_care_med_cert[]> {
  return API.get<ec_care_med_cert[]>(`medcert`).then((res) => res.data);
}
