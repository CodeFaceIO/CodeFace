import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const githubApiSlice = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (builder) => ({
  }),
});

 
