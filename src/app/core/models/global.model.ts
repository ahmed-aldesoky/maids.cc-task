export interface IResponse<T> {
  model: T;
  success: boolean;
  message: string;
  statusCode: number;
  modelList: null;
  
}
