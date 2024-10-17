import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import fontReducer from './slices/fontSlice';
import historyReducer from './slices/historySlice';

export const store = configureStore({//facilita la configuración del store de Redux
  reducer: {
    theme: themeReducer,
    font: fontReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;//representa el tipo del estado global del store.
export type AppDispatch = typeof store.dispatch;