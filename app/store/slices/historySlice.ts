import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HistoryItem {
  word: string;
  timestamp: string;
}

const initialState: HistoryItem[] = [];

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<HistoryItem>) => {
      state.unshift(action.payload);
      if (state.length > 10) {
        state.pop();
      }
    },
    clearHistory: () => initialState,
  },
});

export const { addToHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;