import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//Esta acción se usa para agregar la palabra buscada junto con su marca de tiempo al historial de búsquedas.
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
      state.unshift(action.payload);//Añade el nuevo historial al inicio del array
      if (state.length > 10) {//Si el historial excede los 10 elementos, elimina el último elemento
        state.pop();
      }
    },
    clearHistory: () => initialState,
  },
});

export const { addToHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;