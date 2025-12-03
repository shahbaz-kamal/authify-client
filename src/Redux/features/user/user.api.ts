/* eslint-disable @typescript-eslint/no-explicit-any */



import { baseApi } from "@/Redux/baseApi";
import type { ILogin, IRegister, IResponse } from "@/types";


export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
 
    login: builder.mutation<IResponse<any>, ILogin>({
      query: (userInfo) => ({
        url: "/user/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    register: builder.mutation<IResponse<any>, IRegister>({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // register: builder.mutation<IResponse<any>, IRegister>({
    //   query: (userInfo) => ({
    //     url: "/user/register",
    //     method: "POST",
    //     data: userInfo,
    //   }),
    // }),
 
  
   
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getMe: builder.query<IResponse<any>, undefined>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,

  useGetMeQuery,
  useLogoutMutation,

} = authApi;
