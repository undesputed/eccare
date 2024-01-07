export abstract class CustomData {
  abstract statusCode: number;

  constructor() {
    Object.setPrototypeOf(this, CustomData.prototype);
  }

  abstract serializedResults(): {
    message: string;
    data?: {};
  };
}
