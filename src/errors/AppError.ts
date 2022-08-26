export class AppError {
  readonly message: string;
  readonly statusCode: number;

  constructor(message: string, statuscode = 400) {
    this.message = message;
    this.statusCode = statuscode;
  }
}