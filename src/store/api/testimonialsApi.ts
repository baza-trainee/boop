import { ListResponse } from '@/types';
import { ITeamMember } from '@/types/team';
import { ITestimonial } from '@/types/testimonials';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const testimonialsApi = createApi({
  reducerPath: 'testimonialsApi',
  tagTypes: ['Testimonials'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllTestimonials: build.query<
      ListResponse<ITestimonial>,
      { page?: number; limit?: number } | void
    >({
      query: ({ page = 1, limit } = {}) =>
        `testimonials?page=${page}&limit=${limit}`,
      providesTags: ['Testimonials'],
    }),

    addTestimonial: build.mutation({
      query: (body) => ({
        url: 'testimonials',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Testimonials'],
    }),

    editTestimonial: build.mutation({
      query: ({ id, ...data }) => ({
        url: `testimonials/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Testimonials'],
    }),

    deleteTestimonial: build.mutation({
      query: (id) => ({
        url: `testimonials/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Testimonials'],
    }),
  }),
});

export const {
  useGetAllTestimonialsQuery,
  useAddTestimonialMutation,
  useEditTestimonialMutation,
  useDeleteTestimonialMutation,
} = testimonialsApi;
