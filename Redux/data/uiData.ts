import { createSlice } from '@reduxjs/toolkit';

interface explore{
    isMobile: boolean;
    page:string;
}
const initialState:explore = {
  isMobile: false,
  page: 'home'
};
export const UIData = createSlice(
  {
    name: 'uiData',
    initialState,
    reducers: {
      setIsMobile: (state, action) => {
        state.isMobile = action.payload;
      },
      setPage: (state, action) => {
        state.page = action.payload;
      },
    }
  }
);
export const { setIsMobile, setPage } = UIData.actions;

export default UIData.reducer;
