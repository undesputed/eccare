export default class ec_care_labTest {
  id: number | null | undefined;
  name: string | null | undefined;
  description: string | null | undefined;
  type: string | null | undefined;
  price: string | null | undefined;
  status: number | null | undefined;
  created_at: string | Date | null | undefined;
  updated_at: string | Date | null | undefined;

  constructor(labTest: Partial<ec_care_labTest>) {
    this.id = labTest.id;
    this.name = labTest.name;
    this.description = labTest.description;
    this.type = labTest.type;
    this.price = labTest.price;
    this.status = labTest.status;
    this.created_at = labTest.created_at;
    this.updated_at = labTest.updated_at;
  }
}
