export default interface ErrorType {
  status: number,
  message: string | object,
  detail?: object
}
