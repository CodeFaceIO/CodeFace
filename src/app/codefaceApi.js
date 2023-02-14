import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const codefaceApi = createApi({
  reducerPath: 'codefaceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
  }),
});
