export default class ec_care_labTest_field {
  id: number | null | undefined;
  lms_labTest_id: number | undefined;
  lms_field_id: number | undefined;
  orderNum: number | null | undefined;
  status: number | null | undefined;
  created_at: string | Date | null | undefined;
  updated_at: string | Date | null | undefined;

  constructor(labTestField: Partial<ec_care_labTest_field>) {
    this.id = labTestField.id;
    this.lms_labTest_id = labTestField.lms_labTest_id;
    this.lms_field_id = labTestField.lms_field_id;
    this.orderNum = labTestField.orderNum;
    this.status = labTestField.status;
    this.created_at = labTestField.created_at;
    this.updated_at = labTestField.updated_at;
  }
}
