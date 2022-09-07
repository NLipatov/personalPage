import { createSlice } from '@reduxjs/toolkit'
import { timeService } from '../services/timeService';
import globalThemeSwitcher from '../services/globalThemeSwitcher';

const getUserTheme = () => {
    const {getThemeBasedOnUserTime} = timeService();
    return getThemeBasedOnUserTime();
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: getUserTheme(),
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