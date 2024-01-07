import ec_care_field from "../../entity/ec_care_field";
import ec_care_labTest from "../../entity/ec_care_labTest";
import ec_care_labTest_field from "../../entity/ec_care_labTestField";

export type LabTestType = {
  field: ec_care_field[];
  addField: ec_care_labTest_field[];
  addedField: ec_care_field[];
  labTest: ec_care_labTest;
  labTests: ec_care_labTest[];
  labTestField: ec_care_labTest_field[];
  isLabTestError: boolean;
  status: string;
  error: any;
};
