import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { api } from "./constant";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (sessionToken) => {
        return {
          url: `/${sessionToken}`,
        };
      },
    }),

    login: builder.mutation({
      query: ({ ...values }) => {
        return {
          url: api.LOGIN,
          method: "POST",
          body: { ...values },
        };
      },
    }),

    signUp: builder.mutation({
      query: ({ ...values }) => {
        return {
          url: api.SIGNUP,
          method: "POST",
          body: { ...values },
        };
      },
    }),

    //takes in only email as body to send reset token
    forgotPassword: builder.mutation({
      query: ({ ...values }) => {
        return {
          url: api.FORGOTPASSWORD,
          method: "POST",
          body: { ...values },
        };
      },
    }),

    //collect resetToken as route params, password and confirmPassword as body.
    passwordReset: builder.mutation({
      query: (resetToken, { ...values }) => {
        return {
          url: `${api.RESETPASSWORD}/${resetToken}`,
          method: "POST",
          body: { ...values },
        };
      },
    }),

    //to delete user account available to logged in user only
    deleteUser: builder.query({
      query: (userId) => {
        return {
          url: `/${userId}`,
        };
      },
    }),
  }),
});

export const {
  useGetUserQuery,
  useLoginMutation,
  useSignUpMutation,
  useForgotPasswordMutation,
  usePasswordResetMutation,
  useDeleteUserQuery,
} = userApi;
