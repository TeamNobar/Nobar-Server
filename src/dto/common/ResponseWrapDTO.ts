export default interface ResponseWrapDTO<T> {
  status: number,
  message: string,
  success: boolean,
  data?: T;
}