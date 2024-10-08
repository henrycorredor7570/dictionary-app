import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import fontReducer from './slices/fontSlice';
import historyReducer from './slices/historySlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    font: fontReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;