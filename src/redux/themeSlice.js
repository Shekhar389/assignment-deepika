// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light', // initial state
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'; // toggle the theme
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
