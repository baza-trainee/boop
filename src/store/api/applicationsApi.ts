import { IApplication } from '@/types/applications';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const applicationsApi = createApi({
  reducerPath: 'applicationsApi',
  tagTypes: ['Applications'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllApplications: build.query<IApplication[], void>({
      query: () => `applications`,
      providesTags: ['Applications'],
    }),

    addApplication: build.mutation({
      query: (body) => ({
        url: 'applications',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Applications'],
    }),

    editApplication: build.mutation({
      query: ({ id, isProcessed }) => ({
        url: `applications/${id}`,
        method: 'PATCH',
        body: isProcessed,
      }),
      invalidatesTags: ['Applications'],
    }),

    deleteApplication: build.mutation({
      query: (id) => ({
        url: `applications/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Applications'],
    }),
  }),
});

export const {
  useGetAllApplicationsQuery,
  useEditApplicationMutation,
  useAddApplicationMutation,
  useDeleteApplicationMutation,
} = applicationsApi;
