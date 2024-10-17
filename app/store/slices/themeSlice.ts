import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeState = 'light' | 'dark';

const initialState: ThemeState = 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => (state === 'light' ? 'dark' : 'light'),
    setTheme: (_, action: PayloadAction<ThemeState>) => action.payload,
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;