import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://nt-devconnector.onrender.com/api" }),
  endpoints: (builder) => ({
    getProfiles: builder.query({
      query: () => "/profiles",
    }),
    getProfile: builder.query({
      query: (id) => `/profile/${id}`,
    }),
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    deleteProfile: builder.mutation({
      query: (id) => ({
        url: `/profiles/${id}`,
        method: "DELETE",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }),
    }),
  }),
});

export const {
  useGetProfilesQuery,
  useGetProfileQuery,
  useGetPostsQuery,
  useGetPostQuery,
  useDeleteProfileMutation,
  useDeletePostMutation,
} = apiSlice;
