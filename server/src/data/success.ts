import { CustomData } from "./customData";

export class DataFound extends CustomData {
  statusCode = 201;

  constructor(public message: string, public data: any) {
    super();
    Object.setPrototypeOf(this, DataFound.prototype);
  }

  serializedResults() {
    return {
      message: this.message,
      data: this.data,
    };
  }
}
