import ec_care_labTest from "../../entity/ec_care_labTest";
import { ec_care_patient } from "../../entity/ec_care_patient";
import ec_care_patientLabTest from "../../entity/ec_care_patientLabTest";

export type DashboardType = {
  patients: ec_care_patient[];
  patientInfo: ec_care_patient;
  patientLabTest: ec_care_patientLabTest[];
  selectedLabTest: ec_care_labTest[];
  isModalOpen: boolean;
  isError: boolean;
  status: string;
  error: any;
};
