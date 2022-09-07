import { createSlice } from '@reduxjs/toolkit';
import globalThemeSwitcher from '../services/globalThemeSwitcher';


export const counterSlice = createSlice({
  name: 'counter',
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
      globalThemeSwitcher();
    }
  }
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = counterSlice.actions

export default counterSlice.reducer