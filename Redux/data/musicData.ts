import { createSlice } from '@reduxjs/toolkit';

interface music{
  cover: string;
  audio: string ;
  title: string;

}

interface musicList{
    musicList:music[]
    songNumber: number;
}
const initialState:musicList = {
  musicList: [{
    cover: 'https://www.premadepixels.com/wp-content/uploads/2021/09/Rebirth-Album-Cover-PP1.jpg',
    audio: 'https://beats-api.onrender.com/song/play/882e74e4118ff2552d633f3c47b5d8f7.mp3',
    title: 'Resilience'
  }],
  songNumber: 0,
};
export const MusicData = createSlice(
  {
    name: 'musicData',
    initialState,
    reducers: {
      setMusicList: (state, action) => {
        state.musicList = action.payload;
      },
      setSongNumber: (state, action) => {
        state.songNumber = action.payload;
      }
    },
  }
);
export const { setMusicList, setSongNumber } = MusicData.actions;

export default MusicData.reducer;
