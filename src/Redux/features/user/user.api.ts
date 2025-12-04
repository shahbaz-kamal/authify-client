/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "@/Redux/baseApi";
import type { ILogin, ILoginWithPhone, IRegister, IResponse, IUpdateUser } from "@/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<any>, ILogin>({
      query: (userInfo) => ({
        url: "/user/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    loginWithPhone: builder.mutation<IResponse<any>, ILoginWithPhone>({
      query: (userInfo) => ({
        url: "/user/login-with-phone-number",
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
    logout: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    updateUser: builder.mutation<IResponse<any>, IUpdateUser>({
      query: ({ userId, data }) => ({
        url: `/user/${userId}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["USER"],
    }),

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getMe: builder.query<IResponse<any>, undefined>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetMeQuery,
  useLogoutMutation,
  useUpdateUserMutation,
  useLoginWithPhoneMutation,
} = authApi;
