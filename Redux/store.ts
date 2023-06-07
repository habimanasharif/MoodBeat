import { configureStore } from '@reduxjs/toolkit';
import exploreData from './data/exploreData';
import uiData from './data/uiData';
import musicData from './data/musicData';

const store = configureStore({
  reducer: {
    exploreData,
    uiData,
    musicData
  },
});
export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch
export default store;
