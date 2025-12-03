export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ILogin {
  email: string;
  password: string;
}
export interface IRegister {
    name:string
  email: string;
  password: string;
}
