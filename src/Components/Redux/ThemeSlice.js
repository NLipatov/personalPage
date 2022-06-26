import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'dark',
};


export const projectSlice = createSlice({
  name: 'ThemeReducer',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme === 'dark' ? state.theme = 'light' : state.theme = 'dark';
    },
  },
});

export const { toggleTheme } = projectSlice.actions;

export const selectTheme = (state) => state.counter.theme;

export default projectSlice.reducer;
