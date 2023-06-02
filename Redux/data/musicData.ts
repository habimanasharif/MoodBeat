import { createSlice } from '@reduxjs/toolkit';

interface music{
  cover: string;
  audio: string ;
  title: string;

}

interface musicList{
    musicList:music[]
}
const initialState:musicList = {
  musicList: [{
    cover: 'hello',
    audio: 'hello',
    title: 'hello'
  }]
};
export const MusicData = createSlice(
  {
    name: 'musicData',
    initialState,
    reducers: {
      setMusicList: (state, action) => {
        state.musicList = action.payload;
      }
    },
  }
);
export const { setMusicList } = MusicData.actions;

export default MusicData.reducer;
