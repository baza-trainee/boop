import { IDocument } from '@/types/documents';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const documentsApi = createApi({
  reducerPath: 'documentsApi',
  tagTypes: ['Documents'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllDocuments: build.query<IDocument[], void>({
      query: () => `documents`,
      providesTags: ['Documents'],
    }),

    getDocumentsById: build.query<IDocument, string>({
      query: (id) => `documents/${id}`,
    }),

    addDocuments: build.mutation({
      query: (body) => ({
        url: 'documents',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Documents'],
    }),

    editDocuments: build.mutation({
      query: ({ id, ...data }) => ({
        url: `documents/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Documents'],
    }),

    deleteDocuments: build.mutation({
      query: (id) => ({
        url: `documents/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Documents'],
    }),
  }),
});

export const {
  useGetAllDocumentsQuery,
  useGetDocumentsByIdQuery,
  useAddDocumentsMutation,
  useEditDocumentsMutation,
  useDeleteDocumentsMutation,
} = documentsApi;
