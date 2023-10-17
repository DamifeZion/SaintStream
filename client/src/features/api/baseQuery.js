import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const baseUrl = `${import.meta.env.VITE_SERVER}/user`;

export const baseQuery = fetchBaseQuery({
  baseUrl,

  prepareHeaders: (headers, { getState }) => {
    const token = getState().userSlice.sessionToken;
    if (!headers.has("Authorization", `Bearer ${token}`)) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  },
});
