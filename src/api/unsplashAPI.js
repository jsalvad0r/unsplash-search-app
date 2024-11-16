import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_API_URL,
  prepareHeaders: (headers) => {
    headers.set('Authorization', `Client-ID ${process.env.REACT_APP_API_KEY}`)
    return headers
  },
})

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery,
  endpoints: () => ({}),
})
