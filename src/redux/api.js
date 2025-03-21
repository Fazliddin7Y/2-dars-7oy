import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// API yaratamiz
export const api = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nt-devconnector.onrender.com/api", // API bazaviy URL manzili
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token"); // Tokenni localStorage-dan olish
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProfiles: builder.query({
      query: () => "/profiles",
    }),
    getPosts: builder.query({
      query: () => "/posts",
    }),
    deleteProfile: builder.mutation({
      query: (id) => ({
        url: `/profiles/${id}`,
        method: "DELETE",
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Hooklarni eksport qilish
export const {
  useGetProfilesQuery,
  useGetPostsQuery,
  useDeleteProfileMutation,
  useDeletePostMutation,
} = api;
