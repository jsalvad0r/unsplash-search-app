import { configureStore } from '@reduxjs/toolkit'
import { unsplashApi } from '../api/unsplashAPI'
import photosReducer from '../services/photosSlice'

export const store = configureStore({
  reducer: {
    [unsplashApi.reducerPath]: unsplashApi.reducer,
    photos: photosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unsplashApi.middleware),
})
