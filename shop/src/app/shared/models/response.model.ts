export interface ResponseModel<T> {
  data: T;
  success: boolean;
  errorCode: number;
}
