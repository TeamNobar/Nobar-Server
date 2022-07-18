import NobarErrorType from "./NobarErrorType";

export default class NobarError extends Error implements NobarErrorType{
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super();
    this.status = status;
    this.message = message;
  }
}