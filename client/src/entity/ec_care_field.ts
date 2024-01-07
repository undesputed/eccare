export default class ec_care_field {
  id: number | null | undefined;
  name: string | undefined;
  unit: string | null | undefined;
  maleRefRange: number | null | undefined;
  femaleRefRange: string | undefined;
  refRange: string | null | undefined;
  desirableRefRange: string | null | undefined;
  borderlineRefRange: string | null | undefined;
  highRiskRefRange: string | null | undefined;
  status: number | null | undefined;
  created_at: string | Date | null | undefined;
  updated_at: string | Date | null | undefined;

  constructor(field: Partial<ec_care_field>) {
    this.id = field.id;
    this.name = field.name;
    this.unit = field.unit;
    this.maleRefRange = field.maleRefRange;
    this.femaleRefRange = field.femaleRefRange;
    this.refRange = field.refRange;
    this.desirableRefRange = field.desirableRefRange;
    this.borderlineRefRange = field.borderlineRefRange;
    this.highRiskRefRange = field.highRiskRefRange;
    this.status = field.status;
    this.created_at = field.created_at;
    this.updated_at = field.updated_at;
  }
}
