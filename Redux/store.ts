import { configureStore } from '@reduxjs/toolkit';
import exploreData from './data/exploreData';
import uiData from './data/uiData';

const store = configureStore({
  reducer: {
    exploreData,
    uiData
  },
});
export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch
export default store;
