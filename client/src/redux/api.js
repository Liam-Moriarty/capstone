import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_MONGO_BASE_URL }),
  reducerPath: "adoptionApi",
  tagTypes: ["Adoption"],
  endpoints: (build) => ({
    getAllAdoption: build.query({
      query: () => "/petpalace/adoption",
      providesTags: ["Adoption"],
    }),
    addNewAdoption: build.mutation({
      query: (newAdoption) => ({
        url: `/petpalace/createAdoption`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newAdoption,
      }),
    }),
  }),
});

// console.log("Base URL:", import.meta.env.VITE_MONGO_BASE_URL);

export const { useGetAllAdoptionQuery, useAddNewAdoptionMutation } = api;
