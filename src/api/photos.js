import { unsplashApi } from './unsplashAPI'

const photosAPI = unsplashApi.injectEndpoints({
  endpoints: (builder) => ({
    getRandomPhotos: builder.query({
      query: () => '/photos/random?count=10',
    }),
    searchPhotos: builder.query({
      query: (query) => `/search/photos?query=${query}`,
      transformResponse: (response) => response.results,
    }),
  }),
})

export const { useGetRandomPhotosQuery, useSearchPhotosQuery } = photosAPI
