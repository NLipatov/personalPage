import { createSlice } from '@reduxjs/toolkit'
import { timeService } from '../services/timeService';

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
    setToLight: (state) => {
        state.value = 'ligth';
    },
    setToDark: (state) => {
        state.value = 'dark';
    }
  }
})

// Action creators are generated for each case reducer function
export const { setToLight, setToDark } = counterSlice.actions

export default counterSlice.reducer