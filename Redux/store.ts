import { configureStore } from '@reduxjs/toolkit';
import exploreData from './data/exploreData';

const store = configureStore({
  reducer: {
    exploreData
  },
});
export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch
export default store;
