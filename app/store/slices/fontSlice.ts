import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FontState = 'sans' | 'serif' | 'mono';

const initialState: FontState = 'sans';

const fontSlice = createSlice({
  name: 'font',
  initialState,
  reducers: {
    setFont: (state: FontState, action: PayloadAction<FontState>) => action.payload,
  },
});

export const { setFont } = fontSlice.actions;
export default fontSlice.reducer;