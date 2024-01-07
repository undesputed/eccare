export class PatientForm {
  id: number | undefined;
  fullName: string | null | undefined;
  birthday: string | null | undefined;
  age: number | null | undefined;
  gender: string | null | undefined;
  dateOfVisit: Date | string | null | undefined;
  email: string | null | undefined;
  phone: number | null | undefined;
  company: string | null | undefined;
  tests: Test[] | null | undefined;
  status: number | null | undefined;
  createdAt: Date | string | null | undefined;
  updatedAt: Date | string | null | undefined;

  constructor(patientForm: Partial<PatientForm>) {
    this.id = patientForm.id;
    this.fullName = patientForm.fullName;
    this.birthday = patientForm.birthday;
    this.age = patientForm.age;
    this.gender = patientForm.gender;
    this.dateOfVisit = new Date(patientForm.dateOfVisit);
    this.email = patientForm.email;
    this.phone = patientForm.phone;
    this.company = patientForm.company;
    this.tests = patientForm.tests?.map((test) => new Test(test));
    this.status = patientForm.status;
    this.createdAt = patientForm.createdAt;
    this.updatedAt = patientForm.updatedAt;
  }
}

export class Test {
  id: number | undefined;
  name: string | null | undefined;
  description: string | null | undefined;
  department: string | null | undefined;
  price: number | null | undefined;
  type: string | null | undefined;
  fields: TestField[] | undefined;

  constructor(test: Partial<Test>) {
    this.id = test.id;
    this.name = test.name;
    this.description = test.description;
    this.department = test.department;
    this.price = test.price;
    this.type = test.type;
    this.fields = test.fields?.map((field) => new TestField(field));
  }
}

export class TestField {
  id: number | undefined;
  name: string | null | undefined;
  unit: string | null | undefined;
  maleRefRange: string | null | undefined;
  femaleRefRange: string | null | undefined;
  refRange: string | null | undefined;
  desirableRefRange: string | null | undefined;
  borderlineRefRange: string | null | undefined;
  highRiskRefRange: string | null | undefined;
  other: string | null | undefined;
  status: number | null | undefined;
  createdAt: Date | string | null | undefined;
  updatedAt: Date | string | null | undefined;

  constructor(field: Partial<TestField>) {
    this.id = field.id;
    this.name = field.name;
    this.unit = field.unit;
    this.maleRefRange = field.maleRefRange;
    this.femaleRefRange = field.femaleRefRange;
    this.refRange = field.refRange;
    this.desirableRefRange = field.desirableRefRange;
    this.borderlineRefRange = field.borderlineRefRange;
    this.highRiskRefRange = field.highRiskRefRange;
    this.other = field.other;
  }
}
