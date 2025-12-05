import type { ComponentType, JSX } from "react";

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
export interface ILoginWithPhone {
  phone: string;
}
export interface IRegister {
  name: string;
  email: string;
  password: string;
}
export interface IUpdateUser {
  userId: string;
  data: FormData;
}

export interface ISidebarItems {
  title: string;
  url: string;
  component: ComponentType;
  icon: JSX.Element;
}
