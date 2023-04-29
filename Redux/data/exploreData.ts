import { createSlice } from '@reduxjs/toolkit';

interface explore{
    panelSize: number;
}
const initialState:explore = {
  panelSize: 60
};
export const ExploreData = createSlice(
  {
    name: 'exploreData',
    initialState,
    reducers: {
      setPanelSize: (state, action) => {
        state.panelSize = action.payload;
      }
    },
  }
);
export const { setPanelSize } = ExploreData.actions;

export default ExploreData.reducer;
