import ec_care_labTest from "../../entity/ec_care_labTest";
import { ec_care_patient } from "../../entity/ec_care_patient";
import ec_care_patientLabTest from "../../entity/ec_care_patientLabTest";
import ec_care_patientXrayTest from "../../entity/ec_care_patientXrayTest";
import ec_care_xrayTest from "../../entity/ec_care_xrayTest";

export type DashboardType = {
  patients: ec_care_patient[];
  patientInfo: ec_care_patient;
  patientLabTest: ec_care_patientLabTest[];
  selectedLabTest: ec_care_labTest[];
  xrayTests: ec_care_xrayTest[];
  selectedXrayTests: ec_care_xrayTest[];
  patientXrayTests: ec_care_patientXrayTest[];
  isModalOpen: boolean;
  isError: boolean;
  status: string;
  error: any;
};
