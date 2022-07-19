export default interface ResponseWrapDTO<T> {
  status: number,
  message: string | object,
  data?: T;
}