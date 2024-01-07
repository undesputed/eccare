import { CustomError } from "./customError";

export class DatabaseQueryError extends CustomError {
  statusCode = 500;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, DatabaseQueryError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
