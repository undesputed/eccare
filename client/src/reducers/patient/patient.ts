import ec_care_field from "../../entity/ec_care_field";
import ec_care_labTest from "../../entity/ec_care_labTest";
import { ec_care_patient } from "../../entity/ec_care_patient";
import { PatientForm } from "../../entity/ec_care_patientForm";

export type PatientType = {
  patientId: number;
  patient: ec_care_patient;
  patientLabTest: ec_care_labTest[];
  patientLabTestField: ec_care_field[];
  labTest: ec_care_labTest[];
  patientForm: any;
  patientTestsFields: any[];
  patientLabTestId: number | string;
  selectedTestField: any;
  paperSize: string;
  medTech: number;
  addTestModal: boolean;
  patientUpdateModal: boolean;
  loading: boolean;
  testId: number;
  status: string;
  error: any;
};
