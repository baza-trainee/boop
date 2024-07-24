import { ListResponse } from '@/types';
import { IBlog } from '@/types/blog';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  tagTypes: ['Blog'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllPosts: build.query<
      ListResponse<IBlog>,
      { page?: number; limit?: number } | void
    >({
      query: ({ page = 1, limit } = {}) => `blog?page=${page}&limit=${limit}`,
      providesTags: ['Blog'],
    }),
    addPost: build.mutation({
      query: (body) => ({
        url: 'blog',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Blog'],
    }),
    editPost: build.mutation({
      query: ({ id, ...data }) => ({
        url: `blog/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Blog'],
    }),

    deleteBlog: build.mutation({
      query: (id) => ({
        url: `blog/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Blog'],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useAddPostMutation,
  useEditPostMutation,
  useDeleteBlogMutation,
} = blogApi;
