export default class ec_care_xrayTest {
  id: number | null;
  name: string | null;
  description: string | null;
  price: string | null;
  type: number | null;
  status: number | null;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(xrayTest: Partial<ec_care_xrayTest>) {
    this.id = xrayTest.id;
    this.name = xrayTest.name;
    this.description = xrayTest.description;
    this.price = xrayTest.price;
    this.type = xrayTest.type;
    this.status = xrayTest.status;
    this.created_at = xrayTest.created_at;
    this.updated_at = xrayTest.updated_at;
  }
}
