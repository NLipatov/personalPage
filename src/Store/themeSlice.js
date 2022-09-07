import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'themeState',
  initialState: {
    value: 'dark',
  },
  reducers: {
    toggleTheme: (state) => {
      if(state.value === 'light')
      {
        state.value = 'dark';
      }
      else
      {
        state.value = 'light';
      }
    }
  }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer