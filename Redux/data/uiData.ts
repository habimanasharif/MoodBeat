import { createSlice } from '@reduxjs/toolkit';

interface explore{
    isMobile: boolean;
}
const initialState:explore = {
  isMobile: false
};
export const UIData = createSlice(
  {
    name: 'uiData',
    initialState,
    reducers: {
      setIsMobile: (state, action) => {
        state.isMobile = action.payload;
      }
    },
  }
);
export const { setIsMobile } = UIData.actions;

export default UIData.reducer;
