import { createSlice } from '@reduxjs/toolkit'

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    query: '',
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload
    },
  },
})

export const { setQuery } = photosSlice.actions
export default photosSlice.reducer
